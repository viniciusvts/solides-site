import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home.vue')
const RecrutamentoESelecao = () => import('@/views/RecrutamentoESelecao.vue')
const AvaliacaoDesempenho = () => import('@/views/AvaliacaoDesempenho.vue')
const PesquisaClima = () => import('@/views/PesquisaClima.vue')
const BoxCultural = () => import('@/views/BoxCultural.vue')
const PeopleAnalytics = () => import('@/views/PeopleAnalytics.vue')
const Profiler = () => import('@/views/Profiler.vue')
const Planos = () => import('@/views/Planos.vue')
const PoliticaPrivacidade = () => import('@/views/PoliticaPrivacidade.vue')
const Sobre = () => import('@/views/Sobre.vue')
const FalarComEspecialista = () => import('@/views/FalarComEspecialista.vue')
const PedirDemo = () => import('@/views/PedirDemo.vue')
const Contato = () => import('@/views/Contato.vue')
const Obrigado = () => import('@/views/Obrigado.vue')
// const PerfilLp = () => import('@/lps/PerfilLp.vue')
const PaginaNaoEncontrada = () => import('@/views/PaginaNaoEncontrada.vue')

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