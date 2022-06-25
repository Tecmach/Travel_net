<template>
  <v-row
    style="padding:10px;  font-family: 'Montserrat'; font-size:15px; sans-serif;"
  >
    <v-col style="background-color: ;" xl="10" lg="10" cols="12">
      <v-sheet min-height="150" style="paddign: 0">
        <h3 style="font-size: 20px"><b>DISPONIBILIDAD</b></h3>
        <p style="margin-left: 15px"><b>Seleccionar días</b></p>
        <v-row>
          <v-col
            cols="12"
            style=" position: relative; margin: auto"
          >
            <v-sheet>
              <v-row>
                <v-col xl="2" lg="2" md="2" sm="6" cols="6">
                  <v-checkbox
                    label="Lunes"
                    color="primary"
                    value="Lunes"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col xl="2" lg="2" md="2" sm="6" cols="6">
                  <v-checkbox
                    label="Martes"
                    color="primary"
                    value="red darken-3"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col xl="2" lg="2" md="2" sm="6" cols="6">
                  <v-checkbox
                    label="Miercoles"
                    color="primary"
                    value="red"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col xl="2" lg="2" md="2" sm="6" cols="6">
                  <v-checkbox
                    label="Jueves"
                    color="primary"
                    value="red"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col xl="2" lg="2" md="2" sm="6" cols="6">
                  <v-checkbox
                    label="Viernes"
                    color="primary"
                    value="red"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col xl="2" lg="2" md="2" sm="6" cols="6">
                  <v-checkbox
                    label="Sabado"
                    color="primary"
                    value="red darken-3"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col xl="2" lg="2" md="2" sm="6" cols="6">
                  <v-checkbox
                    label="Domingo"
                    color="primary"
                    value="red"
                    hide-details
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
    <v-col xl="10" lg="10" cols="12" style=" overflow-x: scroll" >
      <v-sheet height="1400" >
        <v-calendar :now="today" :value="today" color="primary" id="calendar" scrollable>
          <template v-slot:day="{ date }">
            <v-row class="fill-height">
              <template v-if="tracked[date]">
                <v-sheet
                  v-for="(percent, i) in tracked[date]"
                  :key="i"
                  :title="category[i]"
                  :color="colors[i]"
                  :width="`${percent}%`"
                  height="100%"
                  tile
                  style="border-radius: 10px"
                >
                  <br />
                  <span style="color: white; margin-left: 15%">Estandar</span>
                  <br />
                  <span style="color: white; margin-left: 15%"
                    >Allotment: 0</span
                  >
                  <br />
                  <br />
                  <span style="color: white; margin-left: 15%">Cerrado</span>
                  <br />
                  <span style="color: white; margin-left: 15%"
                    ><i class="fas fa-angle-right" style="color: green"></i> 0
                    Hab</span
                  >
                  <br />
                  <span style="color: white; margin-left: 15%"
                    ><i class="fas fa-angle-right" style="color: red"></i> 0
                    Hab</span
                  >
                  <br />
                  <center><span style="color:white;">Historial</span></center>
                  <br />
                </v-sheet>
              </template>
            </v-row>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    today: "2022-01-05",
    tracked: {
      "2022-02-05": [90],
      "2022-02-04": [90],
      "2022-02-03": [90],
      "2022-02-02": [90],
      "2022-02-01": [90],
      "2022-01-31": [90],
      "2022-01-30": [90],
      "2022-01-29": [90],
      "2022-01-28": [90],
      "2022-01-27": [90],
      "2022-01-26": [90],
      "2022-01-25": [90],
      "2022-01-24": [90],
      "2022-01-23": [90],
      "2022-01-22": [90],
      "2022-01-21": [90],
      "2022-01-20": [90],
      "2022-01-19": [90],
      "2022-01-18": [90],
      "2022-01-17": [90],
      "2022-01-16": [90],
      "2022-01-15": [90],
      "2022-01-14": [90],
      "2022-01-13": [90],
      "2022-01-12": [90],
      "2022-01-11": [90],
      "2022-01-10": [90],
      "2022-01-09": [90],
      "2022-01-08": [90],
      "2022-01-07": [90],
      "2022-01-06": [90],
      "2022-01-05": [90],
      "2022-01-04": [90],
      "2022-01-03": [90],
      "2022-01-02": [90],
      "2022-01-01": [90],
    },
    colors: ["primary"],
    category: ["Development", "Meetings", "Slacking"],
  }),
};
</script>
<style scoped>
@media(max-width: 800px){
#calendar {
	height: 100%;
	width: 900px;
	border: 1px solid #ddd;
	background: #f1f1f1;
	overflow: scroll;
}
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>