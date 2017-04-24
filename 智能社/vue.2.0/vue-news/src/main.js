import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import routerConfig from './router.config';
import App from './App.vue'
import store from './store/'
import axios from 'axios';
import Loading from './components/loading/'

Vue.use(VueRouter);
Vue.use(Loading);

axios.interceptors.request.use((request) => {
    store.dispatch('showLoading');
    return request;
}, (error) => {
   return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  store.dispatch('hideLoading');
  return response;
}, (error) => {
  return Promise.reject(error);
});

Vue.prototype.$http = axios;

require('./assets/css/base.css')

const router = new VueRouter({
  mode: 'history',
  routes: routerConfig,
  scrollBehavior: () => ({
    y: 0
  })
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
