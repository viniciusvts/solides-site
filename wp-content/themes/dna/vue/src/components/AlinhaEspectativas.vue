<template>
  <div class="avaliacao-desempenho">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 text-center text-lg-right vertical-center">
          <h2 v-html="data.titulo"></h2>
          <img :src="data.imagem.url" :alt="data.imagem.alt" class="img-mobile d-lg-none">
          <div class="text" v-html="data.texto"></div>
          <a :href="data.botao_1.url">
            <button class="badge badge-pill btn-color" v-html="data.botao_1.title"></button>
          </a>
        </div>
        <div class="col-1 d-none d-lg-block"></div>
        <div class="col-12 col-lg-5">
          <img :src="data.imagem.url" :alt="data.imagem.alt" class="w-100 d-none d-lg-block">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlinhaEspectativas",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/avaliacao-desempenho.scss';
</style>
