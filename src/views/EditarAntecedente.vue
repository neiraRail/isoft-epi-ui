<template>
  <div id="app">
    <div id="nav">
        <router-link to="/crear-antecedente">Registrar Nuevo antecedente</router-link> |
        <router-link to="/editar-antecedente">Editar Antecedente</router-link> |
        <router-link to="/ver-antecedente">Registro de antecedentes</router-link> |
      </div>
    <br><h1>Edición Antecedente Clínico</h1> <br>
    <AntecedenteEditor/>
  </div>
</template>

<script>

export default {
  components: {
    AntecedenteEditor:() => import("@/components/AntecedenteEditor")
  },
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


