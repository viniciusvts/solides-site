<template>
  <div v-if="pageData" class="home">
    <SobreHead :data="pageData.acf.primeira_dobra" />
    <MissaoVisao :data="pageData.acf.primeira_dobra" />
    <SolucaoParaEmpresas :data="pageData.acf.primeira_dobra" />
    <Valores :data="pageData.acf.primeira_dobra" />
    <ResponsabilidadeSocial :data="pageData.acf.primeira_dobra" />
    <GestaoConsColabs :data="pageData.acf.primeira_dobra" />
    <TransfGestaoTalentos :data="pageData.acf.primeira_dobra" />
    <Premiacoes :data="pageData.acf.primeira_dobra" />
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
      pageId: 2,
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
