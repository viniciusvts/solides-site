<template>
<div class="lpPerfilDisc over-x-h">
  <nav :class="{'active': controls.expandMenu}" class="navbar navbar-expand-lg navbar-light">
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
              <img class="d-none d-lg-block" src="@/assets/img/seta-pra-cima-primary.png" alt="menu">
            </span>
            <span v-else class="submenu">
              <img class="d-lg-none" src="@/assets/img/seta-pra-baixo.png" alt="menu">
              <img class="d-none d-lg-block" src="@/assets/img/seta-pra-baixo-primary.png" alt="menu">
            </span>
          </a>
          <div
          :class="{'active': controls.expandConteudo}"
          class="dropdown-menu"
          aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Blog da Sólides</a>
            <a class="dropdown-item" href="#">RH Portal</a>
            <a class="dropdown-item" href="#">Materiais</a>
            <a class="dropdown-item" href="#">Ferramentas</a>
          </div>
        </li>
        <li class="nav-item">
          <a @click="togleCursos" class="nav-link" href="#">
            Cursos
            <span v-if="controls.expandCursos" class="submenu">
              <img class="d-lg-none" src="@/assets/img/seta-pra-cima.png" alt="menu">
              <img class="d-none d-lg-block" src="@/assets/img/seta-pra-cima-primary.png" alt="menu">
            </span>
            <span v-else class="submenu">
              <img class="d-lg-none" src="@/assets/img/seta-pra-baixo.png" alt="menu">
              <img class="d-none d-lg-block" src="@/assets/img/seta-pra-baixo-primary.png" alt="menu">
            </span>
          </a>
          <div
          :class="{'active': controls.expandCursos}"
          class="dropdown-menu"
          aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Engenharia de Cargos<p class="saiba-mais">Saiba mais >></p></a>
            <a class="dropdown-item" href="#">People Analytics<p class="saiba-mais">Saiba mais >></p></a>
            <a class="dropdown-item" href="#">RH Tecnológico<p class="saiba-mais">Saiba mais >></p></a>
            <a class="dropdown-item" href="#">Recrutamento e Seleção<p class="saiba-mais">Saiba mais >></p></a>
            <a class="dropdown-item" href="#">Gestão Comportamental<p class="saiba-mais">Saiba mais >></p></a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Preços</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Seja Parceiro</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container mt-70 pb-60 mt-md-120">
    <div class="row ml-0">
      <div class="text-left color-primary to-left-70 mt-120">
        <h2>Perfil Disc e mais 7 metodologias em um só lugar</h2>
        <p>Aplique o Profiler, único assesment que em apenas 5 minutos mostra mais de 50 informações sobre o perfil comportamental do profissional</p>
        <!--exibe apenas em desktop -->
        <div class="mt-70 pr-0 d-none d-lg-block">
          <a href="#" class="pr-0">
            <button class="badge badge-pill mx-button blue-back two-in-a-row">Comprar Agora</button>
          </a>
          <a href="#" class="pr-0">
            <button class="badge badge-pill mx-button blue-outline two-in-a-row">Fale com um especialista</button>
          </a>
          <!--profiler-->
          <div class="mt-250 text-right pr-0 trx-60 color-black">
            <h2 class="mb-5 pr-0">O que é o profiler?</h2>
            <p class="pr-0">O Profiler é um teste comportamental exclusivo da  Sólides, baseado no teste Disc e mais sete metodologias de perfis comportamentais. Validado por USP, UFMG, e FINEP, em apenas 5 minutos o Profiler fornece mais de 50 informações sobre a pessoam entre elas competências, energia e pressão para o trabalho, fatores moticacionais e de afastamento, estilo de liderança ideal e histórico individual</p>
            <div class="mt-50 pr-0">
              <a href="#" class="pr-0">
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
      <a href="#">
        <button class="badge badge-pill mx-button blue-back two-in-a-row">Comprar Agora</button>
      </a>
      <a href="#">
        <button class="badge badge-pill mx-button blue-outline two-in-a-row">Fale com um especialista</button>
      </a>
    </div>
  </div>
  <!--profiler-->
  <div class="container pt-60 pb-60 text-center d-lg-none">
    <h2 class="mb-5">O que é o profiler?</h2>
    <p>O Profiler é um teste comportamental exclusivo da  Sólides, baseado no teste Disc e mais sete metodologias de perfis comportamentais. Validado por USP, UFMG, e FINEP, em apenas 5 minutos o Profiler fornece mais de 50 informações sobre a pessoam entre elas competências, energia e pressão para o trabalho, fatores moticacionais e de afastamento, estilo de liderança ideal e histórico individual</p>
    <div class="centerize-itens mt-50">
      <a href="#">
        <button class="badge badge-pill mx-2 blue-back">Quero fazer o Profiler</button>
      </a>
    </div>
  </div>
  <!--profiler competencias-->
  <div class="bg-light">
    <div class="container pt-60 text-center">
      <h2 class="mb-5 color-primary">Com o Profiler, trabalhe o desenvolvimento de talentos e foque em suas principais competências</h2>
      <div class="row">
        <div class="col-6 col-md-3 mb-md-5 mb-lg-4">
          <img src="@/assets/img/coaching.png" alt="coaching">
        </div>
        <div class="col-6 col-md-3 mb-md-5 mb-lg-4">
          <img src="@/assets/img/treinamentos.png" alt="treinamentos">
        </div>
        <div class="col-6 col-md-3 mb-md-5 mb-lg-4">
          <img src="@/assets/img/formacao.png" alt="formacao">
        </div>
        <div class="col-6 col-md-3 mb-md-5 mb-lg-4">
          <img src="@/assets/img/auto-conhecimento.png" alt="auto-conhecimento">
        </div>
        <div class="col-6 col-md-3 mb-md-5 mb-lg-4">
          <img src="@/assets/img/getao-de-pessoas.png" alt="getao-de-pessoas">
        </div>
        <div class="col-6 col-md-3 mb-md-5 mb-lg-4">
          <img src="@/assets/img/processos-de-recrutamento-e-selecao.png" alt="processos-de-recrutamento-e-selecao">
        </div>
        <div class="col-6 col-md-3 mb-md-5 mb-lg-4">
          <img src="@/assets/img/controle-da-taxa-de-rotatividade.png" alt="controle-da-taxa-de-rotatividade">
        </div>
        <div class="col-6 col-md-3 mb-md-5 mb-lg-4">
          <img src="@/assets/img/diminuicao-de-suctus-em-processos-de-contratacao.png" alt="diminuicao-de-suctus-em-processos-de-contratacao">
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
        <h2>Como o Profiler tem ajudado pessoas e empresas?</h2>
        <!--so aparece em desktop -->
        <div class="d-none d-lg-block">
          <p class="w-80">Desde 2010 a Sólides e seus parceiros desenvolvem talentos e colocam a pessoa certa no lugar certo.</p>
          <ul class="detalhes pl-0">
            <li class="font-weight-bold"><span class="color-cyan bold">+ 8 mil</span> analistas comportamentais formados</li>
            <li class="font-weight-bold"><span class="color-cyan bold">+ 2 milhões</span> de relatórios</li>
            <li class="font-weight-bold"><span class="color-cyan bold">+ 350</span> parceiros</li>
          </ul>
          <div class="container mt-5 text-right">
            <h2>O que torna o Profiler exclusivo?</h2>
            <p>O único com <span class="font-weight-bold">8 metodologias</span> de perfis comportamentais</p>
            <p>Análise comportamental em apenas <span class="font-weight-bold">5 minutos</span></p>
            <p>Aumento da <span class="font-weight-bold">produtividade</span> e aumento da <span class="font-weight-bold">produtividade</span></p>
            <p><span class="font-weight-bold">Altíssima precisão</span> comprovada</p>
            <a href="#">
              <button class="badge badge-pill mx-button yellow-back">Quero saber mais</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--como o profiler... detalhes-->
  <div class="container d-lg-none">
      <p class="pl-4 w-80">Desde 2010 a Sólides e seus parceiros desenvolvem talentos e colocam a pessoa certa no lugar certo.</p>
      <ul class="detalhes pl-4">
        <li class="font-weight-bold"><span class="color-cyan bold">+ 8 mil</span> analistas comportamentais formados</li>
        <li class="font-weight-bold"><span class="color-cyan bold">+ 2 milhões</span> de relatórios</li>
        <li class="font-weight-bold"><span class="color-cyan bold">+ 350</span> parceiros</li>
      </ul>
    <div class="container mt-5 px-3">
      <h2>O que torna o Profiler exclusivo?</h2>
      <p>O único com <span class="font-weight-bold">8 metodologias</span> de perfis comportamentais</p>
      <p>Análise comportamental em apenas <span class="font-weight-bold">5 minutos</span></p>
      <p>Aumento da <span class="font-weight-bold">produtividade</span> e aumento da <span class="font-weight-bold">produtividade</span></p>
      <p><span class="font-weight-bold">Altíssima precisão</span> comprovada</p>
      <a href="#">
        <button class="badge badge-pill mx-button yellow-back">Quero saber mais</button>
      </a>
    </div>
  </div>
  <!-- <img class="w-100 rotate-180" src="@/assets/img/frame1.png" alt=""> -->
  <!--validado por-->
  <div class="container pt-60 pb-60">
    <h2 class="ml-4">Validado por:</h2>
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
    <div id="ytframe">
      <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/pytNf_1YweM"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    </div>
    <div class="centerize-itens mt-30">
      <a href="#">
        <button class="badge badge-pill mx-button red-back">Compre Agora</button>
      </a>
    </div>
  </div>
  <!-- <img class="w-100" src="@/assets/img/frame1.png" alt=""> -->
  <!--simlpes contratar...-->
  <div class="container pt-60">
    <h2 class="text-center color-primary">Simples de contratar<br>Rápido de aplicar</h2>
    <div class="mt-5 text-center row">
      <div class="col-12 col-lg-4 mt-50">
        <img src="@/assets/img/adquira-creditos.png" alt="adquira-creditos">
        <p class="color-primary mt-3 px-5">Adquira créditos (1 crédito vale 1 Profiler)</p>
      </div>
      <div class="col-12 col-lg-4 mt-50">
        <img
        src="@/assets/img/envia-para-a-pessoa-que-quer-avaliar.png"
        alt="envia-para-a-pessoa-que-quer-avaliar">
        <p class="color-primary mt-3 px-5">Envie para a pessoa que você deseja avaliar</p>
      </div> 
      <div class="col-12 col-lg-4 mt-50">
        <img
        src="@/assets/img/receba-o-relatorio-comportamental-pronto.png"
        alt="receba-o-relatorio-comportamental-pronto">
        <p class="color-primary mt-3 px-5">Receba o relatório comportamental pronto</p>
      </div> 
    </div>
    <div class="centerize-itens mt-30">
      <a href="#">
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
          <img class="profile" src="@/assets/img/foto_wagner.png" alt="foto depoimento">
          <p class="profile color-primary">Wagner Ribeiro</p>
        </div>
        <div class="col-12 col-lg-10">
          <div class="text">
            <img class="asp begin" src="@/assets/img/asp-begin.png" alt="aspas begin">
            <img class="asp end" src="@/assets/img/asp-end.png" alt="aspas end">
            <p>Como Profissional Coaching, o Profiler é uma poderosa ferramenta para start do processo com meus clientes.</p>
          </div>
          <div class="identidade">
            <p>CEO da Academia Brasileira de Desenvolvimento de Pessoas e Negócios - ABRADEP, Fundador da Confraria Brasileira de Coaching - CBC; Consultor & Analista de Negócios e Gestão Empresarial.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img class="frame" src="@/assets/img/frame1.png" alt="">
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
          <a href="#">
            <button class="badge badge-pill mx-button blue-back">Comprar agora</button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- form aqui -->
  <div class="bg-gray">
    <div class="container pt-60 pb-60">
      <h2>Form Aqui!</h2>
    </div>
  </div>
  <div class="container pt-60 pb-60">
    <div class="row ml-0 bestcontent-profiler">
      <div class="to-left-30">
        <div class="vertical-pill green"></div>
        <img class="mt-120 ml-0" src="@/assets/img/melhores-conteudos.png" alt="melhores-conteudos">
      </div>
      <div class="text-left to-right-70 mt-30 mt-xs-0 mt-lg-5">
        <h2 class="pr-5">Melhores conteúdos sobre Profiler</h2>
        <div class="left-right d-none d-lg-block mt-120 pl-5">
          <h2>Profiler Sólides: solução em perfil comportamental</h2>
          <p class="mb-0">O profiler é um assessment que utiliza 8 metodologias de perfil comportamental.</p>
          <p>Saiba como esse teste exclusivo da Sólides pode ajudar a sua empresa!</p>
        </div>
      </div>
      <div class="row d-none d-lg-flex">
        <div class="col-6">
          <h2>Guia da metodologia DISC: o que é, como aplicar e importância</h2>
          <p>Descubra tudo sobre a Metodologia DISC, uma ferramenta usada para desenvolver pessoas e trabalhar as principais competências. Confira o guia completo.</p>
        </div>
        <div class="col-6">
          <img src="@/assets/img/solucao-em-perfil-comportamental.png" alt="solucao-em-perfil-comportamental">
          
        </div>
      </div>
      <div class="left-right d-none d-lg-flex">
        <div class="col-6">
          <img src="@/assets/img/guia-da-metodologia.png" alt="guia-da-metodologia">
        </div>
        <div class="col-6">
          <h2>DISC: o que é e como analisar o perfil DISC corretamente</h2>
          <p>Para conseguir avançar na eficiência da gestão de pessoas é fundamental saber interpretar e analisar o perfil DISC. Saiba como aplicar o teste Disc.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-xs-50 d-lg-none">
    <div class="left-right">
      <h2>Profiler Sólides: solução em perfil comportamental</h2>
      <p class="mb-0">O profiler é um assessment que utiliza 8 metodologias de perfil comportamental.</p>
      <p>Saiba como esse teste exclusivo da Sólides pode ajudar a sua empresa!</p>
      <img src="@/assets/img/solucao-em-perfil-comportamental.png" alt="solucao-em-perfil-comportamental">
    </div>
    <div class="right-left">
      <h2>Guia da metodologia DISC: o que é, como aplicar e importância</h2>
      <p>Descubra tudo sobre a Metodologia DISC, uma ferramenta usada para desenvolver pessoas e trabalhar as principais competências. Confira o guia completo.</p>
      <img src="@/assets/img/guia-da-metodologia.png" alt="guia-da-metodologia">
    </div>
    <div class="left-right">
      <h2>DISC: o que é e como analisar o perfil DISC corretamente</h2>
      <p>Para conseguir avançar na eficiência da gestão de pessoas é fundamental saber interpretar e analisar o perfil DISC. Saiba como aplicar o teste Disc.</p>
      <img src="@/assets/img/solucao-em-perfil-comportamental.png" alt="solucao-em-perfil-comportamental">
    </div>
  </div>
  <img class="w-100" src="@/assets/img/frame-roxo-m.png" alt="">
  <footer>
    <div class="container">
      <div class="row px-4">
        <div class="col-12 mb-50">
          <img class="logo-menu" 
          src="@/assets/img/solides-header-logo-white.png" 
          alt="logo da sólides branco">
        </div>
        <div class="col-12 mb-30">
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
        <div class="col-12 mb-30">
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
        <div class="col-12 mb-30">
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
</template>

<script>
export default {
  name: 'PerfilLp',
  data () {
    return {
      controls: {
        expandMenu: false,
        expandConteudo: false,
        expandCursos: false
      },
    }
  },
  methods: {
    togleMenu () { this.controls.expandMenu = !this.controls.expandMenu },
    togleConteudo () { this.controls.expandConteudo = !this.controls.expandConteudo },
    togleCursos () { this.controls.expandCursos = !this.controls.expandCursos },
    sendForm () {
      // to-do
      /*Api.sendToCF7(3795, this.formData)
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.formMessage = json.message;
      });*/
    }
  }
}
</script>

<style lang="scss">
    @import '@/assets/scss/lpPerfilDisc.scss';
</style>
