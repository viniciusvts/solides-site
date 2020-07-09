<template>
    <div class="recrutamento-e-selecao-head container">
        <div class="vertical-pill yellow"></div>
        <div class="col-10 col-lg-70">
            <h2 class="newR">9box Cultural</h2>
            <div class="text">
                <p>A Sólides usa inteligência de dados, People Analytics e Perfil 
                Comportamental para Recrutamento e Seleção, 
                desenvolvimento e retenção de profissionais</p>
            </div>
            <div class="buttons">
                <router-link :to="{ name: 'Contato' }">
                <button class="badge badge-pill purple-back">Experimente grátis</button>
                </router-link>
                <router-link :to="{ name: 'Contato' }">
                <button class="badge badge-pill purple-outline">Fale com um especialista</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "BoxCulturalHead"
};
</script>

<style lang="scss">
    @import '@/assets/scss/recrutamento-e-selecao-head.scss';
    h2.newR{
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