<template>
  <div class="text bigRed" v-html="dataTexto"></div>
</template>
<script>
export default {
  name: "CalcDataDinamico",
  props: {
    dataTexto: Object,
    data: Object,
  }
};
</script>
<style lang="scss">
  // @import '@/assets/scss/calc-data.scss';
</style>
