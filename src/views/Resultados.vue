<template>
  <div id="buildin" style="font-family: 'Montserrat'; sans-serif;">
    <!--     <Overlay/> -->
    <!-- <Overlay :overlay="overlay"/> -->
    <v-row>
      <v-col cols="12" lg="3" xl="3">
        <Filtros />
      </v-col>
      <v-col cols="12" xl="9" lg="9" style="float: left">
        <ResultadosList :results="results"/> </v-col
    ></v-row>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapActions } from 'vuex';
import Filtros from "../components/resultados/Filtros.vue";
import Overlay from "../components/resultados/Overlay.vue";

import ResultadosList from "../components/resultados/ResultadosList.vue";

export default {
  name: "Resultados",
  components: {
    DatePicker,
    Filtros,
    ResultadosList,
    Overlay,
  },
  data() {
    let busqueda ={};
    let results ;
  
    return {
      busqueda,
      results
    };
  },
  async created() {
    await this.getHotelFree();
  },
  methods: {
    
    ...mapActions("hotels", ["quoterResults"]),
    async getHotelFree() {
      this.busqueda = JSON.parse(this.$route.params.busqueda);
      /* console.log(this.busqueda); */
      this.results = await this.quoterResults(this.busqueda);
      console.log(this.results);
      
    },
  },
};
</script>
<style >
</style>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap");
@media (max-width: 600px) {
}
@media (max-width: 1024px) {
  v-col .div {
    min-height: 295px;
  }
}
</style>

