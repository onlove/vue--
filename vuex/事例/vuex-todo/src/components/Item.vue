<template>
    <li :class="todo.selected ? 'selected' : ''" v-show="isShow()">
        <input type="checkbox" class="l db" @click="selectIt" :checked="todo.selected"/>
        <span class="db l ellipsis" v-show="!isEdit" @click="editIt">{{todo.text}}</span>
        <input type="text" class="l db" v-model="ipt" v-show="isEdit" :placeholder="todo.text">
        <div class="operate r">
            <button v-show="!isEdit" @click="delIt">删除</button>
            <button v-show="isEdit" @click="updateIt">修改</button>
            <button v-show="isEdit" @click="cancel">取消</button>
        </div>
    </li>
</template>

<script>
    export default {
        props: ['todo'],
        data() {
            return {
                isEdit: false,
                ipt: ''
            }
        },
        methods: {
            delIt() {
                this.$store.dispatch('del', this.todo.id)
            },
            editIt() {
                this.isEdit = true
            },
            updateIt() {
                let { ipt } = this;
                if(ipt) {
                    this.$store.dispatch('update', [this.todo.id, ipt])
                    ipt = '';
                    this.isEdit = false
                }

            },
            cancel() {
                this.ipt = '';
                this.isEdit = false;
            },
            selectIt(e){
                this.$store.dispatch('select', [this.todo.id, e.currentTarget.checked])
            },
            isShow() {
                let  { filter } = this.$store.state,
                     show = true;
                if(filter) {
                    if(filter == 1)
                       show = this.todo.selected ? false : true;
                    else
                       show = this.todo.selected ? true : false;
                }

                return show;
            }
        }
    }
</script>

<style>

</style>