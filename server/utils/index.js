const os = require("os");
const http = require("http");
const axios = require("axios");

// 获取系统当前用户名
const getSysUser = () => {
  const username = os.userInfo().username;
  return username;
};

// 获取系统当前IP
const getSysLocalIp = () => {
  let ipv4 = "127.0.0.1"; // 默认本机地址
  const interfaces = os.networkInterfaces();
  Object.keys(interfaces).forEach((key) => {
    interfaces[key].forEach((item) => {
      if (item.family === "IPv4" && item.internal === false) {
        ipv4 = item.address;
      }
    });
  });
  return ipv4;
};

// 获取系统公网IP
const getSysPublicIp = () => {
  return new Promise((resolve) => {
    http.get({ host: "api.ipify.org", path: "/" }, function (res) {
      let data = "";

      res.on("data", function (chunk) {
        data += chunk;
      });

      res.on("end", function () {
        console.log("Public IP address:", data);
        resolve(data);
      });
      res.on("error", function (e) {
        console.log("Public IP address error:", e);
        resolve(false);
      });
    });
  });
};

// 上报信息
const reportInfo = (data = {}) => {
  axios({
    method: "post",
    url: "http://localhost:81/admin/crawler/pluginCrawler",
    data,
  })
    .then((result) => {
      console.log("reportInfo success");
    })
    .catch((err) => {
      console.log('reportInfo err', data);
      console.log("reportInfo err", err.message);
    });
};

module.exports = {
  getSysUser,
  getSysLocalIp,
  getSysPublicIp,
  reportInfo
};
