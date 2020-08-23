<template>
  <div v-if="pageData" class="nao-encontrado">
    <div class="message">
      <div class="vertical-pill green"></div>
      <div class="col-9 col-lg-12">
        <h1 v-html="pageData.title.rendered"></h1>
        <h2 v-html="pageData.acf.titulo_h2"></h2>
      </div>
    </div>
    <div class="ir-para-inicial">
      <div class="text" v-html="pageData.acf.texto">
      </div>
      <a :href="pageData.acf.link.url">
        <button class="badge purple-back" v-html="pageData.acf.link.title"></button>
      </a>
    </div>
    <div class="gray"></div>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue"
export default {
  name: 'PaginaNaoEncontrada',
  components:{
    Loading
  },
  data () {
    return {
      pageId: 679,
      pageData: null,
    }
  },
  created () {
    this.getPost();
    this.bgTransparentOnScroll()
  },
  methods: {
    setTrialModalOn () {
      this.TrialModal = true
    },
    setTrialOff () {
      this.TrialModal = false
    },
    getPost () {
      this.$http.getPageById(this.pageId)
      .then(res => res.json() )
      .then(json => {
        this.pageData = json
      })
    },
    bgTransparentOnScroll () {
      const nav = document.querySelector('nav')
      //primeiro já deixo tranparente
      nav.classList.add('bgtransp')
      // depois baseado no scroll lnaço a classe
      window.addEventListener('scroll', () => {
        console.log(window.scrollY)
        if (window.scrollY <= 300) nav.classList.add('bgtransp')
        else nav.classList.remove('bgtransp')
      })
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/pagina-nao-encotrada.scss';
</style>
