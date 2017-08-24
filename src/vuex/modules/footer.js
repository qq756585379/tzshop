const CHANGE_ACTIVE = 'CHANGE_ACTIVE';

const state = {
  footList: [
    {
      id: 0,
      isActive: true,
      name: '首页',
      itemClass: 'u-icon-tabBar-index',
      activeClass: 'u-icon-tabBar-index-active',
      linkTo: '/home'
    },
    {
      id: 1,
      isActive: false,
      name: '品牌',
      itemClass: 'u-icon-tabBar-brand',
      activeClass: 'u-icon-tabBar-index-active',
      linkTo: '/brand'
    },
    {
      id: 2,
      isActive: false,
      name: '直播',
      itemClass: 'u-icon-tabBar-live',
      activeClass: 'u-icon-tabBar-index-active',
      linkTo: '/live'
    },
    {
      id: 3,
      isActive: false,
      name: '购物车',
      itemClass: 'u-icon-tabBar-shopcart',
      activeClass: 'u-icon-tabBar-index-active',
      linkTo: '/shopcart'
    },
    {
      id: 4,
      isActive: false,
      name: '个人',
      itemClass: 'u-icon-tabBar-my',
      activeClass: 'u-icon-tabBar-index-active',
      linkTo: '/my'
    }
  ],
  allNum: '1'
};

const actions = {
  changeActive ({commit}, id) {
    commit(CHANGE_ACTIVE, id);
  }
};

const getters = {
  footList: state => state.footList,
  allNum: state => state.allNum
};

const mutations = {
  [CHANGE_ACTIVE] (state, id) {
    state.footList.forEach(list => {
      list.isActive = false;
    });
    state.footList[id].isActive = true;
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
