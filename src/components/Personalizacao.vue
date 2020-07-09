<template>
  <div class="conheca-plataforma">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="d-lg-none col-12">
            <h2 class="text-center">Personalização</h2>
          </div>
          <div class="col-11 col-lg-5 imagem">
            <img src="@/assets/img/avaliacao-desempenho.png" alt="" class="w-100">
          </div>
          <div class="d-none d-lg-block col-1"></div>
          <div class="col-12 col-lg-6 vertical-center">
            <h2 class="d-none d-lg-block">Personalização</h2>
            <div class="text">
              <p>Personalização da avaliação com:</p>
              <ul class="d-block pl-0 hifen">
                <li>Escolhas dos tipos de critérios</li>
                <li>Notas de pesos</li>
                <li>Visualização por ranking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="frame" src="@/assets/img/svg/frame-form-home.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "ProcessoSeletivo"
};
</script>

<style lang="scss">
    @import '@/assets/scss/recrutamento-selecao.scss';
    ul.hifen{
      list-style-type: circle;
    }
</style>
