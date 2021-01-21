<template>
  <div id="app">
    <p>Edición de Antecedente</p>
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

