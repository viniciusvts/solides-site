import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Contato = () => import('@/views/Contato.vue')
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