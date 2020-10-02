<template>
  <div class="calc-data">
    <div :class="{'backGrayMobile': (bg == 'gray'),'pd-equal': (signal == 'equal')}" class="pd-section">
      <div class="container backGrayDesktop">
        <div class="row m-0 px-internal">
          <div class="left col-11 col-md-6 my-md-auto">
            <div class="text" v-html="data.texto_esquerdatopo"></div>
          </div>
          <div class="right col-11 col-md-6 my-md-auto pl-md-3 pr-md-0">
            <div class="text">
              <CalcDataCustoRH v-if="calc == 'custorh'" />
              <CalcDataEntrevGestor v-if="calc == 'entregestor'" />
              <CalcDataDinamico v-if="calc == 'dinamico'" :data="data.texto_direitaabaixo" />
              <CalcDataTreinaOrienta v-if="calc == 'treinaorienta'" />
              <CalcDataPerdaProdu v-if="calc == 'perdaprod'" />
            </div>
          </div>
        </div>
      </div>
      <div class="resultado-calculo container">
        <div class="d-flex col-11 col-md-5 mx-auto px-0">
          <div class="col-7 pr-0 d-flex">
            <p class="destaque" v-html="data.destaque"></p>
          </div>
          <div class="resultado">
            <p>R$<span>4.400,00</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="signal">
      <div v-if="signal == 'sum'" class="bigSum mx-auto mt--50">
        <span></span>
        <span></span>
      </div>
      <!-- or -->
      <div v-if="signal == 'equal'" class="bigEqual mx-auto mt--100">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
import CalcDataCustoRH from "@/components/CalcDataCustoRH.vue"
import CalcDataEntrevGestor from "@/components/CalcDataEntrevGestor.vue"
import CalcDataDinamico from "@/components/CalcDataDinamico.vue"
import CalcDataTreinaOrienta from "@/components/CalcDataTreinaOrienta.vue"
import CalcDataPerdaProdu from "@/components/CalcDataPerdaProdu.vue"
export default {
  name: "CalcData",
  components: {
    CalcDataCustoRH,
    CalcDataEntrevGestor,
    CalcDataDinamico,
    CalcDataTreinaOrienta,
    CalcDataPerdaProdu
    },
  props: {
    data: Object,
    signal: String,
    bg: String,
    calc: String
  }
};
</script>
<style lang="scss">
    @import '@/assets/scss/calc-data.scss';
</style>
