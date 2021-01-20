<template>
  <div class="f1">
    <Formulario />
  </div>
  
</template>

<script>

export default {
  name: 'f1',
  components: {
    Formulario: () => import("@/components/AntecedenteFormulario")
  }
}
</script>
