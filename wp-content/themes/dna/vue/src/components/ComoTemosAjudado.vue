<template>
  <div>
  <!--como o profiler...-->
    <div class="container pt-60 pt-lg-0">
      <div class="row ml-lg-0">
        <div class="to-left-30">
          <div class="vertical-pill cyan"></div>
          <img :src="imgSrc" :alt="imgAlt" class="mt-img-profiler">
        </div>
        <div class="text-left to-right-70 mt-30 text-profiler">
          <h2 v-html="titulo1" class="color-almostBlack text-right text-lg-left trtr-profiler t4"></h2>
          <!--so aparece em desktop -->
          <div class="d-none d-lg-block">
            <p v-html="texto1" class="mt-lg-4 mb-lg-4 color-almostBlack p-lg-28"></p>
            <ul class="detalhes pl-0 ul1">
              <li class="mb-lg-4 p-lg-28">
                <span v-html="analistas" class="color-cyan font-weight-bold"></span> analistas comportamentais formados
              </li>
              <li class="mb-lg-4 p-lg-28">
                <span v-html="relatorios" class="color-cyan font-weight-bold"></span> de relatórios
              </li>
              <li class="mb-lg-4 p-lg-28">
                <span v-html="parceiros" class="color-cyan font-weight-bold"></span> parceiros
              </li>
            </ul>
            <div class="container mt-5">
              <h2 v-html="titulo2" class="mb-lg-4 color-almostBlack"></h2>
              <div v-html="texto2" class="escada color-almostBlack"></div>
              <div class="text-right">
                <a :href="btnLink">
                  <button 
                  class="badge badge-pill mx-button blue-back color-white">
                  {{btnTexto}}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--como o profiler... detalhes-->
    <div class="container d-lg-none">
        <p v-html="texto1" class="pt-4 pl-4 w-80"></p>
        <ul class="detalhes pl-4 ul1">
          <li>
            <span v-html="analistas" class="color-cyan bold font-weight-bold"></span> analistas comportamentais formados
          </li>
          <li>
            <span v-html="relatorios" class="color-cyan bold font-weight-bold"></span> de relatórios
          </li>
          <li>
            <span v-html="parceiros" class="color-cyan bold font-weight-bold"></span> parceiros
          </li>
        </ul>
      <div class="container mt-3 mt-lg-5 px-3">
        <h2 v-html="titulo2" class="simples mx-0"></h2>
        <div v-html="texto2" class="proExclusivo"></div>
        <a :href="btnLink">
          <button class="badge badge-pill blue-back color-white exclusivo">{{btnTexto}}</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComoTemosAjudado",
  props: {
    imgSrc: String,
    imgAlt: String,
    titulo1: String,
    texto1: String,
    analistas: String,
    relatorios: String,
    parceiros: String,
    titulo2: String,
    texto2: String,
    btnLink: String,
    btnTexto: String,
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/profiler-view.scss';
</style>
