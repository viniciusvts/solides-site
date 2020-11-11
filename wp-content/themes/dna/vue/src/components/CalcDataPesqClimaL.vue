<template>
  <div class="text">
    <p>Custos com uma Pesquisa de Clima não automatizada:</p>
    <ul>
      <li>Tempo para validar e criar quais perguntas serão feitas: 30h</li>
      <li>Tempo para cadastro de dados de cada pesquisa: 12 minutos por colaborador</li>
      <li>Total de respostas a serem tabuladas para um excel {{data.ttRespTabExcel}}</li>
      <li>Tempo em horas para tabular a pesquisa de clima: {{data.tempHorasParaTab}}</li>
      <li>Tempo para análise dos dados recolhidos e criação de gráficos e relatórios: 35h</li>
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
