<template>
  <v-form
    ref="form"
    v-model="esEstFormularioValido"
    lazy-validation
    class="justify-center"
    style="margin: 2% 20%"
  >
    <v-alert type="error" v-if="mensajeError">{{ mensajeError }}</v-alert>
    <v-row>
      <v-col cols="12" md="4">
        <p>ID Establecimiento</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          style="width:50%"
          placeholder="Ingrese el ID del establecimiento que desea editar"
          v-model="establecimiento.estId"
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Nombre</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese el nombre del establecimiento"
          v-model="establecimiento.estNombre"
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
          v-model="establecimiento.estDireccion"
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
          v-model="establecimiento.com_Id"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>

      <v-col cols="12" md="4" >
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="editarEstablecimiento()">Editar</v-btn>     
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn color="error" @click="cancelar()">Cancelar</v-btn>
      </v-col>
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
      establecimiento: {
      estId: "",
      estNombre: "",
      estDireccion: "",
      com_Id:"",
      },
     
      esEstFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    };
  },
  methods: {
    
    editarEstablecimiento() {
      axios.put("http://localhost:8080/api/establecimiento/editar/" +
          this.establecimiento.estId, this.establecimiento
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

