<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import footer from '@/components/footer/footer';
  export default {
    components: {
      'v-footer': footer
    }
  };
</script>
