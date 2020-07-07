<template>
  <div class="depoimento">
    <img class="frame tr-rotx-180" src="@/assets/img/svg/frame-form-home.svg" alt="">
    <div class="content">
      <h2>Veja o que eles tem a dizer</h2>
      <div class="carrossel">
        <carousel :responsive="carrossel">
          <div class="item">
            <iframe
            width="620"
            height="315"
            src="https://www.youtube.com/embed/HryNv5QHpgE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          </div>
          <div class="item">
            <iframe 
            width="620"
            height="315"
            src="https://www.youtube.com/embed/-daBzRg3Xds"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          </div>
          <div class="item">
            <iframe 
            width="620"
            height="315" src="https://www.youtube.com/embed/5FA82atSlv0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
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
