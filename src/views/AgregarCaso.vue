<template>
  <div id="app">
    <div id="nav">
      <router-link to="/agregar-caso">Agregar Caso</router-link> |
      <router-link to="/mostrar-caso">Mostrar Casos</router-link> |
      <router-link to="/">Editar Caso</router-link> |
      <router-link to="/about">Eliminar Caso</router-link> |
    </div>
    <br><h1>Agregar un nuevo caso</h1><br>
      <CasoFormulario/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    CasoFormulario: () => import("@/components/CasoFormulario")
  }
}
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