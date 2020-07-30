<template>
  <div class="premiacoes">
    <img class="frame tr-rotx-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-11 mx-auto col-lg-12">
            <h2>As premiações recebidas pela Sólides nos últimos anos</h2>
            <div class="text">
              <ul>
                <li>Prêmio Sucesu Minas – Melhor startup 2019;</li>
                <li>Prêmio Sucesu Minas – Melhor Tecnologia Aplicada ao Engajamento e Gestão de Pessoas 2019;</li>
                <li>Membro do Pacto Global da Organização das Nações Unidas (ONU), desde 2019;</li>
                <li>Certificada pelo Great Place To Work como uma das Melhores Empresas para se Trabalhar, desde 2017;</li>
                <li>Selecionada para o time de ScaleUP Endeavor (Nível Nacional, 2017);</li>
                <li>Vencedora do MIT Crowd’s Award, no 5th MIT Latin America Startup Competition (Nível Global, 2017);</li>
                <li>1o. Lugar no StartupGov 2015, que envolve empresas inovadoras para solucionar problemas da Educação no Brasil;</li>
                <li>Fundadora Mônica Hauck, premiada como Mulher Notável 2015, na categoria Tecnologia no estado de Minas Gerais.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Premiacoes",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/premiacoes.scss';
</style>
