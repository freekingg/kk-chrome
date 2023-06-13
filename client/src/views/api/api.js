import axios from "axios";

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
    url: "http://localhost:3005/" + "findOne",
    method:'get',
    params:data
  });
};

export const findAll = (data) => {
  return request({
    url: "http://localhost:3005/" + "findAll",
    method:'get',
    params:data
  });
};

export const dbInsert = (data) => {
  return request({
    url: "http://localhost:3005/" + "dbInsert",
    method:'post',
    data
  });
};

export const dbUpdateOne = (data) => {
  return request({
    url: "http://localhost:3005/" + "dbUpdateOne",
    method:'post',
    data
  });
};

export const boot = (data) => {
  return request({
    url: "http://localhost:3005/" + "launch",
    method:'post',
    data
  });
};