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
          placeholder="Ingrese el nombre del establecimiento"
          v-model="estNombre"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
    
      <v-col cols="12" md="4">
        <p>Dirección</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese la dirección del establecimiento"
          v-model="estDireccion"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>

      <v-col cols="12" md="4">
        <p>Comuna</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese el id de la comuna"
          v-model="com_Id"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
     
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="guardarEstablecimiento">Guardar Establecimiento</v-btn>
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
      com_Id:"",
      estNombre: "",
      estDireccion: "",
      esEstFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    };
  },

  methods: {
      guardarEstablecimiento() {
      axios.post(
        "http://localhost:8080/api/establecimiento/agregar/" +
          this.estNombre +
          "/" +
          this.estDireccion +
          "/" +
          this.com_Id
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
