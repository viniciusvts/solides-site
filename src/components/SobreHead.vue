<template>
  <div class="sobre-head container">
    <div class="vertical-pill green"></div>
    <img class="d-lg-block" src="@/assets/img/marcus2.png" :alt="data.imagem.alt">
    <div class="row">
      <div class="col-8 col-lg-70">
        <h1>Sobre nós</h1>
        <div class="text">Transformamos empresas por meio das pessoas</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SobreHead",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/sobre-head.scss';
</style>
