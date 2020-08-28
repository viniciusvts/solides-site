<template>
    <div class="recrutamento-e-selecao-head container">
        <div class="vertical-pill red"></div>
        <div class="col-10 col-lg-70 pl-lg-0">
            <h1 v-html="data.titulo"></h1>
            <div class="text" v-html="data.texto"></div>
            <div class="buttons">
                <a :href="data.botao_1.url">
                <button class="badge badge-pill purple-back" v-html="data.botao_1.title"></button>
                </a>
                <a :href="data.botao_2.url">
                <button class="badge badge-pill purple-outline" v-html="data.botao_2.title"></button>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "AvaliacaoDesempenhoHead",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/recrutamento-e-selecao-head.scss';
</style>