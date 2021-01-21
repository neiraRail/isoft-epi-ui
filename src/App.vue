<template>
  <v-app>
    <v-navigation-drawer color="#506d44" v-model="drawer" app>
      
       <div id="logo">
        <v-img
          :src="require('../src/assets/logoepi.png')"
          width="235" height="235"
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
          style="color:white"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title  style="font-weight: bold;">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar height="160" color="#81ab70" app>
      
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

    <v-footer color="#d9d5bf" app>
      <v-row
      justify="center"
      no-gutters
    >
      <v-col
        
        cols="12"
      >
        {{ new Date().getFullYear() }} 
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
  color: #0b4614;
}
</style>
<script>
  export default {
    data: () => ({
       drawer: null,
       items: [
          { title: 'Home', icon: 'mdi-account-details', to:"/"  },
          { title: 'Registro de Pacientes', icon: 'mdi-account-group', to:"/registro-paciente"},
          { title: 'Registro de Establecimientos', icon: 'mdi-account-plus-outline', to:"/" },
          { title: 'Registro antecedente', icon: 'mdi-account-search-outline', to:"/" },
          { title: 'Registro de casos', icon: 'mdi-account-search-outline', to:"/" },
          { title: 'Ingresar nuevo paciente', icon: 'mdi-account-search-outline', to:"/" },
          { title: 'Imprimir Formulario', icon: 'mdi-account-search-outline', to:"/imprimir-notificacion" }
        ],   
        
    }),
  }

</script>