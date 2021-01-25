<template>
  <v-form
    ref="form"
    v-model="esCasFormularioValido"
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
          placeholder="Ingrese el RUN del paciente"
          v-model="casFormulario.paciente.pacRut"
          type="number"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired, formRules.runPattern]"
        />
      </v-col>

      <v-col cols="12" md="4">
        <p>Fecha notificacion</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Fecha del caso"
          v-model="casFormulario.casFechaNotificacion"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"          
        />
      </v-col>

      <v-col cols="12" md="4">
        <p>Asintomatico</p>
      </v-col>
      <v-col cols="12" md="8">
          <v-switch
          v-model="casFormulario.casAsintomatico"
          :label="`${casFormulario.casAsintomatico.toString()}`"
          flat
          />
      </v-col>

      <v-col cols="12" md="4">
        <p>Fecha primeros sintomas</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Fecha de los primeros sintomas"
          v-model="casFormulario.casFechaPrimerosSintomas"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"          
        />
      </v-col>

      <v-col cols="12" md="4">
        <p>Semana epidemiologica</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Fecha epidemiologica"
          v-model="casFormulario.casSemanaEpidemiologica"
          validate-on-blur         
        />
      </v-col>

      <v-col cols="12" md="4">
        <p>Sintomas</p>
      </v-col>
      <v-col cols="24" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese los sintomas del caso"
          v-model="casFormulario.casSintomas"
          validate-on-blur
          />
      </v-col>

      <v-col cols="12" md="4">
        <p>Razon sospecha</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Razon de la sospecha"
          v-model="casFormulario.casRazonSospecha"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"          
        />
      </v-col>

      <v-col cols="12" md="4">
        <p>Clasificacion final</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Clasificacion final"
          v-model="casFormulario.casClasificacionFinal"
          validate-on-blur         
        />
      </v-col>

      <v-col cols="12" md="4">
        <p>Hospitalizacion</p>
      </v-col>
      <v-col cols="12" md="8">
          <v-switch
          v-model="casFormulario.casHospitalizacion"
          :label="`${casFormulario.casHospitalizacion.toString()}`"
          flat
          />
      </v-col>
    
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="guardarCaso">Guardar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import formRules from "@/common/formRules.js";
import casosService from "@/services/caso.service";

export default {
  data() {
    return {
      casFormulario: {
        paciente:{
          pacRut:"",
        },
        casFechaNotificacion: "",
        casAsintomatico: "",
        casFechaPrimerosSintomas: "",
        casSemanaEpidemiologica: "",
        casSintomas: "",
        casRazonSospecha: "",
        casClasificacionFinal: "",
        casHospitalizacion: "",
      },
      esCasFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    
    };
  },
  methods: {
    guardarCaso() {
      if (!this.$refs.form.validate()) return;
      return casosService.create(this.casFormulario).then(
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
