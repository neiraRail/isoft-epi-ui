<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/crear-establecimiento">Registrar Establecimiento</router-link> |
      <router-link to="/crear-establecimiento">Buscar Establecimiento</router-link> |
      <router-link to="/crear-establecimiento">Editar Establecimiento</router-link> |
      <router-link to="/crear-establecimiento">Registrar Establecimiento</router-link> |

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
