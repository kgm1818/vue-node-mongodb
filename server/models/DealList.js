const mongoose = require("mongoose");
const DealListTable = new mongoose.Schema({
    imgUrl: String,
    title: String,
    address: String,
    des: String,
    price: Number,
    counter_price: Number,
    sold: Number
});
let DealList = mongoose.model("dealList", DealListTable);
module.exports = DealList;