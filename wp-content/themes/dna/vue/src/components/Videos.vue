<template>
  <div class="videos-mt">
    <div class="container">
      <h2>{{ pesquisaTexto=="" ? data.titulo : data.titulo+" sobre "+ pesquisaTexto}}</h2>
      <div class="card" v-for="(em, index) in filterArray()" :key="index" v-html="em.embed"/>
      <div class="paginacao" v-if="totalPages > 1">
        <button class="btn-pagina d-none d-md-inline"  :class="{ 'active-btn': pageNumber-1==currentPage }" :id="'pag-materiais-'+pageNumber"
        v-for="pageNumber in totalPages" :key="pageNumber" @click="setPage(pageNumber-1)">
          {{ pageNumber }}
        </button>
        <a class="link-mais" href="https://www.youtube.com/channel/UCqG25smPnLbI-q2I1V760DQ">
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
    pesquisaTexto: String,
  },
  data () {
    return {
      currentPage: 0,
      itemsPerPage: 6,
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
      this.resultCount = this.data.embeds.length;
      if (this.currentPage >= this.totalPages) {
        this.currentPage = Math.max(0, this.totalPages - 1);
      }
      var index = this.currentPage * this.itemsPerPage;
      return this.data.embeds.slice(index, index + this.itemsPerPage);
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/videos.scss';
</style>
