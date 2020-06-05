<template>
<div v-if="lp" class="lpPerfilDisc over-x-h">

  <nav
    :class="{'active': controls.expandMenu, 'scrolled': controls.scroll}"
    class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="javascript: void(0)">
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
          <li @click="togleConteudo(null)"
          @mouseover="togleConteudo(true)"
          @mouseout="togleConteudo(false)"
          class="nav-item">
            <a class="nav-link p-0" href="javascript: void(0)">
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
            class="dropdown-menu conteudo"
            aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="https://blog.solides.com.br/">Blog da Sólides</a>
              <a href="https://blog.solides.com.br/" class="no-decoration">
                <p class="d-none d-lg-block">
                  Os melhores conteúdos para gestão de pessoas
                </p>
              </a>
              <a class="dropdown-item" href="https://www.rhportal.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346">RH Portal</a>
              <a href="https://www.rhportal.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346" class="no-decoration">
                <p class="d-none d-lg-block">Os melhores conteúdos sobre gestão de pessoas</p>
              </a>
              <a class="dropdown-item" href="https://solides.com.br/materiais-educativos/">Materiais</a>
              <a href="https://solides.com.br/materiais-educativos/" class="no-decoration">
                <p class="d-none d-lg-block">Os melhores conteúdos para gestão de pessoas</p>
              </a>
              <a class="dropdown-item" href="https://contratarerradocustacaro.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346">Ferramentas</a>
              <a href="https://contratarerradocustacaro.com.br/?__hstc=237478239.26aa389a524d853dd6c37d54678ebce0.1576514278372.1589294299112.1589376437584.128&__hssc=237478239.1.1589376437584&__hsfp=2627390346" class="no-decoration">
                <p class="d-none d-lg-block">Calculadora de rotatividade</p>
              </a>
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
              <a class="dropdown-item" href="https://universidade.solides.com.br/course/people-analytics/">Engenharia de Cargos<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
              <a class="no-decoration" href="https://universidade.solides.com.br/course/people-analytics/">
                <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
              </a>
              <a class="dropdown-item " href="https://universidade.solides.com.br/course/people-analytics/">People Analytics<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
              <a class="no-decoration" href="https://universidade.solides.com.br/course/people-analytics/">
                <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
              </a>
              <a class="dropdown-item" href="https://universidade.solides.com.br/course/rh-tecnologico/">RH Tecnológico<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
              <a class="no-decoration" href="https://universidade.solides.com.br/course/rh-tecnologico/">
                <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
              </a>
              <a class="dropdown-item" href="https://universidade.solides.com.br/course/gestao-comportamental-na-pratica/">Recrutamento e Seleção<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
              <a class="no-decoration" href="https://universidade.solides.com.br/course/gestao-comportamental-na-pratica/">
                <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
              </a>
              <a class="dropdown-item" href="https://universidade.solides.com.br/course/gestao-comportamental-na-pratica/">Gestão Comportamental<p class="saiba-mais d-lg-none">Saiba mais >></p></a>
              <a class="no-decoration" href="https://universidade.solides.com.br/course/gestao-comportamental-na-pratica/">
                <p class="saiba-mais d-none d-lg-block">Saiba mais >></p>
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link p-0" href="#prices">Preços</a>
          </li>
          <li class="nav-item">
            <a class="nav-link p-0" href="https://materiais.solides.com.br/parceria">Seja Parceiro</a>
          </li>
          <li class="nav-item showOnScroll d-none" :class="{'active': controls.scroll}">
            <a class="nav-link p-0" href="https://checkout.solides.com.br/">
              <button class="badge badge-pill blue-back color-white two-in-a-row">Comprar agora</button>
            </a>
          </li>
          <li class="nav-item showOnScroll d-none" :class="{'active': controls.scroll}">
            <a class="nav-link p-0" href="#form">
              <button class="badge badge-pill blue-outline two-in-a-row">Fale com um especialista</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-70 pb-40 pb-lg-60 mt-md-120">
    <div class="row ml-0">
      <div class="text-left color-primary to-left-70 mt-70 discprofiler">
        <h2 v-html="lp.acf.titulo1" class="mt-3 mt-lg-70 mb-4 mb-lg-3"></h2>
        <p v-html="lp.acf.texto1"></p>
        <!--exibe apenas em desktop -->
        <div class="mt-70 pr-0 d-none d-lg-block">
          <a href="https://checkout.solides.com.br/" class="pr-0">
            <button class="badge badge-pill mr-1 blue-back color-white two-in-a-row">Comprar agora</button>
          </a>
          <a href="#form" class="pr-0">
            <button class="badge badge-pill ml-1 blue-outline two-in-a-row">Fale com um especialista</button>
          </a>
          <!--profiler-->
          <div class="text-right pr-0 trx-60 color-almostBlack internal-wip mt-xl-120">
            <h2 v-html="lp.acf.titulo2" class="mb-2 pr-0"></h2>
            <p v-html="lp.acf.texto2" class="pr-0 pf-details"></p>
            <div class="mt-50 pr-0">
              <a href="https://checkout.solides.com.br/" class="pr-0">
                <button class="badge badge-pill blue-back color-white">Quero fazer o Profiler</button>
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
    <div class="mt-50 mt-lg-70 d-lg-none">
      <a href="https://checkout.solides.com.br/">
        <button class="badge badge-pill mr-1 blue-back two-in-a-row color-white">Comprar agora</button>
      </a>
      <a href="#form">
        <button class="badge badge-pill ml-1 blue-outline two-in-a-row">Fale com um especialista</button>
      </a>
    </div>
  </div>
  <!--profiler-->
  <div class="container pt-40 pt-lg-60 pb-60 text-center d-lg-none color-almostBlack mobile-wip">
    <h2 v-html="lp.acf.titulo2" class="mb-4 mb-md-5"></h2>
    <p v-html="lp.acf.texto2"></p>
    <div class="centerize-itens mt-50">
      <a href="https://checkout.solides.com.br/">
        <button class="badge badge-pill mx-2 blue-back color-white valPorBadge">Quero fazer o Profiler</button>
      </a>
    </div>
  </div>
  <!--profiler competencias-->
  <div class="bg-light">
    <div class="container pt-60 text-center">
      <h2 v-html="lp.acf.titulo3" class="mb-5 color-primary t2"></h2>
      <div class="row profiler-competencias">
        <div v-for="(gal, index) in lp.acf.gal3"
        :key="index"
        @click="togleTooltip(null, index)"
        @mouseover="togleTooltip(true, index)"
        @mouseout="togleTooltip(false, index)"
        class="col-6 col-md-3 mb-lg-2">
          <img :src="gal.imagem.sizes.medium" :alt="gal.imagem.alt">
          <div class="tooltip competencias" :class="{'active': competenciasTooltip[index]}">
            <p v-html="gal.tooltip"></p>
          </div>
          <p v-html="gal.texto" class="color-primary font-weight-bold"></p>
        </div>
      </div>
    </div>
  </div>
  <img class="frame" src="@/assets/img/frame1.png" alt="">
  <!--como o profiler...-->
  <div class="container pt-60 pt-lg-0">
    <div class="row ml-lg-0">
      <div class="to-left-30">
        <div class="vertical-pill cyan"></div>
        <img class="mt-img-profiler"
        src="@/assets/img/Terceira-sessao-perfil-disc 2.png"
        alt="homem achando solução na solides">
      </div>
      <div class="text-left to-right-70 mt-30 text-profiler">
        <h2 v-html="lp.acf.titulo4" class="color-almostBlack text-right text-lg-left trtr-profiler t4"></h2>
        <!--so aparece em desktop -->
        <div class="d-none d-lg-block">
          <p v-html="lp.acf.texto4" class="mt-lg-4 mb-lg-4 color-almostBlack"></p>
          <ul class="detalhes pl-0 ul1">
            <li class="mb-lg-4">
              <span v-html="lp.acf.mil_analistas" class="color-cyan font-weight-bold"></span> analistas comportamentais formados
            </li>
            <li class="mb-lg-4">
              <span v-html="lp.acf.milhoes_relatorios" class="color-cyan font-weight-bold"></span> de relatórios
            </li>
            <li class="mb-lg-4">
              <span v-html="lp.acf.parceiros" class="color-cyan font-weight-bold"></span> parceiros
            </li>
          </ul>
          <div class="container mt-5">
            <h2 v-html="lp.acf.titulo5" class="mb-lg-4 color-almostBlack"></h2>
            <div v-html="lp.acf.texto5" class="escada color-almostBlack"></div>
            <div class="text-right">
              <a href="https://checkout.solides.com.br/">
                <button class="badge badge-pill mx-button yellow-back color-white">Quero saber mais</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--como o profiler... detalhes-->
  <div class="container d-lg-none">
      <p v-html="lp.acf.texto4" class="pt-4 pl-4 w-80"></p>
      <ul class="detalhes pl-4 ul1">
        <li>
          <span v-html="lp.acf.mil_analistas" class="color-cyan bold font-weight-bold"></span> analistas comportamentais formados
        </li>
        <li>
          <span v-html="lp.acf.milhoes_relatorios" class="color-cyan bold font-weight-bold"></span> de relatórios
        </li>
        <li>
          <span v-html="lp.acf.parceiros" class="color-cyan bold font-weight-bold"></span> parceiros
        </li>
      </ul>
    <div class="container mt-3 mt-lg-5 px-3">
      <h2 v-html="lp.acf.titulo5" class="simples mx-0"></h2>
      <div v-html="lp.acf.texto5" class="proExclusivo"></div>
      <a href="https://checkout.solides.com.br/">
        <button class="badge badge-pill yellow-back color-white exclusivo">Quero saber mais</button>
      </a>
    </div>
  </div>
  <img class="frame d-none d-lg-block" src="@/assets/img/svg/frame2.png" alt="">
  <img class="frame rotate-180 d-lg-none" src="@/assets/img/frame1.png" alt="">
  <!--validado por-->
  <div class="bg-light">
    <div class="container pb-40 pb-lg-60">
      <h2 v-html="lp.acf.titulo6" class="ml-4 trtr-valPor"></h2>
      <div class="row ml-4">
        <div class="text-left color-primary to-left-70">
          <div class="row pr-md-0 text-md-center trtr-valPor">
            <div class="col-12 col-md-4 pr-md-0 mt-40">
              <img src="@/assets/img/usp.png" alt="usp" class="valpor">
            </div>
            <div class="col-12 col-md-4 pr-md-0 mt-40">
              <img src="@/assets/img/ufmg.png" alt="ufmg" class="valpor">
            </div>
            <div class="col-12 col-md-4 pr-md-0 mt-40">
              <img src="@/assets/img/finep.png" alt="finep" class="valpor">
            </div>
          </div>
        </div>
        <div class="to-right-30">
          <div class="vertical-pill red"></div>
        </div>
      </div>
      <div v-html="lp.acf.iframe6" id="ytframe">
      </div>
      <div class="text-center text-lg-left mt-30 row-lg">
        <div class="d-none d-lg-block col-2 col-hd-1"></div>
        <a href="https://checkout.solides.com.br/">
          <button class="badge badge-pill mx-button red-back color-white valPorBadge">Compre Agora</button>
        </a>
      </div>
    </div>
  </div>
  <img class="frame" src="@/assets/img/frame1.png" alt="">
  <!--simlpes contratar...-->
  <div class="container pt-40 pt-lg-60">
    <h2 v-html="lp.acf.titulo7" class="text-center color-primary simples"></h2>
    <div class="mt-5 text-center row simple">
      <div v-for="(wf, index) in lp.acf.workflow_comprar7" :key="index" class="col-12 col-lg-4">
        <img :src="wf.imagem.sizes.medium" :alt="wf.imagem.alt">
        <p class="color-primary mt-3 px-5 px-lg-2 font-weight-bold">{{wf.text}}</p>
      </div>
    </div>
    <div class="centerize-itens mt-0 mt-lg-30">
      <a href="https://checkout.solides.com.br/">
        <button class="badge badge-pill mx-button blue-back color-white mb-30 valPorBadge">Comprar agora</button>
      </a>
    </div>
  </div>
  <img class="frame rotate-180" src="@/assets/img/frame1.png" alt="">
  <!--depoimento-->
  <div class="bg-light">
    <div class="container">
      <div class="depoimento row">
        <div class="text-center col-12 col-lg-3 align-lg-vertical">
          <img class="profile" :src="lp.acf.depoimento_foto.sizes.medium" :alt="lp.acf.depoimento_foto.alt">
          <p v-html="lp.acf.depoimento_nome" class="profile color-primary font-roboto"></p>
        </div>
        <div class="col-12 col-lg-9">
          <div class="text">
            <img class="asp begin" src="@/assets/img/asp-begin.png" alt="aspas begin">
            <img class="asp end" src="@/assets/img/asp-end.png" alt="aspas end">
            <div v-html="lp.acf.depoimento_texto" class="font-roboto"></div>
          </div>
          <div v-html="lp.acf.depoimento_identidade" class="identidade font-roboto"></div>
        </div>
      </div>
    </div>
  </div>
  <img class="frame" src="@/assets/img/frame1.png" alt="" id="prices">
  <!--tabela de preços-->
  <div class="container pb-60 text-center">
    <div class="container">
      <div class="row">
        <h2
        v-html="lp.acf.tabela_titulo"
        class="color-primary col-12 col-lg-6 text-lg-left prices"></h2>
        <p class="mt-4 mb-4 col-12 col-lg-6 text-lg-right credit-price color-cyan bold" v-html="lp.acf.tabela_texto_destaque">
        </p>
      </div>
      <div class="row mb-5">
        <div class="d-none d-lg-block col-lg-6 align-lg-vertical">
          <img
          class="w-100"
          :src="lp.acf.tabela_imagem_destaque.sizes.large"
          :alt="lp.acf.tabela_imagem_destaque.alt">
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
              <tr v-for="(preco, index) in lp.acf.tabela_precos" :key="index">
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
          <a href="https://checkout.solides.com.br/">
            <button class="badge badge-pill mx-button blue-back color-white valPorBadge">Comprar agora</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- form aqui -->
  <div class="bg-gray" id="form">
    <div class="container pt-60 pb-1">
      <h2 class="color-primary text-center form">Conheça todos os benefícios do Profiler</h2>
      <div class="hsform"></div>
      <p class="privacy color-primary">
        A Sólides nunca enviará qualquer tipo de spam. Consulte nossa 
        <strong>
          <a href="https://www.solides.com.br/politica-de-privacidade" class="color-primary">
            política de privacidade.
          </a>
        </strong>
      </p>
    </div>
  </div>
  <img class="frame" src="@/assets/img/svg/frame-form.svg">
  <!-- melhor conteúdo sobre o profiler -->
  <div class="container pt-60 pb-2">
    <div class="row ml-0 bestcontent-profiler">
      <div class="to-left-30">
        <div class="vertical-pill green"></div>
      </div>
      <div class="text-left to-right-70 mt-30 mt-xs-0 mt-lg-5">
        <h2 v-html="lp.acf.titulo10" class="color-almostBlack bestContent"></h2>
      </div>
      <div class="profiler-content-lg d-none d-lg-block">
        <a class="color-almostBlack" :href="lp.acf.link_1_secao_10">
          <div class="row mt-70">
            <div class="col-5">
              <img class="ml"
              :src="lp.acf.imagem_1_secao_10.sizes.large"
              :alt="lp.acf.imagem_1_secao_10.alt">
            </div>
            <div class="col-7 trtrx-bcf">
              <h2 v-html="lp.acf.subtitulo_1_secao_10" class="bestContentSub right"></h2>
              <p v-html="lp.acf.texto_1_secao_10"></p>
            </div>
          </div>
        </a>
        <a class="color-almostBlack" :href="lp.acf.link_2_secao_10">
          <div class="row mt-70">
            <div class="col-7 text-right right-t">
              <h2 v-html="lp.acf.subtitulo_2_secao_10" class="bestContentSub left"></h2>
              <p v-html="lp.acf.texto_2_secao_10" class="left"></p>
            </div>
            <div class="col-5">
              <img class="mr"
              :src="lp.acf.imagem_2_secao_10.sizes.large"
              :alt="lp.acf.imagem_2_secao_10.alt">
            </div>
          </div>
        </a>
        <a class="color-almostBlack" :href="lp.acf.link_3_secao_10">
          <div class="row mt-70">
            <div class="col-5">
              <img class="ml"
              :src="lp.acf.imagem_3_secao_10.sizes.large"
              :alt="lp.acf.imagem_3_secao_10.alt">
            </div>
            <div class="col-7 trtrx-bcf">
              <h2 v-html="lp.acf.subtitulo_3_secao_10" class="bestContentSub right"></h2>
              <p v-html="lp.acf.texto_3_secao_10"></p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <!-- melhor conteúdo sobre o profiler -->
  <div class="container mt-xs-50 d-lg-none">
    <a class="color-almostBlack" :href="lp.acf.link_1_secao_10">
      <div class="left-right">
        <img 
        :src="lp.acf.imagem_1_secao_10.sizes.large"
        :alt="lp.acf.imagem_1_secao_10.alt">
        <h2 v-html="lp.acf.subtitulo_1_secao_10"></h2>
        <p v-html="lp.acf.texto_1_secao_10"></p>
      </div>
    </a>
    <a class="color-almostBlack" :href="lp.acf.link_2_secao_10">
      <div class="right-left">
        <img 
        :src="lp.acf.imagem_2_secao_10.sizes.large"
        :alt="lp.acf.imagem_2_secao_10.alt">
        <h2 v-html="lp.acf.subtitulo_2_secao_10"></h2>
        <p v-html="lp.acf.texto_2_secao_10"></p>
      </div>
    </a>
    <a class="color-almostBlack" :href="lp.acf.link_3_secao_10">
      <div class="left-right">
        <img
        :src="lp.acf.imagem_3_secao_10.sizes.large"
        :alt="lp.acf.imagem_3_secao_10.alt">
        <h2 v-html="lp.acf.subtitulo_3_secao_10"></h2>
        <p v-html="lp.acf.texto_3_secao_10"></p>
      </div>
    </a>
  </div>
  <img class="w-100" src="@/assets/img/svg/footer-frame.svg" alt="">
  <footer>
    <div class="container">
      <div class="row px-4">
        <div class="col-12">
          <img class="logo-menu mb-50" 
          src="@/assets/img/solides-header-logo-white.png" 
          alt="logo da sólides branco">
        </div>
        <div class="col-12 col-lg-4 mb-30">
          <ul class="list-inline">
            <li v-for="(foo, index) in lp.acf.footer_1" :key="index">
              <a v-html="foo.texto" :href="foo.link"></a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-5 mb-30">
          <ul class="list-inline numbers">
            <li v-for="(foo, index) in lp.acf.footer_2" :key="index">
              <a v-html="foo.texto" :href="foo.link"></a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-3 mb-30">
          <ul class="list-inline social">
            <li v-for="(foo, index) in lp.acf.footer_3" :key="index">
              <a :href="foo.link">
                <img :src="foo.imagem.sizes.medium" alt="linkedin">
                {{foo.texto}}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>
<div v-else>
  <Loading></Loading>
  <h4 class="text-center">{{mensagem}}</h4>
</div>
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
      mensagem: 'Carregando...',
      controls: {
        expandMenu: false,
        expandConteudo: false,
        expandCursos: false,
        scroll: false
      },
      /** os tooltips só funcionaram definindo previamente os indices
       * gera-los dinamicamente não tem funcionado
       */
      competenciasTooltip:{
        "0":false,
        "1":false,
        "2":false,
        "3":false,
        "4":false,
        "5":false,
        "6":false,
        "7":false,
        "8":false,
        "9":false,
        "10":false,
        "11":false,
        "12":false
      }
    }
  },
  mounted () {
    this.getLP()
    window.addEventListener('scroll', this.handleScroll)
    this.startHsForm('.hsform');
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    togleMenu () { this.controls.expandMenu = !this.controls.expandMenu },
    togleConteudo (flag) {
      if (flag == null) {
        this.controls.expandConteudo = !this.controls.expandConteudo
        this.controls.expandCursos = false
        return;
      }
      this.controls.expandConteudo = flag
    },
    togleCursos (flag) {
      if (flag == null) {
        this.controls.expandCursos = !this.controls.expandCursos
        this.controls.expandConteudo = false
        return;
      }
      this.controls.expandCursos = flag
    },
    togleTooltip (flag, index) {
      if (typeof index == 'undefined') return new TypeError('É necessário um valor para index')
      if (flag == null) {
        this.competenciasTooltip[index] = !this.competenciasTooltip[index]
        return;
      }
      this.competenciasTooltip[index] = flag
      console.log('tooltip', index, flag)
      console.log('this.competenciasTooltip[index]', this.competenciasTooltip[index])
    },
    getLP () {
      this.$http.getLPsById(this.lpId)
      .then(res => {
        if (!res.ok)
          this.mensagem = "Erro ao carregar, por favor recarregue a página."
        return res.json()
      })
      .then(json => {
        this.lp = json
        document.title = this.lp.title.rendered
      });
    },
    handleScroll () {
      this.controls.scroll = (window.scrollY >= 800)
    },
    startHsForm (selector) {
      setTimeout(() => {
        window.hbspt.forms.create({
          portalId: "6009739",
          formId: "aa14808c-6ee3-4ff3-9a79-aa376731e05b",
          target: selector
        });
      }, 5000);
    },
    scrollSmothTo (event) {
      // dont work
      const elem = document.querySelector(event.target.getAttribute('href'))
      window.scroll({
        top: elem.offsetTop, 
        left: 0, 
        behavior: 'smooth'
      });
      // document.querySelector(event.target.getAttribute('href')).scrollIntoView({ 
      //   behavior: 'smooth' 
      // });
    }
  }
}
</script>

<style lang="scss">
    @import '@/assets/scss/lpPerfilDisc.scss';
</style>
