<template>
  <div v-if="pageData" class="calc-result">
    <div class="container">
      <div class="head container">
        <h1 class="text-center d-none d-md-block mb-0" v-html="pageData.acf.head.titulo"></h1>
        <div class="text" v-html="pageData.acf.head.sub"></div>
        <div class="note" v-html="pageData.acf.head.detalhe"></div>
      </div>
      <div class="container data">
        <div class="row">
          <div class="col-6 left">
            <div class="col-12 col-md-5 d-md-flex">
              <div class="resultado my-md-auto">
                <span>8</span>
              </div>
            </div>
            <div class="col-12 col-md-7 text d-md-flex">
              <p class=" my-md-auto">Todo ano você vai precisar contratar <span>8</span> pessoas</p>
            </div>
          </div>
          <div class="col-6 right">
            <div class="col-12 col-md-5 d-md-flex">
              <div class="resultado my-md-auto">
                <span>7</span>
              </div>
            </div>
            <div class="col-12 col-md-7 text d-md-flex">
              <p class=" my-md-auto">Dentre elas, <span>7</span> pessoas serão substituídas por erro de recrutamento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CalcData :data="pageData.acf.custo_1" signal="sum" bg='gray' calc="custorh" />
    <CalcData :data="pageData.acf.custo_2" signal="sum" calc="entregestor" />
    <CalcData :data="pageData.acf.custo_3" signal="sum" bg='gray' calc="dinamico" />
    <CalcData :data="pageData.acf.custo_4" signal="sum" calc="treinaorienta"/>
    <CalcData :data="pageData.acf.custo_5" signal="equal" bg='gray' calc="perdaprod" />
    <div class="custo-total">
      <div class="text" v-html="pageData.acf.resultado.custo_total"></div>
      <div class="resultado-bgwhi-bdgray">
        <span>R$88.542,08</span>
      </div>
    </div>
    <img class="frame" src="@/assets/img/svg/framecalcrotat.svg" alt="">
    <div class="custo-por-erro-contrat">
      <div class="fhd-container">
        <div class="custo">
          <h2 v-html="pageData.acf.resultado.custo_erro_de_contratacao"></h2>
          <p v-html="pageData.acf.resultado.custo_por_erro_detalhe"></p>
          <div class="resultado-bgwhi-bdgray">
            <span>R$88.542,08</span>
          </div>
        </div>
        <div class="outros" v-html="pageData.acf.resultado.outros"></div>
      </div>
    </div>
    <div class="como-resolver container">
      <div class="head" v-html="pageData.acf.solucao.head"></div>
      <div class="text container">
        <div class="text-1">
          <p>Você precisará de <span>56</span> relatórios de <strong>avaliação comportamental</strong> de candidatos por ano</p>
        </div>
        <div class="text-2" v-html="pageData.acf.solucao.texto_2"></div>
        <div class="text-3" v-html="pageData.acf.solucao.texto_3"></div>
      </div> 
    </div>
    <div class="cta-um-botao">
      <h2 v-html="pageData.acf.cta_final.titulo"></h2>
      <p v-html="pageData.acf.cta_final.texto"></p>
      <a :href="pageData.acf.cta_final.botao.url" :target="pageData.acf.cta_final.botao.target">
        <button v-html="pageData.acf.cta_final.botao.title"></button>
      </a>
    </div>
    <div class="gray"></div>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue"
import CalcData from "@/components/CalcData.vue"
export default {
  name: 'CalcRotatResult',
  components: {
    Loading,
    CalcData,
  },
  data () {
    return {
      pageId: 1243,
      pageData: null,
      calculado: false
    }
  },
  created () {
    this.getPost();
  },
  methods: {
    getPost () {
      this.$http.getPageById(this.pageId)
      .then(res => res.json() )
      .then(json => {
        this.pageData = json
      })
    }
  },
  computed: {
    desktopScreen() {
      return screen.width > 767
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/calc-result.scss';
  .gray{
    background: #F3F3F3;
    width: 100%;
    height: 300px;
    position: absolute;
  }
</style>