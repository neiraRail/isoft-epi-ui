<template>
  <div class="home">
    <NotificacionFormulario />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    NotificacionFormulario: () => import("@/components/NotificacionFormulario")
  }
}
</script>