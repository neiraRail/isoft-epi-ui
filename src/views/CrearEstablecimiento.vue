<template>
  <div class="home">
    <EstablecimientoFormulario />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    EstablecimientoFormulario: () => import("@/components/EstablecimientoFormulario")
  }
}
</script>