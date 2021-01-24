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
          placeholder="Ingrese el ID de la comuna a eliminar"
          v-model="comuna.comId"
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4" >

      <v-col cols="12" align="center" justify="center">
        <v-btn @click="eliminarComuna()">Eliminar</v-btn>     
      </v-col>
    </v-col>  
    </v-row>
  </v-form>
</template>

<script>
import formRules from "@/common/formRules.js";
import comunaService from "@/services/comuna.service";


export default {
  data() {
    return {
      comuna: {
      comNombre: "",
      regionId: "",
    },
      esEstFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    
    };
  },
  methods: {
    
    eliminarComuna() {
      if (!this.$refs.form.validate()) return;
      return comunaService.destroy(this.comuna.comId).then(
        () => {
          this.$router.push({
            name: "crear-comuna",
          });
        },
        () => {
          this.mensajeError="No se encuentra el comuna que desea borrar.";
        }
      );
    },
  },
};
</script>
<style>
</style>
