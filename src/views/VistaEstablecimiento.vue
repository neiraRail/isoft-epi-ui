<template>
  <v-app>
    <div id="nav">
      <router-link to="/crear-establecimiento">Registrar Establecimiento</router-link> |
      <router-link to="/buscar-establecimiento">Buscar Establecimiento</router-link> |
      <router-link to="/editar-establecimiento">Editar Establecimiento</router-link> |
      <router-link to="/eliminar-establecimiento">Borrar Establecimiento</router-link> |
      <router-link to="/crear-region">Registrar Región</router-link> |
      <router-link to="/buscar-region">Buscar Región</router-link> |
      <router-link to="/editar-region">Editar Región</router-link> |
      <router-link to="/borrar-region">Borrar Región</router-link> |
      <router-link to="/crear-comuna">Registrar Comuna</router-link> |
      <router-link to="/buscar-comuna">Buscar Comuna</router-link> |
      <router-link to="/editar-comuna">Editar Comuna</router-link> |
      <router-link to="/borrar-comuna">Borrar Comuna</router-link> 
    </div>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000102;

    &.router-link-exact-active {
      color: #170aca;
    }
  }
}
</style>