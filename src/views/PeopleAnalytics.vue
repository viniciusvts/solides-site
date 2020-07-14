<template>
  <div v-if="pageData" class="people-analytics-view">
    <PeopleAnalyticsHead :data="pageData.acf.primeira_dobra" />
    <TitleH2Center class="pt-160" :text="pageData.acf.titulo_dobra" />
    <ComparacaoDePerfis :data="pageData.acf.segunda_dobra" />
    <AnaliseDeGrupo :data="pageData.acf.terceira_dobra" />
    <BuscaPerfilSemelhante :data="pageData.acf.quarta_dobra" />
    <EngenhariaDeCargos :data="pageData.acf.quinta_dobra" />
    <Dashboard :data="pageData.acf.sexta_dobra" />
    <AutomatizeRS :backwhite="true" :data="pageData.acf.cta" />
  </div>
  <div v-else>
    <Loading></Loading>
    <h4 class="text-center">{{mensagem}}</h4>
  </div>
</template>
<script>
import PeopleAnalyticsHead from '@/components/PeopleAnalyticsHead.vue'
import TitleH2Center from '@/components/TitleH2Center.vue'
import ComparacaoDePerfis from '@/components/ComparacaoDePerfis.vue'
import AnaliseDeGrupo from '@/components/AnaliseDeGrupo.vue'
import BuscaPerfilSemelhante from '@/components/BuscaPerfilSemelhante.vue'
import EngenhariaDeCargos from '@/components/EngenhariaDeCargos.vue'
import Dashboard from '@/components/Dashboard.vue'
import AutomatizeRS from '@/components/AutomatizeRS.vue'
import Loading from "@/components/Loading.vue"
export default {
  name: "PeopleAnalytics",
  components: {
    PeopleAnalyticsHead,
    TitleH2Center,
    ComparacaoDePerfis,
    AnaliseDeGrupo,
    BuscaPerfilSemelhante,
    EngenhariaDeCargos,
    Dashboard,
    AutomatizeRS,
    Loading
  },
  data () {
    return {
      pageId: 481,
      pageData: null
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
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/people-analytics-view.scss';
</style>