<template>
  <div class="my">
    <nav class="nav-head border-1px">我的</nav>

    <div class="section0">
      <router-link to="/">
        <div>
          <img :src="LoginAccount.user_icon">
        </div>
        <div>
          <p>昵称：{{LoginAccount.nicheng}}</p>
          <p>帐号：{{LoginAccount.zhanghao}}</p>
          <i></i>
        </div>
      </router-link>
    </div>

    <div class="section1">
      <div>
        <span>我的订单</span>
        <i></i>
        <span>查看全部订单</span>
      </div>
      <div>
        <router-link v-for="item in toolBarList" :key="item.id" :to="item.linkTo">
          <img :src="item.icon">
          <span>{{item.title}}</span>
        </router-link>
      </div>
    </div>

    <div class="section2">
      <ul>
        <li class="border-1px">
          <div class="clearfix">
            <span>客服中心</span>
            <span class="tel">13376275127</span>
          </div>
        </li>
        <li class="border-1px">
          <div class="clearfix">
            <span>收货地址</span><i></i>
          </div>
        </li>
        <li class="border-1px">
          <div class="clearfix">
            <span>关于兔子</span><i></i>
          </div>
        </li>
        <li class="border-1px">
          <div class="clearfix">
            <span>设置</span><i></i>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import cell2 from '@/components/Cell/cell3';
  export default {
    data() {
      return {
        LoginAccount: {
          nicheng: '主播被你玩烂了',
          zhanghao: 'qq756585379',
          user_icon: require('../../common/images/placeholder@2x.png'),
          linkTo: '/'
        },
        toolBarList: [
          {
            linkTo: '/',
            icon: require('./images/be_paid@2x.png'),
            title: '待支付',
            id: 1
          },
          {
            linkTo: '/',
            icon: require('./images/send_goods@2x.png'),
            title: '待发货',
            id: 2
          },
          {
            linkTo: '/',
            icon: require('./images/for_goods@2x.png'),
            title: '待收货',
            id: 3
          },
          {
            linkTo: '/',
            icon: require('./images/evaluate@2x.png'),
            title: '交易完成',
            id: 4
          },
          {
            linkTo: '/',
            icon: require('./images/refund@2x.png'),
            title: '退款',
            id: 5
          }
        ]
      };
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "../../common/scss/index";
  @import "./my.scss";
</style>
