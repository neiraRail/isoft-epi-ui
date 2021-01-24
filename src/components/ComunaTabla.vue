<template>
  <div>
    <v-row  justify="center" dense>
      <v-col cols="4" align-self="center">
        <p style="text-align:center">Buscar Comuna por ID</p>
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese el ID de la comuna a buscar"
          v-model="idFilter"
          type="number"
        />
      </v-col>
    </v-row>
    <v-data-table :headers="comunaHeaders" :items="comuna" class="elevation-1">
    </v-data-table>
    
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    comuna: { type: Array, default: () => {} },
  },
  data() {
    return {
      idFilter: "",
      comunaHeaders: [
        {
          text: "ID Comuna",
          value: "comuna.comId",
          filter: (value) => {
            if (!this.idFilter) return true;
            return value.toString().includes(this.idFilter.toString());
          },

        },
        {
          text: "Nombre Comuna",
          value: "comuna.comNombre",

        },
        {
          text: "ID Región",
          value: "comuna.regionId",
        },
      ],
    };
  },
};
</script>

<style>
</style>
