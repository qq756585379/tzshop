const state = {
  bannerList: [
    {
      id: 0,
      linkTo: '/home',
      imgSrc: require('../../pages/home/images/1@3x.png')
    },
    {
      id: 1,
      linkTo: '/brand',
      imgSrc: require('../../pages/home/images/2@3x.png')
    },
    {
      id: 2,
      linkTo: '/live',
      imgSrc: require('../../pages/home/images/3@3x.png')
    },
    {
      id: 3,
      linkTo: '/shopcart',
      imgSrc: require('../../pages/home/images/4@3x.png')
    },
    {
      id: 4,
      linkTo: '/my',
      imgSrc: require('../../pages/home/images/5@3x.png')
    }
  ],
  zhuboList: [
    {
      name: '嫣儿',
      id: 0,
      linkTo: '/',
      imgSrc: require('../../pages/home/images/i01@3x.png')
    },
    {
      name: '三七',
      id: 1,
      linkTo: '/',
      imgSrc: require('../../pages/home/images/i02@3x.png')
    },
    {
      name: '菓九九',
      id: 2,
      linkTo: '/',
      imgSrc: require('../../pages/home/images/i03@3x.png')
    },
    {
      name: '黛鑫鑫',
      id: 3,
      linkTo: '/',
      imgSrc: require('../../pages/home/images/i04@3x.png')
    }
  ],
  jinxuanList: [
    {
      id: 0,
      des: 'ochirly欧时力 纯色羊毛呢大衣长外套',
      imgSrc: require('../../common/images/348_232_1.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z1.jpg')
    },
    {
      id: 1,
      des: 'Adidas阿迪达斯羽绒服运动外套 女式 2016冬季新款',
      imgSrc: require('../../common/images/348_232_2.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z2.jpg')
    },
    {
      id: 2,
      des: 'Adidas阿迪达斯 2016冬季男子炽风系列运动跑步鞋',
      imgSrc: require('../../common/images/348_232_3.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z3.jpg')
    },
    {
      id: 3,
      des: 'Adidas阿迪达斯 男式 简约纯色运动保暖羽绒服',
      imgSrc: require('../../common/images/348_232_4.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z4.jpg')
    },
    {
      id: 4,
      des: 'Basic house/百家好韩版时尚保暖收腰羽绒服派克大衣外套',
      imgSrc: require('../../common/images/348_232_5.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z5.jpg')
    },
    {
      id: 5,
      des: 'Basic house/百家好韩版时尚保暖收腰羽绒服派克大衣外套',
      imgSrc: require('../../common/images/348_232_6.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z6.jpg')
    },
    {
      id: 6,
      des: 'Basic house/百家好韩版时尚保暖收腰羽绒服派克大衣外套',
      imgSrc: require('../../common/images/348_232_7.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z7.jpg')
    },
    {
      id: 7,
      des: 'Basic house/百家好韩版时尚保暖收腰羽绒服派克大衣外套',
      imgSrc: require('../../common/images/348_232_8.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z8.jpg')
    },
    {
      id: 8,
      des: 'Basic house/百家好韩版时尚保暖收腰羽绒服派克大衣外套',
      imgSrc: require('../../common/images/348_232_9.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z9.jpg')
    },
    {
      id: 9,
      des: 'Basic house/百家好韩版时尚保暖收腰羽绒服派克大衣外套',
      imgSrc: require('../../common/images/348_232_10.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z10.jpg')
    },
    {
      id: 10,
      des: 'Basic house/百家好韩版时尚保暖收腰羽绒服派克大衣外套',
      imgSrc: require('../../common/images/348_232_11.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z11.jpg')
    },
    {
      id: 11,
      des: 'Basic house/百家好韩版时尚保暖收腰羽绒服派克大衣外套',
      imgSrc: require('../../common/images/348_232_12.png'),
      linkTo: '/showpic',
      category: '大衣',
      name: '沙小V',
      smalllicon: require('../../common/images/z12.jpg')
    }
  ]
};

const getters = {
  bannerList: state => state.bannerList,
  zhuboList: state => state.zhuboList,
  jinxuanList: state => state.jinxuanList
};

export default {
  state,
  getters
};
