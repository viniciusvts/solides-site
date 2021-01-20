<template>
  <div id="app">
    <Menu v-if="!isLP && !hasNewMenu"/>
    <MenuDemo v-if="hasNewMenu"/>
    <transition mode="out-in">
      <router-view/>
    </transition>
    <Foot class="p-r" v-if="!isLP" />
  </div>
</template>

<script>
const Menu = () => import('@/components/Menu.vue');
const MenuDemo = () => import('@/components/MenuDemo.vue');
const Foot = () => import('@/components/Foot.vue');

export default {
  name: 'App',
  components: {
    Menu,
    MenuDemo,
    Foot
  },
  mounted() {
    let script = document.createElement('script')
    script.setAttribute('src', 'https://js.hsforms.net/forms/v2.js')
    document.body.appendChild(script)
  },
  data () {
    return {
      pagesMenuDemo: ['HomeAgendarDemo']
    }
  },
  computed: {
    hasNewMenu(){
      console.log(this.$route.name);
      if (this.pagesMenuDemo.includes(this.$route.name )) {
        return true
      }
      return false
    },
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
*, ::after, #app ::before{
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
html{
    scroll-behavior: smooth;
    overflow-x: hidden
}
a:hover{
  text-decoration: none;
}
.p-r{position: relative;}
/// correção da barra de cookie
#hs-eu-cookie-confirmation, div#hs-eu-cookie-confirmation-inner, a#hs-eu-confirmation-button {
  *{
    font-size: 12px !important;
    line-height: 15px !important;
    @media (min-width: $tablets) {
      line-height: 18px !important;
    }
  }
}
</style>
