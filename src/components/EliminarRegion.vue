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

          placeholder="Ingrese el ID del establecimiento a eliminar"
          v-model="establecimiento.rgnId"
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4" >

      <v-col cols="12" align="center" justify="center">
        <v-btn @click="eliminarRegion()">Eliminar</v-btn>     
      </v-col>
    </v-col>  
    </v-row>
  </v-form>
</template>

<script>
import formRules from "@/common/formRules.js";
import regionService from "@/services/region.service";


export default {
  data() {
    return {
      establecimiento: {
       regNombre: "",
},
      esEstFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    
    };
  },
  methods: {
    
    eliminarRegion() {
      if (!this.$refs.form.validate()) return;
      return regionService.destroy(this.establecimiento.rgnId).then(
        () => {
          this.$router.push({
            name: "crear-region",
          });
        },
        () => {
          this.mensajeError="No se encuentra la región que desea borrar.";
        }
      );
    },
  },
};
</script>
<style>
</style>
