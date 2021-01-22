<template>
  <div id="app">
    <div id="nav">
        <router-link to="/crear-antecedente">Registrar Nuevo anetecedente</router-link> |
        <router-link to="/elegir-paciente">Editar Antecedente</router-link> |
        <router-link to="/ver-antecedente">Registro de antecedentes</router-link> |
      </div>
    <br><h1>Edición Antecedente Clínico</h1> <br>
    <AntecedenteEditor
      :antecedente="antecedente"
      @change="
        (data) => {
          antecedente = data;
        }
      "
    />
  </div>
</template>

<script>
import antecedenteService from "@/services/antecedentes.service";
export default {
  props:["id"],
  data(){
    return {
      antecedente: {
        paciente: {
          pacRut: "paciente.pacRut",
        },
        antEmbarazo: "antEmbarazo",
        antEnfermedadCronica: "antEnfermedadCronica",
        antAlergias: "antAlergias",
        antTipoSangre: "antTipoSangre",
        antMedicamentos: "antMedicamentos",
        antViajeExtranjero: "antViajeExtranjero",
      },
    };
  },
  methods: {
    fetchAntecedentes() {
      antecedenteService
        .get(this.id)
        .then((response) => (this.antecedente = response.data));
    },
  },
  components: {
    AntecedenteEditor:() => import("@/components/AntecedenteEditor")
  },
  mounted() {
    this.fetchAntecedentes();
  }
};
</script>

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
      color: #42b983;
    }
  }
}
</style>


