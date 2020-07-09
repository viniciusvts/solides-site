<template>
  <div class="avaliacao-desempenho">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 text-center text-lg-right vertical-center">
          <h2>Alinha Espectativas</h2>
          <img src="@/assets/img/svg/combinacao-perfeita.svg" alt="" class="img-mobile d-lg-none">
          <div class="text">
            <p>
              Espectativas alinhadas entre colaborador e empresa
            </p>
          </div>
        </div>
        <div class="col-1 d-none d-lg-block"></div>
        <div class="col-12 col-lg-5">
          <img src="@/assets/img/svg/alinha-expectativas.svg" alt="" class="w-100 d-none d-lg-block">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlinhaEspectativas"
};
</script>

<style lang="scss">
    @import '@/assets/scss/avaliacao-desempenho.scss';
</style>
