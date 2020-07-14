<template>
  <div v-if="pageData" class="avaliacao-desempenho-view">
    <AvaliacaoDesenpenhoHead :data="pageData.acf.primeira_dobra" />
    <TitleH2Center class="pt-160" :text="pageData.acf.titulo_dobra" />
    <Personalizacao :data="pageData.acf.segunda_dobra" />
    <CombinacaoPerfeita :data="pageData.acf.terceira_dobra" />
    <Avaliacoes90a360 :data="pageData.acf.quarta_dobra" />
    <HistoricoAvaliacoes :data="pageData.acf.quinta_dobra" />
    <AutomatizeRS :backGray="true" :data="pageData.acf.cta" />
    <div class="gray"></div>
  </div>
  <div v-else>
    <Loading></Loading>
    <h4 class="text-center">{{mensagem}}</h4>
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
import Loading from "@/components/Loading.vue"
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
    Loading
  },
  data () {
    return {
      pageId: 314,
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
    @import '@/assets/scss/avaliacao-desempenho-view.scss';
    .gray{
        background: #F3F3F3;
        width: 100%;
        height: 300px;
        position: absolute;
    }
</style>