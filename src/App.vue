<template>
  <div id="app">
    <Menu v-if="!isLP "/>
    <transition mode="out-in">
      <router-view/>
    </transition>
    <Foot class="p-r" v-if="!isLP" />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Foot from '@/components/Foot.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Foot
  },
  computed: {
    isLP(){
      if (this.$route.name == 'perfil-lp') {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;700;900&display=swap');
@import "@/assets/scss/variables.scss";
*, ::after, ::before{
    font-family: 'Lato', 'Roboto', sans-serif;
    font-size: 16px;
    @media (min-width: $smallPhones) {
        font-size: 20px;
    }
    @media (min-width: $tablets) {
        font-size: 25px;
    }
    @media (min-width: $largeDesktops) {
        font-size: 31px;
    }
}
.p-r{position: relative;}
</style>
