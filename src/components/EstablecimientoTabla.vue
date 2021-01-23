<template>
  <div>
    <v-row  justify="center" dense>
      <v-col cols="4" align-self="center">
        <p style="text-align:center">Buscar Establecimiento por ID</p>
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese el ID del establecimiento a buscar"
          v-model="idFilter"
          type="number"
        />
      </v-col>
    </v-row>
    <v-data-table :headers="establecimientoHeaders" :items="establecimiento" class="elevation-1">
    </v-data-table>
    
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    establecimiento: { type: Array, default: () => {} },
  },
  data() {
    return {
      idFilter: "",
      establecimientoHeaders: [
        {
          text: "ID Establecimiento",
          value: "establecimiento.estId",
          filter: (value) => {
            if (!this.idFilter) return true;
            return value.toString().includes(this.idFilter.toString());
          },

        },
        {
          text: "Nombre Establecimiento",
          value: "establecimiento.estNombre",

        },
        {
          text: "Dirección Establecimiento",
          value: "establecimiento.estDireccion",

        },
        {
          text: "ID Comuna", 
          value: "com_Id" 
        },
      ],
    };
  },
};
</script>

<style>
</style>
