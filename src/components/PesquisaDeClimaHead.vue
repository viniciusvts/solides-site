<template>
    <div class="recrutamento-e-selecao-head container">
        <div class="vertical-pill blue"></div>
        <div class="col-10 col-lg-70">
            <h2>Pesquisa de Clima</h2>
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
  name: "PesquisaDeClimaHead"
};
</script>

<style lang="scss">
    @import '@/assets/scss/recrutamento-e-selecao-head.scss';
</style>