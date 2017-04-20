<template>
  <div id="app">
    <el-button @click="get" type="primary">主要按钮</el-button>
    <el-button type="danger">主要按钮</el-button>
    <el-button type="info" icon="close">主要按钮</el-button>
    <el-button type="success" icon="edit">主要按钮</el-button>
    <el-button type="warning" icon="search">主要按钮</el-button>

    <span class="el-icon-delete"></span>

    <div>
      <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
      <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
    </div>

    <div>
      <el-date-picker
              v-model="value"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0">
      </el-date-picker>
    </div>
    <br/>
    <br/>

    <el-rate v-model="val"></el-rate>
    <br/>
    <br/>

    <el-pagination
          layout="prev, pager, next"
          :total="1000">
    </el-pagination>
    <br/><br/>

    <el-tabs v-model="activeName">
      <el-tab-pane label="用户管理" name="first">
        <br/>
        <br/>
        <el-badge :value="200" :max="99" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <el-switch
                v-model="bOff"
                on-text=""
                off-text="">
        </el-switch>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">
        <el-table
                :data="tableData"
                style="width: 100%">
          <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="address"
                  label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <br><br>
    <myButton @click.native="get"></myButton>
    <div>{{myMsg}}</div>
   </div>
</template>

<script>
import Date from './components/Date.vue';
import myButton from './components/Button.vue';
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      radio: true,
      value: '',
      val: 0,
      myMsg: '',
      bOff: false,
      activeName: "用户管理",
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  components:{
    Date,
    myButton
  },
  methods: {
    get(){
      axios.get('a.txt').then(function(res){
        this.myMsg = res.data;
      }.bind(this)).catch(function(error) {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped lang="less">
@color:red;
.height(@h) {
  height: @h;
}

.my-grid{
  border:1px solid @color;
  .height(50px);
}
</style>
