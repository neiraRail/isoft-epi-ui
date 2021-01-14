<template>
  <div>
    <v-row  justify="center" dense>
      <v-col cols="4" align-self="center">
        <p style="text-align:center">Filtrar rut</p>
        <v-text-field
          dense
          outlined
          solo
          placeholder="Escriba el rut"
          v-model="rutFilter"
          type="text"
        />
      </v-col>
    </v-row>
    <v-data-table :headers="antecedentesHeaders" :items="antecedentes" class="elevation-1">
    </v-data-table>
    
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    antecedentes: { type: Array, default: () => [] },
  },
  data() {
    return {
      rutFilter: "",
      antecedentesHeaders: [
        {
          text: "RUT",
          value: "paciente.pacRut",
          filter: (value) => {
            if (!this.nombreFilter) return true;
            return value.toString().includes(this.nombreFilter.toString());
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
        { text: "embarazo", 
        value: "antEmbarazo" },
        {
          text: "cronico",
          value: "antEnfermedadCronica",
        },
        {
          text: "alergias",
          value: "antAlergias",
        },
        {
          text: "sangre",
          value: "antTipoSangre",
        },
        {
          text: "meds",
          value: "antMedicamentos",
        },
        {
          text: "viaje",
          value: "antViajeExtranjero",
        },
      ],
    };
  },
};
</script>

<style>
</style>
