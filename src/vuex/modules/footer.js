const state = {
  footList: [
    {
      id: 0,
      name: '首页',
      itemClass: 'u-icon-tabBar-index',
      linkTo: '/home'
    },
    {
      id: 1,
      name: '品牌',
      itemClass: 'u-icon-tabBar-brand',
      linkTo: '/brand'
    },
    {
      id: 2,
      name: '直播',
      itemClass: 'u-icon-tabBar-live',
      linkTo: '/live'
    },
    {
      id: 3,
      name: '购物车',
      itemClass: 'u-icon-tabBar-shopcart',
      linkTo: '/shopcart'
    },
    {
      id: 4,
      name: '个人',
      itemClass: 'u-icon-tabBar-my',
      linkTo: '/my'
    }
  ],
  allNum: '30'
};

const getters = {
  footList: state => state.footList,
  allNum: state => state.allNum
};

export default {
  state,
  getters
};
