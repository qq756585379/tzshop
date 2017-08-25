// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './vuex/store';
// 轮播图插件 https://www.npmjs.com/package/vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vuex,
  store,
  template: '<App/>',
  components: { App }
});

router.push('/home');
