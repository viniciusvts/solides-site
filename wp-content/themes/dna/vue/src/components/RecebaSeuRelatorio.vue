
<template>
  <div :id="hashForShow" class="trial-modal rec-seu-rel-rotat" :class="{'d-block': show}">
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto row modal-out col-lg-6">
          <div class="close blue" @click="removeHash">x</div>
          <div class="head mx-auto">
            <h3 v-html="data.titulo"></h3>
            <p v-html="data.texto"></p>
          </div>
          <form 
          :action="$http.baseURL + 'wp-json/dna_theme/v1/calculadora-de-rotatividade'" 
          method="post" 
          class="mx-auto" 
          @submit.prevent="sendForm">
            <div class="col-12 col-lg-11 mx-auto row">
              <input class="col-12" type="text" required v-model="form.firstname"
                  name="firstname" id="firstname" placeholder="Nome">
              <input class="col-12" type="email" required v-model="form.email"
                  name="email" id="email" placeholder="E-mail">
              <input class="col-12" type="text" required v-model="form.company"
                  name="company" id="company" placeholder="Empresa">
              <select class="col-12" name="cargorh" id="cargorh" required v-model="form.cargorh" 
                  v-on:change="changeShowDigiteCargo">
                <option value="" hidden="">Cargo</option>
                <option value="Analista de RH">Analista de RH</option>
                <option value="Business Partner de RH">Business Partner de RH</option>
                <option value="Coordenador de RH">Coordenador de RH</option>
                <option value="Diretor de RH">Diretor de RH</option>
                <option value="Gerente de RH">Gerente de RH</option>
                <option value="Sócio/CEO">Sócio/CEO</option>
                <option value="Coach">Coach</option>
                <option value="Consultor de RH">Consultor de RH</option>
                <option value="Estagiário de RH">Estagiário de RH</option>
                <option value="Professor">Professor</option>
                <option value="Estudante">Estudante</option>
                <option value="Buscando recolocação">Buscando recolocação</option>
                <option value="Outros">Outros</option>
              </select>
              <input class="jobtitle col-12" type="text" v-model="form.jobtitle" required
                  v-if="showJobTitle" name="jobtitle" id="jobtitle" placeholder="Digite Seu Cargo">
              <input class="col-12" type="text" required v-model="form.phone"
                  name="phone" id="phone" placeholder="Telefone com DDD ou Whatsapp"
                  v-on:keyup="execMascara">
                  <input type="hidden" name="taxa_de_rotatividade" v-model="form.taxa_de_rotatividade">
                  <input type="hidden" name="qtde_de_colaboradores" v-model="form.qtde_de_colaboradores">
                  <input type="hidden" name="custo_de_rotatividade" v-model="form.custo_de_rotatividade">
              <div v-html="mensagem" class="msg"></div>
              <button 
              type="submit" 
              class="ml-auto mt-2 blue" 
              v-html="data.botao"></button>
            </div>
          </form>
          <!-- o objetivo aqui é pegar o token do hubspot e enviar com o form superior -->
          <div id="hs-receba-relatorio" style="display:none;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecebaSeuRelatorio",
  data () {
    return {
      /** hash que vai ativar esse modal */
      hashForShow: 'receba-seu-relatorio',
      mensagem: '',
      show: false,
      showJobTitle: false,
      form: {
        firstname: '',
        email: '',
        company: '',
        cargorh: '',
        jobtitle: '',
        phone: '',
        taxa_de_rotatividade: '',
        qtde_de_colaboradores: '',
        custo_de_rotatividade: '',
      }
    }
  },
  props: {
    data: Object,
    numFunc: Number,
    fatAno: Number,
    txRot: Number,
    custoRotat: Number,
  },
   mounted () {
    // aciona o form do hubspot para ter acesso ao cookie
    this.startHsForm('#hs-receba-relatorio');
    // verifico o hash, e já adiciono o evento para o hash
    this.hashOpenOrClose()
    window.addEventListener('hashchange', this.hashOpenOrClose)
    //inicio os valores hiden do form
    this.form.qtde_de_colaboradores = this.numFunc
    this.form.custo_de_rotatividade = this.custoRotat
    this.form.taxa_de_rotatividade = this.txRot
  },
  methods: {
    removeHash(){
      window.location.hash = ''
    },
    execMascara (evt) {
      let v = evt.target.value;
      v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
      v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
      v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca - depois dos 4 digitos após ()
      evt.target.value = v;
    },
    moedaToNumber (valor) {
      if(typeof valor == 'number') return valor
      if(valor === ""){
         valor =  0;
      }else{
         valor = valor.replace("$","");//remove cifrao
         valor = valor.replace("R","");// remove R
         valor = valor.replace(".","");
         valor = valor.replace(",",".");
         valor = parseFloat(valor);
      }
      return valor;
    },
    sendForm (evt) {
      this.mensagem = '<p>Enviando dados...</p>'
      //envia para o wp
      this.$http.sendFormToWP(evt.target.action, this.form)
      .then( resp => {
        if (resp.ok){
          console.log('sendFormToWP => ', resp)
          //faz algumas formatações
          this.form.taxa_de_rotatividade = Number(this.form.taxa_de_rotatividade)
          this.form.qtde_de_colaboradores = Number(this.form.qtde_de_colaboradores)
          this.form.custo_de_rotatividade = this.moedaToNumber(this.form.custo_de_rotatividade)
          this.mensagem = '<p>Gerando relatório...</p>'
          return this.$http.sendToHSWithId('8a26943f-04e7-4cd3-b703-3c804c6abdb4', this.form)
        } else {
          this.mensagem = '<p>Houve um erro, tente novamente mais tarde.</p>'
        }
      })
      //retorno da chamada sendToHSWithId
      .then(resp => {
        console.log('sendToHSResp => ', resp)
        if (resp.status == 400) { return {"badrequest": true} }
        if (resp.ok) { return resp.json() }
        else { this.mensagem = '<p>Houve um erro ao gerar o relatório, tente novamente mais tarde</p>' }
      })
      .then(json => {
        console.log('sendToHS => ', json)
        if (typeof json.badrequest != 'undefined') {
          this.mensagem = '<p>Houve um erro, email inválido ou já cadastrado.</p>'
        } else if (typeof json.inlineMessage != 'undefined') {
          // mando uma mensagem no form e crio o user na plataforma Sólides
          this.mensagem = '<p>Relatório criado, redirecionando...</p>'
          this.$emit('relatorioOk', true);
        } else {
          this.mensagem = '<p>Houve um erro ao gerar o relatório, tente novamente mais tarde</p>'
        }
      })
    },
    startHsForm (selector) {
      setTimeout(() => {
        window.hbspt.forms.create({
          portalId: "6009739",
          formId: "8a26943f-04e7-4cd3-b703-3c804c6abdb4",
          target: selector
        });
      }, 2000);
    },
    hashOpenOrClose () {
      const hashValue = window.location.hash.substr(1)
      if (hashValue == this.hashForShow) this.show = true
      else this.show = false
    },
    changeShowDigiteCargo () {
      this.showJobTitle = this.form.cargorh == "Outros";
    }
  },
  watch: {
    numFunc: function(val){
      this.form.qtde_de_colaboradores = val
    },
    txRot: function(val){
      this.form.taxa_de_rotatividade = val
    },
    custoRotat: function(val){
      this.form.custo_de_rotatividade = val
    }
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/trial-modal.scss';
</style>
