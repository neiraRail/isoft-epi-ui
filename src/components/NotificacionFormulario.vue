<template>
  <v-form
    ref="form"
    v-model="FormularioValido"
    lazy-validation
    class="justify-center"
    style="margin: 2% 15%"
  >
    <v-alert type="error" v-if="mensajeError">{{ mensajeError }}</v-alert>
    <v-row>
      <v-col cols="1" md="100"><p>Run:</p></v-col>
      <v-text-field
        outlined
        placeholder="Ingrese su run"
        v-model="formRut"
        validate-on-blur
        :rules="[formRules.noBlankTextRequired,formRules.runPattern]"
      />
      <v-col cols="12" md="0">
        <v-btn @click="imprimirNotificacion()">Imprimir Notificación</v-btn>  
        <v-col cols="1" md="1"></v-col>
        <!-- <v-btn>volver</v-btn> -->
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
      formRut:"",
      FormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    };
  },
  methods: {
    imprimirNotificacion(){
      axios.get(
        "http://localhost:8080/pdf/exportar/" +
          this.formRut+"/"
      )
    }
  },
};
</script>

<style>
</style>