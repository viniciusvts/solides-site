<template>
  <div class="gestao-colabs">
    <div class="content">
      <div class="container">
        <div class="head col-11 col-lg-12">
          <h2>A gestão considerando o comportamento dos colaboradores</h2>
          <div class="text">
            <p>São quatro os perfis comportamentais presentes em todos os colaboradores. 
              A predominância de um deles reflete uma série de tendências comportamentais, 
              como explicaremos abaixo:
            </p>
          </div>
        </div>
        <div class="perfis col-lg-11 mx-auto px-0">
          <!-- -->
          <div class="item row col-lg">
            <div class="col-1 d-lg-none"></div>
            <h2 class="col-2 col-lg-12">Analista</h2>
            <div class="col-1 d-lg-none"></div>
            <div class="text col-7 col-lg-12">
              <p>são os colaboradores mais precisos, detalhistas, organizados e diligentes;</p>
            </div>
          </div>
          <!-- -->
          <div class="item row col-lg">
            <div class="col-1 d-lg-none"></div>
            <h2 class="col-2 col-lg-12">Planejador</h2>
            <div class="col-1 d-lg-none"></div>
            <div class="text col-7 col-lg-12">
              <p>profissionais estáveis, pacientes, que têm um ritmo de produção constante e são mais conservadores;</p>
            </div>
          </div>
          <!-- -->
          <div class="item row col-lg">
            <div class="col-1 d-lg-none"></div>
            <h2 class="col-2 col-lg-12">Comunicador</h2>
            <div class="col-1 d-lg-none"></div>
            <div class="text col-7 col-lg-12">
              <p>são persuasivos, entusiasmados, otimistas e relacionáveis;</p>
            </div>
          </div>
          <!-- -->
          <div class="item row col-lg">
            <div class="col-1 d-lg-none"></div>
            <h2 class="col-2 col-lg-12">Executor</h2>
            <div class="col-1 d-lg-none"></div>
            <div class="text col-7 col-lg-12">
              <p>colaboradores energéticos, autoconfiantes, competitivos e que gostam de desafios.</p>
            </div>
          </div>
        </div>
        <div class="foot col-11 col-lg-12">
          <div class="text">
            <p>
              É por meio da gestão comportamental que os clientes da Sólides conseguem: 
              promover o autoconhecimento dos colaboradores, mapear as habilidades 
              sociocomportamentais dos funcionários, engajar os profissionais, criar 
              times de alta performance, melhorar o clima organizacional, entre outras questões.
            </p>
          </div>
        </div>
      </div>
    </div>
    <img class="frame" src="@/assets/img/svg/frame-form-home.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "GestaoConsColabs",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/gestao-colabs.scss';
</style>
