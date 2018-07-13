<template>
    <div class="home-head">
        <div class="nav-city">
            <span>深圳</span>
        </div>
        <div class="search">
            <span></span>
            <span>输入商家/品类/商圈</span>
        </div>
        <div class="nav-my">
            <router-link to="/login">
                <span>深圳</span>
                <span>我的</span>
            </router-link>
        </div>
    </div>
</template>
<script>
   export default {
       name: "HomeHead",
       data (){
           return {

           }
       }
   }
</script>
<style scoped>
    .home-head{
        height: 56px;
        width: 100%;
        background: #06c1ae;
    }
    .nav-city{
        width:20%;
        float:left;
        height: 100%;
        text-align: center;
    }
    .nav-city span{
        display: block;
        height: 100%;
        line-height: 56px;
        color: #fff;
    }
    .search{
        width:60%;
        float:left;
        height: 32px;
        background: #21897d;
        font-size: 12px;
        margin-top: 12px;
        border-radius: 3px;
    }
    .search span{
        display:inline-block;
        line-height:32px;
        color:#68dbce;
    }
    .nav-my{
        width:20%;
        float:left;
        display:flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        font-size: 12px;
        color:#fff;
        text-align: center;
    }
</style>