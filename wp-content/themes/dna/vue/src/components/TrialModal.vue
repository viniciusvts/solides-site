
<template>
  <div :id="hashForShow" class="trial-modal" :class="{'d-block': show}">
    <div class="container">
      <div class="row">
        <div class="col-10 mx-auto row modal-out col-lg-6">
          <div class="close" @click="removeHash">x</div>
          <div class="head mx-auto">
            <h3>Crie sua conta</h3>
            <p>Faça a gestão de pessoas para RH da HR Tech que mais cresce no Brasil</p>
          </div>
          <form action="#" method="post" class="mx-auto" @submit.prevent="sendForm">
            <div class="col-12 col-lg-11 mx-auto row">
              <input class="col-12" type="text" required v-model="form.firstname"
                  name="firstname" id="firstname" placeholder="Nome">
              <input class="col-12" type="email" required v-model="form.email"
                  name="email" id="email" placeholder="E-mail corporativo">
              <input class="col-12" type="text" v-model="form.company"
                  name="company" id="company" placeholder="Empresa">
              <select class="col-12" name="cargorh" id="cargorh" required v-model="form.cargorh">
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
              <select class="col-12" name="tamanho_de_empresa" required v-model="form.tamanho_de_empresa">
                <option value="" hidden="">Tamanho da empresa</option>
                <option value="Até 14 funcionários">Até 14 funcionários</option>
                <option value="De 15 a 29 funcionários">De 15 a 29 funcionários</option>
                <option value="De 30 a 49 funcionários">De 30 a 49 funcionários</option>
                <option value="De 50 a 99 funcionários">De 50 a 99 funcionários</option>
                <option value="De 100 a 199 funcionários">De 100 a 199 funcionários</option>
                <option value="De 200 a 499 funcionários">De 200 a 499 funcionários</option>
                <option value="De 500 a 999 funcionários">De 500 a 999 funcionários</option>
                <option value="1000 funcionários ou mais">1000 funcionários ou mais</option>
              </select>
              <input class="col-12" type="text" required v-model="form.phone"
                  name="phone" id="phone" placeholder="Telefone com DDD ou Whatsapp"
                  v-on:keyup="execMascara">
              <div v-html="mensagem" class="msg"></div>
              <button type="submit" class="ml-auto mt-2">Criar conta</button>
            </div>
          </form>
          <!-- o objetivo aqui é pegar o token do hubspot e enviar com o form superior -->
          <div id="hs-trial" style="display:none;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrialModal",
  data () {
    return {
      /** hash que vai ativar esse modal */
      hashForShow: 'criar-conta',
      mensagem: '',
      show: false,
      form: {
        firstname: '',
        email: '',
        company: '',
        cargorh: '',
        tamanho_de_empresa: '',
        phone: '',
      }
    }
  },
  created () {
    // aciona o form do hubspot para ter acesso ao cookie
    this.startHsForm('#hs-trial');
    // verifico o hash, e já adiciono o evento para o hash
    this.hashOpenOrClose()
    window.addEventListener('hashchange', this.hashOpenOrClose)
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
    sendForm () {
      this.$http.sendToHS(this.form)
      .then( resp => {
        if (resp.status == 200){
          return resp.json()
        } else {
          this.mensagem = '<p>Houve um erro, tente novamente mais tarde.</p>'
        }
      })
      .then(json => {
        console.log('sendForm => ', json)
        // mando uma mensagem no form e crio o user na plataforma Sólides
        this.mensagem = '<p>Criando usuário...</p>'
        this.sendToTrial()
      })
    },
    sendToTrial () {
      this.$http.sendToTrial(this.form)
      .then( resp => resp.json())
      .then(json => {
        console.log('trial => ', json)
        // sexiste mensagem de erro:
        if (typeof json.errors != 'undefined') {
          this.mensagem = '<p>' + json.errors +'</p>'
        } else {
          this.mensagem = '<p>Usuário criado, redirecionando</p>'
          window.location.href = json.link
        }
      })
    },
    startHsForm (selector) {
      setTimeout(() => {
        window.hbspt.forms.create({
          portalId: "6009739",
          formId: "30d1dad9-c9dc-4d98-bf18-ec30d2c19da2",
          target: selector
        });
      }, 2000);
    },
    hashOpenOrClose () {
      const hashValue = window.location.hash.substr(1)
      if (hashValue == this.hashForShow) this.show = true
      else this.show = false
    }
  }
};
</script>

<style lang="scss">
  @import '@/assets/scss/trial-modal.scss';
</style>
