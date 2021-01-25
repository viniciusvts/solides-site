<template>
  <div class="profiler-B">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 text-center text-lg-right vertical-center">
          <h2 v-html="data.titulo"></h2>
          <img :src="data.imagem.url" :alt="data.imagem.alt" class="img-mobile d-lg-none">
          <div class="text" v-html="data.texto"></div>
        </div>
        <div class="col-1 d-none d-lg-block"></div>
        <div class="col-12 col-lg-5">
          <img v-lazy="data.imagem.url" :alt="data.imagem.alt" class="w-100 d-none d-lg-block" lazy="loading">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilerDemo",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/profiler_B.scss';
</style>
