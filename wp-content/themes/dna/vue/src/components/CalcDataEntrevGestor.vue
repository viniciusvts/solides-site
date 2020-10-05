<template>
  <div class="text">
    <p><b>Ou <span>{{data.custoTotal}}</span> para as <span>{{data.vagasTotal}}</span> vagas que você precisará preencher no ano!
    </b></p>
  </div>
</template>
<script>
export default {
  name: "CalcDataEntrevGestor",
  props: {
    data: Object,
  }
};
</script>
<style lang="scss">
  // @import '@/assets/scss/calc-data.scss';
</style>
