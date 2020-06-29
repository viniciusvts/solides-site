<template>
  <div class="pesquisa-clima">
    <img class="frame tr-rotz-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <img src="@/assets/img/pesquisa-clima.png" alt="" class="w-100">
          </div>
          <div class="col-1"></div>
          <div class="col-6 vertical-center">
            <h2>Pesquisa de clima</h2>
            <div class="text">
              <p>Pessoas tranformam empresas. É por isso que a Sólides tem ferramentas
                que encontram o colaborador certo e criam um processo seletivo mais ágil.
                Tudo com um custo menor e com menos erros.
              </p>
            </div>
            <button class="badge badge-pill purple">
              Saiba mais sobre Pesquisa de Clima
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PesquisaClima"
};
</script>

<style lang="scss">
    @import '@/assets/scss/pesquisa-clima.scss';
</style>
