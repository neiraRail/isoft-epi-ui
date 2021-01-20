<template>
  <div class="f1">
    <h2 style="color:red;" >Formulario del Paciente</h2>
    <Formulario1 />
    <hr><br>
    <h2 style="color:red;"  >Antecedentes</h2>
    <Formulario3 />
    <hr> <br>
     <h2>Casos</h2>
    <Formulario2 />
  </div>
  
</template>

<script>

export default {
  name: 'f1',
  components: {
    Formulario3: () => import("@/components/AntecedenteFormulario"),
    //Formulario2: () => import("@/components/CasoFormulario"),
    Formulario1: () => import("@/components/PacienteFormulario")
  }

}
</script>
