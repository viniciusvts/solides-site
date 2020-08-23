<template>
  <div class="premiacoes">
    <img class="frame tr-rotx-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-11 mx-auto col-lg-12">
            <h2 v-html="data.titulo"></h2>
            <div class="text">
              <ul>
                <li v-for="item in data.lista_de_premiacoes" :key="item">{{item.premiacao}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Premiacoes",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/premiacoes.scss';
</style>
