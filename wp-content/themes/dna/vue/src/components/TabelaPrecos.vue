<template>
  <div>
    <!--tabela de preços-->
    <div class="container pb-60 text-center">
      <div class="container">
        <div class="row">
          <h2
          v-html="titulo"
          class="color-primary col-12 col-lg-6 text-lg-left prices"></h2>
          <p class="mt-4 mb-4 col-12 col-lg-6 text-lg-right credit-price color-cyan bold" v-html="txtDestaq">
          </p>
        </div>
        <div class="row mb-5">
          <div class="col-12 col-lg-6 color-primary text-lg-left">
            <h2 v-html="txtDesconto" class="discount" ></h2>
            <a :href="linkhref" target="_blank" >
              <button class="badge badge-pill mx-button blue-back color-white simulate-btn">{{linkTexto}}</button>
            </a>
          </div>
          <div class="d-none d-lg-block col-lg-6 align-lg-vertical">
            <img
            class="w-100"
            :src="imgSrc"
            :alt="imgAlt"
            v-if="isPosition">
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-7 text-lg-left color-primary price-details">
            <p class="txt-inclui"><span class="font-weight-bold">Inclui:</span></p>
            <p>Relatório DISC;<br>Plataforma web para gerenciar avaliações.</p>
          </div>
          <div class="col-12 col-lg-5 text-center report-tmp">
            <p v-html="txtRelatorio" class="color-primary font-weight-bold" />
            <a :href="relSimplesLink" target="_blank" >
              <button class="badge badge-pill blue-back color-white report-btn">{{relSimplesTxt}}</button>
            </a>
            <a :href="relCompletoLink" target="_blank">
              <button class="badge badge-pill blue-back color-white report-btn">{{relCompletoTxt}}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lazyComponent from '@/services/lazyComponent.js'
export default {
  name: "TabelaPrecos",
  mixins: [lazyComponent],
  props: {
    titulo: String,
    txtDestaq: String,
    txtDesconto: String,
    txtRelatorio: String,
    relSimplesTxt: String,
    relSimplesLink: String,
    relCompletoTxt: String,
    relCompletoLink: String,
    imgSrc: String,
    imgAlt: String,
    linkhref: String,
    linkTexto: String,
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/profiler-view.scss';
</style>
