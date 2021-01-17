<template>
  <div class="home">
    <CasoFormulario />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    CasoFormulario: () => import("@/components/CasoFormulario")
  }
}
</script>