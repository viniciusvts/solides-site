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
import RHPoderoso from '@/components/RHPoderoso.vue'
import SoftwareRH from '@/components/SoftwareRH.vue'
import TitleH2Center from '@/components/TitleH2Center.vue'
import RecrutamentoSelecao from '@/components/RecrutamentoSelecao.vue'
import AvaliacaoDesempenho from '@/components/AvaliacaoDesempenho.vue'
import PesquisaClima from '@/components/PesquisaClima.vue'
import BoxCultural from '@/components/BoxCultural.vue'
import PeopleAnalytics from '@/components/PeopleAnalytics.vue'
import Profiler from '@/components/Profiler.vue'
import PrincipaisClientes from '@/components/PrincipaisClientes.vue'
import Depoimento from '@/components/Depoimento.vue'
import ComoEstamosAjudando from '@/components/ComoEstamosAjudando.vue'
import AutomatizeRS from '@/components/AutomatizeRS.vue'
import BlogCards from '@/components/BlogCards.vue'
import TrialModal from '@/components/TrialModal.vue'
import Loading from "@/components/Loading.vue"
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
