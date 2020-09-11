<template>
  <div>
    <!--tabela de preços-->
    <div class="container pb-60 text-center">
      <div class="container">
        <div class="row">
          <h2
          v-html="titulo"
          class="color-primary col-12 col-lg-6 text-lg-left prices"></h2>
          <p class="mt-4 mb-4 col-12 col-lg-6 text-lg-right credit-price color-cyan bold" v-html="txtDestaq">
          </p>
        </div>
        <div class="row mb-5">
          <div class="d-none d-lg-block col-lg-6 align-lg-vertical">
            <img
            class="w-100"
            :src="imgSrc"
            :alt="imgAlt"
            v-if="isPosition">
          </div>
          <div class="col-12 col-lg-6">
            <table class="table table-striped color-primary prices">
              <thead>
                <tr>
                  <th class="w-25" scope="col">Quantidade de créditos</th>
                  <th class="w-25" scope="col">Valor por crédito</th>
                  <th class="w-25" scope="col">Parcelamento no cartão</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(preco, index) in tblPreco" :key="index">
                  <td>{{preco.quantidade_de_creditos}}</td>
                  <td>{{preco.valor_por_credito}}</td>
                  <td>{{preco.parcelamento_no_cartao}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-9 text-left color-primary price-details">
            <p><span class="font-weight-bold">Inclui:</span><br>Relatório DISC;<br>Plataforma web para gerenciar avaliações;</p>
          </div>
          <div class="col-12 col-lg-3 text-left text-lg-right">
            <a :href="linkhref">
              <button class="badge badge-pill mx-button blue-back color-white trtry-price">{{linkTexto}}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lazyComponent from '@/services/lazyComponent.js'
export default {
  name: "TabelaPrecos",
  mixins: [lazyComponent],
  props: {
    titulo: String,
    txtDestaq: String,
    imgSrc: String,
    imgAlt: String,
    tblPreco: Array,
    linkhref: String,
    linkTexto: String,
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/profiler-view.scss';
</style>
