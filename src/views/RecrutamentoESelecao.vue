<template>
  <div v-if="pageData" class="recrutamento-e-selecao-view">
    <RecrutamentoESelecaoHead :data="pageData.acf.primeira_dobra" />
    <TitleH2Center class="pt-160" :text="pageData.acf.titulo_dobra" />
    <ProcessoSeletivo :data="pageData.acf.segunda_dobra" />
    <Recrutamento :data="pageData.acf.terceira_dobra" />
    <CriarVagas :data="pageData.acf.quarta_dobra" />
    <Automacao :data="pageData.acf.quinta_dobra" />
    <ListaDeVagas :data="pageData.acf.sexta_dobra" />
    <BancoDeTalentos :data="pageData.acf.setima_dobra" />
    <Curriculo :data="pageData.acf.oitava_dobra" />
    <AutomatizeRS :backwhite="true" :data="pageData.acf.cta" />
  </div>
  <div v-else>
    <Loading></Loading>
    <h4 class="text-center">{{mensagem}}</h4>
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
import Loading from "@/components/Loading.vue"
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
    Loading
  },
  data () {
    return {
      pageId: 295,
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
    @import '@/assets/scss/recrutamento-e-selecao-view.scss';
</style>