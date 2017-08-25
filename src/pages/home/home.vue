<template>
  <div class="home">
    <nav class="nav-head">
      <i></i>
      <router-link to="/search"></router-link>
    </nav>

    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="slide in bannerList" :key="slide.id">
        <img src="./images/1@2x.png">
        <!--<router-link :to="slide.linkTo" :class="slide.itemClass"></router-link>-->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  export default {
    computed: mapGetters(['bannerList', 'swiperOption']),
    components: {
      swiper,
      swiperSlide
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "../../common/scss/mixins";

  .home {
    position: relative;
    .nav-head {
      height: 50px;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      @include border-1px(rgba(7, 17, 27, .1));
      position: fixed;
      i {
        display: inline-block;
        width: 78px;
        height: 20px;
        background-size: 78px 20px;
        @include bg-image('images/tuzi_word');
        margin: 15px auto;
      }
      a {
        display: inline-block;
        width: 21px;
        height: 21px;
        background-size: 21px 21px;
        @include bg-image('images/search');
        margin: 15px;
        position: absolute;
        right: 10px;
      }
    }
    .swiper-container {
      margin-top: 50px;
      .swiper-wrapper {
        .swiper-slide {
          display: inline-block;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            border: solid 1px red;
            &.banner0 {
              @include bg-image('images/1');
            }
          }
        }
      }
    }
  }
</style>
