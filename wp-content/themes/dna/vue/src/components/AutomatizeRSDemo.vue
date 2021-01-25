<template>
  <div class="auto-rs">
    <div class="content" :class="{'bkwhite': backwhite}">
      <div class="container">
        <h2 v-html="data.titulo"></h2>
        <div class="text" v-html="data.texto"></div>
        <div class="centerize">
          <a :href="data.botao_1.url">
            <button class="badge badge-pill purple-back" v-html="data.botao_1.title"></button>
          </a>
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
    data: Object
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
