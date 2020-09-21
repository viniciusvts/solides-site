<template>
  <div v-if="pageData" class="materiais">
    <MateriaisRH :data="pageData.acf.primeira_dobra" />
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import MateriaisRH from '@/components/MateriaisRH.vue'
import Loading from "@/components/Loading.vue"

export default {
  name: 'Materiais',
  components:{
    MateriaisRH,
    Loading
  },
  data () {
    return {
      pageId: 1233,
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
        console.log(this.pageData.acf.primeira_dobra);
      })
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/materiais.scss';
</style>
