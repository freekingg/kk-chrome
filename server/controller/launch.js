const puppeteer = require("puppeteer-extra");
const path = require("path");
const fs = require("fs-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const UserPreferencesPlugin = require("puppeteer-extra-plugin-user-preferences");
const DB = require("../db/index.js");
const Config = require("../config");
puppeteer.use(StealthPlugin());
const launch = (ctx) => {
  const body = ctx.request.body;
  let checkBrowserTimer = null;
  const { uname, url } = body;
  const websiteUrl = url;

  // 远程目录
  const downloadPath = path.normalize(`${Config.remoteDir}\\${uname}\\file\\`);
  try {
    fs.ensureDirSync(downloadPath);
  } catch (error) {
    DB.insert({
      name: "logInfo",
      value: { uname, message: `${downloadPath} 创建失败 ${error.message}` },
    });
  }
  const _downloadPath = path.normalize(downloadPath);
  console.log("download path: ", _downloadPath);

  return new Promise(async (resolve, reject) => {
    try {
      puppeteer.use(
        UserPreferencesPlugin({
          userPrefs: {
            download: {
              prompt_for_download: false,
              open_pdf_in_system_reader: true,
              default_directory: _downloadPath,
            },
            plugins: {
              always_open_pdf_externally: true,
            },
          },
        })
      );

      let chromePath = await DB.findOne({ name: "chromePath" });
      let _chromePath = path.normalize(chromePath?.value || '');
      console.log('chromePath: ', chromePath);
      let chromeExtPath = path.normalize(Config.chromeExtDir);
      console.log("chromeExtPath: ", chromeExtPath);
      const customArgs = [
        `--start-maximized`,
        `--disable-infobars`,
        "--no-default-browser-check",
        `--load-extension=${chromeExtPath}`,
      ];

      let disconnected = false;
      let browser = await puppeteer.launch({
        headless: false,
        executablePath: _chromePath,
        ignoreDefaultArgs: ["--disable-extensions", "--enable-automation"],
        args: customArgs,
      });
      // 存储节点以便能重新连接到 Chromium
      const browserWSEndpoint = browser.wsEndpoint();

      // 监听浏览器关闭
      const onBrowserClose = (browser) => {
        browser.on("disconnected", (e) => {
          console.log("browser close");
          disconnected = true;
        });
      };
      onBrowserClose(browser);

      const page = await browser.newPage();
      await page.goto(websiteUrl, {
        waitUntil: "networkidle2",
        timeout: 60000,
      });

      // 检查浏览器是否关闭
      let newBrowser = browser;
      checkBrowserTimer = setInterval(async () => {
        if (disconnected) {
          try {
            newBrowser = await puppeteer.connect({ browserWSEndpoint });
            disconnected = false;
            DB.insert({
              name: "logInfo",
              value: {
                uname,
                message: `${uname}的任务浏览器已断开链接，重新连接成功`,
              },
            });
            onBrowserClose(newBrowser);
          } catch (error) {
            DB.insert({
              name: "logInfo",
              value: {
                uname,
                message: `${uname}的任务浏览器已断开链接，重新连接失败`,
              },
            });
            clearInterval(checkBrowserTimer);
            browser.close();
          }
        }
        newBrowser
          .pages()
          .then((result) => {
            // console.log('检查浏览器是否关闭',result.length);
            if (!result.length) {
              console.log("浏览器关闭了");
              DB.insert({
                name: "logInfo",
                value: { uname, message: `${uname} 的浏览器已关闭` },
              });
              clearInterval(checkBrowserTimer);
            }
          })
          .catch((err) => {
            console.log("err: ", err);
          });
      }, 3000);
      DB.insert({
        name: "logInfo",
        value: { uname, message: `${uname} 任务浏览器启动成功` },
      });
      resolve({ code: 0, message: "ok" });
    } catch (error) {
      console.log('error: ', error);
      DB.insert({
        name: "logInfo",
        value: {
          uname,
          message: `${uname} 任务浏览器启动失败 ${error.message}`,
        },
      });
      resolve({ code: -1, message: error.message });
    }
  });
};

module.exports = { launch };
