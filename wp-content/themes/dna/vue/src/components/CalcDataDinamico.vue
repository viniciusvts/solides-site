<template>
  <div class="text bigRed" v-html="data"></div>
</template>
<script>
export default {
  name: "CalcDataDinamico",
  props: {
    data: Object,
  }
};
</script>
<style lang="scss">
  // @import '@/assets/scss/calc-data.scss';
</style>
