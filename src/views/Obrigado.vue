<template>
  <div v-if="pageData" class="obrigado">
    <div class="container">
      <div class="row">
        <div class="vertical-pill blue"></div>
        <div class="d-none d-lg-block col-1"></div>
        <div class="col-8 col-lg-9">
            <h1 v-html="pageData.title.rendered"></h1>
            <div class="text" v-html="message"></div>
            <div class="buttons">
                <a :href="pageData.acf.link.url">
                    <button class="badge badge-pill purple-back" v-html="pageData.acf.link.title"></button>
                </a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>
<script>
export default {
  name: "Obrigado",
  data () {
    return {
      pageId: 773,
      pageData: null,
      message: null
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
        this.setMessage()
      })
    },
    setMessage () {
      for (const item of this.pageData.acf.mensagem) {
        // pega o parametro url de origem
        const urlParams = new URLSearchParams(location.search)
        const uriOrigem = urlParams.get('uriOrigem')
        // procura as urls cadastradas e define a mensagem
        if (item.pagina_de_origem.includes(uriOrigem)){
          this.message = item.texto
        }
      }
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/obrigado.scss';
</style>