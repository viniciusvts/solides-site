<template>
  <div v-if="pageData" class="calc-rotat">
    <div class="container">
      <div class="head">
        <h1 class="text-center d-none d-md-block mb-0" v-html="pageData.title.rendered"></h1>
        <div class="text" v-html="pageData.acf.texto_head"></div>
      </div>
      <div class="calc row">
        <div class="col-9 col-lg-5 left">
          <div class="campos">
            <label for="nFunc" v-html="pageData.acf.itens_calc.item_1"></label>
            <input type="number" name="nFunc" id="nFunc" placeholder="0">
          </div>
          <div class="campos">
            <label for="taxaRot" v-html="pageData.acf.itens_calc.item_2"></label>
            <input type="number" name="taxaRot" id="taxaRot" placeholder="43,1">
          </div>
          <div class="text" v-html="pageData.acf.itens_calc.anotacao"></div>
        </div>
        <div class="col-2 d-none d-lg-block bigGreenEqual">
          <span></span>
          <span></span>
        </div>
        <div class="col-12 col-lg-5 right">
          <div class="text" v-html="pageData.acf.itens_calc.custo"></div>
          <div class="resultado" :class="{'calculado': calculado}">
            <p>R$343.100,53</p>
          </div>
        </div>
        <div class="col-12 d-grid d-lg-flex">
          <button 
          v-if="!calculado || desktopScreen"
          @click="calculado = !calculado"
          class="blueBtn btn-calcular-agora"
          v-html="pageData.acf.botoes.calcular"></button>
          <a href="#receba-seu-relatorio" class="btn-receba-relatorio">
            <button 
            v-if="calculado"
            class="grenBtn"
            v-html="pageData.acf.botoes.receber"></button>
          </a>
        </div>
      </div>
    </div>
    <RecebaSeuRelatorio :data="pageData.acf.form" />
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import RecebaSeuRelatorio from '@/components/RecebaSeuRelatorio.vue'
import Loading from "@/components/Loading.vue"
export default {
  name: 'CalcRotat',
  components: {
    RecebaSeuRelatorio,
    Loading,
  },
  data () {
    return {
      pageId: 1278,
      pageData: null,
      calculado: false
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
  },
  computed: {
    desktopScreen() {
      return screen.width > 767
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/calcRotat.scss';
</style>