<template>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="slide in bannerList" :key="slide.id">
        <router-link :to="slide.linkTo">
          <img :src=slide.imgSrc>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="zhubo">
      <router-link v-for="item in zhuboList" :key="item.id" :to="item.linkTo">
        <img :src="item.imgSrc">
        <span>{{item.name}}</span>
      </router-link>
    </div>

    <div class="youhuiquan">
      <router-link to="/">
        <img :src="youhuiquandata.imgSrc">
      </router-link>
    </div>

    <cell1 :cell1Data="cell1Data" :index="0"></cell1>

    <ul>
      <li v-for="(item,index) in jinxuanList">
        <router-link :to="{path: 'showpic',query: {id: item.id}}">
          <cell2 :cell2Data="item" :index="index"></cell2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import cell1 from '@/components/Cell/cell1';
  import cell2 from '@/components/Cell/cell2';
  require('swiper/dist/css/swiper.css');
  export default {
    data() {
      return {
        cell1Data: {
          id: 0,
          des: '主播被你玩坏了',
          imgSrc: require('./images/video@3x.png'),
          linkTo: '/',
          user_icon: require('./images/head@3x.png')
        },
        youhuiquandata: {
          imgSrc: require('./images/shoping_vouchers@3x.png')
        },
        swiperOption: {
          notNextTick: true,
          autoplay: 1000,
          autoplayDisableOnInteraction: false,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          centeredSlides: true,
          autoHeight: true,
          mousewheelControl: true,
          observer: true,
          observeParents: true,
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 30
        }
      };
    },
    computed: mapGetters(['bannerList', 'zhuboList', 'jinxuanList']),
    components: {
      swiper,
      swiperSlide,
      cell1,
      cell2
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "../../common/scss/mixins";
  @import "./home.scss";
</style>
