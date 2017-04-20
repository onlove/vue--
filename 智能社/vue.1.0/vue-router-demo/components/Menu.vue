<template>
    <ul>
        <li v-for="val in list">{{val}}</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                list: ['apple', 'orange', 'banana']
            }
        }
    }
</script>

<style>

</style>
