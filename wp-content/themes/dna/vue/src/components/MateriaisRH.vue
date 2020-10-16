<template>
  <div class="materiais-rh container">
    <div class="col-12 col-lg-70 pl-lg-0">
      <div v-if="isDesktop" class="to-right-30">
        <img src="@/assets/img/svg/caderno-background.svg" alt="" class="img-book">
      </div>    
      <h1 v-html="data.titulo"></h1>
      <div class="text" v-html="data.texto"></div>
      <div class="search">
        <input class="search-box" type="text" placeholder="Pesquisar" @change="emitPesquisa($event)" />
      </div>
      <div class="select-filtro">
        <p>{{ isDesktop ? "Filtrar materiais:" : "Filtrar:" }}</p>
        <select name="categoria" @change="emitCategoria($event)">
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
  mounted () {
    this.changeCategoriaWidth();
    this.changeFormatoWidth();
  },
  computed: {
    isDesktop: function () {
      return screen.width > 991
    },
    isTablet: function () {
      return screen.width > 767
    }
  },
  methods :{
    emitCategoria(event){
      this.changeCategoriaWidth(event.target.value);
      this.$emit('categoriaChange', event.target.value);
    },
    emitFormato(event){
      this.changeFormatoWidth(event.target.value);
      this.$emit('formatoChange', event.target.value);
    },
    emitPesquisa(event){
      this.$emit('pesquisaChange', event.target.value);
    },
    changeCategoriaWidth: function(option='categoria'){
      let texto = "Categoria";
      let cateSelect= this.data.categorias.filter( cate => {
        return cate.id==option;
      })[0];
      if(cateSelect){
        texto = cateSelect.categoria;
      }
      document.getElementsByName("categoria")[0].style.width = this.getWidthText(texto)+"px";
    },
    changeFormatoWidth: function(option='formato'){
      let texto = "Formato";
      if(option){
        texto = option;
      }
      document.getElementsByName("formato")[0].style.width = this.getWidthText(texto)+"px";
    },
    getWidthText: function(texto){
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext("2d");
      let arrowTam;
      if(this.isDesktop){
        ctx.font = "18px Lato, Roboto, sans-serif";
        arrowTam = 30;
      }else if(this.isTablet){
        ctx.font = "16px Lato, Roboto, sans-serif";
        arrowTam = 30;
      }
      else{
        ctx.font = "13px Lato, Roboto, sans-serif";
        arrowTam = 27;
      }
      return ctx.measureText(texto).width+arrowTam;
    }
  }
};

</script>

<style lang="scss">
    @import '@/assets/scss/materiais-rh.scss';
</style>
