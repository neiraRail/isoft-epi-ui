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
          placeholder="Ingrese el nombre del establecimiento."
          v-model="establecimiento.estNombre"
          type="text"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />  </v-col>
        <v-col cols="12" md="4">
        <p>Dirección</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese la dirección del establecimiento."
          v-model="establecimiento.estDireccion"
          type="text"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        /> </v-col>
        <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese la comuna del establecimiento."
          v-model="establecimiento.estComuna.com_id"
          type="text"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        /> 

      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="guardarEstablecimiento">Registrar Establecimiento</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import formRules from "@/common/formRules.js";
import establecimientoService from "@/services/establecimiento.service";

export default {
  
  data() {
    return {
      estFormulario: {
        comuna:{
          com_id:"",
        },
        establecimiento:{
          estNombre:"",
          estDireccion:"",
          estComuna:","
        },
      },
      esEstFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
      
    };
  },
  methods: {
    
    guardarEstablecimiento() {
      if (!this.$refs.form.validate()) return;
      return establecimientoService.create(this.estFormulario).then(
        () => {
          this.$router.push({
            name: "Home",
          });
        },
        (error) => {
          this.mensajeError = error.message;
        }
      );
    },
  },
};
</script>

<style>
</style>
