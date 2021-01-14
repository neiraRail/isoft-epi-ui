<template>
  <div id="app">
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

