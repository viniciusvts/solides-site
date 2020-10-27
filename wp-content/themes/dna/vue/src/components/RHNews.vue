<template>
  <div class="rh-news">
    <div class="container">
      <h1 class="titulo-news">{{ data.titulo}}</h1>
      
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
  name: "RH News",
  mixins: [lazyComponent],
  props: {
    data: Object,
  },
  data () {
    return {
      itemsPerPage: 6,
    }
  },
  methods: {
    emitVerMais: function(){
      this.$emit('varMaisChange', 'blog');
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/rh-news.scss';
</style>
