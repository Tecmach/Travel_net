<template>
  <div
    style=" padding:0; background-color:; font-family: 'Montserrat'; sans-serif; text-align:center;"
  >
    <v-container style="width: 100%; margin-top: 1%; position: relative">
      <v-row align="left" justify="space-around">
        <v-btn
          href="#"
          style="width: 40%; margin-top: 5px; margin-bottom: 5px; "
          color="primary"
          class="link"
          ><b>Dashboard</b></v-btn
        >
        <v-btn
          href="cotizador"
          class="link"
          style="width: 40%; margin-top: 5px; margin-bottom: 5px"
          ><b>Buscador</b></v-btn
        >
      </v-row>
    </v-container>
    <v-container fluid>
      <v-checkbox @click="setPage(!getPage)" :input-value="getPage">
        <template v-slot:label>
          <div style="margin-top:7px;">Seleccionar como pantalla de inicio</div>
        </template>
      </v-checkbox>
    </v-container>
    <v-row style="padding: 10px">
      <v-col cols="12">
        <v-sheet>
          <v-row>
            <!--  -->
            <v-col xl="4" lg="4" md="6" cols="12" style="margin-top: 35px">
              <v-sheet>
                <v-container style="padding: 0">
                  <h3 style="text-align: center; font-size: 20px">
                    <b> RESERVACIONES</b>
                  </h3>
                  <hr />
                  <br />
                  <br />
                  <p style="font-size: 40px; margin-top: 25px">
                    <v-icon
                      style="font-size: 40px"
                      :color="getIconReservasColor(reservaciones)"
                      >{{ getIconReservas(reservaciones) }}</v-icon
                    ><b>{{ formatNumber(reservaciones) }}</b>
                  </p>
                  <p style="font-size: 18px">
                    {{ formatNumber(reservasPast) }} el mes pasado
                  </p>
                  <br />
                  <v-btn
                    depressed
                    color="primary"
                    style="width: 90%; height: 50px; margin-top: 28px"
                    class="link"
                    href="/reservas"
                  >
                    <h3 style="font-size: 15px; text-transform: none">
                      Ver reservaciones
                    </h3>
                  </v-btn>
                </v-container>
                <br />
              </v-sheet>
            </v-col>
            <v-col xl="4" lg="4" md="6" cols="12" style="margin-top: 35px">
              <v-sheet>
                <v-container style="padding: 0">
                  <h3 style="text-align: center; font-size: 20px">
                    <b> STATUS DE RESEVACIONES:</b>
                  </h3>
                  <hr />
                  <br />
                  <v-row>
                    <v-col cols="4">
                      <p>Confirmado</p>
                    </v-col>
                    <v-col cols="7" style="margin-left: 10px">
                      <v-progress-linear
                        v-model="confirmado"
                        color="#00ae15"
                        height="20"
                      >
                        <template v-slot:default="{ value }">
                          <strong>{{ Math.ceil(value) }}</strong>
                        </template>
                      </v-progress-linear>
                    </v-col>
                    <v-col cols="4">
                      <p>Pendiente</p>
                    </v-col>
                    <v-col cols="7" style="margin-left: 10px">
                      <v-progress-linear
                        v-model="pendiente"
                        color="#ffd401"
                        height="20"
                      >
                        <template v-slot:default="{ value }">
                          <strong>{{ Math.ceil(value) }}</strong>
                        </template>
                      </v-progress-linear>
                    </v-col>
                    <v-col cols="4">
                      <p>Cancelado</p>
                    </v-col>
                    <v-col cols="7" style="margin-left: 10px">
                      <v-progress-linear
                        v-model="cancelado"
                        color="#fe0000"
                        height="20"
                      >
                        <template v-slot:default="{ value }">
                          <strong>{{ Math.ceil(value) }}</strong>
                        </template>
                      </v-progress-linear>
                    </v-col> </v-row
                  ><br />
                  <v-btn
                    depressed
                    color="primary"
                    style="width: 90%; height: 50px; margin-top: 28px"
                    class="link"
                    href="/reservas"
                  >
                    <h3 style="font-size: 15px; text-transform: none">
                      Ver reservaciones
                    </h3>
                  </v-btn>
                </v-container>
                <br />
              </v-sheet>
            </v-col>
            <v-col xl="4" lg="4" md="6" cols="12" style="margin-top: 35px">
              <v-sheet>
                <v-container style="padding: 0">
                  <h3 style="text-align: center; font-size: 20px">
                    <b> FECHA LÍMITE</b>
                  </h3>
                  <hr />
                  <br />
                  <p style="font-size: 25px"><b>24 DE DICIEMBRE</b></p>
                  <br />
                  <p style="font-size: 40px">
                    <i class="fas fa-arrow-up" style="color: #65b105"></i
                    ><b>{{ formatNumber(fecha) }}</b>
                  </p>
                  <p style="font-size: 18px">20 reservaciones vencen hoy</p>
                  <br />
                  <v-btn
                    depressed
                    color="primary"
                    style="width: 90%; height: 50px"
                    class="link"
                    href="/reservas"
                  >
                    <h3 style="font-size: 15px; text-transform: none">
                      Ver reservaciones
                    </h3>
                  </v-btn>
                </v-container>
                <br />
              </v-sheet>
            </v-col>
            <v-col xl="4" lg="4" md="6" cols="12" style="margin-top: 35px">
              <v-sheet>
                <v-container style="padding: 0">
                  <h3 style="text-align: center; font-size: 20px">
                    <b> MEJORES AGENCIAS</b>
                  </h3>
                  <hr />
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-center">No.</th>
                          <th class="text-center">Agencia</th>
                          <th class="text-center">Ventas</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in desserts" :key="item.number">
                          <td class="text-center">{{ item.number }}</td>
                          <td class="text-center">{{ item.Agencia }}</td>
                          <td class="text-center">{{ item.Ventas }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <br />
                  <v-btn
                    depressed
                    color="primary"
                    style="width: 90%; height: 50px; margin-top: 28px"
                    class="link"
                    href="/agencias"
                  >
                    <h3 style="font-size: 15px; text-transform: none">
                      Ver agencias
                    </h3>
                  </v-btn>
                </v-container>
                <br />
              </v-sheet>
            </v-col>
            <v-col xl="4" lg="4" md="6" cols="12" style="margin-top: 35px">
              <v-sheet min-height="370">
                <v-container style="padding: 0">
                  <center>
                    <div class="small">
                      <line-chart
                        :chart-data="datacollection"
                        style="font-size: 20px"
                      ></line-chart>
                    </div>
                  </center>
                  <v-btn
                    depressed
                    color="primary"
                    style="width: 90%; height: 50px; margin-top: 32px"
                    class="link"
                    href="/hoteles"
                  >
                    <h3 style="font-size: 15px; text-transform: none">
                      Ver hoteles
                    </h3>
                  </v-btn>
                </v-container>
              </v-sheet>
            </v-col>
            <v-col xl="4" lg="4" md="6" cols="12" style="margin-top: 35px">
              <v-sheet>
                <v-container style="padding: 0">
                  <h3 style="text-align: center; font-size: 20px">
                    <b> AGENCIAS REGISTRADAS</b>
                  </h3>
                  <hr />
                  <v-row>
                    <v-col cols="6" style="text-align: center">
                      <p style="font-size: 22px; margin-left: 10%">Agencias</p>
                      <p style="font-size: 40px; margin-left: 10%">
                        <v-icon
                          style="font-size: 40px"
                          :color="getIconAgencyColor(agencia)"
                          >{{ getIconAgency(agencia) }}</v-icon
                        >
                        <b>30</b>
                      </p>
                      <p style="margin-left: 10%">
                        {{ this.agAnterior }} el mes <br />
                        anterior
                      </p>
                    </v-col>
                    <v-col cols="6" style="text-align: center">
                      <p style="font-size: 22px; margin-right: 10%">Usuarios</p>
                      <p style="font-size: 40px; margin-right: 10%">
                        <v-icon
                          :color="getIconUserColor(user)"
                          style="font-size: 40px"
                          >{{ getIconUser(user) }}</v-icon
                        >
                        <b>27</b>
                      </p>
                      <p style="margin-right: 10%">
                        {{ this.usAnterior }} el mes <br />
                        anterior
                      </p>
                    </v-col>
                  </v-row>
                  <br />
                  <v-btn
                  href="/agenciasUsuarios"
                    depressed
                    color="primary"
                    class="link"
                    style="width: 90%; height: 50px; margin-top: 32px"
                  >
                    <h3 style="font-size: 15px; text-transform: none">
                      Ver usuarios
                    </h3>
                  </v-btn>
                </v-container>
                <br />
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <hr />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LineChart from "../mixins/BarChart";

export default {
  name: "Dash",
  components: {
    LineChart,
  },
  data: () => ({
    type: "horizontalBar",
    confirmado: 30,
    pendiente: 13,
    cancelado: 1,
    reservaciones: "29142123.12",
    reservasPast: "25000",
    fecha: "103000",
    agencia: 30,
    agAnterior: 25,
    user: 27,
    usAnterior: 30,
    datacollection: null,
    desserts: [
      {
        number: 1,
        Agencia: "Traveler",
        Ventas: 23670,
      },
      {
        number: 2,
        Agencia: "Mayorka",
        Ventas: 6750,
      },
      {
        number: 3,
        Agencia: "Caminos",
        Ventas: 4900,
      },
    ],
    headers: [
      {
        text: "No.",
        align: "center",
        sortable: false,
        value: "number",
      },
      { text: "Agencia", align: "center", value: "Agencia" },
      { text: "Ventas (g)", align: "center", value: "Ventas" },
    ],
  }),
  mounted() {
    this.fillData();
  },
  methods: {
    ...mapActions(["setPage"]),
    fillData() {
      this.datacollection = {
        labels: ["Hotel Xcaret", "Hotel Unico", "Hotel Fontán"],
        datasets: [
          {
            label: "MEJORES HOTELES",
            backgroundColor: "#8cccce",
            data: [320, 320, this.getRandomInt()],
          },
        ],
        responsive: true,
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    getIconAgency(agencia) {
      if (agencia > this.agAnterior) return "fas fa-arrow-up";
      else return "fas fa-arrow-down";
    },
    getIconAgencyColor(agencia) {
      if (agencia > this.agAnterior) return "#65b105";
      else return "red";
    },

    getIconUser(user) {
      if (user > this.usAnterior) return "fas fa-arrow-up";
      else return "fas fa-arrow-down";
    },
    getIconUserColor(user) {
      if (user > this.usAnterior) return "#65b105";
      else return "red";
    },

    getIconReservas(reservaciones) {
      if (reservaciones > this.reservasPast) return "fas fa-arrow-up";
      else return "fas fa-arrow-down";
    },
    getIconReservasColor(reservaciones) {
      if (reservaciones > this.reservasPast) return "#65b105";
      else return "red";
    },
  },
  computed: {
    ...mapGetters(["getPage"]),
  },
};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap");
#buildin {
  background-color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: 100% auto;
}
.small {
  position: relative;
  max-width: 270px;
}
</style>
<style>
</style>

