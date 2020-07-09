<template>
  <div class="pesquisa-clima">
    <img class="frame tr-rotz-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="d-lg-none col-12">
            <h2 class="text-center">Personalização</h2>
          </div>
          <div class="col-11 col-lg-5 imagem">
            <img src="@/assets/img/svg/personalização-da-pesquisa.svg" alt="" class="w-100">
          </div>
          <div class="d-none d-lg-block col-1"></div>
          <div class="col-12 col-lg-6 vertical-center">
            <h2 class="d-none d-lg-block">Personalização</h2>
            <div class="text">
              <p>
                Perguntas e formatos de pesquisa personalizáveis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalizacaoPesquisa"
};
</script>

<style lang="scss">
    @import '@/assets/scss/pesquisa-clima.scss';
</style>
