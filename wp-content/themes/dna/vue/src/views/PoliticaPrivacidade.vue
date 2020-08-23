<template>
  <div v-if="pageData" class="politica-privacidade container">
    <h1 v-html="pageData.title.rendered"></h1>
    <h2 v-html="pageData.acf.sub"></h2>
    <div class="text" v-html="pageData.acf.texto"></div>
    <p class="nota-final" v-html="pageData.acf.detalhe"></p>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue"
export default {
  name: 'PoliticaPrivacidade',
  components: {
    Loading,
  },
  data () {
    return {
      pageId: 3,
      pageData: null,
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
    },
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/politica-privacidade.scss';
</style>
