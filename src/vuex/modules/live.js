const state = {
  LiveList: [
    {
      cell1Data: {
        id: 0,
        des: '主播被你玩坏了',
        imgSrc: require('../../pages/home/images/video@2x.png'),
        user_icon: require('../../pages/home/images/head@2x.png'),
        linkTo: '/',
        headData: {
          title: '直播带你玩狗屎',
          subtitle: '直播带你玩',
          location: '上海万达城市广场',
          date: '2017-9-6',
          playnum: 123
        }
      }
    },
    {
      cell1Data: {
        id: 1,
        des: '主播被你玩死了',
        imgSrc: require('../../pages/home/images/video@2x.png'),
        user_icon: require('../../pages/home/images/head@2x.png'),
        linkTo: '/',
        headData: {
          title: '直播熊抱2017',
          subtitle: '直播带你玩',
          location: '上海东方明珠',
          date: '2017-9-6',
          playnum: 456
        }
      }
    },
    {
      cell1Data: {
        id: 2,
        des: '主播被你玩废了',
        imgSrc: require('../../pages/home/images/video@2x.png'),
        user_icon: require('../../pages/home/images/head@2x.png'),
        linkTo: '/',
        headData: {
          title: '直播带你玩',
          subtitle: '直播带你玩',
          location: '上海万达城市广场',
          date: '2017-9-6',
          playnum: 789
        }
      }
    },
    {
      cell1Data: {
        id: 3,
        des: '主播被你玩翘翘了',
        imgSrc: require('../../pages/home/images/video@2x.png'),
        user_icon: require('../../pages/home/images/head@2x.png'),
        linkTo: '/',
        headData: {
          title: '直播带你玩',
          subtitle: '直播带你玩',
          location: '上海万达城市广场',
          date: '2017-9-6',
          playnum: 123
        }
      }
    },
    {
      cell1Data: {
        id: 4,
        des: '主播被你玩烂了',
        imgSrc: require('../../pages/home/images/video@2x.png'),
        user_icon: require('../../pages/home/images/head@2x.png'),
        linkTo: '/',
        headData: {
          title: '直播带你玩',
          subtitle: '直播带你玩',
          location: '上海万达城市广场',
          date: '2017-9-6',
          playnum: 123
        }
      }
    }
  ]
};

const getters = {
  LiveList: state => state.LiveList
};

export default {
  state,
  getters
};
