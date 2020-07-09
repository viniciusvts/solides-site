<template>
    <div class="box-cultural-view">
        <BoxCulturalHead />
        <TitleH2Center text="Conheça a ferramenta" class="pt-160" />
        <Desempenho />
        <Comportamento />
        <ReportCards />
        <AutomatizeRS :backwhite="true" />
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
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/box-cultural-view.scss';
</style>