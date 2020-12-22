<template>
  <div class="conheca-plataforma">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="d-lg-none col-12">
            <h2 class="text-center" v-html="data.titulo"></h2>
          </div>
          <div class="col-11 col-lg-5 imagem">
            <img :src="data.imagem.url" :alt="data.imagem.alt">
          </div>
          <div class="d-none d-lg-block col-1"></div>
          <div class="col-12 col-lg-6 vertical-center">
            <h2 class="d-none d-lg-block" v-html="data.titulo"></h2>
            <div class="text" v-html="data.texto"></div>
            <a :href="data.botao_1.url">
              <button class="badge badge-pill btn-color" v-html="data.botao_1.title"></button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <img class="frame" src="@/assets/img/svg/frame-form-home.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "Desempenho",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/recrutamento-selecao.scss';
    ul.hifen{
      list-style-type: circle;
    }
</style>
