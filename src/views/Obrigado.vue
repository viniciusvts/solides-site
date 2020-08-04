<template>
  <div v-if="pageData" class="obrigado">
    <div class="container">
      <div class="row">
        <div class="vertical-pill blue"></div>
        <div class="d-none d-lg-block col-1"></div>
        <div class="col-8 col-lg-9">
            <h1 v-html="pageData.title.rendered"></h1>
            <div class="text" v-html="pageData.acf.texto"></div>
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