<template>
  <div class="software-rh">
    <h2 class="text-center" v-html="data.titulo"></h2>
    <div class="text" v-html="data.texto">
    </div>
    <div class="iframe" v-html="data.video"></div>
  </div>
</template>

<script>
export default {
  name: "SoftwareRH",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/software-rh.scss';
</style>
