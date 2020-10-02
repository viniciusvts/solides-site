<template>
  <div class="text">
    <p>Como serão <span>{{data.vagasTotal}}</span> novos colaboradores, o custo total é de:
    </p>
  </div>
</template>
<script>
export default {
  name: "CalcDataPerdaProdu",
  props: {
    data: Object,
  }
};
</script>
<style lang="scss">
  // @import '@/assets/scss/calc-data.scss';
</style>
