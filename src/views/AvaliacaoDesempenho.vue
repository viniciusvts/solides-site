<template>
    <div class="avaliacao-desempenho-view">
        <AvaliacaoDesenpenhoHead />
        <TitleH2Center text="Conheça a ferramenta" class="pt-160" />
        <Personalizacao />
        <CombinacaoPerfeita />
        <Avaliacoes90a360 />
        <HistoricoAvaliacoes />
        <AutomatizeRS :backGray="true" />
        <div class="gray"></div>
    </div>
</template>
<script>
import AvaliacaoDesenpenhoHead from '@/components/AvaliacaoDesenpenhoHead.vue'
import TitleH2Center from '@/components/TitleH2Center.vue'
import Personalizacao from '@/components/Personalizacao.vue'
import CombinacaoPerfeita from '@/components/CombinacaoPerfeita.vue'
import Avaliacoes90a360 from '@/components/Avaliacoes90a360.vue'
import HistoricoAvaliacoes from '@/components/HistoricoAvaliacoes.vue'
import AutomatizeRS from '@/components/AutomatizeRS.vue'
export default {
  name: "AvaliacaoDesempenho",
  components: {
    AvaliacaoDesenpenhoHead,
    TitleH2Center,
    Personalizacao,
    CombinacaoPerfeita,
    Avaliacoes90a360,
    HistoricoAvaliacoes,
    AutomatizeRS,
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/avaliacao-desempenho-view.scss';
    .gray{
        background: #F3F3F3;
        width: 100%;
        height: 300px;
        position: absolute;
    }
</style>