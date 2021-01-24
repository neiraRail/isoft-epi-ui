<template>
  <div id="home">
      <EstablecimientoTabla :establecimiento="establecimiento"/>
  </div>
</template>

<script>
import establecimientoService from "@/services/establecimiento.service";
export default {
  name: "home",
  data(){
    return{
      establecimiento:[]
    }
  },
  methods: {
    fetchEstablecimiento() {
      establecimientoService.getAll().then(response => (this.establecimiento = response.data));
    }
  },
  components: {
    EstablecimientoTabla:() => import("@/components/EstablecimientoTabla")
  },
  mounted() {
    this.fetchEstablecimiento();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
