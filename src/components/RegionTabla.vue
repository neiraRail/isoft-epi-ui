<template>
  <div>
    <v-row  justify="center" dense>
      <v-col cols="4" align-self="center">
        <p style="text-align:center">Buscar Región por ID</p>
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese el ID de la region a buscar"
          v-model="idFilter"
          type="number"
        />
      </v-col>
    </v-row>
    <v-data-table :headers="regionHeaders" :items="region" class="elevation-1">
    </v-data-table>
    
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    region: { type: Array, default: () => {} },
  },
  data() {
    return {
      idFilter: "",
      regionHeaders: [
        {
          text: "ID Región",
          value: "region.rgnId",
          filter: (value) => {
            if (!this.idFilter) return true;
            return value.toString().includes(this.idFilter.toString());
          },

        },
        {
          text: "Nombre Región",
          value: "region.rgnNombre",

        },
      ],
    };
  },
};
</script>

<style>
</style>
