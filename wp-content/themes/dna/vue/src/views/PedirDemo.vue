<template>
  <div v-if="pageData" class="pedir-demo container">
      <div class="row primeira-dobra">
        <div class="col-12 col-lg-6">
          <h1 v-html="pageData.title.rendered"></h1>
          <h2 v-html="pageData.acf.text"></h2>
          <h3 class="d-none d-lg-block" v-html="pageData.acf.funcionamento_titulo"></h3>
          <ul class="d-none d-lg-block">
            <li v-for="(item, index) in pageData.acf.funcionamento_lista" :key="index" v-html="item.texto"></li>
          </ul>
        </div>
        <div class="col-12 col-lg-6">
          <div v-show="isLoadingForm" class="loading-form">
            <img src="@/assets/img/svg/form-loading.svg" alt="Logo da sólides animado" srcset="">
          </div>
          <div v-show="!isLoadingForm" id="hsform-pedirdemo"></div>
          <h3 class="d-lg-none" v-html="pageData.acf.funcionamento_titulo"></h3>
          <ul class="d-lg-none">
            <li v-for="(item, index) in pageData.acf.funcionamento_lista" :key="index" v-html="item.texto"></li>
          </ul>
        </div>
      </div>
      <!-- Imagens-->
      <div class="clientes">
        <h3 class="titulo-clientes" v-html="pageData.acf.empresas_titulo"></h3>
        <img class="img-clientes align-lg-vertical-middle" v-for="(img, index) in pageData.acf.imagens_empresas" :key="index" :src="img.imagem.url" :alt="img.imagem.alt">
      </div>
      <!-- depoimento-->
      <div class="depoimento row">
        <div class="col-12 col-lg-9">
          <div class="text">
            <img class="asp begin" src="@/assets/img/asp-begin.png" alt="aspas begin">
            <img class="asp end" src="@/assets/img/asp-end.png" alt="aspas end">
            <p v-html="pageData.acf.texto_depoimento" class="font-roboto"></p>
          </div>
        </div>
        <div class="text-center col-12 col-lg-3 align-lg-vertical">
          <img class="profile" :src="pageData.acf.foto_depoimento.sizes.medium" :alt="pageData.acf.foto_depoimento.alt">
          <p v-html="pageData.acf.nome_depoimento" class="profile color-primary font-roboto"></p>
          <p v-html="pageData.acf.cargo_depoimento" class="identidade font-roboto"></p>
        </div>
      </div>
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
      uriOrigem : location.pathname,
      isLoadingForm: true
    }
  },
  mounted () {
    this.getPost();
    this.startHsForm('#hsform-pedirdemo');
  },
  methods: {
    getPost () {
       this.$http.getPageById(this.pageId)
      .then(res => res.json() )
      .then(json => {
        this.pageData = json;
      })
    },
    execMascara (evt) {
      let v = evt.target.value;
      v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
      v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
      v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca - depois dos 4 digitos após ()
      evt.target.value = v;
    },
    startHsForm (selector) {
      setTimeout(() => {
        window.hbspt.forms.create({
          portalId: "6009739",
          //formId: "bc5d109b-a72b-4a16-a31f-7aea6d8917c2",
          formId: "081425a3-83f7-47ae-b8cb-c90e8de38121",
          target: selector,
          onFormReady: function(){
            if (typeof(Storage) !== "undefined") {
              console.log(sessionStorage.getItem("versao"));
              //jQuery('input[name="pagina_que_originou_a_conversao"]').val(document.referrer()).change();
            }
          }
        });
        setTimeout(()=>{
          this.isLoadingForm = false;
        },500);
      }, 3000);
    },
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/pedir-demo.scss';
</style>
