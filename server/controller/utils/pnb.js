const pnbHandle = (page, body = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      try {
        const CORP_ID_BTN = await page.waitForSelector(
          'input[name="AuthenticationFG.CORP_ID"]'
        );
        if (CORP_ID_BTN) {
          await page.type(
            'input[name="AuthenticationFG.CORP_ID"]',
            body.corporateId
          );
        }
      } catch (error) {
        console.log('CORP_ID_BTN error: ', error);
      }

      const USR_ID_BTN = await page.$(
        'input[name="AuthenticationFG.USR_ID"]'
      );
      if (USR_ID_BTN) {
        await page.type('input[name="AuthenticationFG.USR_ID"]', body.userId);
      }

      const submitButton = await page.$(
        "#STU_VALIDATE_CREDENTIALS"
      );
      if (submitButton) {
       try {
        await submitButton.click();
        await page.waitForNavigation({
          waitUntil: "networkidle2",
          timeou: 10000,
        });
        await page.waitForSelector(
          'input[name="AuthenticationFG.ACCESS_CODE"]'
        );
        await page.type(
          'input[name="AuthenticationFG.ACCESS_CODE"]',
          body.password
        );
       } catch (error) {
        console.log('error: ', error);
       }

        // 监听 alert 弹窗
        page.once("dialog", async (dialog) => {
          console.log(dialog.message()); // 打印 alert 内容
          await dialog.accept(); // 点击确定按钮
          await new Promise((resolve) => setTimeout(resolve, 2000));

          let checkoutLoginTimer = null;
          let checkoutNum = 0;
          checkoutLoginTimer = setInterval(async () => {
            checkoutNum += 1;
            if (checkoutNum > 30) {
              reject({ message: "登录失败,请检查登录信息是否正确" });
              return;
            }
            try {
              const errorlink = await page.$("#errorlink1"); // 根据选择器获取元素句柄
              if (errorlink) {
                console.log("The element exists");
                clearInterval(checkoutLoginTimer);
                reject({ message: "登录失败,请检查登录信息是否正确" });
                return;
              }
            } catch (error) {
              console.log("errorlink error: ", error);
              clearInterval(checkoutLoginTimer);
            }

            let shortCuts_Account_Summary = null
            try {
              shortCuts_Account_Summary = await page.$('a[id="My-ShortCuts_Account-Summary"]')
            } catch (error) {
              console.log('shortCuts_Account_Summary error: ', error);
            }

            console.log(page.url());
            if (page.url().toLowerCase().includes("Finacle?bwayparam") || shortCuts_Account_Summary) {
              console.log("登录成功");
              clearInterval(checkoutLoginTimer);
              if (body.type === "min") {
                try {
                  const ShortCuts_Account_Summary = await page.waitForSelector(
                    'a[id="My-ShortCuts_Account-Summary"]'
                  );
                  if (ShortCuts_Account_Summary) {
                    await ShortCuts_Account_Summary.click();
                    await page.waitForNavigation({
                      waitUntil: "networkidle2",
                      timeou: 60000,
                    });
                    resolve();
                  }
                } catch (error) {
                  console.log("min error: ", error);
                  clearInterval(checkoutLoginTimer);
                }
              }
              if (body.type === "all") {
                try {
                  const ShortCuts_Account_Statement =
                    await page.waitForSelector(
                      'a[id="My-ShortCuts_Account-Statement"]'
                    );
                  if (ShortCuts_Account_Statement) {
                    await ShortCuts_Account_Statement.click();
                    await page.waitForNavigation({
                      waitUntil: "networkidle2",
                      timeou: 60000,
                    });
                    resolve();
                  }
                } catch (error) {
                  clearInterval(checkoutLoginTimer);
                }
              }
            } else {
              reject({ message: "登录失败,请检查登录信息是否正确" });
            }
          }, 1000);
          // await new Promise((resolve) => setTimeout(resolve, 500));
          // try {
          //   await page.waitForNavigation({
          //     waitUntil: "networkidle2",
          //     timeou: 10000,
          //   });
          // } catch (error) {
          //   console.log('error: ', error);
          // }

          // await page.waitForNavigation({waitUntil:'networkidle2',timeou:60000});
        });
        try {
          await page.click('input[name="Action.VALIDATE_STU_CREDENTIALS"]');
        } catch (error) {
          console.log('error: ', error);
        }
      }
    } catch (error) {
      console.log("error:11111 ", error);
      reject({ message: error.message });
    }
  });
};
module.exports = { pnbHandle };
