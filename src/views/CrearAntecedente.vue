<template>
  <div class="home">
    <div id="nav">
        <router-link to="/crear-antecedente">Registrar Nuevo anetecedente</router-link> |
        <router-link to="/elegir-paciente">Editar Antecedente</router-link> |
        <router-link to="/ver-antecedente">Registro de antecedentes</router-link> |
      </div>
      <br> <h1>Formulario de Registro de Antecedente Clínico</h1> <br>
    <AntecedenteFormulario />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    AntecedenteFormulario: () => import("@/components/AntecedenteFormulario")
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
