<template>
  <nav
  :class="{'active': controls.expandMenu, 'scrolled': controls.scroll}"
  class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <img 
        v-if="controls.expandMenu" 
        class="logo-menu" 
        src="@/assets/img/solides-header-logo-white.png" 
        alt="logo da sólides branco">
        <img v-else class="logo-menu" src="@/assets/img/solides-header-logo.png" alt="logo da sólides">
      </router-link>
      <button @click="togleMenu" class="navbar-toggler no-border" type="button">
        <img v-if="controls.expandMenu" class="hambmenu" src="@/assets/img/x.png" alt="menu">
        <img v-else class="hambmenu" src="@/assets/img/hamb-menu.png" alt="menu">
      </button>

      <div class="collapse navbar-collapse" :class="{'active': controls.expandMenu}">
        <ul class="navbar-nav">
          <li @click="togleProdutos"
          @mouseover="togleProdutos(true)"
          @mouseout="togleProdutos(false)"
          class="nav-item">
            <a class="nav-link p-0" href="javascript: void(0)">
              Produtos
              <span v-if="controls.expandProdutos" class="submenu">
                <img class="d-lg-none" src="@/assets/img/seta-pra-cima.png" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/seta-pra-cima-primary.png" alt="menu">
              </span>
              <span v-else class="submenu">
                <img class="d-lg-none" src="@/assets/img/seta-pra-baixo.png" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/seta-pra-baixo-primary.png" alt="menu">
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
          <li @click="togleConteudo(null)"
          @mouseover="togleConteudo(true)"
          @mouseout="togleConteudo(false)"
          class="nav-item">
            <a class="nav-link p-0" href="javascript: void(0)">
              Conteúdos
              <span v-if="controls.expandConteudo" class="submenu">
                <img class="d-lg-none" src="@/assets/img/seta-pra-cima.png" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/seta-pra-cima-primary.png" alt="menu">
              </span>
              <span v-else class="submenu">
                <img class="d-lg-none" src="@/assets/img/seta-pra-baixo.png" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/seta-pra-baixo-primary.png" alt="menu">
              </span>
            </a>
            <div
            :class="{'active': controls.expandConteudo}"
            class="dropdown-menu conteudo"
            aria-labelledby="navbarDropdown">
              <div class="drop-item">
                <a class="dropdown-item" href="https://blog.solides.com.br/">Blog da Sólides</a>
                <a href="https://blog.solides.com.br/" class="no-decoration">
                  <p class="d-none d-lg-block">
                    Os melhores conteúdos para gestão de pessoas
                  </p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="https://www.rhportal.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346">RH Portal</a>
                <a href="https://www.rhportal.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346" class="no-decoration">
                  <p class="d-none d-lg-block">Os melhores conteúdos sobre gestão de pessoas</p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="https://solides.com.br/materiais-educativos/">Materiais</a>
                <a href="https://solides.com.br/materiais-educativos/" class="no-decoration">
                  <p class="d-none d-lg-block">Os melhores conteúdos para gestão de pessoas</p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="https://contratarerradocustacaro.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346">Ferramentas</a>
                <a href="https://contratarerradocustacaro.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346" class="no-decoration">
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
              <span v-if="controls.expandCursos" class="submenu">
                <img class="d-lg-none" src="@/assets/img/seta-pra-cima.png" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/seta-pra-cima-primary.png" alt="menu">
              </span>
              <span v-else class="submenu">
                <img class="d-lg-none" src="@/assets/img/seta-pra-baixo.png" alt="menu">
                <img class="d-none d-lg-inline" src="@/assets/img/seta-pra-baixo-primary.png" alt="menu">
              </span>
            </a>
            <div
            :class="{'active': controls.expandCursos}"
            class="dropdown-menu cursos"
            aria-labelledby="navbarDropdown">
              <div class="drop-item">
                <a class="dropdown-item" href="https://universidade.solides.com.br/course/engenharia-de-cargos-do-recrutamento-a-retencao/">Engenharia de Cargos<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
                <a class="no-decoration" href="https://universidade.solides.com.br/course/engenharia-de-cargos-do-recrutamento-a-retencao/">
                  <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item " href="https://universidade.solides.com.br/course/people-analytics/">People Analytics<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
                <a class="no-decoration" href="https://universidade.solides.com.br/course/people-analytics/">
                  <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="https://universidade.solides.com.br/course/rh-tecnologico/">RH Tecnológico<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
                <a class="no-decoration" href="https://universidade.solides.com.br/course/rh-tecnologico/">
                  <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="https://universidade.solides.com.br/course/recrutamento-e-selecao/">Recrutamento e Seleção<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
                <a class="no-decoration" href="https://universidade.solides.com.br/course/recrutamento-e-selecao/">
                  <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
                </a>
              </div>
              <div class="drop-item">
                <a class="dropdown-item" href="https://universidade.solides.com.br/course/gestao-comportamental-na-pratica/">Gestão Comportamental<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
                <a class="no-decoration" href="https://universidade.solides.com.br/course/gestao-comportamental-na-pratica/">
                  <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link p-0" href="https://materiais.solides.com.br/parceria">Seja Parceiro</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-0" href="javascript: void(0)">Login >></a>
          </li>
          <li class="nav-item showOnScroll d-none" :class="{'active': controls.scroll}">
            <a class="nav-link p-0" href="https://checkout.solides.com.br/">
              <button class="badge badge-pill blue-back color-white two-in-a-row">Comprar agora</button>
            </a>
          </li>
          <li class="nav-item showOnScroll d-none" :class="{'active': controls.scroll}">
            <a class="nav-link p-0" href="https://perfildisc.com.br/#form">
              <button class="badge badge-pill blue-outline two-in-a-row">Fale com um especialista</button>
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
      if (flag == null) {
        this.controls.expandProdutos = !this.controls.expandProdutos
        this.controls.expandConteudo = false
        this.controls.expandCursos = false
        return;
      }
      this.controls.expandProdutos = flag
    },
    togleConteudo (flag) {
      if (flag == null) {
        this.controls.expandConteudo = !this.controls.expandConteudo
        this.controls.expandProdutos = false
        this.controls.expandCursos = false
        return;
      }
      this.controls.expandConteudo = flag
    },
    togleCursos (flag) {
      if (flag == null) {
        this.controls.expandCursos = !this.controls.expandCursos
        this.controls.expandProdutos = false
        this.controls.expandConteudo = false
        return;
      }
      this.controls.expandCursos = flag
    },
    handleScroll () {
      this.controls.scroll = (window.scrollY >= 800)
    }
  }
}
</script>

<style lang="scss">
    @import '@/assets/scss/menu.scss';
</style>
