<template>
  <div
    style="padding:10px;  font-family: 'Montserrat'; font-size:15px; sans-serif;"
  >
    <!-- Buscador reportes hechos-->
    <Buscador />
    <br />
    <!-- Tabla de los reportes hechos-->
    <ResultsTable/>
  </div>
</template>

<script>
import ResultsTable from "../components/Reportes/ResultsTable.vue";
import Buscador from "../components/Reportes/Search.vue"
export default {
  components: {
    Buscador,
    ResultsTable

  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>