<template>
  <v-form
    ref="form"
    v-model="esAntFormularioValido"
    lazy-validation
    class="justify-center"
    style="margin: 2% 15%"
  >
    <v-alert type="error" v-if="mensajeError">{{ mensajeError }}</v-alert>
    <v-row>
      <v-col cols="12" md="4">
        <p>RUN</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su RUN"
          v-model="antFormulario.paciente.pacRut"
          type="text"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired, formRules.runPattern]"

        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Paciente esta Embarazada</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-switch
          v-model="antFormulario.antEmbarazo"
          :label="`${antFormulario.antEmbarazo.toString()}`"
          color="red"
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Enfermedad crónica</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese si tiene una enfermedad crónica"
          v-model="antFormulario.antEnfermedadCronica"
          validate-on-blur
          
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Alergias</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese si tiene alergias"
          v-model="antFormulario.antAlergias"
          validate-on-blur
          
        />
      </v-col>
      
      <v-col cols="12" md="4">
        <p>Tipo de sangre</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-select
        :items="tiposSangre"
        v-model="antFormulario.antTipoSangre"
        label= "Tipo de Sangre"
        outlined
        validate-on-blur
          :rules="[formRules.noBlankTextRequired]"

        />
      </v-col>
      <v-col cols="12" md="4">
        <p>medicamentos</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su medicamentos"
          v-model="antFormulario.antMedicamentos"
          type="text"
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Viaje al extranjero</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese la ciudad y país al que viajó"
          v-model="antFormulario.antViajeExtranjero"
          type="text"
        />
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="guardarAntecedente">Guardar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import formRules from "@/common/formRules.js";
import antecedentesService from "@/services/antecedentes.service";

export default {
  
  data() {
    return {
      antFormulario: {
        paciente:{
          pacRut:"",
        },
        antEmbarazo: false,
        antEnfermedadCronica: "",
        antAlergias: "",
        antTipoSangre: "",
        antMedicamentos: "",
        antViajeExtranjero: "",

      },
      esAntFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
      tiposSangre:['O-','O+','A-','A+','B-','B+','AB-','AB+'],
    };
  },
  methods: {
    
    guardarAntecedente() {
      if (!this.$refs.form.validate()) return;
      return antecedentesService.create(this.antFormulario).then(
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
