<template>
  <v-form
    ref="form"
    v-model="esEstFormularioValido"
    lazy-validation
    class="justify-center"
    style="margin: 2% 15%"
  >
    <v-alert type="error" v-if="mensajeError">{{ mensajeError }}</v-alert>
    <v-row>
      <v-col cols="12" md="4">
        <p>Nombre</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese el nombre de la región"
          v-model="regNombre"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="guardarRegion">Guardar Región</v-btn>
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn color="error" @click="cancelar()">Cancelar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import formRules from "@/common/formRules.js";
import axios from "axios";

export default {
  data() {
    return {
      regNombre: "",
      esEstFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    };
  },

  methods: {
      guardarRegion() {
      axios.post(
        "http://localhost:8080/api/region/agregar/?nombre="+
          this.regNombre 
      );
    },
    cancelar(){
      this.$router.push({
            name: "vista-establecimiento",
          });
    },
  },
};

</script>

<style>
</style>