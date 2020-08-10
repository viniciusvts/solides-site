<template>
  <div v-if="pageData" class="falar-com-um-especialista container">
    <h1 v-html="pageData.title.rendered"></h1>
    <p class="first" v-html="pageData.acf.text"></p>
    <h2 class="mx-auto" v-html="pageData.acf.sub"></h2>
    <form :action="$http.baseURL + 'wp-json/dna_theme/v1/falar-com-especialista'" method="post" class="mx-auto">
      <div class="col-12 col-lg-11 mx-auto row">
        <input class="col-12" type="text" 
            name="nome" id="nome" placeholder="Nome">
        <input class="col-12" type="email" 
            name="email" id="email" placeholder="E-mail corporativo">
        <input class="col-12" type="text" 
            name="telefone" id="telefone" placeholder="Telefone com DDD ou Whatsapp"
            v-on:keyup="execMascara">
        <input class="col-12" type="text" 
            name="cargo" id="cargo" placeholder="Cargo">
        <button type="submit" class="ml-auto">Falar com um especialista</button>
      </div>
    </form>
    <p class="detail" v-html="pageData.acf.detalhe"></p>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue"
export default {
  name: 'FalarComEspecialista',
  components: {
    Loading,
  },
  data () {
    return {
      pageId: 698,
      pageData: null,
      form: {}
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
    execMascara (evt) {
      let v = evt.target.value;
      v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
      v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
      v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca - depois dos 4 digitos após ()
      evt.target.value = v;
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/falar-com-um-especialista.scss';
</style>
