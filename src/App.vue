<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/crear-establecimiento">Registrar Establecimiento</router-link> |
      <router-link to="/buscar-establecimiento">Buscar Establecimiento</router-link> |
      <router-link to="/editar-establecimiento">Editar Establecimiento</router-link> |
      <router-link to="/borrar-establecimiento">Eliminar Establecimiento</router-link> |
      <router-link to="/crear-region">Crear Región</router-link> |
      <router-link to="/crear-comuna">Crear Comuna</router-link> |

    </div>
    <router-view/>
  </v-app>
</template>

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
      color: #b9429f;
    }
  }
}
</style>
