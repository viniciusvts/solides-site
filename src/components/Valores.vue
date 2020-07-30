<template>
  <div class="valores">
    <img class="frame tr-rotz-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
    <div class="content">
      <div class="container">
        <div class="row item">
          <div class="col-10 mx-auto col-lg-11 ml-lg-0">
            <h2>Os Valores da Sólides</h2>
          </div>
          <div class="col-10 mx-auto col-lg-11 mr-lg-0">
            <!-- -->
            <div class="valores-lista row">
              <div class="col-12 col-lg-3 mr-lg-0 row">
                <div class="number col-1 col-lg-12 mb-lg-0">1</div>
                <div class="title col-10 col-lg-12 mt-lg-0">Anormais</div>
              </div>
              <div class="col-12 col-lg-9">
                <div class="text">
                  Temos uma visão diferente sobre o trabalho. 
                  Para nós ele é fonte de prazer, crescimento e desenvolvimento em todos os sentidos. 
                  É um presente. É benção. Um anormal enxerga no trabalho uma oportunidade de crescer 
                  socialmente, intelectualmente, espiritualmente e financeiramente.
                </div>
              </div>
            </div>
            <!-- -->
            <div class="valores-lista row">
              <div class="col-12 col-lg-3 mr-lg-0 row">
                <div class="number col-1 col-lg-12 mb-lg-0">2</div>
                <div class="title col-10 col-lg-12 mt-lg-0">Canela Grossa</div>
              </div>
              <div class="col-12 col-lg-9">
                <div class="text">
                  Somos resilientes. Sabemos que a jornada é árdua e que o crescimento 
                  contínuo exige a busca incessante e incansável pela excelência. Isso pode 
                  gerar frustração e dor como em atletas de alto nível. Mas pessoas resistentes 
                  são focadas na missão. Conseguem permanecer de pé, apesar de todas as dificuldades.
                </div>
              </div>
            </div>
            <!-- -->
            <div class="valores-lista row">
              <div class="col-12 col-lg-3 mr-lg-0 row">
                <div class="number col-1 col-lg-12 mb-lg-0">3</div>
                <div class="title col-10 col-lg-12 mt-lg-0">Learnaholic</div>
              </div>
              <div class="col-12 col-lg-9">
                <div class="text">
                  Amamos pessoas que amam aprender e se desenvolver, que se 
                  esforçam para melhorar seus processos dia a dia. Tudo pode melhorar. 
                  Sempre. Evoluir é parte essencial de ser Solidiano. Mas para crescer, 
                  tem que gostar de aprender coisas novas, tem que se esforçar, tem 
                  que ter disciplina para chegar ao próximo nível. Pessoas inquietas 
                  valorizam o aprendizado e o conhecimento, seja de que forma for.
                </div>
              </div>
            </div>
            <!-- -->
            <div class="valores-lista row">
              <div class="col-12 col-lg-3 mr-lg-0 row">
                <div class="number col-1 col-lg-12 mb-lg-0">4</div>
                <div class="title col-10 col-lg-12 mt-lg-0">Mão na massa</div>
              </div>
              <div class="col-12 col-lg-9">
                <div class="text">
                  Valorizamos pessoas que descem para a trincheira e vão para a linha de 
                  frente quando o bicho pega. Gente que quando vê algo que precisa ser feito, 
                  vai lá e faz. Que olha um problema e já apresenta a solução. Que assume a 
                  responsabilidade da missão. Do tipo que você entrega o desafio e confia no resultado.
                </div>
              </div>
            </div>
            <!-- -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Valores",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/valores.scss';
</style>
