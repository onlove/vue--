<template>
    <h3>我是新闻</h3>
    <ul>
        <li><a v-link="{path: '/news/detail/001'}">这是第一条新闻</a></li>
        <li><a v-link="{path: '/news/detail/002'}">这是第二条新闻</a></li>
    </ul>
    <router-view></router-view>
</template>

<script>

</script>

<style>

</style>
