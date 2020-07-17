<template>
  <div v-if="pageData" class="pesquisa-clima-view">
    <PesquisaDeClimaHead :data="pageData.acf.primeira_dobra" />
    <TitleH2Center class="pt-160" :text="pageData.acf.titulo_dobra" />
    <RetencaoDeTalentos :data="pageData.acf.segunda_dobra" />
    <AlinhaEspectativas :data="pageData.acf.terceira_dobra" />
    <PersonalizacaoPesquisa :data="pageData.acf.quarta_dobra" />
    <Automacao :data="pageData.acf.quinta_dobra" />
    <PesquisasDiversas :data="pageData.acf.sexta_dobra" />
    <RelatorioDeResultados :data="pageData.acf.setima_dobra" />
    <AutomatizeRS :backGray="true" :data="pageData.acf.cta" />
    <div class="gray"></div>
  </div>
  <div v-else>
    <Loading></Loading>
    <h4 class="text-center">{{mensagem}}</h4>
  </div>
</template>
<script>
import PesquisaDeClimaHead from '@/components/PesquisaDeClimaHead.vue'
import TitleH2Center from '@/components/TitleH2Center.vue'
import RetencaoDeTalentos from '@/components/RetencaoDeTalentos.vue'
import AlinhaEspectativas from '@/components/AlinhaEspectativas.vue'
import PersonalizacaoPesquisa from '@/components/PersonalizacaoPesquisa.vue'
import Automacao from '@/components/Automacao.vue'
import PesquisasDiversas from '@/components/PesquisasDiversas.vue'
import RelatorioDeResultados from '@/components/RelatorioDeResultados.vue'
import AutomatizeRS from '@/components/AutomatizeRS.vue'
import Loading from "@/components/Loading.vue"
export default {
  name: "PesquisaClima",
  components: {
    PesquisaDeClimaHead,
    TitleH2Center,
    RetencaoDeTalentos,
    AlinhaEspectativas,
    PersonalizacaoPesquisa,
    Automacao,
    PesquisasDiversas,
    RelatorioDeResultados,
    AutomatizeRS,
    Loading
  },
  data () {
    return {
      pageId: 566,
      pageData: null
    }
  },
  created () {
    this.getPost();
  },
  methods: {
    getPost () {
      this.$http.getProdutosById(this.pageId)
      .then(res => res.json() )
      .then(json => {
        this.pageData = json
      })
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/pesquisa-clima-view.scss';
    .gray{
        background: #F3F3F3;
        width: 100%;
        height: 300px;
        position: absolute;
    }
</style>