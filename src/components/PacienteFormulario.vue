<template>
  <v-form
    ref="form"
<<<<<<< HEAD
    v-model="esAntFormularioValido"
=======
    v-model="esPacienteFormularioValido"
>>>>>>> 6fd3b1a1d20dc51578787d56fbc05a2ace7712bf
    lazy-validation
    class="justify-center"
    style="margin: 2% 15%"
  >
    <v-alert type="error" v-if="mensajeError">{{ mensajeError }}</v-alert>
    <v-row>
      <v-col cols="12" md="4">
<<<<<<< HEAD
        <p>RUN</p>
=======
        <p>RUT</p>
>>>>>>> 6fd3b1a1d20dc51578787d56fbc05a2ace7712bf
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
<<<<<<< HEAD
          placeholder="Ingrese su RUN"
          v-model="antFormulario.paciente.pacRut"
          type="number"
          validate-on-blur
          

        />
      </v-col>
     
      <v-col cols="12" md="4">
        <p>Nombre</p>
=======
          placeholder="Ingrese su RUT"
          v-model="paciente.pacRut"
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Nombres</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su nombre"
          v-model="paciente.pacNombres"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Apellidos</p>
>>>>>>> 6fd3b1a1d20dc51578787d56fbc05a2ace7712bf
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
<<<<<<< HEAD
          v-model="antFormulario.antEnfermedadCronica"
          validate-on-blur
          
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Apellido</p>
=======
          placeholder="Ingrese sus Apellidos"
          v-model="paciente.pacApellidos"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Direccion</p>
>>>>>>> 6fd3b1a1d20dc51578787d56fbc05a2ace7712bf
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
<<<<<<< HEAD
          v-model="antFormulario.antAlergias"
          validate-on-blur
          
        />
      </v-col>
    
      <v-col cols="12" md="4">
        <p>Fecha nacimiento</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-date-picker
           v-model="antFormulario.antMedicamentos"
        />
      </v-col>
      
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="guardarAntecedente">Guardar</v-btn>
=======
          placeholder="Ingrese su direccion"
          v-model="paciente.pacDireccion"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
          
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Nacionalidad</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su nacionalidad"
          v-model="paciente.pacNacionalidad"
          type="text"
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Pueblo Originario</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su pueblo originario"
          v-model="paciente.pacPuebloOriginario"
          type="text"
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
       <v-col cols="12" md="4">
        <p>Fecha Nacimiento</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su fecha de nacimiento"
          v-model="paciente.pacFechaNacimiento"
          type="text"
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
       <v-col cols="12" md="4">
        <p>Fecha Fallecimiento</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Fecha Fallecimiento"
          v-model="paciente.pacFechaFallecimiento"
          type="text"
        />
      </v-col>
       <v-col cols="12" md="4">
        <p>Sexo</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su genero"
          v-model="paciente.pacSexo"
          type="text"
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col> <v-col cols="12" md="4">
        <p>Telefono</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su numero de telefono"
          v-model="paciente.pacTelefono"
          type="text"
          :rules="[formRules.phoneLength]"
        />
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="guardarPaciente()">Registrar Paciente</v-btn>
>>>>>>> 6fd3b1a1d20dc51578787d56fbc05a2ace7712bf
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
<<<<<<< HEAD

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
      
      mensajeError: "",
      tiposSangre:['O-','O+','A-','A+','B-','B+','AB-','AB+'],
=======
import formRules from "@/common/formRules.js";
import pacienteService from "@/services/paciente.service";

export default {
  data() {
    return {
      paciente: {
        pacRut:"",
        pacNombres:"",
        pacApellidos: "",
        pacDireccion: "",
        pacFechaFallecimiento: "",
        pacNacionalidad: "",
        pacPuebloOriginario: "",
        pacSexo:"",
        pacTelefono: "",
        pacFechaNacimiento : "",
        
},
      esPacienteFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    
>>>>>>> 6fd3b1a1d20dc51578787d56fbc05a2ace7712bf
    };
  },
  methods: {
    
<<<<<<< HEAD
    guardarAntecedente() {
      if (!this.$refs.form.validate()) return;
      return antecedentesService.create(this.antFormulario).then(
        () => {
          this.$router.push({
             name: 'home'
=======
    guardarPaciente() {
      if (!this.$refs.form.validate()) return;
      return pacienteService.create(this.paciente).then(
        () => {
          this.$router.push({
            name: "Home",
>>>>>>> 6fd3b1a1d20dc51578787d56fbc05a2ace7712bf
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
