import Vue from 'vue'
import VueRouter from 'vue-router'
// import Api from '@/services/ApiRest.js'

const Home = () => import('@/views/Home.vue')
const PerfilLp = () => import('@/lps/PerfilLp.vue')

Vue.use(VueRouter)
// Vue.use(Api)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/perfil-disc-lp/',
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