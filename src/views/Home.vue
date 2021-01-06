<template>
  <v-container class="fill-height" fluid>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
