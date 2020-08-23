<template>
  <div class="missao-visao">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 d-none d-lg-block"></div>
          <div class="col-9 mx-auto col-lg-3 missao">
            <h2 v-html="data.missao.titulo"></h2>
            <div class="text"><p v-html="data.missao.texto"></p></div>
          </div>
          <div class="col-lg-2 d-none d-lg-block"></div>
          <div class="col-9 mx-auto col-lg-3 visao">
            <h2 v-html="data.visao.titulo"></h2>
            <div class="text"><p v-html="data.visao.texto"></p></div>
          </div>
          <div class="col-lg-2 d-none d-lg-block"></div>
          <div class="col-9 col-lg-10 mx-auto mx-lg-0 protagonista">
            <h2 v-html="data.valor.titulo"></h2>
            <div class="text"><p v-html="data.valor.texto"></p></div>
          </div>
        </div>
      </div>
    </div>
    <img class="frame tr-roty-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "MissaoVisao",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/missao-visao.scss';
</style>
