<template>
  <div class="contato container">
    <h1>A plataforma completa de RH com People Analytics e Gestão Comportamental</h1>
    <p class="first">Recrutamento e seleção, desenvolvimento e retenção <b>em um só lugar</b></p>
    <h2 class="mx-auto">Saiba como o seu RH pode <b>aumentar a produtividade em até 50%</b></h2>
    <form action="#" method="post" class="mx-auto">
      <div class="col-12 col-lg-11 mx-auto row">
        <input class="col-12" type="text" 
            name="name" id="name" placeholder="Nome">
        <input class="col-12" type="text" 
            name="name" id="name" placeholder="E-mail corporativo">
        <input class="col-12" type="text" 
            name="tel" id="tel" placeholder="Telefone com dd ou Whatsapp"
        v-on:keyup="execMascara">
        <input class="col-12" type="text" 
            name="cargo" id="cargo" placeholder="Cargo">
        <button type="submit" class="ml-auto">Falar com um especialista</button>
      </div>
    </form>
    <p class="detail">Faça como os clientes Sólides e transforme seu RH</p>
  </div>
</template>

<script>
export default {
  name: 'Contato',
  data () {
    return {
      form: {}
    }
  },
  methods: {
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
