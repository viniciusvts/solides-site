<template>
  <div class="avaliacao-desempenho">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 text-center text-lg-right vertical-center">
          <h2>Avaliação de desempenho</h2>
          <img src="@/assets/img/avaliacao-desempenho.png" alt="" class="img-mobile d-lg-none">
          <div class="text">
            <p>
              Conheça o modelo rápido eficiente e avançado de análise de desempenho.
              Processo de avaliação completo e dinâmico
            </p>
          </div>
          <router-link :to="{ name: 'AvaliacaoDesempenho' }">
            <button class="badge badge-pill purple">
              Saiba mais sobre a Avaliação
            </button>
          </router-link>
        </div>
        <div class="col-1 d-none d-lg-block"></div>
        <div class="col-12 col-lg-5">
          <img src="@/assets/img/avaliacao-desempenho.png" alt="" class="w-100 d-none d-lg-block">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvaliacaoDesempenho"
};
</script>

<style lang="scss">
    @import '@/assets/scss/avaliacao-desempenho.scss';
</style>
