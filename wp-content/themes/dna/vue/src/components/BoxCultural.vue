<template>
  <div class="box-cultural">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 text-center text-lg-right vertical-center">
          <h2 class="novo" v-html="data.titulo"></h2>
          <img v-lazy="data.imagem.url" :alt="data.imagem.alt" class="img-mobile d-lg-none">
          <div class="text" v-html="data.texto"></div>
          <a :href="data.botao.url">
            <button class="badge badge-pill purple" v-html="data.botao.title"></button>
          </a>
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
  name: "BoxCultural",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/box-cultural.scss';
</style>
