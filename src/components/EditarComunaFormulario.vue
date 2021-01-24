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
        <p>ID Comuna</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          style="width:50%"
          placeholder="Ingrese el ID de la comuna que desea editar"
          v-model="comuna.comId"
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
          placeholder="Ingrese el nombre de la comuna"
          v-model="comuna.comNombre"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>ID Región</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese el id de la región"
          v-model="comuna.rgnId"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4" >
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="editarComuna()">Editar</v-btn>     
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
      comuna: {
          comId: "",
          comNombre: "",
          rgnId: "",
      },
     
      esEstFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    };
  },
  
  methods: {
    
    editarComuna() {
      axios.put("http://localhost:8080/api/comuna/editar/" +
          this.comuna.comId, this.comuna
      );
    },
  },
};
</script>
<style>
</style>