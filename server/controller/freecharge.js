const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const auth = (ctx) => {
  const body = ctx.request.body;
  const { url, account, chromePath } = body;

  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: false,
        executablePath:
          chromePath ||
          '"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"',
          ignoreDefaultArgs:['--enable-automation'],
        args: [
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--disable-accelerated-2d-canvas",
          "--ignore-certifcate-errors",
          "--ignore-certifcate-errors-spki-list",
          "--disable-web-security",
          "--disable-xss-auditor", // 关闭 XSS Auditor
          "--no-zygote",
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--allow-running-insecure-content", // 允许不安全内容
          "--disable-webgl",
          "--disable-popup-blocking",
          "--disable-infobars",
        ],
      });
      const page = await browser.newPage();
      await page.setViewport({
        width: 1400,
        height: 700,
      });
      const headers = {
        "Accept-Encoding": "gzip",
      };

      await page.setRequestInterception(true);
      page.on("request", (req) => {
        if (["font"].includes(req.resourceType())) {
          return req.abort();
        }
        return req.continue();
      });

      await page.setExtraHTTPHeaders(headers);
      await page.goto(url, { timeout: 0, waitUntil: "networkidle2" });

      await page.evaluate((account) => {
        document.title = account;
        return Promise.resolve();
      }, account);

      console.log('profile-name')
      await page.waitForSelector(".profile-name", { timeout: 0 });
      // await page.waitForFunction("window.location.pathname == '/pay/history'", {
      //   timeout: 0,
      // });
      await page.evaluate((account) => {
        document.title = account;
        return Promise.resolve();
      }, account);
      console.log("已经登陆成功");
      const cookies = await page.cookies();
      setTimeout(() => {
        browser.close();
      }, 15000);
      await page.evaluate((account) => {
        alert(`${account}：已经验证成功`);
        return Promise.resolve();
      }, account);
      resolve({ status: true, cookies });
    } catch (error) {
      console.log('error: ', error);
      resolve({ status: false, error });
    }
  });
};

const records = (ctx) => {
  const body = ctx.request.body;
  const { url, cookie, chromePath } = body;
  let c = cookie.split('=')
  let newCookie = [
      {
        "domain": ".freecharge.in",
        "name": "app_fc",
        "path": "/",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": c[1]
    }
  ]
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        headless: false,
        executablePath:
          chromePath ||
          "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
          ignoreDefaultArgs:['--enable-automation'],
        args: [
          "--disable-gpu",
          "--disable-dev-shm-usage",
          "--disable-accelerated-2d-canvas",
          "--ignore-certifcate-errors",
          "--ignore-certifcate-errors-spki-list",
          "--disable-web-security",
          "--disable-xss-auditor", // 关闭 XSS Auditor
          "--no-zygote",
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--allow-running-insecure-content", // 允许不安全内容
          "--disable-webgl",
          "--disable-popup-blocking",
          "--disable-infobars",
        ],
      });
      const page = await browser.newPage();
      await page.setViewport({
        width: 1400,
        height: 700,
      });
      const headers = {
        "Accept-Encoding": "gzip",
      };
      await page.setExtraHTTPHeaders(headers);
      await page.setRequestInterception(true);
      page.on("request", (request) => {
        if (["font"].includes(request.resourceType())) {
          return request.abort();
        }
        return request.continue();
      });

      await page.goto(url, { timeout: 0, waitUntil: "networkidle2" });
      await page.setCookie(...newCookie);

      // 刷新页面，验证登录状态
      await page.reload({ waitUntil: "networkidle2" });
      await page.goto(url, { timeout: 0, waitUntil: "networkidle2" });
      console.log("已经登陆成功");

      const cookies = await page.cookies();
      console.log("获取cookie: ", cookies);
      resolve({ status: true, cookies });
    } catch (error) {
      resolve({ status: false, error });
    }
  });
};

module.exports = { auth, records };
