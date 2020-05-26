<template>
<div v-if="lp" class="lpPerfilDisc over-x-h">
  <nav
  :class="{'active': controls.expandMenu}"
  class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">
      <img 
      v-if="controls.expandMenu" 
      class="logo-menu" 
      src="@/assets/img/solides-header-logo-white.png" 
      alt="logo da sólides branco">
      <img v-else class="logo-menu" src="@/assets/img/solides-header-logo.png" alt="logo da sólides">
    </a>
    <button @click="togleMenu" class="navbar-toggler no-border" type="button">
      <img v-if="controls.expandMenu" class="hambmenu" src="@/assets/img/x.png" alt="menu">
      <img v-else class="hambmenu" src="@/assets/img/hamb-menu.png" alt="menu">
    </button>

    <div class="collapse navbar-collapse" :class="{'active': controls.expandMenu}">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a @click="togleConteudo" class="nav-link" href="#">
            Conteúdo
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
          class="dropdown-menu"
          aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://blog.solides.com.br/">Blog da Sólides</a>
            <p class="d-none d-lg-block">Os melhores conteúdos para gestão de pessoas</p>
            <a class="dropdown-item" href="https://www.rhportal.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346">RH Portal</a>
            <p class="d-none d-lg-block">Os melhores conteúdos sobre gestão de pessoas</p>
            <a class="dropdown-item" href="https://solides.com.br/materiais-educativos/">Materiais</a>
            <p class="d-none d-lg-block">Os melhores conteúdos para gestão de pessoas</p>
            <a class="dropdown-item" href="https://contratarerradocustacaro.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346">Ferramentas</a>
            <p class="d-none d-lg-block">Calculadora de rotatividade</p>
          </div>
        </li>
        <li class="nav-item">
          <a @click="togleCursos" class="nav-link" href="#">
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
          class="dropdown-menu"
          aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://universidade.solides.com.br/course/people-analytics/">Engenharia de Cargos<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
            <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
            <a class="dropdown-item " href="https://universidade.solides.com.br/course/people-analytics/">People Analytics<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
            <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
            <a class="dropdown-item" href="https://universidade.solides.com.br/course/rh-tecnologico/">RH Tecnológico<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
            <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
            <a class="dropdown-item" href="https://universidade.solides.com.br/course/gestao-comportamental-na-pratica/">Recrutamento e Seleção<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
            <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
            <a class="dropdown-item" href="https://universidade.solides.com.br/course/gestao-comportamental-na-pratica/">Gestão Comportamental<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
            <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#prices">Preços</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://materiais.solides.com.br/parceria">Seja Parceiro</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container mt-70 pb-60 mt-md-120">
    <div class="row ml-0">
      <div class="text-left color-primary to-left-70 mt-120">
        <h2 v-html="lp.acf.titulo1"></h2>
        <p v-html="lp.acf.texto1"></p>
        <!--exibe apenas em desktop -->
        <div class="mt-70 pr-0 d-none d-lg-block">
          <a href="https://checkout.solides.com.br/" class="pr-0">
            <button class="badge badge-pill mx-button blue-back two-in-a-row">Comprar Agora</button>
          </a>
          <a href="#form" class="pr-0">
            <button class="badge badge-pill mx-button blue-outline two-in-a-row">Fale com um especialista</button>
          </a>
          <!--profiler-->
          <div class="text-right pr-0 trx-60 color-black internal-wip">
            <h2 v-html="lp.acf.titulo2" class="mb-5 pr-0"></h2>
            <p v-html="lp.acf.texto2" class="pr-0"></p>
            <div class="mt-50 pr-0">
              <a href="https://checkout.solides.com.br/" class="pr-0">
                <button class="badge badge-pill mx-2 blue-back">Quero fazer o Profiler</button>
              </a>
            </div>
          </div>
        </div>
        <!--/exibe apenas em desktop-->
      </div>
      <div class="to-right-30">
        <div class="vertical-pill yellow"></div>
        <img src="@/assets/img/cabeçalho-perfil-disc-finalizado 1.png" alt="mulher trabalhando no computador">
      </div>
    </div>
    <div class="centerize-itens mt-70 d-lg-none">
      <a href="https://checkout.solides.com.br/">
        <button class="badge badge-pill mx-button blue-back two-in-a-row">Comprar Agora</button>
      </a>
      <a href="#form">
        <button class="badge badge-pill mx-button blue-outline two-in-a-row">Fale com um especialista</button>
      </a>
    </div>
  </div>
  <!--profiler-->
  <div class="container pt-60 pb-60 text-center d-lg-none">
    <h2 v-html="lp.acf.titulo2" class="mb-5"></h2>
    <p v-html="lp.acf.texto2"></p>
    <div class="centerize-itens mt-50">
      <a href="https://checkout.solides.com.br/">
        <button class="badge badge-pill mx-2 blue-back">Quero fazer o Profiler</button>
      </a>
    </div>
  </div>
  <!--profiler competencias-->
  <div class="bg-light">
    <div class="container pt-60 text-center">
      <h2 v-html="lp.acf.titulo3" class="mb-5 color-primary"></h2>
      <div class="row profiler-competencias">
        <div v-for="(img, index) in lp.acf.gal3" :key="index" class="col-6 col-md-3 mb-md-5 mb-lg-4">
          <img :src="img.sizes.medium" :alt="img.alt">
        </div>
      </div>
    </div>
  </div>
  <img class="frame" src="@/assets/img/frame1.png" alt="">
  <!-- para o texto ficar daquele jeito só com imagem -->
  <!-- <img
  class="w-100"
  src="@/assets/img/frame-como-o-profiler-ajuda-pessoas-e-empresas.png"
  alt="frame-como-o-profiler-ajuda-pessoas-e-empresas"> -->
  <!--como o profiler...-->
  <div class="container pb-60">
    <div class="row ml-0">
      <div class="to-left-30">
        <div class="vertical-pill cyan"></div>
        <img class="mt-img-profiler"
        src="@/assets/img/Terceira-sessao-perfil-disc 2.png"
        alt="homem achando solução na solides">
      </div>
      <div class="text-left to-right-70 mt-30 ml-text-profiler">
        <h2 v-html="lp.acf.titulo4"></h2>
        <!--so aparece em desktop -->
        <div class="d-none d-lg-block">
          <p v-html="lp.acf.texto4" class="w-80"></p>
          <ul class="detalhes pl-0">
            <li class="font-weight-bold">
              <span v-html="lp.acf.mil_analistas" class="color-cyan bold"></span> analistas comportamentais formados
            </li>
            <li class="font-weight-bold">
              <span v-html="lp.acf.milhoes_relatorios" class="color-cyan bold"></span> de relatórios
            </li>
            <li class="font-weight-bold">
              <span v-html="lp.acf.parceiros" class="color-cyan bold"></span> parceiros
            </li>
          </ul>
          <div class="container mt-5 text-right">
            <h2 v-html="lp.acf.titulo5"></h2>
            <div v-html="lp.acf.texto5"></div>
            <a href="https://checkout.solides.com.br/">
              <button class="badge badge-pill mx-button yellow-back">Quero saber mais</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--como o profiler... detalhes-->
  <div class="container d-lg-none">
      <p v-html="lp.acf.texto4" class="pl-4 w-80"></p>
      <ul class="detalhes pl-4">
        <li class="font-weight-bold">
          <span v-html="lp.acf.mil_analistas" class="color-cyan bold"></span> analistas comportamentais formados
        </li>
        <li class="font-weight-bold">
          <span v-html="lp.acf.milhoes_relatorios" class="color-cyan bold"></span> de relatórios
        </li>
        <li class="font-weight-bold">
          <span v-html="lp.acf.parceiros" class="color-cyan bold"></span> parceiros
        </li>
      </ul>
    <div class="container mt-5 px-3">
      <h2 v-html="lp.acf.titulo5"></h2>
      <div v-html="lp.acf.texto5"></div>
      <a href="#">
        <button class="badge badge-pill mx-button yellow-back">Quero saber mais</button>
      </a>
    </div>
  </div>
  <!-- <img class="w-100 rotate-180" src="@/assets/img/frame1.png" alt=""> -->
  <!--validado por-->
  <div class="container pt-60 pb-60">
    <h2 v-html="lp.acf.titulo6" class="ml-4"></h2>
    <div class="row ml-4">
      <div class="text-left color-primary to-left-70">
        <div class="row pr-md-0 text-md-center">
          <div class="col-12 col-md-4 pr-md-0 mt-30">
            <img src="@/assets/img/usp.png" alt="usp">
          </div>
          <div class="col-12 col-md-4 pr-md-0 mt-50">
            <img src="@/assets/img/ufmg.png" alt="ufmg">
          </div>
          <div class="col-12 col-md-4 pr-md-0 mt-30">
            <img src="@/assets/img/finep.png" alt="finep">
          </div>
        </div>
      </div>
      <div class="to-right-30">
        <div class="vertical-pill red"></div>
      </div>
    </div>
    <div v-html="lp.acf.iframe6" id="ytframe">
    </div>
    <div class="centerize-itens mt-30">
      <a href="https://checkout.solides.com.br/">
        <button class="badge badge-pill mx-button red-back">Compre Agora</button>
      </a>
    </div>
  </div>
  <!-- <img class="w-100" src="@/assets/img/frame1.png" alt=""> -->
  <!--simlpes contratar...-->
  <div class="container pt-60">
    <h2 v-html="lp.acf.titulo7"  class="text-center color-primary"></h2>
    <div class="mt-5 text-center row">
      <div v-for="(wf, index) in lp.acf.workflow_comprar7" :key="index" class="col-12 col-lg-4 mt-50">
        <img :src="wf.imagem.sizes.medium" :alt="wf.imagem.alt">
        <p class="color-primary mt-3 px-5">{{wf.text}}</p>
      </div>
    </div>
    <div class="centerize-itens mt-30">
      <a href="https://checkout.solides.com.br/">
        <button class="badge badge-pill mx-button blue-back">Comprar agora</button>
      </a>
    </div>
  </div>
  <img class="frame rotate-180" src="@/assets/img/frame1.png" alt="">
  <!--depoimento-->
  <div class="bg-light">
    <div class="container">
      <div class="depoimento row">
        <div class="text-center col-12 col-lg-2 align-lg-vertical">
          <img class="profile" :src="lp.acf.depoimento_foto.sizes.medium" :alt="lp.acf.depoimento_foto.alt">
          <p v-html="lp.acf.depoimento_nome" class="profile color-primary"></p>
        </div>
        <div class="col-12 col-lg-10">
          <div class="text">
            <img class="asp begin" src="@/assets/img/asp-begin.png" alt="aspas begin">
            <img class="asp end" src="@/assets/img/asp-end.png" alt="aspas end">
            <div v-html="lp.acf.depoimento_texto"></div>
          </div>
          <div v-html="lp.acf.depoimento_identidade" class="identidade"></div>
        </div>
      </div>
    </div>
  </div>
  <img class="frame" src="@/assets/img/frame1.png" alt="" id="prices">
  <!--tabela de preços-->
  <div class="container pb-60 text-center">
    <div class="container">
      <div class="row">
        <h2 class="color-primary col-12 col-lg-6 text-lg-left">Compre Agora mesmo e receba os créditos para usar o Profiler hoje mesmo</h2>
        <p class="mt-4 mb-4 col-12 col-lg-6 text-lg-right"><span class="color-cyan bold">R$ 69,90 por crédito</span></p>
      </div>
      <div class="row mb-5">
        <div class="d-none d-lg-block col-lg-5 align-lg-vertical">
          <img class="w-100" src="@/assets/img/iphone.png" alt="iphone">
        </div>
        <div class="col-12 col-lg-7">
          <table class="table table-striped color-primary prices">
            <thead>
              <tr>
                <th class="w-25" scope="col">Quantidade de créditos</th>
                <th class="w-25" scope="col">Valor por crédito</th>
                <th class="w-50" scope="col">Parcelamento no cartão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01 a 04</td>
                <td>R$69,90</td>
                <td>Até 2x sem juros</td>
              </tr>
              <tr>
                <td>05 a 09</td>
                <td>R$64,90</td>
                <td>Até 5x sem juros</td>
              </tr>
              <tr>
                <td>10 a 14</td>
                <td>R$59,90</td>
                <td>Até 5x sem juros</td>
              </tr>
              <tr>
                <td>15 a 19</td>
                <td>R$54,90</td>
                <td>Até 8x sem juros</td>
              </tr>
              <tr>
                <td>20 a 29</td>
                <td>R$49,90</td>
                <td>Até 8x sem juros</td>
              </tr>
              <tr>
                <td>30 a 39</td>
                <td>R$69,90</td>
                <td>Até 10x sem juros</td>
              </tr>
              <tr>
                <td>40 a 49</td>
                <td>R$46,90</td>
                <td>Até 10x sem juros</td>
              </tr>
              <tr>
                <td>50 a 79</td>
                <td>R$41,90</td>
                <td>Até 10x sem juros</td>
              </tr>
              <tr>
                <td>80 a 99</td>
                <td>R$39,90</td>
                <td>Até 10x sem juros</td>
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
          <a href="https://checkout.solides.com.br/">
            <button class="badge badge-pill mx-button blue-back">Comprar agora</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- form aqui -->
  <div class="bg-gray" id="form">
    <div class="container pt-60 pb-60">
      <h2>Form Aqui!</h2>
    </div>
  </div>
  <!-- melhor conteúdo sobre o profiler -->
  <div class="container pt-60 pb-60">
    <div class="row ml-0 bestcontent-profiler">
      <div class="to-left-30">
        <div class="vertical-pill green"></div>
        <img class="mt-120 ml-0" src="@/assets/img/melhores-conteudos.png" alt="melhores-conteudos">
      </div>
      <div class="text-left to-right-70 mt-30 mt-xs-0 mt-lg-5">
        <h2 class="pr-5">Melhores conteúdos sobre Profiler</h2>
        <a class="color-black" href="https://blog.solides.com.br/profiler/">
          <div class="left-right d-none d-lg-block mt-120 pl-5">
            <h2>Profiler Sólides: solução em perfil comportamental</h2>
            <p class="mb-0">O profiler é um assessment que utiliza 8 metodologias de perfil comportamental.</p>
            <p>Saiba como esse teste exclusivo da Sólides pode ajudar a sua empresa!</p>
          </div>
        </a>
      </div>
      <a class="color-black" href="https://blog.solides.com.br/metodologia-disc/">
        <div class="row d-none d-lg-flex mt-70">
          <div class="col-7 text-right">
            <h2>Guia da metodologia DISC: o que é, como aplicar e importância</h2>
            <p>Descubra tudo sobre a Metodologia DISC, uma ferramenta usada para desenvolver pessoas e trabalhar as principais competências. Confira o guia completo.</p>
          </div>
          <div class="col-5">
            <img class="h-100 ml-2"
            src="@/assets/img/solucao-em-perfil-comportamental.png"
            alt="solucao-em-perfil-comportamental">
          </div>
        </div>
      </a>
      <a class="color-black" href="https://blog.solides.com.br/analisar-perfil-disc/">
        <div class="row d-none d-lg-flex mt-70">
          <div class="col-5">
            <img class="h-100 ml-text-profiler"
            src="@/assets/img/guia-da-metodologia.png"
            alt="guia-da-metodologia">
          </div>
          <div class="col-7 ml-fhd--100">
            <h2>DISC: o que é e como analisar o perfil DISC corretamente</h2>
            <p>Para conseguir avançar na eficiência da gestão de pessoas é fundamental saber interpretar e analisar o perfil DISC. Saiba como aplicar o teste Disc.</p>
          </div>
        </div>
      </a>
    </div>
  </div>
  <!-- melhor conteúdo sobre o profiler -->
  <div class="container mt-xs-50 d-lg-none">
    <a class="color-black" href="https://blog.solides.com.br/profiler/">
      <div class="left-right">
        <h2>Profiler Sólides: solução em perfil comportamental</h2>
        <p class="mb-0">O profiler é um assessment que utiliza 8 metodologias de perfil comportamental.</p>
        <p>Saiba como esse teste exclusivo da Sólides pode ajudar a sua empresa!</p>
        <img src="@/assets/img/solucao-em-perfil-comportamental.png" alt="solucao-em-perfil-comportamental">
      </div>
    </a>
    <a class="color-black" href="https://blog.solides.com.br/metodologia-disc/">
      <div class="right-left">
        <h2>Guia da metodologia DISC: o que é, como aplicar e importância</h2>
        <p>Descubra tudo sobre a Metodologia DISC, uma ferramenta usada para desenvolver pessoas e trabalhar as principais competências. Confira o guia completo.</p>
        <img src="@/assets/img/guia-da-metodologia.png" alt="guia-da-metodologia">
      </div>
    </a>
    <a class="color-black" href="https://blog.solides.com.br/analisar-perfil-disc/">
      <div class="left-right">
        <h2>DISC: o que é e como analisar o perfil DISC corretamente</h2>
        <p>Para conseguir avançar na eficiência da gestão de pessoas é fundamental saber interpretar e analisar o perfil DISC. Saiba como aplicar o teste Disc.</p>
        <img src="@/assets/img/solucao-em-perfil-comportamental.png" alt="solucao-em-perfil-comportamental">
      </div>
    </a>
  </div>
  <img class="w-100" src="@/assets/img/frame-roxo-m.png" alt="">
  <footer>
    <div class="container">
      <div class="row px-4">
        <div class="col-12 col-lg-4 mb-30">
          <img class="logo-menu mb-50" 
          src="@/assets/img/solides-header-logo-white.png" 
          alt="logo da sólides branco">
          <ul class="list-inline">
            <li>
              <a href="#">Sobre a empresa</a>
            </li>
            <li>
              <a href="#">Responsabilidade Social</a>
            </li>
            <li>
              <a href="#">Politica de Privacidade</a>
            </li>
            <li>
              <a href="#">Nossos Parceiros</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-5 mb-30">
          <ul class="list-inline">
            <li>
              <a href="+55 (11) 4765-6674"><span class="estado">São Paulo</span> (11) 4765-6674</a>
            </li>
            <li>
              <a href="+55 (21) 4042-3914"><span class="estado">Rio de Janeiro</span> (21) 4042-3914</a>
            </li>
            <li>
              <a href="+55 (31) 3262-3464"><span class="estado">Belo Horizonte</span> (31) 3262-3464</a>
            </li>
            <li>
              <a href="#">Rua Tomé de Souza, 845</a>
            </li>
            <li>
              <a href="#">Belo Horizonte, MG</a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-3 mb-30">
          <ul class="list-inline social">
            <li>
              <a href="#">
                <img src="@/assets/img/svg/linkedin.svg" alt="linkedin">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/img/svg/instagram.svg" alt="instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/img/svg/facebook.svg" alt="facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <img src="@/assets/img/svg/youtube.svg" alt="youtube">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>
<Loading v-else></Loading>
</template>

<script>
import Loading from "@/components/Loading.vue"
export default {
  name: 'PerfilLp',
  components: {Loading},
  data () {
    return {
      lpId: 6,
      lp: null,
      controls: {
        expandMenu: false,
        expandConteudo: false,
        expandCursos: false
      },
    }
  },
  mounted () {
    this.getLP()
  },
  methods: {
    togleMenu () { this.controls.expandMenu = !this.controls.expandMenu },
    togleConteudo () {
      this.controls.expandConteudo = !this.controls.expandConteudo
      if (window.screen.width >= 998){
        this.controls.expandCursos = false
      }
    },
    togleCursos () {
      this.controls.expandCursos = !this.controls.expandCursos
      if (window.screen.width >= 998){
        this.controls.expandConteudo = false
      }
    },
    getLP () {
      this.$http.getLPsById(this.lpId)
      .then(res => res.json())
      .then(json => {
        this.lp = json
        document.title = this.lp.title.rendered
      });
    }
  }
}
</script>

<style lang="scss">
    @import '@/assets/scss/lpPerfilDisc.scss';
</style>
