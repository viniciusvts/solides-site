import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Contato = () => import('@/views/Contato.vue')
const RecrutamentoESelecao = () => import('@/views/RecrutamentoESelecao.vue')
const AvaliacaoDesempenho = () => import('@/views/AvaliacaoDesempenho.vue')
const PesquisaClima = () => import('@/views/PesquisaClima.vue')
const BoxCultural = () => import('@/views/BoxCultural.vue')
const PeopleAnalytics = () => import('@/views/PeopleAnalytics.vue')
const PerfilLp = () => import('@/lps/PerfilLp.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
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
    name: 'perfil-lp',
    component: PerfilLp,
  },
  {
    path: '/lps/perfil-disc-lp/',
    name: 'perfil-lp',
    component: PerfilLp,
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