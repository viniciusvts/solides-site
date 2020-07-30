<template>
  <div class="missao-visao">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 d-none d-lg-block"></div>
          <div class="col-9 mx-auto col-lg-3 missao">
            <h2>Missao</h2>
            <div class="text">
              <p>Transformar as empresas através das pessoas</p>
            </div>
          </div>
          <div class="col-lg-2 d-none d-lg-block"></div>
          <div class="col-9 mx-auto col-lg-3 visao">
            <h2>Visão</h2>
            <div class="text">
              <p>Ser a solução de RH #1 para as PME's no mundo</p>
            </div>
          </div>
          <div class="col-lg-2 d-none d-lg-block"></div>
          <div class="col-9 col-lg-10 mx-auto mx-lg-0 protagonista">
            <h2>O RH como protagonista em todos os momentos</h2>
            <div class="text">
              <p>
                A Sólides tem como objetivo garantir o protagonismo do RH na trajetória de todas as empresas. 
                Para isso, nossas ferramentas dão suporte para as tomadas de decisão, desenvolvimento, 
                avaliação de desempenho, acompanhamento profissional e muito mais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img class="frame tr-roty-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "MissaoVisao",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/missao-visao.scss';
</style>
