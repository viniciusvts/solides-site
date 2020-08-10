<template>
  <div v-if="pageData" class="pedir-demo container">
    <h1 class="text-center" v-html="pageData.title.rendered"></h1>
    <p class="first text-center" v-html="pageData.acf.text"></p>
    <form :action="$http.baseURL + 'wp-json/dna_theme/v1/pedir-uma-demo/'" method="post" class="mx-auto">
      <div class="col-12 col-lg-11 mx-auto row">
        <input class="col-12" type="text" required
            name="nome" id="nome" placeholder="Nome">
        <input class="col-12" type="email" required
            name="email" id="email" placeholder="E-mail corporativo">
        <input class="col-12" type="text" 
            name="empresa" id="empresa" placeholder="Empresa">
        <select class="col-12" name="cargo" id="cargo" required>>
          <option value="" selected disabled>Cargo</option>
          <option value="CEO">CEO</option>
          <option value="Sócio">Sócio</option>
          <option value="Diretor">Diretor</option>
          <option value="RH">RH</option>
        </select>
        <select class="col-12" name="numColab" id="numColab" required>
          <option value="" selected disabled>Número de colaboradores</option>
          <option value="1-2">1-2</option>
          <option value="3-5">3-5</option>
          <option value="6-15">6-15</option>
          <option value="16-30">16-30</option>
          <option value="30-50">30-50</option>
          <option value="50+">50+</option>
        </select>
        <input class="col-12" type="text" required
            name="telefone" id="telefone" placeholder="Telefone com DDD ou Whatsapp"
            v-on:keyup="execMascara">
        <button type="submit" class="ml-auto mt-2">Pedir demontração</button>
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
  name: 'PedirDemo',
  components: {
    Loading,
  },
  data () {
    return {
      pageId: 688,
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
  @import '@/assets/scss/pedir-demo.scss';
</style>
