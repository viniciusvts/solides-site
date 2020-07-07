<template>
  <div class="box-cultural">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 text-center text-lg-right vertical-center">
          <h2 class="novo">9box Cultural</h2>
          <img src="@/assets/img/box-cultural.png" alt="" class="img-mobile d-lg-none">
          <div class="text">
            <p>Entenda mais sobre o 9box e como a Sólides está revolucionando esse método.</p>
          </div>
          <button class="badge badge-pill purple">
            Descubra todas as novidades
          </button>
        </div>
        <div class="col-1 d-none d-lg-block"></div>
        <div class="col-12 col-lg-5">
          <img src="@/assets/img/box-cultural.png" alt="" class="w-100 d-none d-lg-block">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxCultural"
};
</script>

<style lang="scss">
    @import '@/assets/scss/box-cultural.scss';
</style>
