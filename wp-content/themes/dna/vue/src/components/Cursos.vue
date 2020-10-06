<template>
  <div class="cursos-mt">
    <div class="container">
      <h2>{{ data.titulo }}</h2>
      <div class="card" v-for="(curso, index) in filterArray()" :key="index">
        <a :href="curso.link" >
          <img class="img-curso" :src="curso.imagem.url" :alt="curso.imagem.alt">
          <h3 class="title-curso" > {{ curso.titulo }} </h3>
        </a>
      </div>
      <div class="paginacao" v-if="totalPages > 1">
        <button class="btn-pagina d-none d-md-inline"  :class="{ 'active-btn': pageNumber-1==currentPage }" :id="'pag-materiais-'+pageNumber"
        v-for="pageNumber in totalPages" :key="pageNumber" @click="setPage(pageNumber-1)">
          {{ pageNumber }}
        </button>
        <a class="link-mais" href="https://universidade.solides.com.br/">
          <button class="btn-mais d-none d-md-inline" id="btn-mais" >
            mais
          </button>
          <button class="btn-mais d-md-none" id="btn-mais" >
            Ver Mais
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import lazyComponent from '@/services/lazyComponent.js'
export default {
  name: "Videos",
  mixins: [lazyComponent],
  props: {
    data: Object,
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
      this.resultCount = this.data.cursos.length;
      if (this.currentPage >= this.totalPages) {
        this.currentPage = Math.max(0, this.totalPages - 1);
      }
      var index = this.currentPage * this.itemsPerPage;
      return this.data.cursos.slice(index, index + this.itemsPerPage);
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/cursos.scss';
</style>
