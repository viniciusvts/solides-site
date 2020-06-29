<template>
  <div class="profiler">
    <div class="container">
      <div class="row">
        <div class="col-6 text-right vertical-center">
          <h2>Profiler</h2>
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
        <div class="col-1"></div>
        <div class="col-5">
          <img src="@/assets/img/executor-planejador.png" alt="" class="w-100">
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
