<template>
  <div v-if="pageData" class="contato container">
    <h1 class="text-center" v-html="pageData.title.rendered"></h1>
    <div class="first-text text-center" v-html="pageData.acf.text">
    </div>
    <form :action="$http.baseURL + 'wp-json/dna_theme/v1/contato'" method="post" class="mx-auto">
      <div class="col-12 col-lg-11 mx-auto row">
        <input class="col-12" type="text" required
            name="nome" id="nome" placeholder="Nome">
        <input class="col-12" type="email" required
            name="email" id="email" placeholder="E-mail corporativo">
        <input class="col-12" type="text" required
            name="telefone" id="telefone" placeholder="Telefone com DDD ou Whatsapp"
            v-on:keyup="execMascara">
        <textarea name="mensagem" id="mensagem" cols="80" rows="6">Escreva sua mensagem aqui</textarea>
        <input type="hidden" name="uriOrigem" :value="uriOrigem">
        <button type="submit" class="ml-auto mt-2">Enviar</button>
      </div>
    </form>
    <p class="detail">Faça como os clientes Sólides e transforme seu RH</p>
  </div>
  <div v-else>
    <Loading></Loading>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue"
export default {
  name: 'Contato',
  components: {
    Loading,
  },
  data () {
    return {
      pageId: 706,
      pageData: null,
      uriOrigem : location.pathname
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
  @import '@/assets/scss/contato.scss';
</style>
