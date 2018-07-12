<template>
    <div>
        <HomeHead/>
        <HomeBanner/>
    </div>
</template>
<script>
import HomeHead from "./home/HomeHead"
import HomeBanner from "./home/HomeBanner"
import Axios from "axios"
    export default {
        components: {
            HomeHead,
            HomeBanner
        },
        data () {
            return {

            }
        },
        created() {
            new Promise((resolve, reject) => {
                Axios.get("/api/homepage/categorylist").then((result) => {
                    console.log(result)
                }).catch((err) => {
                    console.log(err)
                })
            })
        },
    }
</script>
<style>
    
</style>