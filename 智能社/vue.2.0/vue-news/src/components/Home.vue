<template>
    <div id="home">
        <div class="content">
            <BannerView></BannerView>
            <div class="newsList">
                <ul>
                    <li v-for="(item, index) in arrList" >
                        <router-link :to="'/article/' + item.id">
                            <h3>{{item.title}}</h3>
                            <p>{{item.detail}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import BannerView from './Banner.vue';

    export default {
        data() {
            return {
                arrList: []
            }
        },
        components: {
            BannerView
        },
        mounted(){
            this.fecthData();
        },
        methods: {
            fecthData() {
                this.$http.get('../src/data/index.data').then((res) => {
                    this.arrList = res.data;
                }).catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style>

</style>
