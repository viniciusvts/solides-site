<template>
  <div class="profiler">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 text-center text-lg-right vertical-center">
          <h2>Profiler</h2>
          <img src="@/assets/img/executor-planejador.png" alt="" class="img-mobile d-lg-none">
          <div class="text">
            <p>Pessoas tranformam empresas. É por isso que a Sólides tem ferramentas
              que encontram o colaborador certo e criam um processo seletivo mais ágil.
              Tudo com um custo menor e com menos erros.
            </p>
          </div>
          <button class="badge badge-pill purple">
            Saiba mais sobre o PerfilDisc
          </button>
        </div>
        <div class="col-1 d-none d-lg-block"></div>
        <div class="col-12 col-lg-5">
          <img src="@/assets/img/executor-planejador.png" alt="" class="w-100 d-none d-lg-block">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profiler"
};
</script>

<style lang="scss">
    @import '@/assets/scss/profiler.scss';
</style>
