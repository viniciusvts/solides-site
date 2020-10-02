<template>
  <div class="materiais-rh container">
    <div class="col-12 col-lg-70 pl-lg-0">
      <div class="to-right-30">
        <img src="@/assets/img/svg/caderno-background.svg" alt="" class="img-book">
      </div>    
      <h1 v-html="data.titulo"></h1>
      <div class="text" v-html="data.texto"></div>
      <div class="search">
        <input class="search-box" type="text" placeholder="Pesquisar" @change="emitPesquisa($event)" />
      </div>
      <div class="select-filtro">
        <p>Filtrar materiais</p>
        <select name="categoria" @change="emitCategoria($event)" >
          <option value="">Categoria</option>
          <option v-for="option in data.categorias" :key="option.id" :value="option.id">
            {{ option.categoria }}
          </option>
        </select>
        <select name="formato" @change="emitFormato($event)" >
          <option value="">Formato</option>
          <option v-for="option in data.formatos" :key="option.id" :value="option.formato">
            {{ option.formato }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MateriaisRH",
  props: {
    data: Object,
  },
  computed: {
    isDesktop: function () {
      return screen.width > 767
    }
  },
  methods :{
    emitCategoria(event){
      this.$emit('categoriaChange', event.target.value);
    },
    emitFormato(event){
      this.$emit('formatoChange', event.target.value);
    },
    emitPesquisa(event){
      this.$emit('pesquisaChange', event.target.value);
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/materiais-rh.scss';
</style>
