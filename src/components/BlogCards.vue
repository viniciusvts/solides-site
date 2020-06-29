<template>
  <div class="blog-cards">
    <div class="container">
      <div class="vertical-pill red"></div>
      <h2 class="title">Melhores conteúdos sobre gestão de pessoas</h2>
      <div class="cards row">
        <div v-for="n in 3" :key="n" class="col-12 col-lg-4">
          <a href="javascript: void(0)">
            <div class="card">
              <img src="@/assets/img/guia-da-metodologia.png" alt="" class="img-header">
              <h3 class="title">14 testes para fazer antes de selecionar um candidato</h3>
              <p class="text">O processo de recrutamento e seleção de funcionários tem grande influência nos resultados da organização e no desenvolvimento de talentos, não é mesmo? Conhecer testes para selecionar um candidato ajuda a encontrar o melhor colaborador para determinada função.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCards"
};
</script>

<style lang="scss">
    @import '@/assets/scss/blog-cards.scss';
</style>
