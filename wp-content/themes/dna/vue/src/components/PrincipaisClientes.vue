<template>
  <div class="principais-clientes container">
    <div class="vertical-pill green"></div>
    <h2 v-html="data.titulo"></h2>
    <div class="clientes row col-12 col-lg-9 no-gutters text-center">
      <template v-for="img in data.imagem">
        <div class="space" :key="img.key"></div>
        <div class="col variable-col" :key="img.key">
          <img v-lazy="img.url" :alt="img.alt" lazy="loading">
        </div>
      </template>
    </div>
    <div class="vertical-pill yellow"></div>
  </div>
</template>

<script>
export default {
  name: "PrincipaisClientes",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/principais-clientes.scss';
</style>
