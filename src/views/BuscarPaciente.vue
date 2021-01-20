<template>
  <div id="home">
      <PacienteTabla :paciente="paciente"/>
  </div>
</template>

<script>
import pacienteService from "@/services/paciente.service";
export default {
  name: "home",
  data(){
    return{
      paciente:[]
    }
  },
  methods: {
    fetchPacientes() {
      pacienteService.getAll().then(response => (this.paciente = response.data));
    }
  },
  components: {
    PacienteTabla:() => import("@/components/PacienteTabla")
  },
  mounted() {
    this.fetchPacientes();
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
