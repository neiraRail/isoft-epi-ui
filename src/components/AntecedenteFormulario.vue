<template>
  <v-form
    ref="form"
    v-model="esANtFormularioValido"
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
          placeholder="Ingrese su rut"
          v-model="AntFormulario.paciente"
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
          placeholder="Ingrese su enfermedades cronicas"
          v-model="antFormulario.antEnfermedad_cronica"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
    
      <v-col cols="12" md="4">
        <p>Telefono</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su Telefono"
          v-model="dueFormulario.dueTelefono"
          type="text"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired, formRules.phoneLength]"
          @input="soloNumerosTelefono"
        />
      </v-col>
    
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="guardarAntecedente">Guardar antecedente</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import formRules from "@/common/formRules.js";
import AntecedenteService from "@/services/antecedentes.service";

export default {
  data() {
    return {
      antFormulario: {
        dueTelefono: "",
        dueNombre: "",
        dueDireccion: "",
      },
      esAntFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
      mostrarContraseña: false,
    };
  },
  methods: {
    soloNumerosTelefono() {
      this.$nextTick(() => {
        this.antFormulario.dueTelefono = this.antFormulario.dueTelefono.replace(
          /[^0-9]/g,
          ""
        );
        if (this.antFormulario.dueTelefono.length >= 9)
          this.antFormulario.dueTelefono = this.antFormulario.dueTelefono.slice(
            0,
            9
          );
      });
    },
    guardarAntecedente() {
      if (!this.$refs.form.validate()) return;
      return AntecedenteService.create(this.antFormulario).then(
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
