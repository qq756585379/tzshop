<template>
  <div>

  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header';
  import axios from 'axios';
  const ERR_OK = 0;
  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      axios.get('static/data.json').then((res) => {
        this.seller = res.data.seller;
      });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
