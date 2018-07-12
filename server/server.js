const express = require('express');
const api = require('./router/api');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
//1.启动数据库
//切换到mongodb数据库安装路径，找到mongod.exe程序
//在命令行执行：
//mongod --dbpath=数据库保存数据的路径 --port=端口号
// 搭建服务器
const server = express();

// ajax请求处理
server.use(bodyParser.urlencoded());
server.use('/api',api);
// 监听服务器错误
server.on("listening", err => {
    if(err){
        console.log("服务器错误");
        console.log(err);
    }
});
//连接数据库
mongoose.connect("mongodb://localhost:27017", (err) => {
    if(err){
        console.log('数据库连接失败');
        console.log(err);
    }else{
        console.log('数据库连接成功');
        // 启动服务器
        server.listen("3000", "127.0.0.1", () => {
            console.log("服务器启动成功");
        })
    }
});

