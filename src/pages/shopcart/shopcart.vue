<template>
  <div class="shopcart">
    <nav class="nav-head border-1px">购物车</nav>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "../../common/scss/mixins";

  .shopcart {
    position: relative;
    background-color: #ededed;
    .nav-head {
      position: fixed;
      height: 50px;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      background-color: white;
      font-size: 20px;
      line-height: 50px;
      @include border-1px(rgba(7, 17, 27, 0.1));
    }
  }
</style>
