<template>
  <div>
    <!--simlpes contratar...-->
    <div class="container pt-40 pt-lg-60">
      <h2 v-html="titulo" class="text-center color-primary t7"></h2>
      <div class="mt-5 mt-lg-0 text-center row simple">
        <div v-for="(wf, index) in imgs" :key="index" class="col-12 col-lg-4">
          <img :src="wf.imagem.sizes.medium" :alt="wf.imagem.alt">
          <p class="color-primary mt-3 px-5 px-lg-2 font-weight-bold">{{wf.text}}</p>
        </div>
      </div>
      <div class="centerize-itens mt-0 mt-lg-30">
        <a :href="linkhref">
          <button class="badge badge-pill mx-button blue-back color-white mb-30">{{linkTexto}}</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Simples",
  props: {
    titulo: String,
    imgs: Array,
    linkhref: String,
    linkTexto: String,
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/profiler-view.scss';
</style>
