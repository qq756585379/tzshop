import Vue from 'vue';
import Vuex from 'vuex';
import footer from './modules/footer';
import home from './modules/home';
import live from './modules/live';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    footer,
    home,
    live
  }
});
