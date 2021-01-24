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

          placeholder="Ingrese el ID del establecimiento a eliminar a eliminar"
          v-model="establecimiento.estId"
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4" >

      <v-col cols="12" align="center" justify="center">
        <v-btn @click="eliminarEstablecimiento()">Eliminar</v-btn>     
      </v-col>
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
      establecimiento: {
       estId: "",
       com_Id:"",
       estNombre: "",
       estDireccion: "",
},
      esEstFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    
    };
  },
  methods: {
    
    eliminarEstablecimiento() {
      if (!this.$refs.form.validate()) return;
      return establecimientoService.destroy(this.establecimiento.estId).then(
        () => {
          this.$router.push({
            name: "crear-establecimiento",
          });
        },
        () => {
          this.mensajeError="No se encuentra el establecimiento que desea borrar.";
        }
      );
    },
  },
};
</script>
<style>
</style>
