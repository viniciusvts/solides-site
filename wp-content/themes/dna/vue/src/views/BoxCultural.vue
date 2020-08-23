<template>
  <div v-if="pageData" class="box-cultural-view">
    <BoxCulturalHead :data="pageData.acf.primeira_dobra" />
    <TitleH2Center class="pt-160" :text="pageData.acf.titulo_dobra" />
    <Desempenho :data="pageData.acf.segunda_dobra" />
    <Comportamento :data="pageData.acf.terceira_dobra" />
    <ReportCards :data="pageData.acf.quarta_dobra" />
    <AutomatizeRS :backwhite="true" :data="pageData.acf.cta" />
    <TrialModal />
  </div>
  <div v-else>
    <Loading></Loading>
    <h4 class="text-center">{{mensagem}}</h4>
  </div>
</template>
<script>
import BoxCulturalHead from '@/components/BoxCulturalHead.vue'
import TitleH2Center from '@/components/TitleH2Center.vue'
import Desempenho from '@/components/Desempenho.vue'
import Comportamento from '@/components/Comportamento.vue'
import ReportCards from '@/components/ReportCards.vue'
import AutomatizeRS from '@/components/AutomatizeRS.vue'
import TrialModal from '@/components/TrialModal.vue'
import Loading from "@/components/Loading.vue"
export default {
  name: "BoxCultural",
  components: {
    BoxCulturalHead,
    TitleH2Center,
    Desempenho,
    Comportamento,
    ReportCards,
    AutomatizeRS,
    TrialModal,
    Loading
  },
  data () {
    return {
      pageId: 564,
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
  @import '@/assets/scss/box-cultural-view.scss';
</style>