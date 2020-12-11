<template>
  <div class="pesquisa-clima">
    <img class="frame tr-rotz-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="d-lg-none col-12">
            <h2 class="text-center" v-html="data.titulo"></h2>
          </div>
          <div class="col-11 col-lg-5 imagem">
            <img v-lazy="data.imagem.url" :alt="data.imagem.alt" lazy="loading">
          </div>
          <div class="d-none d-lg-block col-1"></div>
          <div class="col-12 col-lg-6 vertical-center">
            <h2 class="d-none d-lg-block" v-html="data.titulo"></h2>
            <div class="text" v-html="data.texto"></div>
            <a :href="data.botao.url">
              <button class="badge badge-pill purple" v-html="data.botao.title"></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PesquisaClima",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/pesquisa-clima.scss';
</style>
