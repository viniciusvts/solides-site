<template>
  <div class="text">
    <p>Assim, a perda de produtividade de cada novo colaborador fica em <span>{{data.perdaProdRampagem}}</span> até o término do período de experiência.
    </p>
  </div>
</template>
<script>
export default {
  name: "CalcDataRampagemR",
  props: {
    data: Object,
  }
};
</script>
<style lang="scss">
  // @import '@/assets/scss/calc-data.scss';
</style>
