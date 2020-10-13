<template>
  <div class="text">
    <p>Para os <b><span>{{data.vagasTotal}}</span> novos contratados</b>, o custo total com treinamento,
    considerando a perda de produtividade dos outros colaboradores, será de:"
    </p>
  </div>
</template>
<script>
export default {
  name: "CalcDataTreinaOrienta",
  props: {
    data: Object,
  }
};
</script>
<style lang="scss">
  // @import '@/assets/scss/calc-data.scss';
</style>
