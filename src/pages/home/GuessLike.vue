<template>
    <div class="guess-like" id="guessLike">
        <dl class="list">
            <dt>猜你喜欢</dt>
            <dd v-for="item in list">
                <div class="pic">
                    <img :src="item.imgUrl">
                </div>
                <div class="des-box">
                    <h3 class="title">{{item.title}}</h3>
                    <p class="des"><span>[{{item.address}}]{{item.des}}</span></p>
                    <p class="price-box">
                        <span class="price-strong">{{item.price}}</span>
                        <span class="strong-color">元</span>
                        <del>{{item.counter_price}}元</del>
                        <span class="sold">已售{{item.sold}}</span>
                    </p>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list: []
            }
        },
        created() {
            //加时间戳 防止请求缓存,出现304现象
            this.$axios.get("/api/index/DealList?_t="+new Date().getTime().toString())
            .then((result) => {
            this.list = result.data.data;
                console.log(result.data)
            }).catch((err) => {

            })
        },
    }
</script>
<style scoped>
    .guess-like{
        width: 100%;
    }
    .guess-like .list{
        padding-left:10px;
        position: relative;
    }
    .list dt{
        text-align: left;
        font-size: 14px;
    }
    .list dd,.list dt{
        padding: 10px 0;
        border-bottom: 1px solid #eee;
    }
    dd .pic{
        width: 30%;
        position: absolute;
        height: 81px;
    }
    .pic img{
        height: 100%;
        background-size: 100%;
        background-color: #f0efed;
        border: 0;
        width: 100%;
    }
    dd .des-box{
        padding-left: 10px;
        margin-left: 30%;
        box-sizing: border-box;
    }
    .des-box .title{
        font-size: 14px;
        font-weight: 100;
        color: #333;
        padding-top: 5px;
    }
    .des-box .des{
        font-size: 12px;
        color: #666;
        margin-top: 5px;
    }
    .des span{
        display: inline-block;
        width: 95%;
        overflow: hidden;
        text-overflow: ellipsis;
         white-space: nowrap;
    }
    .price-box{
        margin-top: 10px;
    }
    .price-box .price-strong{
        font-size: 20px;
        font-weight: 600;
        color: #06c1ae;
    }
    .price-box .strong-color{
         font-size: 12px;
        color: #06c1ae;
    }
    .price-box del{
        font-size: 12px;
        color: #666;
        position: relative;
        padding-left:46px;
    }
    del:before{
        content: "门市价:";
        position: absolute;
        width: 60px;
        left: 3px;
        top: -2px;
    }
    .price-box .sold{
        font-size: 12px;
        color: #666;
        float: right;
        margin-right:20px;
    }
</style>