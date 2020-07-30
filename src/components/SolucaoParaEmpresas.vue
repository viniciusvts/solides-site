<template>
  <div class="solucao-para-empresas">
    <div class="container">
      <div class="vertical-pill yellow"></div>
      <div class="row">
        <div class="col-2 col-lg-4"></div>
        <div class="col-9 col-lg-7 p-sm-0">
          <h2>Solução para as empresas</h2>
          <div class="text">
            <ul>
              <li>Melhora na eficiência operacional sobre os dados dos clientes</li>
              <li>Tomadas de decisão mais precisas e coerentes aos cenários apresentados</li>
              <li>Aumento da produtividade e performance da equipe</li>
              <li>Contratações mais efetivas considerando as competências socioemocionais dos candidatos</li>
            </ul>
          </div>
          <div class="detalhe col-10 col-lg-7">
            <p>"Sólides: plataforma gerou economia de R$51 milhôes para os clientes"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolucaoParaEmpresas",
  props: {
    data: Object
  },
};
</script>

<style lang="scss">
    @import '@/assets/scss/solucao-para-empresas.scss';
</style>
