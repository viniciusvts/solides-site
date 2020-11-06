<template>
  <div v-if="pageData" class="imprensa over-x-h">
    <div class="cabecalho">
      <h1 class="titulo" v-html="pageData.acf.cabecalho.titulo" onClick="window.location.reload()"></h1>
      <h2 class="subtitulo" v-html="pageData.acf.cabecalho.subtitulo" ></h2>
      <div class="search" v-if="verMais">
        <input class="search-box" type="text" placeholder="Pesquisar" @change="filterImprensa()" v-model="pesquisaTexto"/>
        <div class="data-filtro">
          <div class="data-titulo">
            <p>Filtrar por data:</p>
          </div>
          <div class="data-content">
            <input id="DataInicio" class="dt-filtro" type="text" v-model="dtInicio" @change="filterImprensa();" v-on:keyup="execMascaraData" placeholder="dd/mm/aaaa" />
            <!--input id="DataInicio" class="dt-filtro" type="date" v-model="dtInicio" @change="filterImprensa();" placeholder="dd/mm/aaaa" /-->
            <p>a</p>
            <input id="DataFim" class="dt-filtro" type="text" v-model="dtFim" @change="filterImprensa();" v-on:keyup="execMascaraData" placeholder="dd/mm/aaaa" />
            <!-- input id="DataFim" class="dt-filtro" type="date" v-model="dtFim" @change="filterImprensa();" placeholder="dd/mm/aaaa" /-->
          </div>
        </div>
      </div>
    </div>
    <Reportagens v-if="!verMais || pageName=='reportagem'" :data="dataFiltered.reportagens" :verMais="verMais" @varMaisChange="varMaisChange($event)" />
    <ArtigosBlog v-if="!verMais || pageName=='blog'" :data="dataFiltered.blog" :verMais="verMais" @varMaisChange="varMaisChange($event)" />
    <RHNews v-if="!verMais" :data="dataFiltered.news" />
    <div class="no-result" v-show="showNoResult">
      <h1 class="no-result-title" >Nenhum resultado encontrado!</h1>
      <h2 class="no-result-desc" >Tente novamente utilizando outros parâmetros.</h2>
    </div>
    <div class="contato-imprensa">
      <h1 class="title-contato">Contato:</h1>
      <p class="info" >imprensa@solides.com.br</p>
      <p class="info" >contato@piarcomunicacao.com.br</p>
      <p class="info" >(11) 4304-1222</p>
    </div>
    <div class="gray"></div>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue"
import Reportagens from "@/components/Reportagens.vue"
import ArtigosBlog from "@/components/ArtigosBlog.vue"
import RHNews from "@/components/RHNews.vue"

export default {
  name: 'Sala de Imprensa',
  components:{
    Reportagens,
    ArtigosBlog,
    RHNews,
    Loading
  },
  data () {
    return {
      pageId: 1572,
      pageData: null,
      dataFiltered: null,
      pageName: "",
      verMais: false,
      pesquisaTexto: "",
      dtInicio: "",
      dtFim: "",
      deParaDate: {
        "janeiro": "January",
        "fevereiro": "February",
        "março": "March",
        "abril": "April",
        "maio": "May",
        "junho": "June",
        "julho": "July",
        "agosto": "August",
        "setembro": "September",
        "outubro": "October",
        "novembro": "November",
        "dezembro": "December"
      }
    }
  },
  created () {
    this.getPost();
  },
  computed: {
    showNoResult(){
      return ((this.dataFiltered.reportagens.length==0 && this.pageName=="reportagem") || (this.dataFiltered.blog.artigos.length==0 && this.pageName=="blog"))
    },
    isDesktop: function () {
      return screen.width > 991
    },
    isTablet: function () {
      return screen.width > 767
    }
  },
  methods: {
    getPost () {
      this.$http.getPageById(this.pageId)
      .then(res => res.json() )
      .then(json => {
        this.pageData = json;
        this.pageData.acf.reportagens.sort(this.compareDate);
        this.pageData.acf.blog.artigos.sort(this.compareDate);
        this.dataFiltered = this.deepClone(this.pageData.acf);
      })
    },
    deepClone(obj){
      return JSON.parse(JSON.stringify(obj));
    },
    compareDate(a,b){ 
      let dtA = this.getDate(a.data);
      let dtB = this.getDate(b.data);
      if(dtA > dtB){
        return -1;
      }
      if(dtA < dtB){
        return 1;
      }
      return 0;
    },
    getDate(str){
      let data = str.split(" ");
      data[0] = this.deParaDate[data[0]]; 
      return new Date(data.join(" "));
    },
    formatDateBr(str){
      let data = str.split("/");
      return new Date(data[2],data[1]-1,data[0]);
    },
    varMaisChange(event){
      this.verMais = true;
      window.scrollTo(0, 0);
      this.pageName = event;
    },
    filterImprensa(){
      this.dataFiltered.reportagens = this.pageData.acf.reportagens;
      this.dataFiltered.blog.artigos = this.pageData.acf.blog.artigos;
      if(this.pageName=="reportagem"){
        this.dataFiltered.reportagens = this.filterTexto(this.dataFiltered.reportagens);
      }
      if(this.pageName=="blog"){
        this.dataFiltered.blog.artigos = this.filterTexto(this.dataFiltered.blog.artigos);
      }
    },
    filterTexto(blocoData){
      return blocoData.filter( obj => {
        let exist = true;
        if(!obj.titulo.toUpperCase().includes(this.pesquisaTexto.toUpperCase())){
          if(!obj.tag.toUpperCase().includes(this.pesquisaTexto.toUpperCase())){
            exist = false;
          }
        }
        if(this.dtInicio){
          let dtini = this.formatDateBr(this.dtInicio);
          if(this.getDate(obj.data) < dtini){
            exist=false;
          }
        }
        if(this.dtFim){
          let dtfim = this.formatDateBr(this.dtFim);
          if(this.getDate(obj.data) > dtfim){
            exist=false;
          }
        }
        return exist;
      });
    },
    execMascaraData (evt) {
      let v = evt.target.value;
      v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
      v=v.replace(/^(\d{8})(\d)/g,"$1"); //Remove mais de 8 digitos
      // Coloca a / da data
      v=v.replace(/^(\d{2})(\d)/g,"$1/$2");
      v=v.replace(/^(\d{2}\/)(\d{2})(\d)/g,"$1$2/$3");
      evt.target.value = v;
    }

  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/sala-imprensa.scss';
</style>
