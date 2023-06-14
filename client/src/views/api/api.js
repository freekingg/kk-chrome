import axios from "axios";
let baseURL = location.origin + '/'
const request = (obj) => {
  return new Promise((resolve, reject) => {
    axios({
      method: obj.method || "get",
      url: obj.url,
      data: obj.data || {},
      params: obj.params || {},
    })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const findOne = (data) => {
  return request({
    url: baseURL + "findOne",
    method:'get',
    params:data
  });
};

export const findAll = (data) => {
  return request({
    url: baseURL + "findAll",
    method:'get',
    params:data
  });
};

export const dbInsert = (data) => {
  return request({
    url: baseURL + "dbInsert",
    method:'post',
    data
  });
};

export const dbUpdateOne = (data) => {
  return request({
    url: baseURL + "dbUpdateOne",
    method:'post',
    data
  });
};

export const boot = (data) => {
  return request({
    url: baseURL + "launch",
    method:'post',
    data
  });
};