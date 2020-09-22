<template>
  <div class="materiais-rh container">
    <div class="col-12 col-lg-70 pl-lg-0">
      <h1 v-html="data.titulo"></h1>
      <div class="text" v-html="data.texto"></div>
      <div class="search">
        <input class="search-box" type="text" placeholder="Pesquisar"/>
      </div>
      <div class="select-filtro">
        <p>Filtrar materiais</p>
        <select name="categoria" >
          <option value="">Categoria</option>
          <option v-for="option in data.categorias" :key="option.id">
            {{ option.categoria }}
          </option>
        </select>
        <select name="formato" >
          <option value="">Formato</option>
          <option v-for="option in data.formatos" :key="option.id">
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
      console.log(this.data);
      return screen.width > 767
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/materiais-rh.scss';
</style>
