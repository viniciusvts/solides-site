<template>
  <div class="text">
    <p>Agora, vamos considerar o tempo que um novo colaborador leva para começar a 
      apresentar os resultados esperados na sua empresa é de 3 meses (período de experiência).</p>
    <p>Como são <span>{{data.numContrat}}</span> novas contratações anuais e a produtividade por 
      cadeira ocupada é de {{data.prodMensal}}, é razoável considerar 
      que cada novo colaborador terá 50% da sua produtividade máxima durante esse período.</p>
  </div>
</template>
<script>
export default {
  name: "CalcDataRampagemL",
  props: {
    data: Object,
  }
};
</script>
<style lang="scss">
  // @import '@/assets/scss/calc-data.scss';
</style>
