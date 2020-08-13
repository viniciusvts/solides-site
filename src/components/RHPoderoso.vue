<template>
  <div class="rh-poderoso container">
    <div class="vertical-pill blue"></div>
    <img class="d-none d-lg-block" :src="data.imagem.url" :alt="data.imagem.alt">
    <div class="col-10 col-lg-70">
      <h2 v-html="data.titulo"></h2>
      <div class="text" v-html="data.texto"></div>
      <div class="buttons">
        <a :href="data.botao_1.url">
          <button class="badge badge-pill purple-back" v-html="data.botao_1.title"></button>
        </a>
        <a :href="data.botao_2.url">
          <button class="badge badge-pill purple-outline" v-html="data.botao_2.title"></button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RHPoderoso",
  props: {
    data: Object
  },
};
</script>

<style lang="scss">
    @import '@/assets/scss/rh-poderoso.scss';
</style>
