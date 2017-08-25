const state = {
  bannerList: [
    {
      id: 0,
      itemClass: 'banner0',
      linkTo: '/home'
    },
    {
      id: 1,
      itemClass: 'banner1',
      linkTo: '/brand'
    },
    {
      id: 2,
      itemClass: 'banner2',
      linkTo: '/live'
    },
    {
      id: 3,
      itemClass: 'banner3',
      linkTo: '/shopcart'
    },
    {
      id: 4,
      itemClass: 'banner4',
      linkTo: '/my'
    },
    {
      id: 5,
      itemClass: 'banner5',
      linkTo: '/my'
    }
  ],
  swiperOption: {
    autoplay: 3500,
    setWrapperSize: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    mousewheelControl: true,
    observeParents: true,
    loop: true
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
