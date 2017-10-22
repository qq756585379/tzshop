<template>
  <div class="tabBar">
    <router-link v-for="item in footList" :key="item.id" :to="item.linkTo">
      <div class="tab-item">
        <i :class="item.itemClass" class="common_i">
          <span class="badge" :class="{ bigNum: allNum>99 }" v-if="allNum!=0&&item.id===3">{{allNum}}</span>
        </i>
        <span>{{item.name}}</span>
      </div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  export default {
    computed: mapGetters(['footList', 'allNum'])
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "../../common/scss/mixins";

  .tabBar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    display: flex;
    height: 49px;
    line-height: 49px;
    border-top: solid 1px #ededed;
    background-color: white;
    & > a {
      flex: 1;
      text-align: center;
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
      height: 100%;
      &.router-link-active {
        color: #333;
        .tab-item {
          .u-icon-tabBar-index {
            @include bg-image('./images/home_click');
          }
          .u-icon-tabBar-brand {
            @include bg-image('./images/brand_selected');
          }
          .u-icon-tabBar-live {
            @include bg-image('./images/liveselected');
          }
          .u-icon-tabBar-shopcart {
            @include bg-image('./images/shopping_card_selected');
          }
          .u-icon-tabBar-my {
            @include bg-image('./images/my_selected');
          }
        }
      }
      .tab-item {
        text-align: center;
        position: relative;
        height: 100%;
        .common_i {
          display: block;
          position: relative;
          text-align: center;
          width: 32px;
          height: 32px;
          margin: 0 auto;
          background-size: 32px 32px;
          background-repeat: no-repeat;
          .badge {
            text-align: center;
            position: absolute;
            display: block;
            width: 16px;
            height: 16px;
            line-height: 16px;
            background-color: red;
            color: white;
            font-size: 8px;
            top: 0;
            right: -5px;
            border-radius: 8px;
            &.bigNum {
              font-size: 8px;
            }
          }
        }
        .u-icon-tabBar-index {
          @include bg-image('./images/home');
        }
        .u-icon-tabBar-brand {
          @include bg-image('./images/brand');
        }
        .u-icon-tabBar-live {
          @include bg-image('./images/live');
        }
        .u-icon-tabBar-shopcart {
          @include bg-image('./images/shopping');
        }
        .u-icon-tabBar-my {
          @include bg-image('./images/my');
        }
        & > span {
          position: absolute;
          bottom: 3px;
          left: 0;
          width: 100%;
          height: 12px;
          line-height: 12px;
          text-align: center;
          font-size: 10px;
        }
      }
    }
  }
</style>
