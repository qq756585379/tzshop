const CHANGE_ACTIVE = 'CHANGE_ACTIVE';

const state = {
  footList: [
    {
      id: 0,
      isActive: true,
      name: '首页',
      itemClass: 'u-icon-tabBar-index',
      activeClass: 'u-icon-tabBar-index-active',
      linkTo: '/'
    },
    {
      id: 1,
      isActive: false,
      name: '专题',
      itemClass: 'u-icon-tabBar-index',
      activeClass: 'u-icon-tabBar-index-active',
      linkTo: '/'
    },
    {id: 2, isActive: false, name: '分类', activeClass: 'u-icon-tabBar-cate u-icon-tabBar-cate-active', linkTo: '/type'},
    {
      id: 3,
      isActive: false,
      name: '购物车',
      itemClass: 'u-icon-tabBar-index',
      activeClass: 'u-icon-tabBar-index-active',
      linkTo: '/'
    },
    {
      id: 4,
      isActive: false,
      name: '个人',
      itemClass: 'u-icon-tabBar-index',
      activeClass: 'u-icon-tabBar-index-active',
      linkTo: '/'
    }
  ],
  allNum: ['0', '0']
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
