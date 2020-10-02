<template>
  <div class="ebooks-mt">
    <div class="container">
      <h2>{{ pesquisaTexto=="" ? data.titulo : "Materiais sobre "+pesquisaTexto }}</h2>
      <div class="card" v-for="material in filterArray()" :key="material.id">
        <h3 class="tipo">{{ material.tipo }}</h3>
        <h4 class="titulo" >{{ material.titulo }}</h4>
        <p v-if="material.tipo=='E-book'" class="descricao">{{ material.descricao }}</p>
        <a :href="material.link">
          <button class="botao" v-html="data.botao" :id="material.id" ></button>
        </a>
      </div>
      <div class="paginacao" v-if="totalPages > 1 && !verMais">
        <button class="btn-pagina"  :class="{ 'active-btn': pageNumber-1==currentPage }" :id="'pag-materiais-'+pageNumber"
        v-for="pageNumber in totalPages" :key="pageNumber" @click="setPage(pageNumber-1)">
          {{ pageNumber }}
        </button>
        <a class="link-mais" @click="emitVerMais()">
          <button class="btn-mais" id="btn-mais" >
            mais
          </button>
        </a>
      </div>
      <div v-if="verMais" class="blog d-none d-lg-block">
        <h2 class="title-blog">{{ data.titulo_blog }}</h2>
        <h3 class="text-blog">{{ data.texto_blog }}</h3>
        <div class="blog-btn">
          <a href="https://blog.solides.com.br/">
              <button 
                class="botao" 
                v-html="data.botao_blog" 
                id="btn-blog" />
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lazyComponent from '@/services/lazyComponent.js'
export default {
  name: "Ebook",
  mixins: [lazyComponent],
  props: {
    data: Object,
    pesquisaTexto: String,
    verMais: Boolean,
  },
  data () {
    return {
      currentPage: 0,
      itemsPerPage: 3,
      resultCount: 0,
      maxPages: 3,
    }
  },
  computed: {
    totalPages: function() {
      return Math.ceil(this.resultCount / this.itemsPerPage) >= this.maxPages ? this.maxPages : Math.ceil(this.resultCount / this.itemsPerPage);
    }
  },
  methods: {
    setPage: function(pageNumber) {
      this.currentPage = pageNumber;
    },
    filterArray: function() {
      this.resultCount = this.data.materiais.length;
      if (this.currentPage >= this.totalPages) {
        this.currentPage = Math.max(0, this.totalPages - 1);
      }
      var index = this.currentPage * this.itemsPerPage;
      return this.verMais ? this.data.materiais : this.data.materiais.slice(index, index + this.itemsPerPage);
    },
    emitVerMais: function(){
      this.$emit('varMaisChange', true);
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/ebook.scss';
</style>
