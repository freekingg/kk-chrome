

// window.postMessage({ type: 'fetch', data: {a:6} }, '*');

(function(xhr) {

  var XHR = XMLHttpRequest.prototype;

  var open = XHR.open;
  var send = XHR.send;
  var setRequestHeader = XHR.setRequestHeader;

  function getUrlParam(url) {
    url = decodeURIComponent(url)
     // str为？之后的参数部分字符串
     const str = url.substr(url.indexOf('?') + 1)
     // arr每个元素都是完整的参数键值
     const arr = str.split('&')
     // result为存储参数键值的集合
     const result = {}
     for (let i = 0; i < arr.length; i++) {
         // item的两个元素分别为参数名和参数值
         const item = arr[i].split('=')
         result[item[0]] = item[1]
     }
     return result
  }

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
          var myUrl = this._url ? this._url.toLowerCase() : this._url;
          if(myUrl) {

              if ( this.responseType != 'blob' && this.responseText) {
                  // responseText is string or null
                  try {

                      // here you get RESPONSE TEXT (BODY), in JSON format, so you can use JSON.parse
                      var arr = this.responseText;

                      // printing url, request headers, response headers, response body, to console

                      console.info(this._url);
                      // console.log(JSON.parse(this._requestHeaders));
                      // console.log(responseHeaders);
                      // console.info(JSON.parse(arr));


                      if(this._url && this._url.indexOf('app_state')!= -1){
                        let result = getUrlParam(this._url)
                        result.type = 'getAccount'
                        window.postMessage({ actionType: 'icic2', data: result }, '*');
                      }
                      if(this._url && this._url.indexOf('get_company_details')!= -1){
                        let result = getUrlParam(this._url)
                        result.type = 'getAccount'
                        window.postMessage({ actionType: 'icic2', data: result }, '*');
                      }

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
