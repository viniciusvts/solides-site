<template>
  <div v-if="pageData" class="obrigado">
    <div class="container">
      <div class="row">
        <div class="vertical-pill blue"></div>
        <div class="d-none d-lg-block col-1"></div>
        <div class="col-8 col-lg-9">
            <h2>Obrigado</h2>
            <div class="text">Um de nossos especialistas entrará em contato com você o mais breve possível</div>
            <div class="buttons">
                <a href="#">
                    <button class="badge badge-pill purple-back">Retornar a página inicial</button>
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
  @import '@/assets/scss/obrigado.scss';
</style>