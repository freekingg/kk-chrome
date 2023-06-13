const Router = require("koa-router");
const router = new Router();
const DB = require("../db/index.js");
const { launch } = require("../controller/launch");

router.get("/", (ctx) => {
  ctx.body = "<h1>主页....</h1>";
});

router.post("/launch", async (ctx) => {
  const result = await launch(ctx);
  ctx.body = result;
});

router.post("/dbInsert", async (ctx) => {
  const data = ctx.request.body;
  console.log('data: ', data);
  let result = false;
  ctx.body = result || null;
});

router.post("/dbUpdateOne", async (ctx) => {
  const data = ctx.request.body;
  console.log('data: ', data);
  let result = false;
  try {
    result = await DB.updateOne(data.query,data.data);
  } catch (error) {
    console.log("error: ", error);
  }
  ctx.body = result || null;
});

router.get("/findOne", async (ctx) => {
  const query = ctx.query;
  let result = await DB.findOne(query);
  ctx.body = result || null;
});

router.get("/findAll", async (ctx) => {
  const query = ctx.query;
  let result = await DB.findAll(query);
  ctx.body = result || null;
});

module.exports = router;
