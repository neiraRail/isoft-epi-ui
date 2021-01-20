<template>
  <div id="app">
      <p>hoal esta funcionando</p>
      <AntecedenteEditor :antecedente="antecedente"/>
  </div>
</template>

<script>
import antecedenteService from "@/services/antecedentes.service";
export default {

  props:['Id'],
  
  data(){
    return{
      antecedente: null ,
    }
  },
  methods: {
    fetchAntecedentes() {
      antecedenteService.get(this.Id).then(response => (this.antecedente = response.data));
    }
  },
  components: {
    AntecedenteEditor:() => import("@/components/AntecedenteEditor")
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

