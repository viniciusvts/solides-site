<template>
  <div class="rh-poderoso container">
    <div class="vertical-pill blue"></div>
    <img class="d-none d-lg-block" src="@/assets/img/rh-poderoso3.png" alt="">
    <div class="col-10 col-lg-70">
      <h2>O RH fica mais poderoso com tudo em um só lugar</h2>
      <div class="text">
        <p>A Sólides usa inteligência de dados, People Analytics e Perfil 
          Comportamental para Recrutamento e Seleção, 
          desenvolvimento e retenção de profissionais</p>
      </div>
      <div class="buttons">
        <router-link :to="{ name: 'Contato' }">
          <button class="badge badge-pill purple-back">Experimente grátis</button>
        </router-link>
        <router-link :to="{ name: 'Contato' }">
          <button class="badge badge-pill purple-outline">Fale com um especialista</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RHPoderoso"
};
</script>

<style lang="scss">
    @import '@/assets/scss/rh-poderoso.scss';
</style>
