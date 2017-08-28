const state = {
  bannerList: [
    {
      id: 0,
      linkTo: '/home',
      imgSrc: require('../../pages/home/images/1@2x.png')
    },
    {
      id: 1,
      linkTo: '/brand',
      imgSrc: require('../../pages/home/images/2@2x.png')
    },
    {
      id: 2,
      linkTo: '/live',
      imgSrc: require('../../pages/home/images/3@2x.png')
    },
    {
      id: 3,
      linkTo: '/shopcart',
      imgSrc: require('../../pages/home/images/4@2x.png')
    },
    {
      id: 4,
      linkTo: '/my',
      imgSrc: require('../../pages/home/images/5@2x.png')
    }
  ],
  swiperOption: {
    notNextTick: true,
    autoplay: 1000,
    autoplayDisableOnInteraction: false,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    autoHeight: true,
    mousewheelControl: true,
    observeParents: true,
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30
  }
};

const getters = {
  bannerList: state => state.bannerList,
  swiperOption: state => state.swiperOption
};

export default {
  state,
  getters
};
