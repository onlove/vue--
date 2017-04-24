<template>
    <div class="content mt30">
        <div class="newsList">
            <ul>
                <li>
                    <a href="context.html" v-for="(item, index) in arrList">
                        <h3>{{index}}. {{item.title}}</h3>
                        <p>{{item.detail}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arrList: []
            }
        },
        mounted() {
            this.fecthData()
        },
        methods: {
            fecthData(){
                this.$http.get('src/data/follow.data').then((res) => {
                    this.arrList = res.data;
                }).catch((error) => {

                })
            }
        }
    }
</script>

<style scoped>
    .mt30{
        margin-top: 30px;
    }
</style>
