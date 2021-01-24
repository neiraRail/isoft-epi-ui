<template>
  <div id="home">
      <RegionTabla :region="region"/>
  </div>
</template>

<script>
import regionService from "@/services/region.service";
export default {
  name: "home",
  data(){
    return{
      region:[]
    }
  },
  methods: {
    fetchRegion() {
      regionService.getAll().then(response => (this.region = response.data));
    }
  },
  components: {
    RegionTabla:() => import("@/components/RegionTabla")
  },
  mounted() {
    this.fetchRegion();
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
