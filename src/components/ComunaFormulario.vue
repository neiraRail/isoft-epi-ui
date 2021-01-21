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
          placeholder="Ingrese el nombre de la comuna"
          v-model="estFormulario.comNombre"
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
          v-model="estFormulario.rgn_id"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
     
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="guardarComuna">Guardar Comuna</v-btn>
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
      estFormulario: {
         region:{
          rgn_id:"",
        },
        comNombre: "",
      },
      esEstFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    };
  },

  methods: {
    
    guardarComuna() {
      if (!this.$refs.form.validate()) return;
      return comunaService.create(this.estFormulario).then(
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