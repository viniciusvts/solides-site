<template>
  <nav
  :class="{'active': controls.expandMenu, 'scrolled': controls.scroll}"
  class="navbar navbar-expand-lg navbar-light">
    <div class="container expandMenuOnScroll" :class="{'active': controls.scroll}">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <img 
        v-if="controls.expandMenu" 
        class="logo-menu" 
        src="@/assets/img/svg/logo-branca.svg" 
        alt="logo da sólides branco">
        <img v-else class="logo-menu" src="@/assets/img/svg/logo.svg" alt="logo da sólides">
      </router-link>
      <button @click="togleMenu" class="navbar-toggler no-border" type="button">
        <img v-if="controls.expandMenu" class="hambmenu" src="@/assets/img/x.png" alt="menu">
        <img v-else class="hambmenu" src="@/assets/img/hamb-menu.png" alt="menu">
      </button>

      <div class="collapse navbar-collapse" :class="{'active': controls.expandMenu}">
        <ul class="navbar-nav">
          <li @click="togleProdutos(null)"
          @mouseover="togleProdutos(true)"
          @mouseout="togleProdutos(false)"
          class="nav-item">
            <a class="nav-link p-0" href="javascript: void(0)">
              Produtos
              <span :class="{'d-none': !controls.expandProdutos}" class="submenu">
                <img class="d-lg-none" src="@/assets/img/svg/seta-branca-para-cima.svg" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/svg/seta-azul-para-cima.svg" alt="menu">
              </span>
              <span :class="{'d-none': controls.expandProdutos}" class="submenu">
                <img class="d-lg-none" src="@/assets/img/svg/seta-branca-para-baixo.svg" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/svg/seta-azul-para-baixo.svg" alt="menu">
              </span>
            </a>
            <div
            :class="{'active': controls.expandProdutos}"
            class="dropdown-menu conteudo"
            aria-labelledby="navbarDropdown">
              <div class="drop-item">
                <a class="dropdown-item" href="/produtos/profiler">Profiler</a>
                <a href="/produtos/profiler" class="no-decoration">
                  <p class="d-none d-lg-block">
                    Saiba mais.
                  </p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="/produtos/recrutamento-e-selecao">Recrutamento e seleção</a>
                <a href="/produtos/recrutamento-e-selecao" class="no-decoration">
                  <p class="d-none d-lg-block">Saiba mais.</p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="/produtos/people-analytics">People Analytics</a>
                <a href="/produtos/people-analytics" class="no-decoration">
                  <p class="d-none d-lg-block">Saiba mais.</p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="/produtos/avaliacao-de-desempenho">Avaliação de desempenho</a>
                <a href="/produtos/avaliacao-de-desempenho" class="no-decoration">
                  <p class="d-none d-lg-block">Saiba mais.</p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="/produtos/pesquisa-de-clima">Pesquisa de clima</a>
                <a href="/produtos/pesquisa-de-clima" class="no-decoration">
                  <p class="d-none d-lg-block">Saiba mais.</p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="/produtos/box-cultural">9box Cultural</a>
                <a href="/produtos/box-cultural" class="no-decoration">
                  <p class="d-none d-lg-block">Saiba mais.</p>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link p-0" href="/planos">Planos</a>
          </li>
          <li @click="togleConteudo(null)"
          @mouseover="togleConteudo(true)"
          @mouseout="togleConteudo(false)"
          class="nav-item">
            <a class="nav-link p-0" href="javascript: void(0)">
              Conteúdos
              <span :class="{'d-none': !controls.expandConteudo}" class="submenu">
                <img class="d-lg-none" src="@/assets/img/svg/seta-branca-para-cima.svg" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/svg/seta-azul-para-cima.svg" alt="menu">
              </span>
              <span :class="{'d-none': controls.expandConteudo}" class="submenu">
                <img class="d-lg-none" src="@/assets/img/svg/seta-branca-para-baixo.svg" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/svg/seta-azul-para-baixo.svg" alt="menu">
              </span>
            </a>
            <div
            :class="{'active': controls.expandConteudo}"
            class="dropdown-menu conteudo"
            aria-labelledby="navbarDropdown">
              <div class="drop-item">
                <a target="_blank" class="dropdown-item" href="https://blog.solides.com.br/">Blog da Sólides</a>
                <a target="_blank" href="https://blog.solides.com.br/" class="no-decoration">
                  <p class="d-none d-lg-block">
                    Os melhores conteúdos para gestão de pessoas
                  </p>
                </a>
              </div>
              <div class="drop-item">
                <a target="_blank" class="dropdown-item" href="https://www.rhportal.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346">RH Portal</a>
                <a target="_blank" href="https://www.rhportal.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346" class="no-decoration">
                  <p class="d-none d-lg-block">Os melhores conteúdos sobre gestão de pessoas</p>
                </a>
              </div>
              <div class="drop-item">
                <a target="_blank" class="dropdown-item" href="https://solides.com.br/materiais-educativos/">Materiais</a>
                <a target="_blank" href="https://solides.com.br/materiais-educativos/" class="no-decoration">
                  <p class="d-none d-lg-block">Os melhores conteúdos para gestão de pessoas</p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="/ferramentas/calculadora-de-rotatividade/">Ferramentas</a>
                <a href="/ferramentas/calculadora-de-rotatividade/" class="no-decoration">
                  <p class="d-none d-lg-block">Calculadora de rotatividade</p>
                </a>
              </div>
            </div>
          </li>
          <li @click="togleCursos(null)"
          @mouseover="togleCursos(true)"
          @mouseout="togleCursos(false)"
          class="nav-item">
            <a class="nav-link p-0" href="javascript: void(0)">
              Cursos
              <span :class="{'d-none': !controls.expandCursos}" class="submenu">
                <img class="d-lg-none" src="@/assets/img/svg/seta-branca-para-cima.svg" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/svg/seta-azul-para-cima.svg" alt="menu">
              </span>
              <span :class="{'d-none': controls.expandCursos}" class="submenu">
                <img class="d-lg-none" src="@/assets/img/svg/seta-branca-para-baixo.svg" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/svg/seta-azul-para-baixo.svg" alt="menu">
              </span>
            </a>
            <div
            :class="{'active': controls.expandCursos}"
            class="dropdown-menu cursos"
            aria-labelledby="navbarDropdown">
              <div class="drop-item">
                <a target="_blank" class="dropdown-item" href="https://universidade.solides.com.br/course/engenharia-de-cargos-do-recrutamento-a-retencao/">Engenharia de Cargos<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
                <a target="_blank" class="no-decoration" href="https://universidade.solides.com.br/course/engenharia-de-cargos-do-recrutamento-a-retencao/">
                  <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
                </a>
              </div>
              <div class="drop-item">
                <a target="_blank" class="dropdown-item " href="https://universidade.solides.com.br/course/people-analytics/">People Analytics<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
                <a target="_blank" class="no-decoration" href="https://universidade.solides.com.br/course/people-analytics/">
                  <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
                </a>
              </div>
              <div class="drop-item">
                <a target="_blank" class="dropdown-item" href="https://universidade.solides.com.br/course/rh-tecnologico/">RH Tecnológico<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
                <a target="_blank" class="no-decoration" href="https://universidade.solides.com.br/course/rh-tecnologico/">
                  <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
                </a>
              </div>
              <div class="drop-item">
                <a target="_blank" class="dropdown-item" href="https://universidade.solides.com.br/course/recrutamento-e-selecao/">Recrutamento e Seleção<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
                <a target="_blank" class="no-decoration" href="https://universidade.solides.com.br/course/recrutamento-e-selecao/">
                  <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
                </a>
              </div>
              <div class="drop-item">
                <a target="_blank" class="dropdown-item" href="https://universidade.solides.com.br/course/gestao-comportamental-na-pratica/">Gestão Comportamental<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
                <a target="_blank" class="no-decoration" href="https://universidade.solides.com.br/course/gestao-comportamental-na-pratica/">
                  <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a target="_blank" class="nav-link p-0" href="https://parcerias.solides.com.br/">Seja Parceiro</a>
          </li>
          <li @click="togleLogin(null)"
          @mouseover="togleLogin(true)"
          @mouseout="togleLogin(false)"
          class="nav-item">
            <a class="nav-link p-0" href="javascript: void(0)">
              Login
              <span :class="{'d-none': !controls.expandLogin}" class="submenu">
                <img class="d-lg-none" src="@/assets/img/svg/seta-branca-para-cima.svg" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/svg/seta-azul-para-cima.svg" alt="menu">
              </span>
              <span :class="{'d-none': controls.expandLogin}" class="submenu">
                <img class="d-lg-none" src="@/assets/img/svg/seta-branca-para-baixo.svg" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/svg/seta-azul-para-baixo.svg" alt="menu">
              </span>
            </a>
            <div
            :class="{'active': controls.expandLogin}"
            class="dropdown-menu cursos login"
            aria-labelledby="navbarDropdown">
              <div class="drop-item">
                <a target="_blank" class="dropdown-item" href="https://system.solides.com/pt-BR/usuarios/sign_in">Sólides Gestão</a>
              </div>
              <div class="drop-item">
                <a target="_blank" class="dropdown-item " href="http://www.solides.adm.br/solides/perfil">Sólides Profiler</a>
              </div>
            </div>
          </li>
          <li class="nav-item showOnScroll d-none d-lg-block" :class="{'active': controls.scroll}">
            <a class="nav-link p-0" :href="checkoutOuDemo">
              <button class="badge badge-pill blue-back color-white two-in-a-row">{{agendarOuComprar}}</button>
            </a>
          </li>
          <li class="nav-item showOnScroll d-none d-lg-block" :class="{'active': controls.scroll}">
            <a class="nav-link p-0" :href="criarcontaOuScroll">
              <button class="badge badge-pill blue-outline two-in-a-row">{{experimenteOuFale}}</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      menuLocationName: 'main-menu',
      menuData: null,
      controls: {
        expandMenu: false,
        expandProdutos: false,
        expandConteudo: false,
        expandCursos: false,
        expandLogin: false,
        scroll: false
      },
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    getMenu () {
      this.$http.getMenuByLocationName(this.menuLocationName)
      .then(resp => resp.json())
      .then(json => {
        this.menuData = json
      })
    },
    toglesub (evt, flag) {
      console.log('evt =>', evt)
      console.log('flag =>', flag)
    },
    togleMenu () { this.controls.expandMenu = !this.controls.expandMenu },
    togleProdutos (flag) {
      this.controls.expandConteudo = false
      this.controls.expandCursos = false
      this.controls.expandLogin = false
      if (flag == null) this.controls.expandProdutos = !this.controls.expandProdutos
      else this.controls.expandProdutos = flag
    },
    togleConteudo (flag) {
      this.controls.expandProdutos = false
      this.controls.expandCursos = false
      this.controls.expandLogin = false
      if (flag == null) this.controls.expandConteudo = !this.controls.expandConteudo
      else this.controls.expandConteudo = flag
    },
    togleCursos (flag) {
      this.controls.expandProdutos = false
      this.controls.expandConteudo = false
      this.controls.expandLogin = false
      if (flag == null) this.controls.expandCursos = !this.controls.expandCursos
      else this.controls.expandCursos = flag
    },
    togleLogin (flag) {
      this.controls.expandProdutos = false
      this.controls.expandCursos = false
      this.controls.expandConteudo = false
      if (flag == null) this.controls.expandLogin = !this.controls.expandLogin
      else this.controls.expandLogin = flag
    },
    handleScroll () {
      this.controls.scroll = (window.scrollY >= 800)
    }
  },
  computed: {
    agendarOuComprar () {
      if (this.$route.name == 'Profiler') return 'Comprar Agora'
      return 'Agendar demonstração'
    },
    experimenteOuFale (){
      if (this.$route.name == 'Profiler') return 'Fale com um especialista'
      return 'Experimente Gratis'
    },
    checkoutOuDemo () {
      if (this.$route.name == 'Profiler') return 'https://checkout.solides.com.br/'
      return '/pedir-uma-demo'
    },
    criarcontaOuScroll(){
      if (this.$route.name == 'Profiler') return '#form'
      return '/#criar-conta'
    },
  }
}
</script>

<style lang="scss">
    @import '@/assets/scss/menu.scss';
</style>
