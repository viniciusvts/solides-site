<template>
  <div class="materiais-rh container">
    <div class="notebook">
      <div class="capa"></div>
      <div v-for="n in 14" :key="n">
        <div class="furo"></div>
      </div>
    </div>
    <div class="col-10 col-lg-70 pl-lg-0">
      <h1 v-html="data.titulo"></h1>
      <div class="text" v-html="data.texto"></div>
      <div class="search">
        <input class="search-box" type="text" placeholder="Pesquisar"/>
      </div>
    </div>
  </div>
  <!--
  <div class="rh-poderoso container">
    <div class="vertical-pill blue"></div>
    <img class="d-none d-lg-block" :src="data.imagem.url" :alt="data.imagem.alt" v-if="isDesktop">
    <div class="col-10 col-lg-70 pl-lg-0">
      <h1 v-html="data.titulo"></h1>
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
  -->
</template>

<script>
export default {
  name: "MateriaisRH",
  props: {
    data: Object,
  },
  computed: {
    isDesktop: function () {
      return screen.width > 767
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/materiais-rh.scss';
</style>
