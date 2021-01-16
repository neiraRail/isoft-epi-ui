<template>
  <v-form
    ref="form"
    v-model="esPacienteFormularioValido"
    lazy-validation
    class="justify-center"
    style="margin: 2% 15%"
  >
    <v-alert type="error" v-if="mensajeError">{{ mensajeError }}</v-alert>
    <v-row>
      <v-col cols="12" md="4">
        <p>RUT</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
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
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese sus Apellidos"
          v-model="paciente.pacApellidos"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4">
        <p>Direccion</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su direccion"
          v-model="paciente.pacDireccion"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired]"
          
        />
      </v-col>
      
      <v-col cols="12" md="4">
        <p>DV</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="Ingrese su DV"
          v-model="paciente.pacDv"
          type="text"
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
      </v-col> <v-col cols="12" md="4">
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
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="guardarPaciente()">Registrar Paciente</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
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
        pacDv: "",
        pacNacionalidad: "",
        pacPuebloOriginario: "",
        pacSexo:"",
        pacTelefono: "",
        pacFechaNacimiento : "",
        
},
      esPacienteFormularioValido: "",
      formRules: formRules,
      mensajeError: "",
    
    };
  },
  methods: {
    
    guardarPaciente() {
      if (!this.$refs.form.validate()) return;
      return pacienteService.create(this.paciente).then(
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
