<template>
  <v-form
    ref="form"
    lazy-validation
    class="justify-center"
    style="margin: 2% 15%"
  >
    <v-alert type="error" v-if="mensajeError">{{ mensajeError }}</v-alert>
    <v-row>
      <v-col cols="10" md="4">
        <p>Ingrese el id del antecedente que desea editar</p>
      </v-col>
      <v-col cols="10" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese id"
          v-model="id"
          validate-on-blur
        />
      </v-col>
      <v-col cols="10" align="center" justify="center">
        <v-btn @click="guardar">Guardar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
   return{
    id:"",
   };
  },
  methods: {
   guardar() {
      this.$router.push(
        {name: 'Edit-antecedente', params: { id: this.id }});
    },
  },
};
</script>
