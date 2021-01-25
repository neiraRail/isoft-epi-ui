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
      <v-col cols="1" md="12"
        ><h2 style="color:#0b4614;">Ingrese el run del paciente</h2></v-col
      >
      <v-col cols="1" md="100"><p>Run:</p></v-col>
      <v-text-field
        outlined
        placeholder="Aquí se debe ingresar el run sin puntos ni guión"
        v-model="formRut"
        validate-on-blur
        :rules="[formRules.noBlankTextRequired, formRules.runPattern]"
      />
      <v-col cols="12" md="0">
        <v-btn @click="imprimirNotificacion()">Descargar reporte</v-btn>
        <v-col cols="1" md="1"></v-col>
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
      formRut: "",
      FormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    };
  },

  methods: {
    imprimirNotificacion() {
      axios('http://localhost:8080/pdf/exportar/'+this.formRut+'/', {
    method: 'GET',
    responseType: 'blob'
})
.then(response => {
    const file = new Blob(
    [response.data], 
    {type: 'application/pdf'});
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
})
.catch(error => {
    console.log(error);
});
    },
  },
};
</script>

<style></style>
