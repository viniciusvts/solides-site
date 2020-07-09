<template>
    <div class="people-analytics-view">
        <PeopleAnalyticsHead />
        <TitleH2Center text="Conheça a ferramenta" class="pt-160" />
        <ComparacaoDePerfis />
        <AnaliseDeGrupo />
        <BuscaPerfilSemelhante />
        <EngenhariaDeCargos />
        <Dashboard />
        <AutomatizeRS :backwhite="true"/>
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
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/people-analytics-view.scss';
</style>