import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/ver-antecedente',
    name: 'Ver-antecedete',
    component: () => import(/* webpackChunkName: "about" */ '../views/VerAntecedente.vue')
  },
  {
    path: '/crear-antecedente',
    name: 'Crear-antecedete',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearAntecedente.vue')
  },
 
  {
    path:'/editar-antecedente/:id',
    name:"Edit-antecedente",
    props:true,
    component: require(/* webpackChunkName: "about" */ '../views/EditarAntecedente.vue')
  },
  {
    path:"/elegir-paciente",
    name:"Elegir-paciente",
    component: () =>import(/* webpackChunkName: "about" */ '../views/ElegirPaciente.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
