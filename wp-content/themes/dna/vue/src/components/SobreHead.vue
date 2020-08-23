<template>
  <div class="sobre-head container">
    <div class="vertical-pill green"></div>
    <img class="d-lg-block" :src="data.imagem.url" :alt="data.imagem.alt">
    <div class="row">
      <div class="col-8 col-lg-70">
        <h1 v-html="title"></h1>
        <div class="text" v-html="data.text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SobreHead",
  props: {
    title: String,
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/sobre-head.scss';
</style>
