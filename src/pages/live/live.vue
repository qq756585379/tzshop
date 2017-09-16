<template>
  <div class="live">
    <nav class="nav-head border-1px">直播列表</nav>
    <ul>
      <li v-for="item in LiveList">
        <cell1 :cell1Data="item.cell1Data" :index="1"></cell1>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  import cell1 from '@/components/Cell/cell1';
  export default {
    computed: mapGetters(['LiveList']),
    components: {
      cell1
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "../../common/scss/mixins";

  .live {
    position: relative;
    background-color: #ededed;
    margin-bottom: 49px;
    .nav-head {
      height: 50px;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: 20px;
      line-height: 50px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      position: fixed;
      z-index: 100;
      background-color: white;
    }
    ul {
      margin-top: 50px;
    }
  }
</style>
