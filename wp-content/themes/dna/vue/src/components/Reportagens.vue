<template>
  <div class="reportagens">
    <div class="container">
      <a class="card" v-for="(reportagem,index) in filterArray()" :key="index" :href="reportagem.link" target="_blank">
        <div>
          <img class="logo-img" :src="reportagem.logo.url" :alt="reportagem.logo.alt" >
          <p class="data">{{ reportagem.data }}</p>
          <h3 class="titulo">{{ reportagem.titulo }}</h3>
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
  name: "Reportagens",
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
      return this.verMais ? this.data : this.data.slice(0,this.itemsPerPage);
    },
    emitVerMais: function(){
      this.$emit('varMaisChange', 'reportagem');
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/reportagens.scss';
</style>
