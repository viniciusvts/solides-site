<template>
  <div class="auto-rs">
    <div class="content" :class="{'bkwhite': backwhite}">
      <div class="container">
        <h2>Automatize seu R&S e tranforme seu RH agora</h2>
        <div class="text">
          <p>Com a sólides você automatiza seus processos, tornado-os muito mais eficientes</p>
        </div>
        <div class="centerize">
          <router-link :to="{ name: 'Contato' }">
            <button class="badge badge-pill purple-back">Experimente grátis</button>
          </router-link>
          <router-link :to="{ name: 'Contato' }">
            <button class="badge badge-pill purple-outline">Fale com um especialista</button>
          </router-link>
        </div>
      </div>
    </div>
    <img v-if="showFrame" class="frame tr-roty-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "AutomatizeRS",
  props : {
    backwhite: Boolean,
    backGray: Boolean,
  },
  computed: {
    showFrame(){
      return !(this.backwhite || this.backGray)
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/auto-rs.scss';
</style>
