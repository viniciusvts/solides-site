<template>
  <div class="text">
    <p>Tudo isso resulta num total de 22 horas para cada vaga. 
      no seu caso são cerca de <span>176</span> horas gastas.
      Considerando que a hora nessa etapa custa R$25,00, são R$<span>4.400,00</span>
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
