

// window.postMessage({ type: 'fetch', data: {a:6} }, '*');



// (function () {
//   console.info('chrome-ext template-vue-ts injected.js script')
//   function getUrlParam(url) {
//     url = decodeURIComponent(url)
//      // str为？之后的参数部分字符串
//      const str = url.substr(url.indexOf('?') + 1)
//      // arr每个元素都是完整的参数键值
//      const arr = str.split('&')
//      // result为存储参数键值的集合
//      const result = {}
//      for (let i = 0; i < arr.length; i++) {
//          // item的两个元素分别为参数名和参数值
//          const item = arr[i].split('=')
//          result[item[0]] = item[1]
//      }
//      return result
//   }


//     var XHR = XMLHttpRequest.prototype;

//     var open = XHR.open;
//     var send = XHR.send;

//     XHR.open = function (method, url) {
//         this._method = method;
//         this._url = url;
//         return open.apply(this, arguments);
//     };

//     XHR.send = function (postData) {
//         console.log('xhr request:', this._method, this._url, postData,XHR);

//         // 监听下载接口
//         if(this._url && this._url.indexOf('account/v1/statement')!= -1){
//           let _postData = getUrlParam('?'+postData)
//           window.postMessage({ actionType: 'idfcCorDownloadParams', data: _postData }, '*');
//         }
//         return send.apply(this, arguments);
//     };
// })()


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

          var myUrl = this._url ? this._url.toLowerCase() : this._url;
          if(myUrl) {

              if (postData) {
                  if (typeof postData === 'string') {
                      try {
                          // here you get the REQUEST HEADERS, in JSON format, so you can also use JSON.parse
                          this._requestHeaders = postData;
                          console.log('postData: ', postData);
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
                      // console.log(JSON.parse(this._requestHeaders));
                      // console.log(responseHeaders);
                      // console.log(JSON.parse(arr));


                      if(this._url && this._url.indexOf('token/exchange')!= -1){
                        let _postData = JSON.parse(arr)
                        window.postMessage({ actionType: 'idfcCorLogin', data: _postData }, '*');
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
