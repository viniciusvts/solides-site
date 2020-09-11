<template>
  <div>
    <!-- melhor conteúdo sobre o profiler -->
    <div class="container pt-60 pb-2">
      <div class="row ml-0 bestcontent-profiler">
        <div class="to-left-30">
          <div class="vertical-pill green"></div>
        </div>
        <div class="text-left to-right-70 mt-30 mt-xs-0 mt-lg-5">
          <h2 v-html="titulo" class="color-almostBlack bestContent"></h2>
        </div>
        <div class="blog-cards">
          <div class="container">
            <div class="cards row" v-if="isPosition">
              <div class="col-12 col-lg-4">
                <a :href="link1">
                  <div class="card">
                    <img :src="img1Src"
                    :alt="img1Alt"
                    class="img-header">
                    <h3 v-html="sub1" class="title"></h3>
                    <p v-html="texto1" class="text"></p>
                  </div>
                </a>
              </div>
              <div class="col-12 col-lg-4">
                <a :href="link2">
                  <div class="card">
                    <img :src="img2Src"
                    :alt="img2Alt"
                    class="img-header">
                    <h3 v-html="sub2" class="title"></h3>
                    <p v-html="texto2" class="text"></p>
                  </div>
                </a>
              </div>
              <div class="col-12 col-lg-4">
                <a :href="link3">
                  <div class="card">
                    <img :src="img3Src"
                    :alt="img3Alt"
                    class="img-header">
                    <h3 v-html="sub3" class="title"></h3>
                    <p v-html="texto3" class="text"></p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lazyComponent from '@/services/lazyComponent.js'
export default {
  name: "MelhoresConteudos",
  mixins: [lazyComponent],
  props: {
    titulo: String,
    link1: String,
    img1Src: String,
    img1Alt: String,
    sub1: String,
    texto1: String,
    link2: String,
    img2Src: String,
    img2Alt: String,
    sub2: String,
    texto2: String,
    link3: String,
    img3Src: String,
    img3Alt: String,
    sub3: String,
    texto3: String,
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/profiler-view.scss';
</style>
