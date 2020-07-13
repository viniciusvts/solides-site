<template>
  <div class="blog-cards">
    <div class="container">
      <div class="vertical-pill red"></div>
      <h2 class="title" v-html="data.titulo"></h2>
      <div class="cards row">
        <div v-for="(card, index) in data.cards" :key="index" class="col-10 mx-auto col-lg-4">
          <a :href="card.link">
            <div class="card">
              <img :src="card.imagem.sizes.large" :alt="card.imagem.alt" class="img-header">
              <h3 class="title" v-html="card.titulo"></h3>
              <div class="text" v-html="card.texto"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCards",
  props: {
    data: Object
  },
};
</script>

<style lang="scss">
    @import '@/assets/scss/blog-cards.scss';
</style>
