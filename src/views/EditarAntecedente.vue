<template>
  <div id="app">
      <AntecedenteEditor :antecedente="antecedente"/>
  </div>
</template>

<script>
import antecedenteService from "@/services/antecedentes.service";
export default {
  data(){
    return{
      antecedente:{} ,
    }
  },
  methods: {
    fetchAntecedentes() {
      antecedenteService.get().then(response => (this.antecedente = response.data));
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

