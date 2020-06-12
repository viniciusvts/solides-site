<template>
<div>
  <img class="w-100" src="@/assets/img/svg/footer-frame.svg" alt="">
  <footer class="over-x-h">
    <div v-if="footer" class="container">
      <div class="row px-4">
        <div class="col-12">
          <img class="logo-menu mb-50" 
          src="@/assets/img/solides-header-logo-white.png" 
          alt="logo da sólides branco">
        </div>
        <div class="col-12 col-lg-4 mb-30">
          <ul class="list-inline">
            <li v-for="(foo, index) in footer.acf.footer_1" :key="index">
              <a v-html="foo.texto" :href="foo.link"></a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-5 mb-30">
          <ul class="list-inline numbers">
            <li v-for="(foo, index) in footer.acf.footer_2" :key="index">
              <a v-html="foo.texto" :href="foo.link"></a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-3 mb-30">
          <ul class="list-inline social">
            <li v-for="(foo, index) in footer.acf.footer_3" :key="index">
              <a :href="foo.link">
                <img :src="foo.imagem.sizes.medium" alt="linkedin">
                {{foo.texto}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {
      footerId: 6,
      footer: null
    }
  },
  mounted() {
    this.getFoo()
  },
  methods: {
    getFoo () {
      this.$http.getLPsById(this.footerId)
      .then(res => {
        if (!res.ok)
          return
        return res.json()
      })
      .then(json => {
        this.footer = json
      });
    },
  }
}
</script>

<style lang="scss">
    @import '@/assets/scss/foot.scss';
</style>
