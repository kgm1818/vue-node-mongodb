const express = require("express");
const Category = require('../models/Categorylist');
const DealList = require('../models/DealList');
// 创建路由
const router = express.Router();
// 首页分类
router.get('/homepage/categorylist', (req,res,next) => {
    let responseData = {};
    try {
        Category.find().then((result) => {
            console.log("查询成功");
            //console.log(result);
            responseData.status = 0;
            responseData.data = result;
            responseData.msg = "执行成功";
            res.json(responseData);
        })
    }catch(err){
        console.log("出错了" + err);
        responseData.status = 1;
        responseData.msg = "请求失败";
        res.json(responseData);
    }
    // 创建数据
    // let data = new Category({
    //     title: "酒店",
    //     imgUrl: "/build/images/list3.png"
    // });
    // 保存数据到数据库
    // data.save().then((categoryInfo) => {
    //     if(categoryInfo){
    //         console.log('数据保存成功');
    //         console.log(categoryInfo);
    //         Category.find().then((result) => {
    //             console.log("查询成功")
    //             console.log(result)
    //         })
    //     }else{
    //         console.log('数据保存失败');
    //     }
    // })
});
// 列表
router.get("/index/DealList", (req, res, next) => {
    let responseData = {};
    try {
        DealList.find().then((result) => {
            responseData.status = 0;
            responseData.data = result;
            responseData.msg = "执行成功";
            res.json(responseData);
        })
    }catch (err){
        responseData.status = 1;
        responseData.msg = "请求失败";
        res.json(responseData);
    }
})
module.exports = router;