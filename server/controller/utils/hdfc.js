const hdfcHandle = (page, body = {}) => {
  console.log("hdfcHandle");
  return new Promise(async (resolve, reject) => {
    try {
      const targetFrameName = "login_page";
      // //找到要定位的iframe页面
      const login_page = await page
        .frames()
        .find((frame) => frame.name() === targetFrameName);
      const fldLoginUserId = await login_page.waitForSelector(
        'input[name="fldLoginUserId"]'
      );
      if (fldLoginUserId) {
        await login_page.type('input[name="fldLoginUserId"]', body.bankAccount);
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      const submitButton = await login_page.waitForSelector(
        'a[ondblclick="return fLogon()"]'
      );
      if (submitButton) {
        await submitButton.click();
        await new Promise((resolve) => setTimeout(resolve, 500));

        // 新版
        if (
          page.url() === "https://netportal.hdfcbank.com/nb-login/login.jsp"
        ) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          const keyboard = await page.waitForSelector(
            'input[id="keyboard"]'
          );
          if (keyboard) {
            await page.type('input[id="keyboard"]', body.bankPwd);
            const label = await page.waitForSelector(
              'label[for="secureAccessID"]'
            );
            if (label) {
              await label.click();
              const loginBtn = await page.waitForSelector(
                'a[id="loginBtn"]'
              );
              if (loginBtn) {
                await loginBtn.click();
              }
            }
          }
          resolve();
          return;
        }

        // //找到要定位的iframe页面
        const fldPassword = await login_page.waitForSelector(
          'input[id="fldPasswordDispId"]'
        );
        console.log("fldPassword: ", fldPassword);
        if (fldPassword) {
          await login_page.type('input[id="fldPasswordDispId"]', body.bankPwd);
        }

        const chkrsastu = await login_page.waitForSelector(
          'input[name="chkrsastu"]'
        );
        if (chkrsastu) {
          await chkrsastu.click();
          const submitButton = await login_page.waitForSelector(
            'a[ondblclick="return fLogon()"]'
          );
          if (submitButton) {
            await submitButton.click();
          }
        }
        resolve();
      } else {
        resolve();
      }
    } catch (error) {
      reject({ message: error.message });
    }
  });
};
module.exports = { hdfcHandle };
