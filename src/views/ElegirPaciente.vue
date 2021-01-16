<template>
  <div class="antecedenteform">
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