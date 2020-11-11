<template>
  <div class="text">
    <p>Para os <b><span>{{data.numColab}}</span> colaboradores</b> da sua empresa,
    sua perda anual é de:
    </p>
  </div>
</template>
<script>
export default {
  name: "CalcDataAbsent",
  props: {
    data: Object,
  }
};
</script>
<style lang="scss">
  // @import '@/assets/scss/calc-data.scss';
</style>
