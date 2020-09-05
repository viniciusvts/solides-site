<template>
<div v-if="lp" class="profiler-view over-x-h">

  <div class="container mt-70 pb-40 pb-lg-60 mt-md-120">
    <div class="row ml-0">
      <div class="text-left to-left-70 mt-70 discprofiler">
        <h1 v-html="lp.acf.titulo1" class="mt-md-4 mb-4 mb-lg-3"></h1>
        <p v-html="lp.acf.texto1"></p>
        <!--exibe apenas em desktop -->
        <div class="mt-70 pr-0 d-none d-lg-block">
          <a :href="lp.acf.botao_1_secao_1[0].link" class="pr-0">
            <button class="badge badge-pill mr-1 blue-back color-white two-in-a-row">{{lp.acf.botao_1_secao_1[0].texto}}</button>
          </a>
          <a :href="lp.acf.botao_2_secao_1[0].link" class="pr-0">
            <button class="badge badge-pill ml-1 blue-outline two-in-a-row">{{lp.acf.botao_2_secao_1[0].texto}}</button>
          </a>
          <!--profiler-->
          <div class="text-right pr-0 trx-60 color-almostBlack internal-wip mt-xl-120">
            <h2 v-html="lp.acf.titulo2" class="mb-2 pr-0"></h2>
            <p v-html="lp.acf.texto2" class="pr-0 pf-details"></p>
            <div class="mt-50 pr-0">
              <a :href="lp.acf.botao_1_secao_2[0].link" class="pr-0">
                <button class="badge badge-pill blue-back color-white">{{lp.acf.botao_1_secao_2[0].texto}}</button>
              </a>
            </div>
          </div>
        </div>
        <!--/exibe apenas em desktop-->
      </div>
      <div class="to-right-30">
        <div class="vertical-pill yellow"></div>
        <img :src="lp.acf.imagem_secao_1.sizes.large" :alt="lp.acf.imagem_secao_1.alt">
      </div>
    </div>
    <div class="mt-50 mt-lg-70 d-lg-none">
      <a :href="lp.acf.botao_1_secao_1[0].link">
        <button class="badge badge-pill mr-1 blue-back two-in-a-row color-white">{{lp.acf.botao_1_secao_1[0].texto}}</button>
      </a>
      <a :href="lp.acf.botao_2_secao_1[0].link">
        <button class="badge badge-pill ml-1 blue-outline two-in-a-row">{{lp.acf.botao_2_secao_1[0].texto}}</button>
      </a>
    </div>
  </div>
  <!--profiler-->
  <div class="container pt-40 pt-lg-60 pb-60 text-center d-lg-none color-almostBlack mobile-wip">
    <h2 v-html="lp.acf.titulo2" class="mb-4 mb-md-5"></h2>
    <p v-html="lp.acf.texto2"></p>
    <div class="centerize-itens mt-50">
      <a :href="lp.acf.botao_1_secao_2[0].link">
        <button class="badge badge-pill mx-2 blue-back color-white">{{lp.acf.botao_1_secao_2[0].texto}}</button>
      </a>
    </div>
  </div>
  <!--profiler competencias-->
  <div class="bg-light">
    <div class="container pt-60 text-center">
      <h2 v-html="lp.acf.titulo3" class="mb-5 color-primary t2"></h2>
      <div class="row profiler-competencias">
        <div v-for="(gal, index) in lp.acf.gal3"
        :key="index"
        @click="togleTooltip(null, index)"
        @mouseover="togleTooltip(true, index)"
        @mouseout="togleTooltip(false, index)"
        class="col-6 col-md-3 mb-lg-2">
          <img :src="gal.imagem.sizes.medium" :alt="gal.imagem.alt">
          <div class="tooltip competencias" :class="{'active': competenciasTooltip[index]}">
            <p v-html="gal.tooltip"></p>
          </div>
          <p v-html="gal.texto" class="color-primary font-weight-bold"></p>
        </div>
      </div>
    </div>
  </div>
  <img class="frame" src="@/assets/img/frame1.png" alt="">
  <!--como o profiler...-->
  <div class="container pt-60 pt-lg-0">
    <div class="row ml-lg-0">
      <div class="to-left-30">
        <div class="vertical-pill cyan"></div>
        <img :src="lp.acf.imagem_secao_4.sizes.large" :alt="lp.acf.imagem_secao_4.alt" class="mt-img-profiler">
      </div>
      <div class="text-left to-right-70 mt-30 text-profiler">
        <h2 v-html="lp.acf.titulo4" class="color-almostBlack text-right text-lg-left trtr-profiler t4"></h2>
        <!--so aparece em desktop -->
        <div class="d-none d-lg-block">
          <p v-html="lp.acf.texto4" class="mt-lg-4 mb-lg-4 color-almostBlack p-lg-28"></p>
          <ul class="detalhes pl-0 ul1">
            <li class="mb-lg-4 p-lg-28">
              <span v-html="lp.acf.mil_analistas" class="color-cyan font-weight-bold"></span> analistas comportamentais formados
            </li>
            <li class="mb-lg-4 p-lg-28">
              <span v-html="lp.acf.milhoes_relatorios" class="color-cyan font-weight-bold"></span> de relatórios
            </li>
            <li class="mb-lg-4 p-lg-28">
              <span v-html="lp.acf.parceiros" class="color-cyan font-weight-bold"></span> parceiros
            </li>
          </ul>
          <div class="container mt-5">
            <h2 v-html="lp.acf.titulo5" class="mb-lg-4 color-almostBlack"></h2>
            <div v-html="lp.acf.texto5" class="escada color-almostBlack"></div>
            <div class="text-right">
              <a :href="lp.acf.botao_1_secao_5[0].link">
                <button 
                class="badge badge-pill mx-button blue-back color-white">
                {{lp.acf.botao_1_secao_5[0].texto}}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--como o profiler... detalhes-->
  <div class="container d-lg-none">
      <p v-html="lp.acf.texto4" class="pt-4 pl-4 w-80"></p>
      <ul class="detalhes pl-4 ul1">
        <li>
          <span v-html="lp.acf.mil_analistas" class="color-cyan bold font-weight-bold"></span> analistas comportamentais formados
        </li>
        <li>
          <span v-html="lp.acf.milhoes_relatorios" class="color-cyan bold font-weight-bold"></span> de relatórios
        </li>
        <li>
          <span v-html="lp.acf.parceiros" class="color-cyan bold font-weight-bold"></span> parceiros
        </li>
      </ul>
    <div class="container mt-3 mt-lg-5 px-3">
      <h2 v-html="lp.acf.titulo5" class="simples mx-0"></h2>
      <div v-html="lp.acf.texto5" class="proExclusivo"></div>
      <a :href="lp.acf.botao_1_secao_5[0].link">
        <button class="badge badge-pill blue-back color-white exclusivo">{{lp.acf.botao_1_secao_5[0].texto}}</button>
      </a>
    </div>
  </div>
  <img class="frame d-none d-lg-block" src="@/assets/img/svg/frame2.png" alt="">
  <img class="frame rotate-180 d-lg-none" src="@/assets/img/frame1.png" alt="">
  <!--validado por-->
  <div class="bg-light">
    <div class="container pb-40 pb-lg-60">
      <h2 v-html="lp.acf.titulo6" class="ml-4 trtr-valPor"></h2>
      <div class="row ml-4">
        <div class="text-left color-primary to-left-70">
          <div class="row pr-md-0 text-md-center trtr-valPor">
            <div class="col-12 col-md-4 pr-md-0 mt-40">
              <img src="@/assets/img/usp.png" alt="usp" class="valpor">
            </div>
            <div class="col-12 col-md-4 pr-md-0 mt-40">
              <img src="@/assets/img/ufmg.png" alt="ufmg" class="valpor">
            </div>
            <div class="col-12 col-md-4 pr-md-0 mt-40">
              <img src="@/assets/img/finep.png" alt="finep" class="valpor">
            </div>
          </div>
        </div>
        <div class="to-right-30">
          <div class="vertical-pill red"></div>
        </div>
      </div>
      <div v-html="lp.acf.iframe6" id="ytframe">
      </div>
      <div class="text-center text-lg-left mt-30 row-lg">
        <div class="d-none d-lg-block col-2 col-hd-1"></div>
        <a :href="lp.acf.botao_1_secao_6[0].link">
          <button class="badge badge-pill mx-button blue-back color-white">{{lp.acf.botao_1_secao_6[0].texto}}</button>
        </a>
      </div>
    </div>
  </div>
  <img class="frame" src="@/assets/img/frame1.png" alt="">
  <!--simlpes contratar...-->
  <div class="container pt-40 pt-lg-60">
    <h2 v-html="lp.acf.titulo7" class="text-center color-primary t7"></h2>
    <div class="mt-5 mt-lg-0 text-center row simple">
      <div v-for="(wf, index) in lp.acf.workflow_comprar7" :key="index" class="col-12 col-lg-4">
        <img :src="wf.imagem.sizes.medium" :alt="wf.imagem.alt">
        <p class="color-primary mt-3 px-5 px-lg-2 font-weight-bold">{{wf.text}}</p>
      </div>
    </div>
    <div class="centerize-itens mt-0 mt-lg-30">
      <a :href="lp.acf.botao_1_secao_7[0].link">
        <button class="badge badge-pill mx-button blue-back color-white mb-30">{{lp.acf.botao_1_secao_7[0].texto}}</button>
      </a>
    </div>
  </div>
  <img class="frame rotate-180" src="@/assets/img/frame1.png" alt="">
  <!--depoimento-->
  <div class="bg-light">
    <div class="container">
      <div class="depoimento row">
        <div class="text-center col-12 col-lg-3 align-lg-vertical">
          <img class="profile" :src="lp.acf.depoimento_foto.sizes.medium" :alt="lp.acf.depoimento_foto.alt">
          <p v-html="lp.acf.depoimento_nome" class="profile color-primary font-roboto"></p>
        </div>
        <div class="col-12 col-lg-9">
          <div class="text">
            <img class="asp begin" src="@/assets/img/asp-begin.png" alt="aspas begin">
            <img class="asp end" src="@/assets/img/asp-end.png" alt="aspas end">
            <div v-html="lp.acf.depoimento_texto" class="font-roboto"></div>
          </div>
          <div v-html="lp.acf.depoimento_identidade" class="identidade font-roboto"></div>
        </div>
      </div>
    </div>
  </div>
  <img class="frame" src="@/assets/img/frame1.png" alt="" id="prices">
  <!--tabela de preços-->
  <div class="container pb-60 text-center">
    <div class="container">
      <div class="row">
        <h2
        v-html="lp.acf.tabela_titulo"
        class="color-primary col-12 col-lg-6 text-lg-left prices"></h2>
        <p class="mt-4 mb-4 col-12 col-lg-6 text-lg-right credit-price color-cyan bold" v-html="lp.acf.tabela_texto_destaque">
        </p>
      </div>
      <div class="row mb-5">
        <div class="d-none d-lg-block col-lg-6 align-lg-vertical">
          <img
          class="w-100"
          :src="lp.acf.tabela_imagem_destaque.sizes.large"
          :alt="lp.acf.tabela_imagem_destaque.alt">
        </div>
        <div class="col-12 col-lg-6">
          <table class="table table-striped color-primary prices">
            <thead>
              <tr>
                <th class="w-25" scope="col">Quantidade de créditos</th>
                <th class="w-25" scope="col">Valor por crédito</th>
                <th class="w-25" scope="col">Parcelamento no cartão</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(preco, index) in lp.acf.tabela_precos" :key="index">
                <td>{{preco.quantidade_de_creditos}}</td>
                <td>{{preco.valor_por_credito}}</td>
                <td>{{preco.parcelamento_no_cartao}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-9 text-left color-primary price-details">
          <p><span class="font-weight-bold">Inclui:</span><br>Relatório DISC;<br>Plataforma web para gerenciar avaliações;</p>
        </div>
        <div class="col-12 col-lg-3 text-left text-lg-right">
          <a :href="lp.acf.botao_1_secao_tabela[0].link">
            <button class="badge badge-pill mx-button blue-back color-white trtry-price">{{lp.acf.botao_1_secao_tabela[0].texto}}</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- form aqui -->
  <div class="bg-gray" id="form">
    <div class="container pt-60 pb-1">
      <h2 class="color-primary text-center form">Conheça todos os benefícios do Profiler</h2>
      <div class="hsform"></div>
      <p class="privacy color-primary">
        A Sólides nunca enviará qualquer tipo de spam. Consulte nossa 
        <strong>
          <a href="https://www.solides.com.br/politica-de-privacidade" class="color-primary">
            política de privacidade.
          </a>
        </strong>
      </p>
    </div>
  </div>
  <img class="frame p-r" src="@/assets/img/svg/frame-form.svg">
  <!-- melhor conteúdo sobre o profiler -->
  <div class="container pt-60 pb-2">
    <div class="row ml-0 bestcontent-profiler">
      <div class="to-left-30">
        <div class="vertical-pill green"></div>
      </div>
      <div class="text-left to-right-70 mt-30 mt-xs-0 mt-lg-5">
        <h2 v-html="lp.acf.titulo10" class="color-almostBlack bestContent"></h2>
      </div>
      <div class="blog-cards">
        <div class="container">
          <div class="cards row">
            <div class="col-12 col-lg-4">
              <a :href="lp.acf.link_1_secao_10">
                <div class="card">
                  <img :src="lp.acf.imagem_1_secao_10.sizes.large"
                  :alt="lp.acf.imagem_1_secao_10.alt"
                  class="img-header">
                  <h3 v-html="lp.acf.subtitulo_1_secao_10" class="title"></h3>
                  <p v-html="lp.acf.texto_1_secao_10" class="text"></p>
                </div>
              </a>
            </div>
            <div class="col-12 col-lg-4">
              <a :href="lp.acf.link_2_secao_10">
                <div class="card">
                  <img :src="lp.acf.imagem_2_secao_10.sizes.large"
                  :alt="lp.acf.imagem_2_secao_10.alt"
                  class="img-header">
                  <h3 v-html="lp.acf.subtitulo_2_secao_10" class="title"></h3>
                  <p v-html="lp.acf.texto_2_secao_10" class="text"></p>
                </div>
              </a>
            </div>
            <div class="col-12 col-lg-4">
              <a :href="lp.acf.link_1_secao_10">
                <div class="card">
                  <img :src="lp.acf.imagem_3_secao_10.sizes.large"
                  :alt="lp.acf.imagem_3_secao_10.alt"
                  class="img-header">
                  <h3 v-html="lp.acf.subtitulo_3_secao_10" class="title"></h3>
                  <p v-html="lp.acf.texto_3_secao_10" class="text"></p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TrialModal />
</div>
<div v-else>
  <Loading></Loading>
  <h4 class="text-center">{{mensagem}}</h4>
</div>
</template>

<script>
import TrialModal from '@/components/TrialModal.vue'
import Loading from "@/components/Loading.vue"
export default {
  name: 'Profiler',
  components: {
    Loading,
    TrialModal
  },
  data () {
    return {
      lpId: 814,
      lp: null,
      mensagem: '',
      /** os tooltips só funcionaram definindo previamente os indices
       * gera-los dinamicamente não tem funcionado
       */
      competenciasTooltip:{
        "0":false,
        "1":false,
        "2":false,
        "3":false,
        "4":false,
        "5":false,
        "6":false,
        "7":false,
        "8":false,
        "9":false,
        "10":false,
        "11":false,
        "12":false
      }
    }
  },
  mounted () {
    this.getLP()
    this.startHsForm('.hsform');
  },
  methods: {
    togleTooltip (flag, index) {
      if (typeof index == 'undefined') return new TypeError('É necessário um valor para index')
      if (flag == null) {
        this.competenciasTooltip[index] = !this.competenciasTooltip[index]
        return;
      }
      this.competenciasTooltip[index] = flag
    },
    getLP () {
      this.$http.getProdutosById(this.lpId)
      .then(res => {
        if (!res.ok)
          this.mensagem = "Erro ao carregar, por favor recarregue a página."
        return res.json()
      })
      .then(json => {
        this.lp = json
        document.title = this.lp.title.rendered
      });
    },
    startHsForm (selector) {
      setTimeout(() => {
        window.hbspt.forms.create({
          portalId: "6009739",
          formId: "aa14808c-6ee3-4ff3-9a79-aa376731e05b",
          target: selector
        });
      }, 5000);
    },
  }
}
</script>

<style lang="scss">
    @import '@/assets/scss/profiler-view.scss';
</style>
