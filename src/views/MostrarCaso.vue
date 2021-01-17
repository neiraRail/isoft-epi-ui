<template>
  <div id="app">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>