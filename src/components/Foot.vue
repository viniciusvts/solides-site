<template>
<div v-if="footer">
  <img class="w-100" src="@/assets/img/svg/footer-frame.svg" alt="">
  <footer class="over-x-h">
    <div class="container">
      <div class="row px-4">
        <div class="col-12">
          <img class="logo-menu mb-50" 
          src="@/assets/img/solides-header-logo-white.png" 
          alt="logo da sólides branco">
        </div>
        <div class="col-12 col-lg-4 mb-30">
          <ul class="list-inline">
            <li v-for="(foo, index) in menuFooter1Content" :key="index">
              <a v-html="foo.title" :href="foo.url"></a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-5 mb-30">
          <ul class="list-inline numbers">
            <li v-for="(foo, index) in menuFooter2Content" :key="index">
              <a v-html="foo.title" :href="foo.url"></a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-3 mb-30">
          <ul class="list-inline social">
            <li v-for="(foo, index) in menuFooter3Content.redes_sociais" :key="index">
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
      footer: null,
      menuFooter1Name: 'menu-footer-1',
      menuFooter2Name: 'menu-footer-2',
      menuFooter3Name: 'menu-footer-3',
      menuFooter1Content: null,
      menuFooter2Content: null,
      menuFooter3Content: null,
    }
  },
  mounted() {
    this.getFoo()
  },
  methods: {
    getFoo () {
      // pegar menu 1
      this.$http.getMenuByLocationName(this.menuFooter1Name)
      .then(res => {
        if (!res.ok)
          return
        return res.json()
      })
      .then(json => {
        this.menuFooter1Content = json
      });
      // pegar menu 2
      this.$http.getMenuByLocationName(this.menuFooter2Name)
      .then(res => {
        if (!res.ok)
          return
        return res.json()
      })
      .then(json => {
        this.menuFooter2Content = json
      });
      // pegar menu 3
      this.$http.getMenuByLocationName(this.menuFooter3Name, true)
      .then(res => {
        if (!res.ok)
          return
        return res.json()
      })
      .then(json => {
        this.menuFooter3Content = json
      });

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
