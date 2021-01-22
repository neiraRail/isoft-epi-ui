<template>
  <div>
    <v-row  justify="center" dense>
      <v-col cols="4" align-self="center">
        <p style="text-align:center">Buscar por RUT</p>
        <v-text-field
          dense
          outlined
          solo
          placeholder="Escriba el rut del paciente"
          v-model="rutFilter"
          type="text"
        />
      </v-col>
    </v-row>
    <v-data-table :headers="casosHeaders" :items="casos" class="elevation-1">
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    casos: { type: Array, default: () => [] },
  },
  data() {
    return {
      rutFilter: "",
      casosHeaders: [
        {
          text: "ID",
          value: "casId",
        },
        {
          text: "RUT",
          value: "paciente.pacRut",
          filter: (value) => {
            if (!this.rutFilter) return true;
            return value.toString().includes(this.rutFilter.toString());
          },
        },
        {
          text: "Fecha notificacion",
          value: "casFechaNotificacion",
        },
        {
          text: "Asintomatico",
          value: "casAsintomatico",
        },
        {
          text: "Fecha primeros sintomas",
          value: "casFechaPrimerosSintomas",
        },
        {
          text: "Semana epidemiologica",
          value: "casSemanaEpidemiologica",
        },
        {
          text: "Sintomas",
          value: "casSintomas",
        },
        {
          text: "Razon sospecha",
          value: "casRazonSospecha",
        },
        {
          text: "Clasificacion",
          value: "casClasificacionFinal",
        },
        {
          text: "Hospitalizacion",
          value: "casHospitalizacion",
        },
      ],
    };
  },
};

</script>
<style>
</style>