

// window.postMessage({ type: 'fetch', data: {a:6} }, '*');



(function () {
  console.info('chrome-ext template-vue-ts injected.js script')
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


    var XHR = XMLHttpRequest.prototype;

    var open = XHR.open;
    var send = XHR.send;

    XHR.open = function (method, url) {
        this._method = method;
        this._url = url;
        return open.apply(this, arguments);
    };

    XHR.send = function (postData) {
        console.log('xhr request:', this._method, this._url, postData);

        // 监听下载接口 axis个户
        if(this._url && this._url.indexOf('/wsprod/mib/servlets/report')!= -1){
          let _postData = getUrlParam('?'+postData)
          window.postMessage({ actionType: 'axisPrimeDownloadParams', data: _postData }, '*');
        }

        // 监听下载接口 axis公户
        if(this._url && postData && postData.indexOf('onscreen')!= -1){
          let _postData = getUrlParam('?'+postData)
          window.postMessage({ actionType: 'axisIdxDownloadParams', data: _postData }, '*');
        }
        return send.apply(this, arguments);
    };
})()



  // (function () {
    // let origFetch = window.fetch;
    // window.fetch = async function (...args) {
    //     const response = await origFetch(...args);
    //     console.log('fetch request:', args);

    //     response
    //         .clone()
    //         .json() // 此处需要根据不同数据调用不同方法，这里演示的是二进制大文件，比如音频
    //         .then(data => {
    //         	// 对于二进制大文件可以创建为URL(blob:开头)，供其它脚本访问
    //         	//sessionStorage['wave'] = URL.createObjectURL(data); // 插件需要添加'storage'权限
    //             window.postMessage({ type: 'fetch', data: data }, '*'); // send to content script
    //         })
    //         .catch(err => console.error(err));
    //     return response;
    // }
// })()
