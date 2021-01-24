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
        <h3>RUN</h3>
        <p>Ingrese el Run del paciente sin puntos ni guión. Si el DV es K ingrese 0</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder="RUT"
          v-model="antFormulario.paciente.pacRut"
          type="number"
          validate-on-blur
          :rules="[formRules.noBlankTextRequired, formRules.runPattern]"
          @input="soloRut"
        />
      </v-col>
      <v-col cols="12" md="4">
        <h3>Marcar si paciente se encuentra embarazada</h3>
      </v-col>
      <v-col cols="12" md="8">
        <v-switch
          v-model="antFormulario.antEmbarazo"
          :label="`${antFormulario.antEmbarazo.toString()}`"
          color="red"
        />
      </v-col>
      <v-col cols="12" md="4">
        <h3>Semanas de Gestación</h3>
        <p>En caso de embarazo ingrese las semanas de gestación</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          type="number"
          v-model="antFormulario.antSemanasGestacion"
          validate-on-blur
          @input="soloSemanasGestacion"
        />
      </v-col>
      <v-col cols="12" md="4">
        <h3>Enfermedades crónicas</h3>
        <p>Ingresar enfermedades crónicas del pacienteseparadas por coma</p>
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
        <h3>Alergias</h3>
        <p>Ingresar las alergias del paciente separadas por coma</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          placeholder=" alergias"
          v-model="antFormulario.antAlergias"
          validate-on-blur
          
        />
      </v-col>
      
      <v-col cols="12" md="4">
        <h3>Tipo de sangre</h3>
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
        <h3>Medicamentos</h3>
        <p>Ingresar Medicamentos consumidos por el paciente separadas por coma</p>
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
        <h3>Viaje al extranjero</h3>
        <p>Ingrese ciudad y país al que viajo el paciente si corresponde</p>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          dense
          outlined
          solo
          v-model="antFormulario.antViajeExtranjero"
          type="text"
        />
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn  color="success" @click="guardarAntecedente">Guardar</v-btn>
      </v-col>
      <v-col cols="12" align="center" justify="center">
        <v-btn color="error" @click="cancelar()">Cancelar</v-btn>
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
        antSemanasGestacion:0,
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
    soloSemanasGestacion(){
        this.$nextTick(() => {
          if(this.antFormulario.antSemanasGestacion>42){
            this.antFormulario.antSemanasGestacion=42
          }
          if(this.antFormulario.antSemanasGestacion<0){
            this.antFormulario.antSemanasGestacion=0
          }
          if(!this.antFormulario.antEmbarazo){
            this.antFormulario.antSemanasGestacion=0
          }
      });
    },
    soloRut(){
      this.$nextTick(() => {
        if(this.antFormulario.paciente.pacRut.length>9){
            this.antFormulario.paciente.pacRut= this.antFormulario.paciente.pacRut.slice(
            0,
            9
            );
        }
      });
    },
    
    guardarAntecedente() {
      if (!this.$refs.form.validate()) return;
      return antecedentesService.create(this.antFormulario).then(
        () => {
          this.$router.push({
             name: 'home'
          });
        },
        (error) => {
          this.mensajeError = error.message;
        }
      );
    },
     cancelar(){
      this.$router.push({
            name: 'Ver-antecedente',
          });
    },
  },
};
</script>

<style>
</style>
