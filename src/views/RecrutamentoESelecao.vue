<template>
    <div class="recrutamento-e-selecao-view">
        <RecrutamentoESelecaoHead />
        <TitleH2Center text="Conheça a ferramenta" class="pt-160" />
        <ProcessoSeletivo />
        <Recrutamento />
        <CriarVagas />
        <Automacao />
        <ListaDeVagas />
        <BancoDeTalentos />
        <Curriculo />
        <AutomatizeRS :backwhite="true"/>
        <div class="gray"></div>
    </div>
</template>
<script>
import RecrutamentoESelecaoHead from '@/components/RecrutamentoESelecaoHead.vue'
import TitleH2Center from '@/components/TitleH2Center.vue'
import ProcessoSeletivo from '@/components/ProcessoSeletivo.vue'
import Recrutamento from '@/components/Recrutamento.vue'
import CriarVagas from '@/components/CriarVagas.vue'
import Automacao from '@/components/Automacao.vue'
import ListaDeVagas from '@/components/ListaDeVagas.vue'
import BancoDeTalentos from '@/components/BancoDeTalentos.vue'
import Curriculo from '@/components/Curriculo.vue'
import AutomatizeRS from '@/components/AutomatizeRS.vue'
export default {
  name: "RecrutamentoESelecao",
  components: {
    RecrutamentoESelecaoHead,
    TitleH2Center,
    ProcessoSeletivo,
    Recrutamento,
    CriarVagas,
    Automacao,
    ListaDeVagas,
    BancoDeTalentos,
    Curriculo,
    AutomatizeRS,
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/recrutamento-e-selecao-view.scss';
</style>