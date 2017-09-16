<template>
  <div class="showpic">
    <nav class="nav-head border-1px">精彩推荐</nav>
    <img :src="imgSrc">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        longPicList: [
          {
            imgSrc: require('../../common/images/01.jpg')
          },
          {
            imgSrc: require('../../common/images/02.jpg')
          },
          {
            imgSrc: require('../../common/images/03.jpg')
          },
          {
            imgSrc: require('../../common/images/01.jpg')
          },
          {
            imgSrc: require('../../common/images/02.jpg')
          },
          {
            imgSrc: require('../../common/images/03.jpg')
          },
          {
            imgSrc: require('../../common/images/01.jpg')
          },
          {
            imgSrc: require('../../common/images/02.jpg')
          },
          {
            imgSrc: require('../../common/images/03.jpg')
          },
          {
            imgSrc: require('../../common/images/01.jpg')
          },
          {
            imgSrc: require('../../common/images/02.jpg')
          },
          {
            imgSrc: require('../../common/images/03.jpg')
          }
        ],
        id: 0
      };
    },
    created: function () {
      this.id = this.$route.query.id;
    },
    computed: {
      imgSrc() {
        return this.longPicList[this.id].imgSrc;
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "../../common/scss/mixins";

  .showpic {
    position: relative;
    background-color: #ededed;
    .nav-head {
      height: 50px;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 20px;
      line-height: 50px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      position: fixed;
      z-index: 100;
      background-color: white;
    }
    img {
      margin-top: 50px;
      width: 100%;
      margin-bottom: 0;
    }
  }
</style>
