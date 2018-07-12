<template>
    <div class="banner-img">
        <img :src="imgPath"/>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                imgPath: "/static/image/download_banner.png"
            }
        }
    }
</script>
<style scoped>
    .banner-img{
        width:100%;
        height:110px;
        position:relative;
    }
    .banner-img img{
        width:100%;
    }
    .banner-img:after{
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #c6c0b3;
        transform: scaleY(.5);
    }
</style>