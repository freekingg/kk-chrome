console.log('paytm.js');
let ruleForm = {}
let event = document.createEvent('Event');
event.initEvent('paytmEvent', true, true);
document.addEventListener('paytmEvent', ({ detail }) => {
  console.log('detail: ', detail);
  // 接受数据
  let { type, data } = detail;
  // console.log(detail);
  if (type === 'start') {
    if(window.xsrfToken){
      console.log('window.xsrfToken: ', window.xsrfToken);
      localStorage.setItem('xsrfToken',window.xsrfToken)
    }
  } else if (type === 'stop') {


  }
});

// window.postMessage({
//   actionType: 'paytm', data: {
//     type: 'updateAuParms',
//     t: new Date().getTime()
//   }
// }, '*');

// 监听请求

//   (function () {
//     let origFetch = window.fetch;
//     console.log('origFetch: ', origFetch);
//     window.fetch = async function (...args) {
//         const response = await origFetch(...args);
//         console.log('fetch request:', args);

//         response
//             .clone()
//             .json() // 此处需要根据不同数据调用不同方法，这里演示的是二进制大文件，比如音频
//             .then(data => {
//             	// 对于二进制大文件可以创建为URL(blob:开头)，供其它脚本访问
//             	//sessionStorage['wave'] = URL.createObjectURL(data); // 插件需要添加'storage'权限
//                 window.postMessage({ type: 'fetch', data: data }, '*'); // send to content script
//             })
//             .catch(err => console.error(err));
//         return response;
//     }
// })()
