<template>
    <div class="c oh listbox">
        <ul>
            <li is="Item" v-for="todo in $store.state.todos" :todo="todo"></li>
        </ul>
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
        components: {
            Item
        }
    }
</script>

<style>

</style>