<template>
  <div v-if="pageData" class="materiais over-x-h">
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
    <div class="gray"></div>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import MateriaisRH from '@/components/MateriaisRH.vue'
import Ebook from '@/components/Ebook.vue'
import Videos from '@/components/Videos.vue'
import Cursos from '@/components/Cursos.vue'
import Loading from "@/components/Loading.vue"

export default {
  name: 'Materiais',
  components:{
    MateriaisRH,
    Ebook,
    Videos,
    Cursos,
    Loading
  },
  data () {
    return {
      pageId: 1233,
      pageData: null,
      dataFiltered: null,
      formato: "",
      categoria: "",
      pesquisaTexto: "",
      verMais: false,
    }
  },
  created () {
    this.getPost();
  },
  computed: {
    showNoResult(){
      return !(this.showBloco('video') || this.showBloco('curso') || this.showBloco('ebook'))
    }
  },
  methods: {
    getPost () {
      this.$http.getPageById(this.pageId)
      .then(res => res.json() )
      .then(json => {
        this.pageData = json;
        this.dataFiltered = this.deepClone(json.acf);
      })
    },
    pesquisaChange(event){
      this.pesquisaTexto = event;
      this.filterMateriais();
    },
    categoriaChange(event){
      this.categoria = event;
      this.filterMateriais();
    },
    formatoChange(event){
      this.formato = event;
      this.filterMateriais();
    },
    varMaisChange(event){
      this.verMais = event;
    },
    deepClone(obj){
      return JSON.parse(JSON.stringify(obj));
    },
    showBloco(name){
      let show = false;
      if(name == "ebook"){
        if(this.formato == '' || (this.formato != 'video' && this.formato != 'curso' )){
          if(this.dataFiltered.ebook.materiais.length>0)
            show = true;
        }
      }
      if(name == "video"){
        if(this.formato == '' || this.formato == 'Vídeo' ){
          if(this.dataFiltered.videos.embeds.length>0 && !this.verMais)
            show = true;
        }
      }
      if(name == "curso"){
        if(this.formato == '' || this.formato == 'Curso' ){
          if(this.dataFiltered.cursos.cursos.length>0 && !this.verMais)
            show = true;
        }
      }
      return show;
    },
    filterMateriais(){
      this.verMais = false;
      this.dataFiltered.ebook.materiais = this.pageData.acf.ebook.materiais;
      this.dataFiltered.videos.embeds = this.pageData.acf.videos.embeds;
      this.dataFiltered.cursos.cursos = this.pageData.acf.cursos.cursos;
      if(this.showBloco('ebook')){
        if(this.pesquisaTexto != "" ) {
          this.dataFiltered.ebook.materiais = this.filterTexto(this.dataFiltered.ebook.materiais);
        }
        if(this.categoria != ""){
          this.dataFiltered.ebook.materiais = this.filterCategoria(this.dataFiltered.ebook.materiais);
        }
        if(this.formato != ""){
          this.dataFiltered.ebook.materiais = this.filterFormato(this.dataFiltered.ebook.materiais);
        }
      }

      if(this.showBloco('video')){
        if(this.pesquisaTexto != "" ) {
          this.dataFiltered.videos.embeds = this.filterTexto(this.dataFiltered.videos.embeds);
        }
        if(this.categoria != ""){
          this.dataFiltered.videos.embeds = this.filterCategoria(this.dataFiltered.videos.embeds);
        }
      }
      
      if(this.showBloco('curso')){
        if(this.pesquisaTexto != "" ) {
          this.dataFiltered.cursos.cursos = this.filterTexto(this.dataFiltered.cursos.cursos);
        }
        if(this.categoria != ""){
          this.dataFiltered.cursos.cursos = this.filterCategoria(this.dataFiltered.cursos.cursos);
        }
      }
    },
    filterTexto(blocoData){
      return blocoData.filter( mate => {
        let exist = false;
        if(mate.tags){
          mate.tags.forEach(tg => {
            if(tg.tag.toUpperCase() == this.pesquisaTexto.toUpperCase())
              exist = true;
          });
        }
        if(mate.titulo.toUpperCase().includes(this.pesquisaTexto.toUpperCase())){
          exist = true;
        }
        return exist;
      });
    },
    filterCategoria(blocoData){
      return blocoData.filter( mate => {
        let exist = false;
        if(mate.categoria == this.categoria){
          exist = true;
        }
        return exist;
      });
    },
    filterFormato(blocoData){
      return blocoData.filter( mate => {
        let exist = false;
        if(mate.tipo == this.formato){
          exist = true;
        }
        return exist;
      });
    },
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/materiais.scss';
</style>
