<template>
  <div class="text">
    <p>Custos com faltas e absenteísmo:</p>
    <p>Considerando uma média salarial de R$ 2.000,00 por colaborador e um 
      tempo de atraso de 5 minutos por dia, de cada colaborador:</p>
    <ul>
      <li>Perda diária com falta e absenteísmo: {{data.custoPorDia}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CalcDataAbsentL",
  props: {
    data: Object,
  }
};
</script>
<style lang="scss">
  // @import '@/assets/scss/calc-data.scss';
</style>
