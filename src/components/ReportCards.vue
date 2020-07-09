<template>
  <div class="pesquisa-clima">
    <img class="frame tr-rotz-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="d-lg-none col-12">
            <h2 class="text-center">Report Cards</h2>
          </div>
          <div class="col-11 col-lg-5 imagem">
            <img src="@/assets/img/svg/report-cards.svg" alt="" class="w-100">
          </div>
          <div class="d-none d-lg-block col-1"></div>
          <div class="col-12 col-lg-6 vertical-center">
            <h2 class="d-none d-lg-block">Report Cards</h2>
            <div class="text">
              <p>
                Pessoas transformam empresas. É por isso que a Sólides tem ferramentas 
                que encontram o colaborador certo e criam um processo seletivo mais ágil. 
                Tudo com custo menor e menos erros.
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
  name: "ReportCards"
};
</script>

<style lang="scss">
    @import '@/assets/scss/pesquisa-clima.scss';
</style>
