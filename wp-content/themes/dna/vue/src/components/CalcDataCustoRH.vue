<template>
  <div class="text">
    <p>Tudo isso resulta num total de {{data.hrsPorVaga}} para cada vaga. 
      No seu caso são cerca de <span>{{data.hrsRHTotal}}</span>.
      Considerando que a hora nessa etapa custa R${{data.custoPorHora}}, são <span>{{data.custoTotal}}</span>
      de despesa por ano.
    </p>
  </div>
</template>
<script>
export default {
  name: "CalcDataCustoRH",
  props: {
    data: Object,
  }
};
</script>
<style lang="scss">
  // @import '@/assets/scss/calc-data.scss';
</style>
