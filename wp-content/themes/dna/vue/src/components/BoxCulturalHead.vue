<template>
    <div class="recrutamento-e-selecao-head container">
        <div class="vertical-pill yellow"></div>
        <div class="col-10 col-lg-70 pl-lg-0">
            <h1 class="newR" v-html="data.titulo"></h1>
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
  name: "BoxCulturalHead",
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
    @import '@/assets/scss/recrutamento-e-selecao-head.scss';
    h1.newR{
        &::after{
            content: "Novo";
            display: inline-block;
            padding: 2px 12px;
            color: #2F0A77;
            text-align: center;
            white-space: nowrap;
            vertical-align: baseline;
            border-radius: 10rem;
            background: #FFBA00;
            border: 2px solid #2F0A77;
            font-weight: 900;
            font-size: 10px;
            line-height: 12px;
            position: absolute;
            margin-left: 10px;
            top: -5px;
            @media (min-width: $desktops) {
                padding: 4px 20px;
                font-size: 18px;
                line-height: 22px;
                margin-left: 15px;
            }
        }
    }
</style>