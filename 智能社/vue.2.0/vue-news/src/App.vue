<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <NavView v-show="headerShow"></NavView>
    <keep-alive>
       <router-view></router-view>
    </keep-alive>
    <FooterView></FooterView>
  </div>
</template>

<script>
  import NavView from './components/Nav.vue'
  import FooterView from './components/Footer.vue'

  import {mapGetters, mapActions} from 'vuex';
export default {
  computed: mapGetters([
      'headerShow',
      'loading'
  ]),
  components: {
    NavView,
    FooterView
  },
//  监听路由变化
  watch: {
    $route(to, from){
      if(to.path == '/user-info') {
        this.$store.dispatch('hideHeader')
      }else{
        this.$store.dispatch('showHeader')
      }
    }
  }

}
</script>

<style>
  @import './assets/css/index.css';
</style>
