import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import RecrutamentoESelecao from '@/views/RecrutamentoESelecao.vue'
import AvaliacaoDesempenho from '@/views/AvaliacaoDesempenho.vue'
import PesquisaClima from '@/views/PesquisaClima.vue'
import BoxCultural from '@/views/BoxCultural.vue'
import PeopleAnalytics from '@/views/PeopleAnalytics.vue'
import Profiler from '@/views/Profiler.vue'
import Planos from '@/views/Planos.vue'
import PoliticaPrivacidade from '@/views/PoliticaPrivacidade.vue'
import Sobre from '@/views/Sobre.vue'
import FalarComEspecialistaBlack from '@/views/FalarComEspecialista_black.vue'
import FalarComEspecialista from '@/views/FalarComEspecialista.vue'
import PedirDemo from '@/views/PedirDemo.vue'
import Contato from '@/views/Contato.vue'
import Obrigado from '@/views/Obrigado.vue'
import CalcRotat from '@/views/CalcRotat.vue'
import CalcRotatResult from '@/views/CalcRotatResult.vue'
import CalcProdut from '@/views/CalcProdut.vue'
import CalcProdutResultado from '@/views/CalcProdutResultado.vue'
// import PerfilLp from '@/lps/PerfilLp.vue'
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue'
import SalaImprensa from '@/views/SalaImprensa.vue'
import Materiais from '@/views/Materiais.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/produtos/recrutamento-e-selecao',
    name: 'RecrutamentoESelecao',
    component: RecrutamentoESelecao,
  },
  {
    path: '/produtos/avaliacao-de-desempenho',
    name: 'AvaliacaoDesempenho',
    component: AvaliacaoDesempenho,
  },
  {
    path: '/produtos/pesquisa-de-clima',
    name: 'PesquisaClima',
    component: PesquisaClima,
  },
  {
    path: '/produtos/box-cultural',
    name: 'BoxCultural',
    component: BoxCultural,
  },
  {
    path: '/produtos/people-analytics',
    name: 'PeopleAnalytics',
    component: PeopleAnalytics,
  },
  {
    path: '/produtos/profiler',
    name: 'Profiler',
    component: Profiler,
  },
  {
    path: '/planos',
    name: 'Planos',
    component: Planos,
  },
  {
    path: '/politica-de-privacidade',
    name: 'PoliticaPrivacidade',
    component: PoliticaPrivacidade,
  },
  {
    path: '/sobre-nos',
    name: 'Sobre',
    component: Sobre,
  },
  {
    path: '/falar-com-um-especialista',
    name: 'FalarComEspecialista',
    component: FalarComEspecialista,
  },
  {
    path: '/falar-com-um-especialista-black-november',
    name: 'FalarComEspecialistaBlack',
    component: FalarComEspecialistaBlack,
  },
  {
    path: '/pedir-uma-demo',
    name: 'PedirDemo',
    component: PedirDemo,
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
  },
  {
    path: '/obrigado',
    name: 'Obrigado',
    component: Obrigado,
  },
  {
    path: '/sala-de-imprensa',
    name: 'Materiais',
    component: SalaImprensa,
  },
  {
    path: '/materiais',
    name: 'Materiais',
    component: Materiais,
  },
  {
    path: '/ferramentas/calculadora-de-rotatividade',
    name: 'CalcRotat',
    component: CalcRotat,
  },
  {
    path: '/ferramentas/rotatividade-resultado',
    name: 'CalcRotatResult',
    component: CalcRotatResult,
  },
  {
    path: '/ferramentas/calculadora-de-produtividade',
    name: 'CalcProdut',
    component: CalcProdut,
  },
  {
    path: '/ferramentas/produtividade-resultado',
    name: 'CalcProdutResultado',
    component: CalcProdutResultado,
  },
  // {
  //   path: '/lps/perfil-disc-lp/',
  //   name: 'perfil-lp',
  //   component: PerfilLp,
  // },
  {
    path: '*',
    name: 'Não encontrado',
    component: PaginaNaoEncontrada,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
})

export default router