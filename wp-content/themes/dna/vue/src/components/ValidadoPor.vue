<template>
  <!--validado por-->
  <div>
    <div class="bg-light">
      <div class="container pb-40 pb-lg-60">
        <h2 v-html="titulo" class="ml-4 trtr-valPor"></h2>
        <div class="row ml-4">
          <div class="text-left color-primary to-left-70">
            <div class="row pr-md-0 text-md-center trtr-valPor">
              <div class="col-12 col-md-4 pr-md-0 mt-40">
                <img src="@/assets/img/usp.png" alt="usp" class="valpor">
              </div>
              <div class="col-12 col-md-4 pr-md-0 mt-40">
                <img src="@/assets/img/ufmg.png" alt="ufmg" class="valpor">
              </div>
              <div class="col-12 col-md-4 pr-md-0 mt-40">
                <img src="@/assets/img/finep.png" alt="finep" class="valpor">
              </div>
            </div>
          </div>
          <div class="to-right-30">
            <div class="vertical-pill red"></div>
          </div>
        </div>
        <div v-html="iframe" id="ytframe">
        </div>
        <div class="text-center text-lg-left mt-30 row-lg">
          <div class="d-none d-lg-block col-2 col-hd-1"></div>
          <a :href="linkhref">
            <button class="badge badge-pill mx-button blue-back color-white">{{linkTexto}}</button>
          </a>
        </div>
      </div>
    </div>
    <img class="frame" src="@/assets/img/frame1.png" alt="">
  </div>
</template>

<script>
export default {
  name: "ValidadoPor",
  props: {
    titulo: String,
    iframe: String,
    linkhref: String,
    linkTexto: String,
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/profiler-view.scss';
</style>
