<template>
  <div>
    <v-row  justify="center" dense>
      <v-col cols="4" align-self="center">
        <p style="text-align:center">Buscar por RUT</p>
        <v-text-field
          dense
          outlined
          solo
          placeholder="Rut"
          v-model="rutFilter"
          type="number"
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
    antecedentes: { type: Array, default: () => {} },
  },
  data() {
    return {
      rutFilter: "",
      antecedentesHeaders: [
        {
          text: "RUT",
          value: "paciente.pacRut",
          filter: (value) => {
            if (!this.rutFilter) return true;
            return value.toString().includes(this.rutFilter.toString());
          },

        },
        {
          text: "Nombre",
          value: "paciente.pacNombres",

        },
        {
          text: "Apellidos",
          value: "paciente.pacApellidos",

        },
        {
          text: "Id", 
          value: "antId" 
        },
        { text: "Estado de embarazo", 
        value: "antEmbarazo" 
        },
        { text: "Semanas de Embarazo", 
        value: "antSemanaGest" 
        },
        {
          text: "Enfermedades crónicas",
          value: "antEnfermedadCronica",
        },
        {
          text: "Alergias",
          value: "antAlergias",
        },
        {
          text: "Tipo de sangre",
          value: "antTipoSangre",
        },
        {
          text: "medicamentos",
          value: "antMedicamentos",
        },
        {
          text: "Viaje al extranjero",
          value: "antViajeExtranjero",
        },
      ],
    };
  },
};
</script>

<style>
</style>
