<template>
    <div>
        <HomeHead/>
        <HomeBanner/>
        <GuessLike/>
    </div>
</template>
<script>
import HomeHead from "./home/HomeHead"
import HomeBanner from "./home/HomeBanner"
import GuessLike from "./home/GuessLike"
    export default {
        components: {
            HomeHead,
            HomeBanner,
            GuessLike
        },
        data () {
            return {

            }
        },
        created() {
            new Promise((resolve, reject) => {
                this.$axios.get("/api/homepage/categorylist").then((result) => {
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