const mongoose = require('mongoose');
// 创建数据库表
const CategotyTable = new mongoose.Schema({
    title: String,
    imgUrl: String,
});
// 建立模型
let CategotyList = mongoose.model("category", CategotyTable);
module.exports = CategotyList;