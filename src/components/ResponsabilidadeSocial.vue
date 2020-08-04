<template>
  <div class="responsabilidade-social">
    <div class="container">
      <div class="vertical-pill red"></div>
      <div class="row">
        <div class="col-11 mx-auto col-lg-8 ml-lg-0">
          <h2 v-html="data.titulo"></h2>
          <div class="text" v-html="data.texto"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsabilidadeSocial",
  props: {
    data: Object
  },
};
</script>

<style lang="scss">
    @import '@/assets/scss/responsabilidade-social.scss';
</style>
