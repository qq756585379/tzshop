<template>
  <div class="tabBar">
    <router-link v-for="item in footList" :key="item.id" :to="item.linkTo" class="item" :class="{active:item.isActive}">
      <div class="tab-item">
        <i><span></span></i>
        <span></span>
      </div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  export default {
    methods: {
      activethis (id) {
        this.$store.dispatch('changeActive', id);
      }
    },
    computed: mapGetters(['footList', 'allNum'])
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
