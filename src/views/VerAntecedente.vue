<template>  
  <div id="app">
      <div id="nav">
        <router-link to="/crear-antecedente">Registrar Nuevo antecedente</router-link> |
        <router-link to="/elegir-paciente">Editar Antecedente</router-link> |
        <router-link to="/ver-antecedente">Registro de antecedentes</router-link> |
      </div>
      <br><h1>Antecedentes Clínicos</h1> <br>
      <AntecedenteTabla :antecedentes="antecedentes"/>
  </div>
</template>

<script>
import antecedenteService from "@/services/antecedentes.service";
export default {
  name: "App",
  data(){
    return{
      antecedentes:[]
    }
  },
  methods: {
    fetchAntecedentes() {
      antecedenteService.getAll().then(response => (this.antecedentes = response.data));
    }
  },
  components: {
    AntecedenteTabla:() => import("@/components/AntecedenteTabla")
  },
  mounted() {
    this.fetchAntecedentes();
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

