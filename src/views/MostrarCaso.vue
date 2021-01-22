<template>
  <div id="app">
    <div id="nav">
      <router-link to="/agregar-caso">Agregar Caso</router-link> |
      <router-link to="/mostrar-caso">Ver Casos</router-link> |
      <router-link to="/">Editar Caso</router-link> |
      <router-link to="/about">Eliminar Caso</router-link> |
    </div>
    <br><h1>Registro de casos</h1><br>
      <CasoTabla :casos="casos"/>
  </div>
</template>

<script>
import casoService from "@/services/caso.service";
export default {
  name: "App",
  data(){
    return{
      casos:[]
    }
  },
  methods: {
    fetchCasos() {
      casoService.getAll().then(response => (this.casos = response.data));
    }
  },
  components: {
    CasoTabla:() => import("@/components/CasoTabla")
  },
  mounted() {
    this.fetchCasos();
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>