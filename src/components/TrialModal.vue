
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
              <input class="col-12" type="text" required v-bind="form.nome"
                  name="nome" id="nome" placeholder="Nome">
              <input class="col-12" type="email" required v-bind="form.email"
                  name="email" id="email" placeholder="E-mail corporativo">
              <input class="col-12" type="text" v-bind="form.empresa"
                  name="empresa" id="empresa" placeholder="Empresa">
              <select class="col-12" name="cargo" id="cargo" required v-bind="form.cargo">
                <option value="" selected disabled>Cargo</option>
                <option value="CEO">CEO</option>
                <option value="Sócio">Sócio</option>
                <option value="Diretor">Diretor</option>
                <option value="RH">RH</option>
              </select>
              <select class="col-12" name="numColab" id="numColab" required v-bind="form.numColab">
                <option value="" selected disabled>Número de colaboradores</option>
                <option value="1-2">1-2</option>
                <option value="3-5">3-5</option>
                <option value="6-15">6-15</option>
                <option value="16-30">16-30</option>
                <option value="30-50">30-50</option>
                <option value="50+">50+</option>
              </select>
              <input class="col-12" type="text" required v-bind="form.telefone"
                  name="tel" id="tel" placeholder="Telefone com DDD ou Whatsapp"
                  v-on:keyup="execMascara">
              <button type="submit" class="ml-auto mt-2">Criar conta</button>
            </div>
          </form>
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
      show: false,
      form: {
        nome: '',
        email: '',
        empresa: '',
        cargo: '',
        numColab: '',
        telefone: '',
      }
    }
  },
  created () {
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
      this.evtFormSend()
      console.log(this.form)
      // em caso de erro de envio
      setTimeout(this.evtFormError(), 2000)
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
