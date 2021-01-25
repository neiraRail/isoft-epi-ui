<template>
  <v-form
    ref="form"
    v-model="esPacienteFormularioValido"
    lazy-validation
    class="justify-center"
    style="margin: 2% 20%"
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
          style="width:50%"
          placeholder="Ingrese el rut a modificar"
          v-model="paciente.pacRut"
          :rules="[formRules.runPatternLong]"
        />
      </v-col>
      <v-col cols="12" md="4" >
        <p>Nombres</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          style="width:50%"
          placeholder="Ingrese su nombre"
          v-model="paciente.pacNombres"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired,formRules.validarTexto]"
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
          style="width:50%"
          placeholder="Ingrese sus Apellidos"
          v-model="paciente.pacApellidos"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired,formRules.validarTexto]"
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
          style="width:50%"
          placeholder="Ingrese su direccion"
          v-model="paciente.pacDireccion"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired,formRules.validarTextoyNumero]"
          
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
          style="width:50%"
          placeholder="Ingrese su nacionalidad"
          v-model="paciente.pacNacionalidad"
          type="text"
          :rules="[formRules.noBlankTextRequired,formRules.validarTexto]"
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
          style="width:50%"
          placeholder="Ingrese su pueblo originario"
          v-model="paciente.pacPuebloOriginario"
          type="text"
          :rules="[formRules.noBlankTextRequired,formRules.validarTexto]"
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
          style="width:50%"
          placeholder="Ingrese su fecha de nacimiento"
          v-model="paciente.pacFechaNacimiento"
          type="text"
          :rules="[formRules.validarFecha]"
          
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
          style="width:50%"
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
          style="width:50%"
          placeholder="Ingrese su genero"
          v-model="paciente.pacSexo"
          type="text"
          :rules="[formRules.validarSexo]"
        />
      </v-col> <v-col cols="12" md="4">
        <p>Telefono</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          style="width:50%"
          placeholder="Ingrese su numero de telefono"
          v-model="paciente.pacTelefono"
          type="text"
          :rules="[formRules.phoneLength]"
        />
      </v-col>
      
      <v-col cols="12" align="center" justify="center">
        <v-btn color="success" @click="editarPaciente()">Editar Paciente</v-btn>     
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn color="error" @click="cancelar()">Cancelar</v-btn>
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
    
    };
  },
  methods: {
    
    editarPaciente() {
      if (!this.$refs.form.validate()) return;
      return pacienteService.update(this.paciente.pacRut,this.paciente).then(
        () => {
          this.$router.push({
            name: "registro-paciente",
          });
        },
        (error) => {
          this.mensajeError = error.message;
        }
      );
    },
    cancelar(){
      this.$router.push({
            name: "registro-paciente",
          });
    },
  },
};
</script>
<style>
</style>
