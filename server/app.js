const Koa = require('koa')
const { koaBody } = require('koa-body');
const parameter = require('koa-parameter')
const path = require('path')
const open = require('open')
const cors = require('@koa/cors')
const koaStatic = require("koa-static");
const error = require('koa-json-error')
const routing = require('./routes')
const app = new Koa();

// let port = process.argv[2] ? process.argv[2] : 3005
let port = 3005

// 错误处理
app.use(
  error({
    postFormat: (e, { stack, ...rest }) =>
      process.env.NODE_ENV === "production" ? rest : { stack, ...rest }
  })
);

// 处理post请求和图片上传
app.use(
  koaBody({
    multipart: true,
  })
);

// 静态托管
app.use(koaStatic(path.join(__dirname, "public")));

// 参数校验
app.use(parameter(app));
app.use(cors());
// 路由处理
routing(app);

getPort().then((result) => {
  port = result;
  app.listen(port, () => {
    console.log(`server is running at http://localhost:${port} The node service is started`)
    open(`http://localhost:${port}`)
  });
});


