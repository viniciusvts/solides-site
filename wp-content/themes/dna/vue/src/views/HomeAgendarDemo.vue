<template>
  <div v-if="pageData" class="home">
    <RHPoderoso :data="pageData.acf.primeira_dobra" />
    <PrincipaisClientes :data="pageData.acf.principais_clientes" />
    <div class="fix-pill">
      <TitleH2Center :text="pageData.acf.titulo_dobra" />
      <RecrutamentoSelecao :data="pageData.acf.terceira_dobra" />
    </div>
    <AvaliacaoDesempenho :data="pageData.acf.quarta_dobra" />
    <PesquisaClima :data="pageData.acf.quinta_dobra" />
    <BoxCultural :data="pageData.acf.sexta_dobra" />
    <PeopleAnalytics :data="pageData.acf.setima_dobra" />
    <Profiler :data="pageData.acf.oitava_dobra" />
    <SoftwareRH :data="pageData.acf.segunda_dobra" />
    <Depoimento :data="pageData.acf.depoimentos" />
    <ComoEstamosAjudando :data="pageData.acf.como_ajudamos" />
    <AutomatizeRS :data="pageData.acf.cta" />
    <BlogCards :data="pageData.acf.conteudos" />
    <TrialModal />
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
const RHPoderoso = () => import('@/components/RHPoderosoDemo.vue')
const SoftwareRH = () => import('@/components/SoftwareRHDemo.vue')
const TitleH2Center = () => import('@/components/TitleH2Center.vue')
const RecrutamentoSelecao = () => import('@/components/RecrutamentoSelecaoDemo.vue')
const AvaliacaoDesempenho = () => import('@/components/AvaliacaoDesempenhoDemo.vue')
const PesquisaClima = () => import('@/components/PesquisaClimaDemo.vue')
const BoxCultural = () => import('@/components/BoxCulturalDemo.vue')
const PeopleAnalytics = () => import('@/components/PeopleAnalyticsDemo.vue')
const Profiler = () => import('@/components/ProfilerDemo.vue')
const PrincipaisClientes = () => import('@/components/PrincipaisClientesDemo.vue')
const Depoimento = () => import('@/components/Depoimento.vue')
const ComoEstamosAjudando = () => import('@/components/ComoEstamosAjudandoDemo.vue')
const AutomatizeRS = () => import('@/components/AutomatizeRSDemo.vue')
const BlogCards = () => import('@/components/BlogCards.vue')
const TrialModal = () => import('@/components/TrialModal.vue')
const Loading = () => import("@/components/Loading.vue")
export default {
  name: 'HomeAgendarDemo',
  components:{
    RHPoderoso,
    SoftwareRH,
    TitleH2Center,
    RecrutamentoSelecao,
    AvaliacaoDesempenho,
    PesquisaClima,
    BoxCultural,
    PeopleAnalytics,
    Profiler,
    PrincipaisClientes,
    Depoimento,
    ComoEstamosAjudando,
    AutomatizeRS,
    BlogCards,
    TrialModal,
    Loading
  },
  data () {
    return {
      pageId: 1772,
      pageData: null,
    }
  },
  created () {
    this.getPost();
    // Check browser support
    if (typeof(Storage) !== "undefined") {
      sessionStorage.setItem("versao","Versão B");
    }
  },
  methods: {
    setTrialOff () {
      this.TrialModal = false
    },
    getPost () {
      this.$http.getPageById(this.pageId)
      .then(res => res.json() )
      .then(json => {
        this.pageData = json
      })
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/home_B.scss';
</style>
