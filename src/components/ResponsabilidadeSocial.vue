<template>
  <div class="responsabilidade-social">
    <div class="container">
      <div class="vertical-pill red"></div>
      <div class="row">
        <div class="col-11 mx-auto col-lg-8 ml-lg-0">
          <h2>Responsabilidade Social</h2>
          <div class="text">
            <p>A Solides tem a postura de devolver à sociedade uma parte do que gera de valor.</p>
            <p>Hoje cedemos mais de R$500.000,00 por ano em créditos do Profiler à Rede Cidadã 
              ([www.redecidada.org.br](http://www.redecidada.org.br/)) que faz um trabalho fantástico no Brasil 
              capacitando jovens de baixa renda para o primeiro emprego. Fazem uma orientação profissional, 
              capacitação e inserção em empresas de médio e grande porte.
            </p>
            <p>Divulgamos para nossos clientes que eles participam deste projeto, 
              cedendo a eles um selo de participação no Projeto Social acima. Para cada 
              crédito que um cliente compra, o cliente está proporcionando outro crédito 
              ao projeto social, se tornando co-participador.
            </p>
            <p>Também cedemos gratuitamente licenças do software de Gestão de RH para 
              faculdades utilizarem academicamente com seus alunos, oferecendo uma ferramenta 
              para que profissionais de administração e gestão de pessoas possam experimentar 
              na prática um software para facilitar e operacionalizar os processos de gestão de pessoas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsabilidadeSocial",
  props: {
    data: Object
  },
};
</script>

<style lang="scss">
    @import '@/assets/scss/responsabilidade-social.scss';
</style>
