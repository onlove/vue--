/**
 * Created by DT274 on 2017/4/1.
 */
var store = {
    save(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    fetch(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }
};



var list = store.fetch('todos');

new Vue({
    el: ".main",
    data: {
        list: list,
        todo: '',
        edtorTodos: '',  //记录编辑的数据
        beforeTitle: ''  //正在编辑的title
    },
    computed: {
        noCheckLength(){
            return this.list.filter(function(item){
                return !item.isChecked
            }).length
        }
    },
    watch: {
        /* 浅监控 */
        //list() { //监控list属性,当属性发生变化时，执行函数
        //    store.save('todos', this.list)
        //}

        /* 深监控 */
        list: {
            handler: function () {
                store.save('todos', this.list)
            },
            deep: true
        }
    },
    methods: {
        addTodo() {
            /* 添加一项任务 */
            this.list.push({
                title: this.todo,
                isChecked: false
            });
            this.todo = '';
        },
        deleteTodo(todo) {
            var index = this.list.indexOf(todo);
            this.list.splice(index, 1);
        },
        edtorTodo(todo) {
            //编辑任务的时候，记录一下编辑这条任务的title,方便在取消的时候重新赋给之前的title
            this.beforeTitle = todo.title;
            this.edtorTodos = todo;

        },
        edtoredTodo() {
            this.edtorTodos = '';
        },
        cancelTodo(todo){
           todo.title = this.beforeTitle;
           //div显示出来,input隐藏
           this.beforeTitle = '';
           this.edtorTodos = '';
        }
    },
    directives: {
        'foucs': {
            //bind: function(el, binding){
            //    console.log('bind:',binding.value);
            //},
            //inserted: function(el, binding){
            //    console.log('insert:',binding.value);
            //},
            update(el, binding) {
                //console.log(el);
                //console.log(binding);
                if(binding.value){
                    el.focus();
                }
            }
        }
    }
    /*
    * 事件修饰符
    *   事件处理函数只有纯粹的逻辑判断，不处理DOM事件的细节，例如：阻止冒泡，取消默认行为，判断按钮
    *   修饰符的位置:
    *       v-on:eventName.修饰符
    *   修饰符:
    *        .stop       阻止单击事件冒泡
    *        .capture    事件捕获模式
    *        .self       只当事件在该元素本身触发时触发回调
    *        .prevent    取消默认行为
    *        .once       只触发一次事件
    *
    *    按键修饰符:
    *       .enter      .tab      .delete    .esc
    *       .space      .up       .down      .left
    *       .right      .ctrl     .alt       .shift
    *       .meta       .键值
    *
    * */
});