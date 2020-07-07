<template>
  <div class="people-analytics">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="d-lg-none col-12">
            <h2 class="text-center">People Analytics</h2>
          </div>
          <div class="col-11 col-lg-5 imagem">
            <img src="@/assets/img/people-analytics.png" alt="" class="w-100">
          </div>
          <div class="d-none d-lg-block col-1"></div>
          <div class="col-12 col-lg-6 vertical-center">
            <h2 class="d-none d-lg-block">People Analytics</h2>
            <div class="text">
              <p>Pessoas tranformam empresas. É por isso que a Sólides tem ferramentas
                que encontram o colaborador certo e criam um processo seletivo mais ágil.
                Tudo com um custo menor e com menos erros.
              </p>
            </div>
            <button class="badge badge-pill purple">
              Conheça mais sobre essa ferramenta
            </button>
          </div>
        </div>
      </div>
    </div>
    <img class="frame tr-roty-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "PeopleAnalytics"
};
</script>

<style lang="scss">
    @import '@/assets/scss/people-analytics.scss';
</style>
