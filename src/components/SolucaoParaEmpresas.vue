<template>
  <div class="solucao-para-empresas">
    <div class="container">
      <div class="vertical-pill yellow"></div>
      <div class="row">
        <div class="col-2 col-lg-4"></div>
        <div class="col-9 col-lg-7 p-sm-0">
          <h2 v-html="data.titulo"></h2>
          <div class="text" v-html="data.texto"></div>
          <div class="detalhe col-10 col-lg-7" v-html="data.detalhe"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolucaoParaEmpresas",
  props: {
    data: Object
  },
};
</script>

<style lang="scss">
    @import '@/assets/scss/solucao-para-empresas.scss';
</style>
