<template>
  <div class="gestao-colabs">
    <div class="content">
      <div class="container">
        <div class="head col-11 col-lg-12">
          <h2 v-html="data.titulo"></h2>
          <div class="text" v-html="data.texto"></div>
        </div>
        <div class="perfis col-lg-11 mx-auto px-0">
          <div class="item row col-lg" v-for="(item, index) in data.perfis_comportamentais" :key="index">
            <div class="col-1 d-lg-none"></div>
            <h2 class="col-2 col-lg-12" v-html="item.titulo"></h2>
            <div class="col-1 d-lg-none"></div>
            <div class="text col-7 col-lg-12">
              <p v-html="item.texto"></p>
            </div>
          </div>
        </div>
        <div class="foot col-11 col-lg-12">
          <div class="text">
            <p v-html="data.texto_2">
            </p>
          </div>
        </div>
      </div>
    </div>
    <img class="frame" src="@/assets/img/svg/frame-form-home.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "GestaoConsColabs",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/gestao-colabs.scss';
</style>
