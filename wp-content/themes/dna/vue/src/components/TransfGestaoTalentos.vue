<template>
  <div class="transf-gestao-talentos">
    <div class="container">
      <div class="vertical-pill blue"></div>
      <div class="row">
        <div class="d-none d-lg-block col-3"></div>
        <div class="col-11 mx-auto col-lg-9 mx-0">
          <h2 v-html="data.titulo_1"></h2>
          <div class="text" v-html="data.texto_1"></div>
          <h2 v-html="data.titulo_2"></h2>
          <div class="text" v-html="data.texto_2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransfGestaoTalentos",
  props: {
    data: Object
  },
};
</script>

<style lang="scss">
    @import '@/assets/scss/transf-gestao-talentos.scss';
</style>
