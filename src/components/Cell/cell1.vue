<template>
  <div class="cell">
    <div class="section_header" v-if="index===0">
      <i></i><span>今日推荐</span>
    </div>
    <div class="row_header" v-if="cell1Data.headData">
      <img :src="cell1Data.user_icon">
      <span class="title">{{cell1Data.headData.title}}</span>
      <span class="subtitle">播放{{cell1Data.headData.playnum}}次</span>
      <div class="positionWrap">
        <span class="position">{{cell1Data.headData.location}}</span>
        <i class="position_icon"></i>
      </div>
      <span class="date">{{cell1Data.headData.date}}</span>
    </div>
    <div class="content">
      <img :src="cell1Data.imgSrc">
      <router-link to="/"></router-link>
      <router-link to="/"></router-link>
      <span>{{cell1Data.des}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      cell1Data: {
        type: Object
      },
      index: {
        type: Number,
        default: 0
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "../../common/scss/mixins";

  .cell {
    background-color: white;
    .section_header {
      height: 30px;
      padding: 5px 15px;
      i {
        display: block;
        float: left;
        height: 20px;
        width: 15px;
        margin: 5px 0;
        @include bg-image('./images/tuijian');
        background-size: 15px 20px;
        background-repeat: no-repeat;
      }
      span {
        float: left;
        margin-left: 5px;
        font-size: 15px;
        color: darkgray;
        vertical-align: top;
        height: 100%;
        line-height: 30px;
      }
    }
    .row_header {
      height: 60px;
      position: relative;
      img {
        float: left;
        height: 50px;
        width: 50px;
        margin: 5px 10px;
      }
      .title {
        color: #333333;
        font-size: 18px;
        padding: 5px 0;
        position: absolute;
        top: 5px;
        left: 65px;
      }
      .subtitle {
        position: absolute;
        bottom: 10px;
        left: 65px;
        font-size: 12px;
        color: darkgray;
      }
      .positionWrap {
        padding-top: 6px;
        .position_icon {
          float: right;
          display: block;
          height: 17px;
          width: 12px;
          @include bg-image('./images/location');
          background-size: 12px 17px;
          background-repeat: no-repeat;
        }
        .position {
          float: right;
          color: darkgray;
          font-size: 13px;
          vertical-align: top;
          margin-right: 10px;
          line-height: 17px;
        }
      }
      .date {
        position: absolute;
        font-size: 12px;
        color: darkgray;
        bottom: 15px;
        right: 10px;
      }
    }
    .content {
      position: relative;
      height: 210px;
      img {
        width: 100%;
        height: 100%;
      }
      a:first-of-type {
        display: block;
        height: 70px;
        width: 70px;
        @include bg-image('./images/Playkey');
        background-size: 70px 70px;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        margin-top: -35px;
        left: 50%;
        margin-left: -35px;
      }
      a:last-of-type {
        display: block;
        height: 15px;
        width: 42px;
        @include bg-image('./images/live_tag');
        background-size: 42px 15px;
        background-repeat: no-repeat;
        position: absolute;
        top: 15px;
        right: 15px;
      }
      span {
        color: white;
        font-size: 18px;
        position: absolute;
        bottom: 10px;
        left: 15px;
      }
    }
  }
</style>
