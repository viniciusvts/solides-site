<template>
  <div v-if="pageData" class="home">
    <SobreHead :data="pageData.acf.head" :title="pageData.title.rendered" />
    <MissaoVisao :data="pageData.acf.missao_visao_valor" />
    <SolucaoParaEmpresas :data="pageData.acf.solucao" />
    <Valores :data="pageData.acf.valores" />
    <ResponsabilidadeSocial :data="pageData.acf.resp_social" />
    <GestaoConsColabs :data="pageData.acf.gestao" />
    <TransfGestaoTalentos :data="pageData.acf.transf_analytics" />
    <Premiacoes :data="pageData.acf.premiacoes" />
    <div class="gray"></div>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import SobreHead from '@/components/SobreHead.vue'
import MissaoVisao from '@/components/MissaoVisao.vue'
import SolucaoParaEmpresas from '@/components/SolucaoParaEmpresas.vue'
import Valores from '@/components/Valores.vue'
import ResponsabilidadeSocial from '@/components/ResponsabilidadeSocial.vue'
import GestaoConsColabs from '@/components/GestaoConsColabs.vue'
import TransfGestaoTalentos from '@/components/TransfGestaoTalentos.vue'
import Premiacoes from '@/components/Premiacoes.vue'
import Loading from "@/components/Loading.vue"
export default {
  name: 'Sobre',
  components:{
    SobreHead,
    MissaoVisao,
    SolucaoParaEmpresas,
    Valores,
    ResponsabilidadeSocial,
    GestaoConsColabs,
    TransfGestaoTalentos,
    Premiacoes,
    Loading,
  },
  data () {
    return {
      pageId: 722,
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
        // aguarda um tempo para renderizar e manda alinha ao id se houver
        setTimeout(this.hasHash, 1000)
      })
    },
    hasHash () {
      const id = window.location.hash.substr(1)
      if (!id) return
      const elem = document.getElementById(id)
      if (!elem) return
      window.scrollTo(0, elem.getBoundingClientRect().top)
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/home.scss';
    .gray{
      background: #F3F3F3;
      width: 100%;
      height: 300px;
      position: absolute;
    }
</style>
