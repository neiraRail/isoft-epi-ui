<template>
  <div id="home">
      <ComunaTabla :comuna="comuna"/>
  </div>
</template>

<script>
import comunaService from "@/services/comuna.service";
export default {
  name: "home",
  data(){
    return{
      comuna:[]
    }
  },
  methods: {
    fetchComuna() {
      comunaService.getAll().then(response => (this.comuna = response.data));
    }
  },
  components: {
    ComunaTabla:() => import("@/components/ComunaTabla")
  },
  mounted() {
    this.fetchComuna();
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
