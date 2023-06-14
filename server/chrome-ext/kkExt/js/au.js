console.log('au.js');
let delayTimer = null
let kkstart = false
let ruleForm = {}
let event = document.createEvent('Event');
event.initEvent('auEvent', true, true);
document.addEventListener('auEvent', ({ detail }) => {
  // console.log('detail: ', detail);
  // 接受数据
  let { type, data } = detail;
  // console.log(detail);
  if (type === 'download') {
    kkstart = true
    clearTimeout(delayTimer)
    ruleForm = JSON.parse(JSON.stringify(data))
    getAccountStatement()
  } else if (type === 'stop') {
    kkstart = false
    clearTimeout(delayTimer)
    // console.log('stop: ');

  }
});

let data2Excel = (list) => {
  // const json = list
  var jsonArray = list
  var worksheet = XLSX.utils.json_to_sheet(jsonArray);
  var workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, "AUBank.xlsx");
};

// 查询
function getAccountStatement() {
  if (!kkstart) return
  let accountDetails = localStorage.getItem('accountDetails') ? JSON.parse(localStorage.getItem('accountDetails')) : {}
  //请求参数 查询
  let params = {
    "accountNo": `${accountDetails.accountNo}-INR`,
    "accountId": `${accountDetails.accountId}`,
    "accountName": `${accountDetails.accountName}`,
    "transactionType": `${accountDetails.transactionType}`,
    "fromAmount": null,
    "toAmount": null,
    "currencyName": "INR",
    "isIbanPresent": true,
    "fromDate": `${accountDetails.fromDate}`,
    "toDate": `${accountDetails.toDate}`,
    "dataRange": `${accountDetails.dataRange}`,
    "selectedFormat": "displayscreen",
    "bankType": "Internal",
    "addInfoRequired": "off",
    "downloadFormat": "",
    "bicCode": ""
  }

  var data = JSON.stringify(params);
  // console.log('data: ', data);
  var aeskey = generateAESKey(0x20);
  var _0x7e5739 = doEncryption(aeskey, data);
  var key = "Key_" + Math.floor(Math.random() * (15 - 1 + 1))


  return new Promise((resolve, reject) => {
    try {
      RSA_encrypt(key, aeskey, function (_0x25a252) {
        data = {
          'id': _0x25a252,
          'dataToBeSent': _0x7e5739
        };
        // console.log('data',data);
        fetch(
          "https://cib.aubank.in/cashProServiceAPI/rest/accountStatementService/private/getAccountStatement",
          {
            headers: {
              accept: "application/json, text/plain, */*",
              "accept-language":
                "zh-CN,zh;q=0.9,en;q=0.8,en-CA;q=0.7,ja-JP;q=0.6,ja;q=0.5",
              "access-control-allow-origin": "*",
              "content-type": "application/json",
              keyrefpointer: key,
              "sec-ch-ua":
                '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": '"Windows"',
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              securityid: localStorage.getItem('securityid'),
            },
            referrer: "https://cib.aubank.in/iCashProGUI/",
            referrerPolicy: "strict-origin-when-cross-origin",
            body: JSON.stringify(data),
            method: "POST",
            mode: "cors",
            credentials: "include",
          }
        )
          .then((res) => {
            const keyrefpointer = res.headers.get('keyrefpointer')
            // console.log('keyrefpointer: ', keyrefpointer);
            return res.json().then(rep => {
              let data = rep;
              try {
                RSA_decrypt(data.encKey, keyrefpointer, function (_0x483334) {
                  var resp = doDecryption(data.encData, _0x483334);
                  // console.log("解密内容: ", resp);
                  let list = resp.match(/\{.*\}/g)
                  // console.log('list: ', list);
                  if (list && list.length) {
                    let datalist = JSON.parse(list[0])
                    console.log('datalist: ', datalist);
                    let result = datalist.accountStatementOnScreen
                    if (!result.length) {
                      kkstart = false
                      clearTimeout(delayTimer)
                      window.postMessage({
                        actionType: 'equitas', data: {
                          type: 'error',
                          msg: '出错了，请再手动执行一次下载操作',
                          t: new Date().getTime()
                        }
                      }, '*');
                      return
                    }
                    data2Excel(result)
                    console.log(`${ruleForm.intervalTime}后进行下一次下载`)
                    delayTimer = setTimeout(() => {
                      getAccountStatement()
                    }, ruleForm.intervalTime * 1000);

                  } else {
                    kkstart = false
                    clearTimeout(delayTimer)
                    window.postMessage({
                      actionType: 'equitas', data: {
                        type: 'error',
                        msg: '出错了，请再手动执行一次下载操作',
                        t: new Date().getTime()
                      }
                    }, '*');
                  }
                });
              } catch (error) {
                kkstart = false
                clearTimeout(delayTimer)
                window.postMessage({
                  actionType: 'equitas', data: {
                    type: 'error',
                    msg: '出错了，请再手动执行一次下载操作',
                    t: new Date().getTime()
                  }
                }, '*');
              }
            })
          })
      });
    } catch (error) {
      console.log('出错 3秒后会重试一次下载: ', error);
      setTimeout(() => {
        getAccountStatement()
      }, 3 * 1000);
    }
  });
}


// 监听请求
(function (xhr) {

  var XHR = XMLHttpRequest.prototype;

  var open = XHR.open;
  var send = XHR.send;
  var setRequestHeader = XHR.setRequestHeader;

  XHR.open = function (method, url) {
    this._method = method;
    this._url = url;
    this._requestHeaders = {};
    this._startTime = (new Date()).toISOString();

    return open.apply(this, arguments);
  };

  XHR.setRequestHeader = function (header, value) {
    this._requestHeaders[header] = value;
    return setRequestHeader.apply(this, arguments);
  };


  XHR.send = function (postData) {

    this.addEventListener('load', function () {

      var myUrl = this._url ? this._url.toLowerCase() : this._url;
      if (myUrl) {
        let securityId = ''
        if (postData) {
          if (typeof postData === 'string') {
            // console.log('请求数据url: ', myUrl);
            // console.log('请求数据: ', postData);
            // console.log('_requestHeaders: ', this._requestHeaders);
            if (myUrl.indexOf('postdownload') !== -1) {
              localStorage.setItem('au', 1)
              securityId = this._requestHeaders.securityId
              localStorage.setItem('securityid', securityId)
            }

            try {
              this._requestHeaders = postData;
            } catch (err) {
              console.log('Request Header JSON decode failed, transfer_encoding field could be base64');
              console.log(err);
            }
          } else if (typeof postData === 'object' || typeof postData === 'array' || typeof postData === 'number' || typeof postData === 'boolean') {
            // do something if you need
          }
        }

        // here you get the RESPONSE HEADERS
        var responseHeaders = this.getAllResponseHeaders();

        if (this.responseType != 'blob' && this.responseText) {
          // responseText is string or null
          try {

            // here you get RESPONSE TEXT (BODY), in JSON format, so you can use JSON.parse
            var arr = this.responseText;

            // printing url, request headers, response headers, response body, to console

            // console.log(this._url);
            // console.log('_requestHeaders',this._requestHeaders);
            // console.log('responseHeaders');
            // console.log('responseHeaders',responseHeaders);
            // console.log(JSON.parse(arr));

            // console.log('响应数据url: ', this._url);
            // console.log('响应数据: ', arr);



            if (this._url && this._url.indexOf('postDownload') !== -1) {
              window.postMessage({
                actionType: 'aubank', data: {
                  type: 'updateAuParms',
                  t: new Date().getTime()
                }
              }, '*');
            }

            let keyrefpointer = responseHeaders.match(/keyrefpointer:(.*)/g)
            // console.log('keyrefpointer: ', keyrefpointer);
            let key = ''
            if (keyrefpointer && keyrefpointer.length) {
              key = keyrefpointer[0].split('keyrefpointer: ')[1]
            }

            if (key) {
              let data = JSON.parse(arr)
              let that = this
              RSA_decrypt(data.encKey, key, function (_0x483334) {
                var _0x12a3a4 = doDecryption(data.encData, _0x483334);
                let list = _0x12a3a4.match(/\{.*\}/g)
                if (list && list.length) {
                  let deData = JSON.parse(list[0])
                  // console.log('响应数据解密: ', deData);
                  if (that._url && that._url.indexOf('getAccountStatement') !== -1) {
                    if (deData.accountDetails) {
                      localStorage.setItem('accountDetails', JSON.stringify(deData.accountDetails))
                    }
                  }
                }
              });
            }
          } catch (err) {
            console.log("Error in responseType try catch");
            console.log(err);
          }
        }

      }
    });

    return send.apply(this, arguments);
  };

})(XMLHttpRequest);
