/**
 * Created by yangjun on 2017/10/15.
 */

// http://d.lanrentuku.com/down/js/qita-1191/
import LoadingComponent from './Loading.vue';

// 当use注册的时候会自动调用install方法，会传入Vue
const Loading = {
  install: function(Vue) {
    Vue.component('Loading', LoadingComponent);
  }
};

export default Loading;
