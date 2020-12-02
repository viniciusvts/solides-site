<template>
  <div v-if="pageData" class="calc-rotat calc-produt">
    <div class="container">
      <div class="head">
        <h1 class="text-center d-none d-md-block mb-0" v-html="pageData.title.rendered"></h1>
        <div class="text" v-html="pageData.acf.texto_head"></div>
      </div>
      <div class="calc row">
        <div class="col-9 col-lg-5 left">
          <div class="campos">
            <label for="nFunc" v-html="pageData.acf.itens_calc.item_1"></label>
            <input type="number"
            min="1"
            step="1"
            name="nFunc"
            id="nFunc" 
            placeholder="0" 
            v-model="numFunc"
            @change="onChangeValues">
          </div>
          <div class="campos">
            <label for="fatAno" v-html="pageData.acf.itens_calc.item_2"></label>
            <input type="text"
            name="fatAno"
            id="fatAno" 
            placeholder="R$ 0" 
            v-model="fatAnoMsk"
            v-on:keyup="execMascaraMoeda"
            @change="onChangefatAno">
          </div>
          <div class="campos">
            <label for="taxaRot" v-html="pageData.acf.itens_calc.item_3"></label>
            <input type="number"
            min="1" 
            step=".1"
            name="taxaRot"
            id="taxaRot" 
            placeholder="0" 
            v-model="calcVars.media_taxa_rotatividade"
            @change="onChangeValues">
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
            <p>{{calculado}}</p>
          </div>
          <div class="text-chama" v-if="calculado" v-html="pageData.acf.itens_calc.chama_acao"></div>
        </div>
        <div class="col-12 d-grid d-lg-flex">
          <button 
          v-if="!calculado || desktopScreen"
          @click="calcula"
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
    <RecebaSeuRelatorio 
    :data="pageData.acf.form" 
    @relatorioOk="relatorioOk"
    :numFunc="numFunc"
    :fatAno="fatAno"
    :txRot="Number(calcVars.media_taxa_rotatividade)"
    :custoProd="calculado"
    formId="cc44ba8a-26d2-433d-809e-c777fb55e549"
    />
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import RecebaSeuRelatorio from '@/components/RecebaSeuRelatorio-produtividade.vue'
import Loading from "@/components/Loading.vue"
import calcRotat from '@/services/calcRotat.js'

export default {
  name: 'CalcProdut',
  mixins: [calcRotat],
  components: {
    RecebaSeuRelatorio,
    Loading,
  },
  data () {
    return {
      pageId: 1483,
      pageData: null,
      calculado: 0,
      fatAnoMsk: "R$ 0"
    }
  },
  created () {
    this.getPost();
  },
  methods: {
    getPost () {
      this.$http.getFerramentasById(this.pageId)
      .then(res => res.json() )
      .then(json => {
        this.pageData = json
        this.calcVars = json.acf.calc_vars
      })
    },
    calcula () {
      if (this.numFunc < 1 ) return alert('Preencha quantos funcionários possui.')
      if (this.fatAno < 1) this.fatAno = this.getFatAno()
      this.fatAnoMsk = this.fatAno.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
      this.calculado = this.calcularCustoTotalProdutividade(true)
    },
    relatorioOk (data) {
      if (data) {
        var url = '/ferramentas/produtividade-resultado/?'
        url += 'numFunc=' + this.numFunc
        url += '&fatAno=' + this.fatAno
        url += '&taxaRot=' + this.calcVars.media_taxa_rotatividade
        window.location = url
      }
    },
    onChangeValues () {
      this.calculado = 0
    },
    onChangefatAno(){
      this.onChangeValues()
      this.fatAnoMsk = this.fatAnoMsk.replace(/[\D]+/g,'');
      this.fatAno = Number(this.fatAnoMsk)/100;
      this.fatAnoMsk = this.fatAno.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' })
    },
    execMascaraMoeda (evt) {
      let v = evt.target.value;
      evt.target.value = this.formatReal(v);
    },
    formatReal(obj){
      obj=obj.replace(/\D/g,""); //Remove tudo o que não é dígito
      obj=obj.replace(/([0-9]{2})$/g, ",$1");
      obj=obj.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
      return "R$ " + obj;
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
  @import '@/assets/scss/calcProdut.scss';
</style>