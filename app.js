const express = require("express");
const app = express();
const http = require("http").createServer(app);
const port =5000;

//views 폴더 지정
app.set("views","./views");
app.set("view engine", "ejs");

//routes 지정
const home = require("./routes/home");

//use는 미들웨어를 등록하는 메소드
app.use("/", home);


module.exports = app;

