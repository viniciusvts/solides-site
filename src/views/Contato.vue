<template>
  <div class="contato container">
    <h1 class="text-center">Como podemos ajudar?</h1>
    <div class="first-text text-center">
    <p>
      Use o formulário, telefones ou whatsapp
    </p>
    <p>
      <b>Whatsapp: +55 31 99862-1861 (11) 4765-6674 | (21) 4042-3914 (31) 3262-3464</b>
    </p>
    </div>
    <form action="#" method="post" class="mx-auto">
      <div class="col-12 col-lg-11 mx-auto row">
        <input class="col-12" type="text" required
            name="name" id="name" placeholder="Nome">
        <input class="col-12" type="email" required
            name="email" id="email" placeholder="E-mail corporativo">
        <input class="col-12" type="text" required
            name="tel" id="tel" placeholder="Telefone com DDD ou Whatsapp"
            v-on:keyup="execMascara">
        <textarea name="mensagem" id="mensagem" cols="80" rows="6">Escreva sua mensagem aqui</textarea>
        <button type="submit" class="ml-auto mt-2">Enviar</button>
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
