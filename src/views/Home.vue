<template>
  <div class="home">
    <RHPoderoso />
    <SoftwareRH />
    <TitleH2Center text="Conheça nossa plataforma" />
    <RecrutamentoSelecao />
    <AvaliacaoDesempenho />
    <PesquisaClima />
    <BoxCultural />
    <PeopleAnalytics />
    <Profiler />
    <PrincipaisClientes />
    <Depoimento />
    <ComoEstamosAjudando />
    <AutomatizeRS />
    <BlogCards />
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
  },
  data () {
    return {
      routes: null
    }
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/home.scss';
</style>
