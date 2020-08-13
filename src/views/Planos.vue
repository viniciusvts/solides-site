<template>
  <div v-if="pageData" class="planos-page">
    <h1 class="text-center mb-5 mb-lg-4" v-html="pageData.title.rendered"></h1>
    <div class="container mb-lg-5">
      <div class="row">
        <div v-for="(plan, index) in pageData.acf.planos_e_precos" :key="index"
        class="col-12 col-lg-3 produtos-card">
          <div class="item mb-lg-4" :class="{'active': plan.active}">
            <div class="title" v-on:click="plan.active = !plan.active">
              <h2 v-html="plan.titulo"></h2>
              <p v-html="plan.sub"></p>
            </div>
            <div class="preco d-none d-lg-block" v-html="plan.precodetalhes"></div>
            <div class="mensagem d-none d-lg-block" v-html="plan.mensagem"></div>
            <a :href="plan.botao.url" class=" d-none d-lg-block">
              <button class="badge badge-pill purple mx-auto mb-lg-60">{{plan.botao.title}}</button>
            </a>
            <div class="back-white d-none d-lg-block"></div>
            <div class="detalhes" v-html="plan.texto"></div>
          </div>
        </div>
      </div>
    </div>
    <img src="/img/frame-form-home.9e9f2cf8.svg" alt="" class="frame tr-rotz-180 d-none d-lg-block">
    <AutomatizeRS :backGray="true" :data="pageData.acf.cta" />
    <div class="gray"></div>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import AutomatizeRS from '@/components/AutomatizeRS.vue'
import Loading from "@/components/Loading.vue"
export default {
  name: 'Planos',
  components: {
    AutomatizeRS,
    Loading,
  },
  data () {
    return {
      pageId: 573,
      pageData: null,
      sanfona: null,
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
        //aqui adiciono uma flag para funcionar a sanfona
        for (const plan of json.acf.planos_e_precos) {
          plan.active = false
        }
        this.pageData = json
      })
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/planos-page.scss';
  .gray{
        background: #F3F3F3;
        width: 100%;
        height: 300px;
        position: absolute;
    }
</style>