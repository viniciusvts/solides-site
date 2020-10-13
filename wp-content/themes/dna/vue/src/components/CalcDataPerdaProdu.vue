<template>
  <div class="text">
    <p>Como serão <b><span>{{data.vagasTotal}}</span> novos colaboradores</b>,
    seu gasto anual com rescisão, em média, é de:
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
