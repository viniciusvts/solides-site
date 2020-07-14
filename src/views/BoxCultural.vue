<template>
    <div class="box-cultural-view">
        <BoxCulturalHead :data="pageData.acf.primeira_dobra" />
        <TitleH2Center class="pt-160" :text="pageData.acf.titulo_dobra" />
        <Desempenho :data="pageData.acf.segunda_dobra" />
        <Comportamento :data="pageData.acf.terceira_dobra" />
        <ReportCards :data="pageData.acf.quarta_dobra" />
        <AutomatizeRS :backwhite="true" :data="pageData.acf.cta" />
    </div>
</template>
<script>
import BoxCulturalHead from '@/components/BoxCulturalHead.vue'
import TitleH2Center from '@/components/TitleH2Center.vue'
import Desempenho from '@/components/Desempenho.vue'
import Comportamento from '@/components/Comportamento.vue'
import ReportCards from '@/components/ReportCards.vue'
import AutomatizeRS from '@/components/AutomatizeRS.vue'
export default {
  name: "BoxCultural",
  components: {
    BoxCulturalHead,
    TitleH2Center,
    Desempenho,
    Comportamento,
    ReportCards,
    AutomatizeRS,
  },
  data () {
    return {
      pageId: 405,
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
  @import '@/assets/scss/box-cultural-view.scss';
</style>