<template>
  <div v-if="pageData" class="home">
    <RHPoderoso :data="pageData.acf.primeira_dobra" />
    <SoftwareRH :data="pageData.acf.segunda_dobra" />
    <TitleH2Center :text="pageData.acf.titulo_dobra" />
    <RecrutamentoSelecao :data="pageData.acf.terceira_dobra" />
    <AvaliacaoDesempenho :data="pageData.acf.quarta_dobra" />
    <PesquisaClima :data="pageData.acf.quinta_dobra" />
    <BoxCultural :data="pageData.acf.sexta_dobra" />
    <PeopleAnalytics :data="pageData.acf.setima_dobra" />
    <Profiler :data="pageData.acf.oitava_dobra" />
    <PrincipaisClientes :data="pageData.acf.principais_clientes" />
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
const RHPoderoso = () => import('@/components/RHPoderoso.vue')
const SoftwareRH = () => import('@/components/SoftwareRH.vue')
const TitleH2Center = () => import('@/components/TitleH2Center.vue')
const RecrutamentoSelecao = () => import('@/components/RecrutamentoSelecao.vue')
const AvaliacaoDesempenho = () => import('@/components/AvaliacaoDesempenho.vue')
const PesquisaClima = () => import('@/components/PesquisaClima.vue')
const BoxCultural = () => import('@/components/BoxCultural.vue')
const PeopleAnalytics = () => import('@/components/PeopleAnalytics.vue')
const Profiler = () => import('@/components/Profiler.vue')
const PrincipaisClientes = () => import('@/components/PrincipaisClientes.vue')
const Depoimento = () => import('@/components/Depoimento.vue')
const ComoEstamosAjudando = () => import('@/components/ComoEstamosAjudando.vue')
const AutomatizeRS = () => import('@/components/AutomatizeRS.vue')
const BlogCards = () => import('@/components/BlogCards.vue')
const TrialModal = () => import('@/components/TrialModal.vue')
const Loading = () => import("@/components/Loading.vue")
export default {
  name: 'Home',
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
      pageId: 2,
      pageData: null,
    }
  },
  created () {
    this.getPost();
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
  @import '@/assets/scss/home.scss';
</style>
