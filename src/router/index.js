import Vue from 'vue';
import Router from 'vue-router';

import tabvc from '@/pages/tabvc/tabvc';
import home from '@/pages/home/home';
import brand from '@/pages/brand/brand';
import live from '@/pages/live/live';
import shopcart from '@/pages/shopcart/shopcart';
import my from '@/pages/my/my';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabvc',
      component: tabvc,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/brand',
          name: 'brand',
          component: brand
        },
        {
          path: '/live',
          name: 'live',
          component: live
        },
        {
          path: '/shopcart',
          name: 'shopcart',
          component: shopcart
        },
        {
          path: '/my',
          name: 'my',
          component: my
        }
      ]
    }
  ]
});
