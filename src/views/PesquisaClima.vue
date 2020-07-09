<template>
    <div class="pesquisa-clima-view">
        <PesquisaDeClimaHead />
        <TitleH2Center text="Conheça a ferramenta" class="pt-160" />
        <RetencaoDeTalentos />
        <AlinhaEspectativas />
        <PersonalizacaoPesquisa />
        <Automacao />
        <PesquisasDiversas />
        <RelatorioDeResultados />
        <AutomatizeRS :backGray="true" />
        <div class="gray"></div>
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