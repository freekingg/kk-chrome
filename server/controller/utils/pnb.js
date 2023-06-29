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
        console.log("CORP_ID_BTN error: ", error);
      }

      const USR_ID_BTN = await page.$('input[name="AuthenticationFG.USR_ID"]');
      if (USR_ID_BTN) {
        await page.type('input[name="AuthenticationFG.USR_ID"]', body.userId);
      }

      const submitButton = await page.$("#STU_VALIDATE_CREDENTIALS");
      if (submitButton) {
        try {
          await Promise.all([
            page.waitForNavigation({
              waitUntil: "networkidle2",
              timeou: 30000,
            }),
            page.click("#STU_VALIDATE_CREDENTIALS"),
          ]);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          try {
            await page.waitForSelector(
              'input[name="AuthenticationFG.ACCESS_CODE"]'
            );
          } catch (error) {
            console.log("AuthenticationFG.ACCESS_CODE error: ", error);
            reject({ message: error.message });
            return
          }
          try {
            await page.type(
              'input[name="AuthenticationFG.ACCESS_CODE"]',
              body.password
            );
          } catch (error) {
            console.log("AuthenticationFG.ACCESS_CODE error: ", error);
            reject({ message: error.message });
            return
          }
        } catch (error) {
          console.log("error: ", error);
          reject({ message: error.message });
          return
        }

        // 监听 alert 弹窗
        page.once("dialog", async (dialog) => {
          console.log(dialog.message()); // 打印 alert 内容
          try {
            await dialog.accept(); // 点击确定按钮
          } catch (error) {
            console.log("dialog accept error: ", error);
          }
          await new Promise((resolve) => setTimeout(resolve, 2000));

          let checkoutLoginTimer = null;
          let checkoutNum = 0;

          checkoutLoginTimer = setInterval(async () => {
            console.log('checkoutNum',checkoutNum);
            checkoutNum += 1;
            if (checkoutNum > 30) {
              clearInterval(checkoutLoginTimer);
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
              return;
            }

            let shortCuts_Account_Summary = null;
            try {
              shortCuts_Account_Summary = await page.$(
                'a[id="My-ShortCuts_Account-Summary"]'
              );
            } catch (error) {
              console.log("shortCuts_Account_Summary error: ", error);
            }

            if (
              page.url().toLowerCase().includes("Finacle?bwayparam") ||
              shortCuts_Account_Summary
            ) {
              console.log("login success");
              clearInterval(checkoutLoginTimer);
              if (body.type === "min") {
                try {
                  const ShortCuts_Account_Summary = await page.waitForSelector(
                    'a[id="My-ShortCuts_Account-Summary"]'
                  );
                  if (ShortCuts_Account_Summary) {
                    try {
                      await Promise.all([
                        page.waitForNavigation({
                          waitUntil: "networkidle2",
                          timeou: 60000,
                        }),
                        page.click('a[id="My-ShortCuts_Account-Summary"]'),
                      ]);
                    } catch (error) {
                      console.log("ShortCuts_Account_Summary error: ", error);
                    }
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
                    try {
                      await Promise.all([
                        page.waitForNavigation({
                          waitUntil: "networkidle2",
                          timeou: 60000,
                        }),
                        page.click('a[id="My-ShortCuts_Account-Statement"]'),
                      ]);
                    } catch (error) {
                      console.log(
                        "all ShortCuts_Account_Summary error: ",
                        error
                      );
                    }
                    resolve();
                  }
                } catch (error) {
                  clearInterval(checkoutLoginTimer);
                }
              }
            }
          }, 2000);
        });
        try {
          await page.click('input[name="Action.VALIDATE_STU_CREDENTIALS"]');
        } catch (error) {
          console.log("error: ", error);
        }
      }
    } catch (error) {
      console.log("error:11111 ", error);
      reject({ message: error.message });
    }
  });
};
module.exports = { pnbHandle };
