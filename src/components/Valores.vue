<template>
  <div class="valores">
    <img class="frame tr-rotz-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
    <div class="content">
      <div class="container">
        <div class="row item">
          <div class="col-10 mx-auto col-lg-11 ml-lg-0">
            <h2 v-html="data.titulo"></h2>
          </div>
          <div class="col-10 mx-auto col-lg-11 mr-lg-0">
            <div class="valores-lista row" v-for="(item, index) in data.valores" :key="index">
              <div class="col-12 col-lg-3 mr-lg-0 row">
                <div class="number col-1 col-lg-12 mb-lg-0">{{index + 1}}</div>
                <div class="title col-10 col-lg-12 mt-lg-0" v-html="item.titulo"></div>
              </div>
              <div class="col-12 col-lg-9">
                <div class="text" v-html="item.texto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Valores",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/valores.scss';
</style>
