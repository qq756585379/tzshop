<template>
  <div class="home">

    <nav class="nav-head">
      <i></i>
      <router-link to="/search"></router-link>
    </nav>

    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="slide in bannerList" :key="slide.id">
        <router-link :to="slide.linkTo">
          <img :src=slide.imgSrc>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  require('swiper/dist/css/swiper.css');
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
  @import "./home.scss";
</style>
