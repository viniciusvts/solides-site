<template>
  <div class="artigos-blog">
    <div class="container">
      <h1 v-if="!verMais" class="titulo-blog">{{ data.titulo}}</h1>
      <a class="card" v-for="(artigo,index) in filterArray()" :key="index" :href="artigo.link" target="_blank">
        <div>
          <img class="img-artigo" :src="artigo.imagem.url" :alt="artigo.imagem.alt" >
          <div class="titulo-artigo" v-html="artigo.titulo"></div>
        </div>
      </a>
      <div class="div-mais" v-if="!verMais">
        <a class="link-mais" @click="emitVerMais()">
          <button class="btn-mais" id="btn-mais" >
            ver mais
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import lazyComponent from '@/services/lazyComponent.js'
export default {
  name: "Artigos Blog",
  mixins: [lazyComponent],
  props: {
    data: Object,
    verMais: Boolean,
  },
  data () {
    return {
      itemsPerPage: 6,
    }
  },
  methods: {
    filterArray: function() {
      return this.verMais ? this.data.artigos : this.data.artigos.slice(0,this.itemsPerPage);
    },
    emitVerMais: function(){
      this.$emit('varMaisChange', 'blog');
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/artigos-blog.scss';
</style>
