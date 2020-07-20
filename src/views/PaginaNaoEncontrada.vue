<template>
  <div class="nao-encontrado">
    <div class="message">
      <div class="vertical-pill green"></div>
      <div class="col-9 col-lg-12">
        <h1>404</h1>
        <h2>Eita! Página não encontrada.</h2>
      </div>
    </div>
    <div class="ir-para-inicial">
      <p>Não se preocupe, você pode tentar novamente clicando aqui</p>
      <button class="badge purple-back">Retornar a página inicial</button>
    </div>
    <div class="gray"></div>
  </div>
</template>

<script>
export default {
  name: 'PaginaNaoEncontrada',
  data () {
    return {
      form: {}
    }
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/pagina-nao-encotrada.scss';
</style>
