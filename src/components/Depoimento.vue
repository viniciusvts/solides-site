<template>
  <div class="depoimento">
    <img class="frame tr-rotx-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
    <div class="content">
      <h2 v-html="data.titulo"></h2>
      <div class="carrossel">
        <carousel :responsive="carrossel">
          <div class="item" v-for="(em, index) in data.embed" :key="index" v-html="em.embed">
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: "Depoimento",
  props: {
    data: Object
  },
  components: { carousel },
  data () {
    return {
      carrossel: {
        0: {
          items: 1,
          nav: false,
          loop: false
        },
        1200: {
          items: 2,
          nav: false,
          loop: true,
          center: true,
          mouseDrag: false
        }
      }
    }
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/depoimento.scss';
</style>
