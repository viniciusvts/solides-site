<template>
  <div class="title-h2-center">
    <h2>{{text}}</h2>
  </div>
</template>

<script>
export default {
  name: "textCenter",
  props: {
    text: String,
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/title-h2-center.scss';
</style>
