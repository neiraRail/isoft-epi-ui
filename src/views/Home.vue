<template>
  <div class="f1">
    <h2 style="color:red;" >Formulario del Paciente</h2>
    <Formulario1 />
    <hr class="dashed">
    <h2>Antecednetes</h2>
    <Formulario2 />
  </div>
  
</template>

<script>

export default {
  name: 'f1',
  components: {
    Formulario2: () => import("@/components/AntecedenteFormulario"),
    Formulario1: () => import("@/components/PacienteFormulario")
  }

}
</script>
