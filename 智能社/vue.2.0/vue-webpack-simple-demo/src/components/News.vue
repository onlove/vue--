<template>
    <div>
    <h3>我是新闻页</h3>
        <ul>
            <li v-for="(val, index) in news">{{val}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'news',
        data() {
            return {
                news: ["1111", "222"]
            }
        }
    }
</script>

<style>

</style>
