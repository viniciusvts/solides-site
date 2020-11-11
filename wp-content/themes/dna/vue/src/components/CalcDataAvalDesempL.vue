<template>
  <div class="text">
    <p>Custos com uma Avaliação de Desempenho não automatizada:</p>
    <ul>
      <li>Tempo para validar e criar quais critérios e perguntas da Avaliação: 30h</li>
      <li>Tempo para cadastro de dados de cada avaliação: 3 minutos por colaborador</li>
      <li>Total de respostas a serem tabuladas para um excel (Avaliação 360º com 5 critérios) = {{data.ttRespTabExcel}}</li>
      <li>Tempo em horas para tabular a Avaliação de Desempenho: {{data.tempHorasParaTab}}</li>
      <li>Tempo para análise dos dados recolhidos e criação de gráficos e relatórios: 44h</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CalcDataPesqClimaL",
  props: {
    data: Object,
  }
};
</script>
<style lang="scss">
  // @import '@/assets/scss/calc-data.scss';
</style>
