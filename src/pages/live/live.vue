<template>
  <div>
    <img src="" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  export default {
    created() {
      axios.get('http://saakie.s1.natapp.cc/img_code').then(function (response) {
        console.log(response);
      }).catch(function (err) {
        console.log(err);
      });
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>

</style>
