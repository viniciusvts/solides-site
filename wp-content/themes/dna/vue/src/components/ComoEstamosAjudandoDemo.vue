<template>
  <div class="como-estamos-ajudando-B">
    <div class="container">
      <div class="vertical-pill yellow"></div>
      <div class="vertical-pill green"></div>
      <div class="row">
        <div class="col-1 col-lg-4"></div>
        <div class="col-8 col-lg-8">
          <h2 v-html="data.titulo"></h2>
          <div class="text" v-html="data.texto"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComoEstamosAjudandoDemo",
  props: {
    data: Object
  },
};
</script>

<style lang="scss">
    @import '@/assets/scss/como-estamos-ajudando_B.scss';
</style>
