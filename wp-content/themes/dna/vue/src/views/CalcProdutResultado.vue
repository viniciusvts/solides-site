<template>
  <div v-if="pageData" class="calc-result produt-resultado">
    <div class="container">
      <div class="head container">
        <h1 class="text-center d-none d-md-block mb-0" v-html="pageData.acf.head.titulo"></h1>
        <div class="text" v-html="pageData.acf.head.sub"></div>
        <div class="note" v-html="pageData.acf.head.detalhe"></div>
      </div>
    </div>
    <div class="container data">
      <div class="row">
        <div class="col-12 col-md-6 left">
          <div class="col-12 col-md-6 text d-md-flex">
            <p class=" my-md-auto" v-html="pageData.acf.demonstracao_produtividade.esquerdo"></p>
          </div>
          <div class="col-12 col-md-6 d-md-flex">
            <div class="resultado my-md-auto">
              <span>{{numFunc}}</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 right">
          <div class="col-12 col-md-6 text d-md-flex">
            <p class=" my-md-auto" v-html="pageData.acf.demonstracao_produtividade.direito"></p>
          </div>
          <div class="col-12 col-md-6 d-md-flex">
            <div class="resultado my-md-auto maior">
              <span>{{calcularProdMensal(true)}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CalcData 
    :data="pageData.acf.custo_1" 
    signal="sum" 
    bg='gray' 
    :custorh="{
      hrsPorVaga: calcularHoraRhPorVaga(true), 
      hrsRHTotal: calcularHoraRhTotalProdutividade(true), 
      custoPorHora: calcVars.salario_hora_rh,
      custoPorVaga: calcularCustoRhPorVaga(true), 
      custoTotal: calcularCustoRhAnual(true)
    }"
    />
    <CalcData 
    :data="pageData.acf.custo_2" 
    signal="sum" 
    :entregestor="{
      hrsPorVaga: calcularHoraGestorPorVaga(true), 
      custoPorHora: calcVars.salario_hora_gestor,
      custoPorVaga: calcularCustoGestorPorVaga(true), 
      custoTotal: calcularCustoTotalGestorTreinadorTodosOsContratados(true),
      vagasTotal: this.calcularTaxaRotatividade()
    }"
    />
    <CalcData 
    :data="pageData.acf.custo_3" 
    signal="sum" 
    bg='gray'
    :absenteismo="{
      numColab: this.numFunc, 
      custoPorDia: calcularAbsentColabsPorDia(true),
      custoTotal: calcularAbsentAnual(true),
    }"
    />
    <CalcData 
    :data="pageData.acf.custo_4" 
    signal="sum" 
    :rampagem="{
      numContrat: calcularTaxaRotatividade(), 
      prodMensal: calcularProdMensal(true),
      perdaProdMensal: calcularPerdaProdMensal(true),
      perdaProdRampagem: calcularPerdaProdPeriodoExpe(true),
      custoTotal: calcularPerdaProdTotalAnual(true),
    }"
    />
    <CalcData 
    :data="pageData.acf.custo_5" 
    signal="sum" 
    bg='gray'
    :pesqClima="{
      ttRespTabExcel: calcularTotalRespostasPesquisaDeClima(true), 
      tempHorasParaTab: calcularTempHorasTabPesqClima(true),
      custoTotal: calcularCustoPesqClimaPorAnoSemPA(true),
    }"
    />
    <CalcData 
    :data="pageData.acf.custo_6" 
    :avalDesemp="{
      ttRespTabExcel: calcularTotalRespostasAvalDesem(true), 
      tempHorasParaTab: calcularTempHorasTabDadosAval(true),
      custoTotal: calcularCustoAvalDesenPorAnoSemPA(true),
    }"
    />
    <div class="dados-pesquisa container">
      <div class="row">
        <div class="head col-12 col-md-6">
          <h2 v-html="pageData.acf.pesquisa.titulo"></h2>
          <div class="big-hor-pill"></div>
        </div>
        <div class="text col-12 col-md-6" v-html="pageData.acf.pesquisa.texto"></div>
      </div>
    </div>
    <!-- <div class="data container">
      <div class="row">
        <div class="col-12 col-md-6 left pr-md-0 px-lg-0">
          <div class="col-12 col-md-6 text d-md-flex pl-md-0">
            <p class=" my-md-auto" v-html="pageData.acf.demonstracao_produtividade_2.esquerdo"></p>
          </div>
          <div class="col-12 col-md-6 d-md-flex pr-md-0 pr-lg-2">
            <div class="resultado my-md-auto">
              <span>0,32%</span>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 right px-lg-0">
          <div class="col-12 col-md-6 text d-md-flex pr-md-0">
            <p class=" my-md-auto" v-html="pageData.acf.demonstracao_produtividade_2.direito"></p>
          </div>
          <div class="col-12 col-md-6 d-md-flex pl-md-0">
            <div class="resultado my-md-auto maior">
              <span>R$ 1.222.333,55</span>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="container">
      <div class="emp-alta-efi">
        <div class="first" v-html="pageData.acf.desc_efici.antes_de_demonstrativo"></div>
        <div class="resultado">
          <span>R$ 1.222.333,55</span>
        </div>
        <div class="second" v-html="pageData.acf.desc_efici.apos_demonstrativo"></div>
      </div>
    </div>-->
    <div class="aumente-produt">
      <img class="tr-rotx-180 w-100" src="@/assets/img/svg/frame-form-home.svg" alt="">
      <div class="bg-gray internal">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="blue-box">
                <p v-html="pageData.acf.aumentar_produtividade.bluebox.texto_1"></p>
                <div class="resultado my-md-auto">
                  <span>{{calcularProdMensal(true)}}</span>
                </div>
                <p class="mt-4 mt-md-2" v-html="pageData.acf.aumentar_produtividade.bluebox.texto_2"></p>
                <div class="resultado my-md-auto">
                  <span>{{aumenteProdMensal(true)}}</span>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 right">
              <h2 v-html="pageData.acf.aumentar_produtividade.esq.titulo"></h2>
              <div class="text" v-html="pageData.acf.aumentar_produtividade.esq.texto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="custo-total">
      <div class="text" v-html="pageData.acf.ganhos_por_ano.texto"></div>
      <div class="resultado-bgwhi-bdgray">
        <span>{{aumenteProdAnual(true)}}</span>
      </div>
    </div> -->
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
import calcRotat from '@/services/calcRotat.js'
import CalcData from "@/components/CalcData.vue"
export default {
  name: 'CalcProdutResultado',
  mixins: [calcRotat],
  components: {
    Loading,
    CalcData,
  },
  data () {
    return {
      pageId: 1541,
      pageData: null,
      pageIdWithVars: 1483,
    }
  },
  created () {
    this.getPost();
  },
  mounted () {
    this.numFunc = Number(this.getUriParam('numFunc'))
    this.fatAno = Number(this.getUriParam('fatAno'))
    this.calcVars.media_taxa_rotatividade = Number(this.getUriParam('taxaRot'))
  },
  methods: {
    getPost () {
      //this post
      this.$http.getFerramentasById(this.pageId)
      .then(res => res.json() )
      .then(json => {
        this.pageData = json
      })
      //calc vars
      this.$http.getFerramentasById(this.pageIdWithVars)
      .then(res => res.json() )
      .then(json => {
        this.calcVars = json.acf.calc_vars
      })
    },
    getUriParam (param) {
      var params = window.location.search.substr(1).split('&');
      for (var i = 0; i < params.length; i++) {
          var par = params[i].split('=');
          if (par[0] == param) {
              return decodeURIComponent(par[1]);
          }
      }
      return false;
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
  @import '@/assets/scss/produt-resultado.scss';
  .gray{
    background: #F3F3F3;
    width: 100%;
    height: 300px;
    position: absolute;
  }
</style>