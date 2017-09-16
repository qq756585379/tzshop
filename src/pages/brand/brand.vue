<template>
  <div class="brand">
    <nav class="nav-head border-1px">
      <i></i>
      <router-link to="/search"></router-link>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "../../common/scss/mixins";
  .brand{
    position: relative;
    background-color: #ededed;
    .nav-head {
      height: 50px;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      position: fixed;
      background-color: white;
      @include border-1px(rgba(7, 17, 27, 0.1));
      i {
        display: inline-block;
        width: 78px;
        height: 20px;
        background-size: 78px 20px;
        @include bg-image('./images/tuzi_word');
        margin: 15px auto;
      }
      a {
        display: inline-block;
        width: 21px;
        height: 21px;
        background-size: 21px 21px;
        @include bg-image('./images/search');
        margin: 15px;
        position: absolute;
        right: 10px;
      }
    }
  }
</style>
