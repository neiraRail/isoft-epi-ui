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
    name: 'Ver-antecedente',
    component: () => import(/* webpackChunkName: "about" */ '../views/VerAntecedente.vue')
  },
  {
    path: '/crear-antecedente',
    name: 'Crear-antecedete',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearAntecedente.vue')
  },
 
  {
    path:'/editar-antecedente',
    name:"Edit-antecedente",
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarAntecedente.vue')
  },
  {
    path:"/elegir-paciente",
    name:"Elegir-paciente",
    component: () =>import(/* webpackChunkName: "about" */ '../views/ElegirPaciente.vue')
  },
  {
    path: '/vista-establecimiento',
    name: 'vista-establecimiento',
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaEstablecimiento.vue')
  },
  {
    path: '/crear-region',
    name: 'crear-region',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearRegion.vue')
  },
  {
    path: '/buscar-region',
    name: 'buscar-region',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuscarRegion.vue')
  },
  {
    path: '/eliminar-region',
    name: 'eliminar-region',
    component: () => import(/* webpackChunkName: "about" */ '../views/EliminarRegion.vue')
  },
  {
    path: '/editar-region',
    name: 'editar-region',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarRegion.vue')
  },
  {
    path: '/crear-comuna',
    name: 'crear-comuna',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearComuna.vue')
  }, 
  {
    path: '/buscar-comuna',
    name: 'buscar-comuna',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuscarComuna.vue')
  }, 
  {
    path: '/eliminar-comuna',
    name: 'eliminar-comuna',
    component: () => import(/* webpackChunkName: "about" */ '../views/EliminarComuna.vue')
  }, 
  {
    path: '/editar-comuna',
    name: 'editar-comuna',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarComuna.vue')
  }, 
  {
    path: '/crear-establecimiento',
    name: 'crear-establecimiento',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearEstablecimiento.vue')
  },
  {
    path: '/buscar-establecimiento',
    name: 'buscar-establecimiento',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuscarEstablecimiento.vue')
  },
  {
    path: '/eliminar-establecimiento',
    name: 'eliminar-establecimiento',
    component: () => import(/* webpackChunkName: "about" */ '../views/EliminarEstablecimiento.vue')
  },
  {
    path: '/editar-establecimiento',
    name: 'editar-establecimiento',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarEstablecimiento.vue')
  },
  {
    path: '/registro-paciente',
    name: 'registro-paciente',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/VistaRegistro.vue')
    }
  },
  {
    path: '/crear-paciente',
    name: 'Crear-paciente',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearPaciente.vue')
  },
  {
    path: '/buscar-paciente',
    name: 'Buscar-paciente',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuscarPaciente.vue')
  },
  {
    path: '/editar-paciente',
    name: 'Editar-paciente',
    component: () => import(/* webpackChunkName: "about" */'../views/EditarPaciente.vue')
  },
  {
    path: '/eliminar-paciente',
    name: 'eliminar-paciente',
    component: () => import(/* webpackChunkName: "about" */'../views/EliminarPacienteV.vue')
  }, { 
    path: '/mostrar-caso',
    name: 'Mostrar-caso',
    component: () => import(/* webpackChunkName: "about" */ '../views/MostrarCaso.vue')
  },
  {
    path: '/agregar-caso',
    name: 'Agregar-caso',
    component: () => import(/* webpackChunkName: "about" */ '../views/AgregarCaso.vue')
  },
  {
    path: '/imprimir-notificacion',
    name: 'Imprimir-notificacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/ImprimirNotificacion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router