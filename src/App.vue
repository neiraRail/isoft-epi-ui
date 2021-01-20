<template>
  <v-app>
    <v-navigation-drawer color="#4270a8" v-model="drawer" app>
      
       <div id="logo">
        <v-img
          :src="require('../src/assets/logogob.png')"
          width="220" height="220"
        />
      </div>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar height="160" color="#white" app>
      
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <div id="banner">
        <v-img
          :src="require('../src/assets/banner.png')"
          width="1100" height="160"
        />
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer color="#d16667" app>
      <v-row
      justify="center"
      no-gutters
    >
      <v-col
        
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
    </v-footer>

  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0e4e9c;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #0e4e9c;

    &.router-link-exact-active {
      color: #0e4e9c;
    }
  }
}
</style>
<script>
  export default {
    data: () => ({
       drawer: null,
       items: [
          { title: 'Home', icon: 'mdi-account-details', to:"/"  },
          { title: 'Registros de Pacientes', icon: 'mdi-account-group', to:"/"},
          { title: 'Registro de Establecimientos', icon: 'mdi-account-plus-outline', to:"/" },
          { title: 'Registrar nuevo antecedente', icon: 'mdi-account-search-outline', to:"/" },
          { title: 'Registro de ', icon: 'mdi-account-search-outline', to:"/" },
          { title: 'Registro de ', icon: 'mdi-account-search-outline', to:"/" },
          { title: 'Registro de ', icon: 'mdi-account-search-outline', to:"/" },
        ],   
        
    }),
  }

</script>
