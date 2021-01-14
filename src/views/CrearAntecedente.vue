<template>
  <div class="home">
    <AntecedenteFormulario />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    AntecedenteFormulario: () => import("@/components/AntecedenteFormulario")
  }
}
</script>