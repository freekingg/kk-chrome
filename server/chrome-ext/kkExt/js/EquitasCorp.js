
console.log('equit');


let kkstart = false
let delayTimer = null

let ruleForm = {}
let dataList = []

let event = document.createEvent('Event');
event.initEvent('equitasEvent', true, true);
document.addEventListener('equitasEvent', ({detail}) => {
  console.log('detail: ', detail);
	// 接受数据
	let { type, data } = detail;
	console.log(detail);
  if(type === 'download'){
    if(data){
      clearTimeout(delayTimer)
      kkstart = true
      dataList = []
      ruleForm = JSON.parse(JSON.stringify(data))
      getPage()
    }
  } else if(type === 'stop'){
    clearTimeout(delayTimer)
    kkstart = false
    if(dataList.length){
      data2Excel(dataList)
    }
  }
});


let downloadTimer = null
let kencryptRequest = function(request) {
  key = appzillon.plugin.getKey(appzillon.plugin.exchange);
  var encyptedKey = CryptoJS.enc.Utf8.parse(key);
  var plainText = request;
  var ive = CryptoJS.lib.WordArray.random(128 / 8);
  var ivetoTransit = CryptoJS.enc.Base64.stringify(ive);
  var encrypted = CryptoJS.AES.encrypt(plainText, encyptedKey, {
    mode : CryptoJS.mode.CBC,
    padding : CryptoJS.pad.Pkcs7,
    iv : ive
  });
  var transittedCipherText = ivetoTransit + "~" + encrypted;
  return transittedCipherText;
};


let kdecryptResponse = function (response) {
  var dcipherTextJava = response;
  var res = "";
  if (dcipherTextJava !== null || dcipherTextJava !== "") {
    var input = dcipherTextJava.split("~");
    var key = appzillon.plugin.getKey(appzillon.plugin.exchange);
    var keyt = CryptoJS.enc.Utf8.parse(key);
    var ivet = CryptoJS.enc.Base64.parse(input[0]);
    var encrypted = input[1];
    var decrypted = CryptoJS.AES.decrypt(encrypted, keyt, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      iv: ivet,
    });
    try {
      res = decrypted.toString(CryptoJS.enc.Utf8);
    } catch (e) {}
  }
  return res;
};

let data2Excel = (list) => {
  const json = list
  let str = ``;
  for (let i = 0; i < json.length; i++) {
    for (const k in json[i]) {
      str += `${json[i][k] + "\t"},`;
    }
    str += "\n";
  }
  // 生成下载地址方法一
  let blob = new Blob([str], { type: "text/plain;charset=utf-8" });
  //解决中文乱码问题
  blob = new Blob([String.fromCharCode(0xfeff), blob], {
    type: blob.type,
  });
  const uri = window.URL.createObjectURL(blob);
  // 生成下载地址方法二
  // const uri =
  //   "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(str);
  const link = document.createElement("a");
  link.href = uri;
  link.download = "equitas.xls";
  link.click();
};

function ToExcel(str,fileName) {
  var raw = window.atob(str);
  var uInt8Array = new Uint8Array(raw.length);
  for (var i = 0; i < raw.length; i++) {
  uInt8Array[i] = raw.charCodeAt(i);
  }

  const link = document.createElement("a");
  const blob = new Blob([uInt8Array], {
  type: 'application/vnd.ms-excel'
  })

  link.style.display = 'none';
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', fileName);

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
}




let pgNum = 1
let pgLimit = 500
let getPage = () => {

  if(!kkstart) return

  return new Promise((resolve,reject)=>{
    let kk = localStorage.getItem('kk')
    let local = null
    if(kk){
      local = JSON.parse(kk)
    }

    var myDate = new Date()
          function add(n) {
            if (n <= 9) {
              return `0${n}`
            }
            return n
          }
          var myYear = myDate.getFullYear() //获取完整的年份(4位,1970-????)
          var myMonth = add(myDate.getMonth() + 1) //获取当前月份(0-11,0代表1月)
          var myToday = add(myDate.getDate()) //获取当前日(1-31)
          var myHour = add(myDate.getHours()) //获取当前日(1-31)
          var myMillsi = add(myDate.getMilliseconds()) //获取当前日(1-31)
          var mySecond = add(myDate.getSeconds()) //获取当前日(1-31)
          let today = `${myYear}-${myMonth}-${myToday}`
          let timestamp = `${today}T${myHour}:${myMillsi}:${mySecond}.607Z`

    let req = {
      "appzillonHeader": {
        appId: local.appId,
        sessionId: local.sessionId,
        deviceId: local.deviceId,
        requestKey: local.requestKey,
        userId: local.userId,
        screenId: local.screenId,
        "status": "success",
        "source": "APPZILLON",
        "interfaceId": "viewAccountStatement",
        "os": "WEBCONTAINER",
        "origination": "",
        "ip": "X.X.X.X",
        "browserName": "Chrome",
        "browserVersion": "110",
        "requestID": "ACC",
        "async": "false",
        clientNonce: local.clientNonce,
        serverNonce: local.serverNonce,
      },
      "appzillonBody": {
        "getDigiAccountStatementRequest": {
          "msgBdy": {
            "acctId": local.account_no,
            "frDt": ruleForm.date || today,
            // "frDt": "2023-02-05",
            // "toDt": "2023-02-05",
            "toDt": ruleForm.date || today,
            "lastBalanceAmount": 0,
            "nbOfTxns": ruleForm.pgLimit,
            "pgNum": ruleForm.pgNum
          },
          "msgHdr": {
            "msgId": "SERVER_TXN_REF_NO",
            "cnvId": "SERVER_TXN_REF_NO",
            "extRefId": "SERVER_TXN_REF_NO",
            "bizObjId": "SERVER_TXN_REF_NO",
            "appId": "FOSC",
            "timestamp": timestamp,
            "authInfo": { "brnchId": "9999", "usrId": "CORPUSER" }
          }
        }
      }
    }

    console.log('分页请求数据',req);

    fetch("https://inet.equitasbank.com/EquitasCorp/AppzillonWeb", {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-CA;q=0.7,ja-JP;q=0.6,ja;q=0.5",
      "actionid": "SERVERREQUEST",
      appid: local.appId,
      "content-type": "application/json; charset=UTF-8",
      owasp_csrftoken: localStorage.getItem('csrf'),
      requestkey: local.appId,
      "screenid": "Sa_AccStatement",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      sessionidfromhttp:appzillon.plugin.sessionId,
      "signedin": "",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://inet.equitasbank.com/EquitasCorp/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    body: kencryptRequest(JSON.stringify(req)),
    // "body": "8Ykx1JY1anuoeCvUAXrWfg==~P/lAHmjZ3UYptH5+iA/ToCcaBUi8KpdyeZwN5POpw1WtZFW8rWJqfw2YTfaPcegLE3WjbmSTX+yHSH7gDX1pGot5ReEq7ncnfagV4f9YTCYL3PgI+Gi/CmrPksp5B9csFxtCUikuTO+gspRrG7hrp8x3pFgiYdfAHqq3oSW2b4jw+FMDjIp5H2lrxkLV0OPzT/ln2ivJSnVfmZqT7G3G02+cf1wDTF1qLOSFL58gv6soATVSAaPcNF+GrcLo3mo1PXXq3IvSJvJc9Qmo0Lx4hGiR0Fz7bnpBgUiKjgn04HO8SLvGp9qVVcQEJj5jvNDshz3UOHnKbu330IO+x2zkRaL8nR4A8XnsWphvbtYKW9PduCuVE8o0Hz8dGhqiyzCU7TUNG6gOjcZul1younUcVxq1zxhnrUEkSAm02l5hJI8lc9O6es8Yxmpp2d6JqaVLULOieYf68TvC+Uo6uaHPtlZJo1JLvs1sE9CrPxXDcNvIHOt5PPr8phXVR+0lp+eGW74b8efSFbdMgD5oJOGJsjtbgHHOevJvPg4KOuxj2lx8yQ3YIblxrRg0LBZHooWkgeYRa+yGblWWDOnO9+Q2RsqUGfMNyfr5NBjZ49d2eWrsPU/Mde5NMwI/FKuheF+gOs/z5NNyK03t8XHO2uqDo8fuKPg/aLvN4wZe4ClTIZoBUwAZ/fIzvLsaxydkse256RzRMMiXfjNlRwoVar6dL3+PmUp1ghX6f9IYPHICUZVqR/3ZmXzwAg9TO5p1PMLPTsXXi2jaJnUALN2AefwzBG367CUsEgjxDqI6Qljc6FVGuyzFrP0phVSY2gIQSyOq89nV+b9biVm21voDuD5gX40fBmaZKSbJXeDalDCtifJEQHD042loj0i0BEaEnbZuFTT96Hu3QTehqclfe9c8Ebg1rmIzpICm5NkTsfg9EL0oc7qr9xJZlkZ8DYV+vN9OLbo+11Gp234K/+nVEQR/b5n3TzeUFBbIdDGxAWHOIhiKxEiB1sddKNvuhSZe4iW2K7eA3L80Wt6lbKn46+IeIhU9/hFSo/y5AdMytnI9AYBL99LviyAzIfpQOsOWVFLIf3FCuxXgTWPjtg/reEwn207iZBUVw78K7Mpm2VXLkw9rp8iI1HmPfq/9gtqNgonZ4OP5YqiWE/relL9HVwtmcsuNFy014VuNxW4X1NZBdaoOHFJQSVQiDG46H4arVL/fNgO0Fl9OajlBOEv31aM3pQ==",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  })
  .then((response) => response.text())
  .then((res) => {
    let result = kdecryptResponse(res);
    // console.log("请求分页: ", result);
    if(result){
      try {
        let res = JSON.parse(result)
        console.log('分页数据返回: 页码',ruleForm.pgNum, res);
        if(res.appzillonHeader && res.appzillonHeader.status === 'failure'){
          console.log('failure');
          console.log(`等待${ruleForm.intervalTime}秒再下一轮`)
          delayTimer = setTimeout(() => {
            getPage()
          }, ruleForm.intervalTime * 1000);
          return
        }

        if(res.status && res.status ==='failure'){
          window.postMessage({ actionType: 'equitas', data: {
            type:'error',
            msg: res.errorDescription,
            t: new Date().getTime()
          } }, '*');
          return
        }

        let LastPgInd = res.appzillonBody.getDigiAccountStatementResponse.msgBdy.LastPgInd
        let account = res.appzillonBody.getDigiAccountStatementResponse.msgBdy.account
        if(LastPgInd === 'N'){
          ruleForm.pgNum += 1
          if(account.length){
            dataList.push(...account)
            setTimeout(() => {
              getPage()
            }, 1000);
          }
        } else {
          dataList.push(...account)
          let resultList = JSON.parse(JSON.stringify(dataList))
          console.log('下载完成了', resultList)
          data2Excel(resultList)

          if(ruleForm.pgNum > 1){
            ruleForm.pgNum = ruleForm.pgNum - 1
          }
          dataList = []
          console.log(`等待${ruleForm.intervalTime}秒再下一轮`)
          delayTimer = setTimeout(() => {
            getPage()
          }, ruleForm.intervalTime * 1000);
        }
      } catch (error) {
        console.log('error: ', error);
      }
    }
  });
  })


}

let xiazai = (txnRefNo) =>{
  let kk = localStorage.getItem('kk')
  let local = null
  if(kk){
    local = JSON.parse(kk)
  }
  // 下载队列
let req = {
  appzillonHeader: {
    appId: local.appId,
    sessionId: local.sessionId,
    deviceId: local.deviceId,
    requestKey: local.requestKey,
    userId: local.userId,
    screenId: local.screenId,
    status: "success",
    source: "APPZILLON",
    interfaceId: "ScheduledStatementDownloader",
    os: "WEBCONTAINER",
    origination: "",
    ip: "X.X.X.X",
    browserName: "Chrome",
    browserVersion: "110",
    requestID: "ACC",
    async: "true",
    clientNonce: local.clientNonce,
    serverNonce: local.serverNonce,
  },
  appzillonBody: {
    custId: local.custId,
    txnRefNo: txnRefNo,
  },
};

fetch("https://inet.equitasbank.com/EquitasCorp/AppzillonWeb", {
  headers: {
    accept: "*/*",
    "accept-language":
      "zh-CN,zh;q=0.9,en;q=0.8,en-CA;q=0.7,ja-JP;q=0.6,ja;q=0.5",
    actionid: "SERVERREQUEST",
    appid: local.appId,
    "content-type": "application/json; charset=UTF-8",
    owasp_csrftoken: localStorage.getItem('csrf'),
    requestkey: local.appId,
    screenid: "Sa_AccStatement",
    "sec-ch-ua":
      '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    sessionidfromhttp:appzillon.plugin.sessionId,
    signedin: "",
    "x-requested-with": "XMLHttpRequest",
  },
  referrer: "https://inet.equitasbank.com/EquitasCorp/",
  referrerPolicy: "strict-origin-when-cross-origin",
  body: kencryptRequest(JSON.stringify(req)),
  method: "POST",
  mode: "cors",
  credentials: "include",
})
  .then((response) => response.text())
  .then((res) => {
    let result = kdecryptResponse(res);
    console.log("下载队列: ", result);
    if(result){
      try {
        let res = JSON.parse(result)
        console.log('res: ', res);
        ToExcel(res.appzillonBody.getDigiAccountStatementResponse.file,(res.appzillonBody.getDigiAccountStatementResponse.fileName || 'equitas'))
      } catch (error) {
        console.log('error: ', error);
      }
    }
  });
}

let dianxiazai = () =>{

  let kk = localStorage.getItem('kk')
  let local = null
  if(kk){
    local = JSON.parse(kk)
  }

  var myDate = new Date()
        function add(n) {
          if (n <= 9) {
            return `0${n}`
          }
          return n
        }
        var myYear = myDate.getFullYear() //获取完整的年份(4位,1970-????)
        var myMonth = add(myDate.getMonth() + 1) //获取当前月份(0-11,0代表1月)
        var myToday = add(myDate.getDate()) //获取当前日(1-31)
        var myHour = add(myDate.getHours()) //获取当前日(1-31)
        var myMillsi = add(myDate.getMilliseconds()) //获取当前日(1-31)
        var mySecond = add(myDate.getSeconds()) //获取当前日(1-31)
        let today = `${myYear}-${myMonth}-${myToday}`
        let timestamp = `${today}T${myHour}:${myMillsi}:${mySecond}.607Z`
    // 点下载图标
      let req = {
        "appzillonHeader": {
            appId: local.appId,
            sessionId: local.sessionId,
            deviceId: local.deviceId,
            requestKey: local.requestKey,
            userId: local.userId,
            screenId: local.screenId,
            "status": "success",
            "source": "APPZILLON",
            "interfaceId": "AccStatementDownload",
            "os": "WEBCONTAINER",
            "origination": "",
            "ip": "X.X.X.X",
            "browserName": "Chrome",
            "browserVersion": "110",
            "requestID": "CIF",
            "async": "true",
            clientNonce: local.clientNonce,
            serverNonce: local.serverNonce,
        },
        "appzillonBody": {
            "RequestJson": {
                "fileType": "xls",
                "reportType": "N"
            },
            "getDigiAccountStatementRequest": {
                "msgBdy": {
                    "frDt": '2023-02-17',
                    "toDt": '2023-02-17',
                    "nbOfTxns": "999",
                    "acctId": local.account_no,
                    "custId": local.custId,
                    "customerId": gCustomerContext.customerno,
                    "reportDuration": "past",
                    "customerName": gCustomerContext.name,
                    "avlBal": appzillon.app.retrieveContent("accAvlBal") || "-153876.31",
                },
                "msgHdr": {
                    "msgId": "SERVER_TXN_REF_NO",
                    "cnvId": "SERVER_TXN_REF_NO",
                    "extRefId": "SERVER_TXN_REF_NO",
                    "bizObjId": "SERVER_TXN_REF_NO",
                    "appId": "FOSC",
                    "timestamp": timestamp,
                    "authInfo": {
                        "brnchId": "9999",
                        "usrId": "CORPUSER"
                    }
                }
            }
        }
      }

      console.log('下载参数',req);

  fetch("https://inet.equitasbank.com/EquitasCorp/AppzillonWeb", {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-CA;q=0.7,ja-JP;q=0.6,ja;q=0.5",
      "actionid": "SERVERREQUEST",
      "appid": local.appId,
      "content-type": "application/json; charset=UTF-8",
      "owasp_csrftoken": localStorage.getItem('csrf'),
      "requestkey": local.appId,
      "screenid": "Sa_AccStatement",
      "sec-ch-ua": "\"Chromium\";v=\"110\", \"Not A(Brand\";v=\"24\", \"Google Chrome\";v=\"110\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sessionidfromhttp": appzillon.plugin.sessionId,
      "signedin": "",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://inet.equitasbank.com/EquitasCorp/",
    "referrerPolicy": "strict-origin-when-cross-origin",
      body: kencryptRequest(JSON.stringify(req)),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  })
  .then((response) => response.text())
  .then((res) => {
    let result = kdecryptResponse(res);
    console.log("点下载结果: ", JSON.parse(result));
  })
}
let chaDuiLie = () =>{
  let kk = localStorage.getItem('kk')
  let local = null
  if(kk){
    local = JSON.parse(kk)
  }

  let req = {
    appzillonHeader: {
      appId: local.appId,
      sessionId: local.sessionId,
      deviceId: local.deviceId,
      requestKey: local.requestKey,
      userId: local.userId,
      screenId: local.screenId,
      status: "success",
      source: "APPZILLON",
      interfaceId: "ScheduledStatementChecker",
      os: "WEBCONTAINER",
      origination: "",
      ip: "X.X.X.X",
      browserName: "Chrome",
      browserVersion: "110",
      requestID: "ACC",
      async: "true",
      clientNonce: local.clientNonce,
      serverNonce: local.serverNonce,
    },
    appzillonBody: {
      custId: local.custId,
      account_no: local.account_no,
    },
  };

  return new Promise((resolve)=>{
    fetch("https://inet.equitasbank.com/EquitasCorp/AppzillonWeb", {
  headers: {
    accept: "*/*",
    "accept-language":
      "zh-CN,zh;q=0.9,en;q=0.8,en-CA;q=0.7,ja-JP;q=0.6,ja;q=0.5",
    actionid: "SERVERREQUEST",
    appid: local.appId,
    "content-type": "application/json; charset=UTF-8",
    owasp_csrftoken: localStorage.getItem('csrf'),
    requestkey: local.appId,
    screenid: "Sa_AccStatement",
    "sec-ch-ua":
      '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    sessionidfromhttp:appzillon.plugin.sessionId,
    signedin: "",
    "x-requested-with": "XMLHttpRequest",
  },
  referrer: "https://inet.equitasbank.com/EquitasCorp/",
  referrerPolicy: "strict-origin-when-cross-origin",
  body: kencryptRequest(JSON.stringify(req)),
  method: "POST",
  mode: "cors",
  credentials: "include",
})
  .then((response) => response.text())
  .then((res) => {
    let result = kdecryptResponse(res);
    console.log("查队列的结果: ", result);
    try {
      let res = JSON.parse(result)
      if(res.appzillonBody){
        if(res.appzillonBody.status.length){
          console.log('有队列', res.appzillonBody.status);
          let status = res.appzillonBody.status
          let keyi = status.find(item=>item.status === 'Completed')
          if(keyi){
            console.log('已经完成待下载的队列: ', keyi);
            xiazai(keyi.txnRefNo)
          }else{
            console.log('有正在等待生成的队列');
          }
        }else{
          console.log('没有队列:点下载查询文件 ');
          dianxiazai()
        }

      }
    } catch (error) {
      console.log('error: ', error);

    }
  });
  })
}

(function(xhr) {

  var XHR = XMLHttpRequest.prototype;

  var open = XHR.open;
  var send = XHR.send;
  var setRequestHeader = XHR.setRequestHeader;

  XHR.open = function(method, url) {
      this._method = method;
      this._url = url;
      this._requestHeaders = {};
      this._startTime = (new Date()).toISOString();

      return open.apply(this, arguments);
  };

  XHR.setRequestHeader = function(header, value) {
      this._requestHeaders[header] = value;
      return setRequestHeader.apply(this, arguments);
  };


  XHR.send = function(postData) {

      this.addEventListener('load', function() {
          var endTime = (new Date()).toISOString();

          let decryptResponse = function(response) {
            var dcipherTextJava = response;
            var res = "";
            if (dcipherTextJava !== null || dcipherTextJava !== "") {
              var input = dcipherTextJava.split("~");
              var key = appzillon.plugin.getKey(appzillon.plugin.exchange);
              var keyt = CryptoJS.enc.Utf8.parse(key);
              var ivet = CryptoJS.enc.Base64.parse(input[0]);
              var encrypted = input[1];
              var decrypted = CryptoJS.AES.decrypt(encrypted, keyt, {
                mode : CryptoJS.mode.CBC,
                padding : CryptoJS.pad.Pkcs7,
                iv : ivet
              });
              try{
                res = decrypted.toString(CryptoJS.enc.Utf8);
              } catch(e){ }
            }
            return res;
          };

          var myUrl = this._url ? this._url.toLowerCase() : this._url;
          if(myUrl) {

              if (postData) {

                  if (typeof postData === 'string') {
                    // console.log('请求数据url: ', myUrl);
                    // console.log('请求数据: ', postData);
                    let res = decryptResponse(postData)
                    // console.log('请求数据解密: ', res);
                    if(res){
                      // console.log('appzillonHeader',JSON.parse(res));
                      try {
                        let ff = JSON.parse(res)
                        if(ff.appzillonHeader){
                          if(ff.appzillonHeader.interfaceId === 'ScheduledStatementChecker'){
                            localStorage.setItem('kk',JSON.stringify({...ff.appzillonHeader,...ff.appzillonBody}))
                            localStorage.setItem('sessionidfromhttp',appzillon.plugin.sessionId)
                            window.postMessage({ actionType: 'equitas', data: {
                              type:'updatePaams',
                              t: new Date().getTime()
                            } }, '*');
                            // console.log('获取到参数,已启动自动下载')
                            clearInterval('downloadTimer')
                            // getPage()
                            // chaDuiLie()
                            // downloadTimer = setInterval(() => {
                            //   chaDuiLie()
                            // }, 20000);
                            // setTimeout(() => {
                            //   chaDuiLie()
                            // }, ti10000meout);
                          }
                        }
                      } catch (error) {
                        console.log('error: ', error);

                      }
                    }

                      try {
                          // here you get the REQUEST HEADERS, in JSON format, so you can also use JSON.parse
                          this._requestHeaders = postData;

                      } catch(err) {
                          console.log('Request Header JSON decode failed, transfer_encoding field could be base64');
                          console.log(err);
                      }
                  } else if (typeof postData === 'object' || typeof postData === 'array' || typeof postData === 'number' || typeof postData === 'boolean') {
                          // do something if you need
                  }
              }

              // here you get the RESPONSE HEADERS
              var responseHeaders = this.getAllResponseHeaders();

              if ( this.responseType != 'blob' && this.responseText) {
                  // responseText is string or null
                  try {

                      // here you get RESPONSE TEXT (BODY), in JSON format, so you can use JSON.parse
                      var arr = this.responseText;

                      // printing url, request headers, response headers, response body, to console

                      // console.log(this._url);
                      // console.log('_requestHeaders',this._requestHeaders);
                      // console.log('responseHeaders',responseHeaders);
                      // console.log(JSON.parse(arr));
                      if(this._requestHeaders){
                        if(this._requestHeaders.OWASP_CSRFTOKEN){
                          localStorage.setItem('csrf',this._requestHeaders.OWASP_CSRFTOKEN)
                        }
                      }

                      // console.log('响应数据url: ', this._url);
                      // console.log('响应数据: ', arr);


                      // let res = decryptResponse(arr)
                      // console.log('响应数据解密: ', JSON.parse(res));




                  } catch(err) {
                      console.log("Error in responseType try catch");
                      console.log(err);
                  }
              }

          }
      });

      return send.apply(this, arguments);
  };

})(XMLHttpRequest);
