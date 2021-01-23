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
      <v-col cols="12" md="4"    
          y = 1000>
        <p x= 1000>RUT</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          style="width:50%"

          placeholder="Ingrese el rut a eliminar"
          v-model="paciente.pacRut"
          :rules="[formRules.noBlankTextRequired]"
        />
      </v-col>
      <v-col cols="12" md="4" >

      <v-col cols="12" align="left" justify="center">
        <v-btn @click="eliminarPaciente()">Eliminar</v-btn>     
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn @click="cancelar()">Cancelar</v-btn>
      </v-col>
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
    
    eliminarPaciente() {
      if (!this.$refs.form.validate()) return;
      return pacienteService.destroy(this.paciente.pacRut).then(
        () => {
          this.$router.push({
            name: "registro-paciente",
          });
        },
        () => {
          this.mensajeError="No se encuentra el paciente";
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
