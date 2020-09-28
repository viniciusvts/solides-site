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
  <ComoTemosAjudado
    :titulo="lp.acf.titulo6"
    :imgSrc="lp.acf.imagem_secao_4.sizes.large"
    :imgAlt="lp.acf.imagem_secao_4.alt"
    :titulo1="lp.acf.titulo4"
    :texto1="lp.acf.texto4"
    :analistas="lp.acf.mil_analistas"
    :relatorios="lp.acf.milhoes_relatorios"
    :parceiros="lp.acf.parceiros"
    :titulo2="lp.acf.titulo5"
    :texto2="lp.acf.texto5"
    :btnLink="lp.acf.botao_1_secao_5[0].link"
    :btnTexto="lp.acf.botao_1_secao_5[0].texto"
  />
  <img class="frame d-none d-lg-block" src="@/assets/img/svg/frame2.png" alt="">
  <img class="frame rotate-180 d-lg-none" src="@/assets/img/frame1.png" alt="">
  <ValidadoPor 
    :titulo="lp.acf.titulo6"
    :iframe="lp.acf.iframe6"
    :linkhref="lp.acf.botao_1_secao_6[0].link"
    :linkTexto="lp.acf.botao_1_secao_6[0].texto"
  />
  <Simples 
    :titulo="lp.acf.titulo7"
    :imgs="lp.acf.workflow_comprar7"
    :linkhref="lp.acf.botao_1_secao_7[0].link"
    :linkTexto="lp.acf.botao_1_secao_7[0].texto"
  />
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
  <TabelaPrecos 
    :titulo="lp.acf.tabela_titulo"
    :txtDestaq="lp.acf.tabela_texto_destaque"
    :imgSrc="lp.acf.tabela_imagem_destaque.sizes.large"
    :imgAlt="lp.acf.tabela_imagem_destaque.alt"
    :tblPreco="lp.acf.tabela_precos"
    :linkhref="lp.acf.botao_1_secao_tabela[0].link"
    :linkTexto="lp.acf.botao_1_secao_tabela[0].texto"
  />
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
  <MelhoresConteudos 
    :titulo="lp.acf.titulo10"
    :link1="lp.acf.link_1_secao_10"
    :img1Src="lp.acf.imagem_1_secao_10.sizes.large"
    :img1Alt="lp.acf.imagem_1_secao_10.alt"
    :sub1="lp.acf.subtitulo_1_secao_10"
    :texto1="lp.acf.texto_1_secao_10"
    :link2="lp.acf.link_2_secao_10"
    :img2Src="lp.acf.imagem_2_secao_10.sizes.large"
    :img2Alt="lp.acf.imagem_2_secao_10.alt"
    :sub2="lp.acf.subtitulo_2_secao_10"
    :texto2="lp.acf.texto_2_secao_10"
    :link3="lp.acf.link_3_secao_10"
    :img3Src="lp.acf.imagem_3_secao_10.sizes.large"
    :img3Alt="lp.acf.imagem_3_secao_10.alt"
    :sub3="lp.acf.subtitulo_3_secao_10"
    :texto3="lp.acf.texto_3_secao_10"
  />
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
import ValidadoPor from "@/components/ValidadoPor.vue"
import ComoTemosAjudado from "@/components/ComoTemosAjudado.vue"
import Simples from "@/components/Simples.vue"
import MelhoresConteudos from "@/components/MelhoresConteudos.vue"
import TabelaPrecos from "@/components/TabelaPrecos.vue"
export default {
  name: 'Profiler',
  components: {
    Loading,
    TrialModal,
    ValidadoPor,
    ComoTemosAjudado,
    Simples,
    MelhoresConteudos,
    TabelaPrecos
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
    // aguarda um tempo para renderizar e manda alinha ao id se houver
    setTimeout(this.hasHash, 1000)
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
    hasHash () {
      const id = window.location.hash.substr(1)
      if (!id) return
      const elem = document.getElementById(id)
      if (!elem) return
      window.scrollTo(0, elem.getBoundingClientRect().top)
    }
  }
}
</script>

<style lang="scss">
    @import '@/assets/scss/profiler-view.scss';
</style>
