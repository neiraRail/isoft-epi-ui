<template>
  <div>
    <v-row  justify="center" dense>
      <v-col cols="4" align-self="center">
        <p style="text-align:center">Filtrar rut</p>
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su rut"
          v-model="rutFilter"
          type="text "
        />
      </v-col>
    </v-row>
    <v-data-table :headers="pacienteHeaders" :items="paciente" class="elevation-1">
    </v-data-table>
     <v-col cols="12" align="center" justify="center">
        <v-btn color="error" @click="cancelar()">Cancelar</v-btn>
      </v-col>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    paciente: { type: Array, default: () => [] },
  },
  data() {
    return {
      rutFilter: "",
      pacienteHeaders: [
        {
          text: "RUT",
          value: "paciente.pacRut",
          filter: (value) => {
            if (!this.rutFilter) return true;
            return value.toString().includes(this.rutFilter.toString());
          },

        },
        {
          text: "Paciente",
          value: "paciente.pacNombres",

        },
        {
          text: "",
          value: "paciente.pacApellidos",

        },
        { text: "", 
        value: "paciente.pacDireccion" },
        {
          text: "",
          value: "paciente.pacFechaFallecimiento",
        },
        {
          text: "",
          value: "paciente.pacNacionalidad",
        },
        {
          text: "",
          value: "paciente.pacPuebloOriginario",
        },
        {
          text: "",
          value: "paciente.pacFechaNacimiento",
        },
        {
          text: "",
          value: "paciente.pacSexo",
        },
        {
          text: "",
          value: "paciente.pacTelefono",
        },
      ],
    };
  },

 methods: {
    cancelar(){
      this.$router.push({
            name: "registro-paciente",
          });
    },
  },};
</script>

<style>
</style>
