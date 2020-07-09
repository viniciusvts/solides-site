<template>
  <div class="avaliacao-desempenho">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 text-center text-lg-right vertical-center">
          <h2>Relatório de resultados</h2>
          <img src="@/assets/img/svg/relatorio-de-resultados.svg" alt="" class="img-mobile d-lg-none">
          <div class="text">
            <p>
              Relatório completo com dados dispostos em gráficos gerados automaticamente pela ferramenta.
            </p>
          </div>
        </div>
        <div class="col-1 d-none d-lg-block"></div>
        <div class="col-12 col-lg-5">
          <img src="@/assets/img/svg/relatorio-de-resultados.svg" alt="" class="w-100 d-none d-lg-block">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RelatorioDeResultados"
};
</script>

<style lang="scss">
    @import '@/assets/scss/avaliacao-desempenho.scss';
</style>
