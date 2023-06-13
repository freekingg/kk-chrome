const Datastore = require("nedb");
const path = require("path");
const DB = new Datastore({
  autoload: true,
  timestampData: true,
  // 指定数据库文件路径
  filename: path.join(process.env.HOME || process.env.HOMEPATH, "/data.db"),
});
const findAll = (query) => {
  return new Promise((resolve, reject) => {
    const DB1 = new Datastore({
      autoload: true,
      timestampData: true,
      filename: path.join(process.env.HOME || process.env.HOMEPATH, "/data.db"),
    });

    DB1.find(query)
      .sort({ createdAt: -1 })
      .limit(100)
      .exec(function (err, data) {
        if (err) {
          reject(err);
          return;
        }
        resolve(data);
      });
  });
};

const findOne = (query) => {
  return new Promise((resolve, reject) => {
    const DB1 = new Datastore({
      autoload: true,
      timestampData: true,
      filename: path.join(process.env.HOME || process.env.HOMEPATH, "/data.db"),
    });

    DB1.findOne(query, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

const remove = (query) => {
  return new Promise((resolve, reject) => {
    DB.remove(query, { multi: true }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

const insert = (data) => {
  return new Promise((resolve, reject) => {
    DB.insert(data, (err, data) => {
      if (err) {
        console.log('err: ', err);
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

const updateOne = (query, data) => {
  return new Promise((resolve, reject) => {
    DB.update(query, data, { upsert: true }, (err, doc) => {
      resolve(doc);
    });
  });
};
module.exports = {
  findAll,
  findOne,
  insert,
  remove,
  updateOne,
};

