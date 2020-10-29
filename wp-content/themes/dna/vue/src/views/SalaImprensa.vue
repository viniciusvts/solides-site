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
            <input class="dt-filtro" type="date" v-model="dtInicio" @change="filterImprensa()" />
            <p>a</p>
            <input class="dt-filtro" type="date" v-model="dtFim" @change="filterImprensa()" />
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
    <!--
    <MateriaisRH 
      :data="pageData.acf.primeira_dobra"  
      @pesquisaChange="pesquisaChange($event)" 
      @categoriaChange="categoriaChange($event)" 
      @formatoChange="formatoChange($event)" />
    <Ebook v-show="showBloco('ebook')" :data="dataFiltered.ebook" :pesquisaTexto="pesquisaTexto" :verMais="verMais" @varMaisChange="varMaisChange($event)"/>
    <Videos v-show="showBloco('video')" :data="dataFiltered.videos" :pesquisaTexto="pesquisaTexto" />
    <Cursos v-show="showBloco('curso')" :data="dataFiltered.cursos" :pesquisaTexto="pesquisaTexto" />
    <div v-show="!this.verMais" class="universidade-btn">
      <div class="no-result" v-show="showNoResult">
        <h1 class="no-result-title" >Nenhum resultado encontrado!</h1>
        <h2 class="no-result-desc" >Tente novamente utilizando outros parâmetros ou visite nossa universidade.</h2>
      </div>
      <a :href="pageData.acf.visite_universidade.link">
          <button 
            class="botao" 
            v-html="pageData.acf.visite_universidade.texto" 
            :id="pageData.acf.visite_universidade.id" />
        </a>
    </div>
    -->
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
        console.log(this.dataFiltered);
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
          exist = false;
        }
        if(this.dtInicio){
          let dtini = new Date(this.dtInicio);
          //corrige fuso horário
          dtini = new Date(dtini.getTime() + (dtini.getTimezoneOffset()*60000));
          if(this.getDate(obj.data) < dtini){
            exist=false;
          }
        }
        if(this.dtFim){
          let dtfim = new Date(this.dtFim);
          //corrige fuso horário
          dtfim = new Date(dtfim.getTime() + (dtfim.getTimezoneOffset()*60000));
          if(this.getDate(obj.data) > dtfim){
            exist=false;
          }
        }
        return exist;
      });
    },
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/sala-imprensa.scss';
</style>
