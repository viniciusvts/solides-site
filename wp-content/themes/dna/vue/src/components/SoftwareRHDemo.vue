<template>
  <div class="software-rh-B">
    <h2 class="text-center" v-html="data.titulo"></h2>
    <div class="text" v-html="data.texto">
    </div>
    <div class="iframe" v-html="data.video" v-if="isPosition"></div>
  </div>
</template>

<script>
import lazyComponent from '@/services/lazyComponent.js'
export default {
  name: "SoftwareRHDemo",
  mixins: [lazyComponent],
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/software-rh_B.scss';
</style>
