<template>
  <v-form
    ref="form"
    lazy-validation
    class="justify-center"
    style="margin: 2% 15%"
  >
    <v-alert type="error" v-if="mensajeError">{{ mensajeError }}</v-alert>
    <v-row>
      <v-col cols="12" md="4">
        <p>id antecedente</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese id"
          v-model="id"
          validate-on-blur
        />
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="guardar">Guardar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      id:"",
      mensajeError: "",
    };
  },
  methods: {
   guardar() {
    // arreglar esto
        () => {
          this.$router.push({
            name: "Home",
          });
        }
    },
  },
};
</script>

<style>
</style>
