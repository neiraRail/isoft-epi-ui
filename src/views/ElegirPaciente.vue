<template>
  <div class="antecedenteform">
    <p>hola</p>
    <IngresoPac />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    IngresoPac: () => import("@/components/IngresoPaciente")
  }
}
</script>