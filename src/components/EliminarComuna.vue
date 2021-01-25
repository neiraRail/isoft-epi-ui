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
          style="width:100%"
          placeholder="Ingrese el ID de la comuna a eliminar"
          v-model="comId"
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4" >

      <v-col cols="12" align="center" justify="center">
        <v-btn @click="eliminarComuna()">Eliminar</v-btn>     
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
      comId: "",
      esEstFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    
    };
  },
  methods: {
    
    eliminarComuna() {
      axios.delete("http://localhost:8080/api/comuna/eliminar/" +
          this.comId
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
