<template>
  <div>
    <br />

    <v-card
      width="99.6%"
      max-height="15000"
      style=" margin-left:0.2%; margin-right:0.2%; margin-top:2%; font-family: 'Montserrat'; sans-serif; border-radius: 10px 10px 10px 10px; background-color:rgb(235,235,235);"
    >
      <div>
        <v-card>
          <v-card-title style="font-size:17px;">

            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <b> Reservaciones especiales</b>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <br />
          </v-card-title>
          <br />
          <v-card-text>
            <v-btn

              style="float: right; color: white; padding: 20px; display: none"
              color="green"
              >Agregar hotel</v-btn
            >
          </v-card-text>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
            :single-select="singleSelect"
            :search="search"
            item-key="clave"
            show-select
            class="elevation-1"
            style="font-size: 13px"
          >
            <template v-slot:top>
              <v-switch
                v-model="singleSelect"
                label="Single select"
                class="pa-3"
              ></v-switch>
            </template>
            <template v-slot:item.clave="{ item }">
              <router-link class="link" to="/detallespecial">
                <v-icon
                  small
                  class="mr-2"
                  style="
                    color: darkblue;
                    font-size: 14px;
                    border: 1px solid #818181;
                    border-radius: 100px;
                    color: #818181;
                  "
                >
                  fas fa-ellipsis-h
                </v-icon>
                <span style="font-size:13px;">{{ item.clave }}</span>
              </router-link>
            </template>
            <template v-slot:item.agencia="{ item }">
                <span style="font-size:13px;">{{ item.agencia }}</span>
            </template>
            <template v-slot:item.hotel="{ item }">
                <span style="font-size:13px;">{{ item.hotel }}</span>
            </template>
            <template v-slot:item.admin="{ item }">
                <span style="font-size:13px;">{{ item.admin }}</span>
            </template>

            <template v-slot:item.agency="{ item }">
              <v-icon
                small
                class="mr-2"
                style="font-size: 14px"
                :color="getColoriCON(item.agency)"
              >
                fas fa-dollar-sign
              </v-icon>

              <span style="font-size:13px;">{{ reformatDate(item.agency) }}</span>
            </template>
            <template v-slot:item.total="{ item }">
              <span style="font-size:13px;">{{ formatNumber(item.total) }}</span>
            </template>
            <template v-slot:item.hortumex="{ item }">
              <v-icon
                small
                class="mr-2"
                style="font-size: 14px"
                :color="getColoriCON(item.hortumex)"
              >
                fas fa-dollar-sign
              </v-icon>

              <span style="font-size:13px;">{{ reformatDate(item.hortumex) }}</span>
            </template>
            <template v-slot:item.salida="{ item }">
              <span style="font-size:13px;">{{ reformatDate(item.salida) }}</span>
            </template>
            <template v-slot:item.Usuario="{ item }">
              <span style="font-size:13px;">{{ item.Usuario}}</span>
            </template>
            <template v-slot:item.llegada="{ item }">
              <span style="font-size:13px;">{{ reformatDate(item.llegada) }}</span>
            </template>
            <template v-slot:item.creacion="{ item }">
              <span style="font-size:13px;">{{ reformatDate(item.creacion) }}</span>
            </template>
            <template v-slot:item.calories="{ item }">
              <v-chip
                :color="getColor(item.calories)"
                dark
                style="font-size: 10px"
              >
                {{ item.calories }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </v-card>
    <br />
  </div>
</template>
<script src="http://momentjs.com/downloads/moment.min.js"></script>

<script>
export default {
  data() {
    return {
      search: "",
      singleSelect: false,
      selected: [],
      headers: [
        { align: "center", text: "REFERENCIA", value: "clave" },
        { text: "ADMINISTRADOR", value: "admin", align: "center" },
        { text: "CREACIÓN", value: "creacion", align: "center" },
        { text: "AGENCIA", value: "agencia", align: "center" },
        { text: "USUARIO", value: "Usuario", align: "center" },
        { text: "HOTEL", value: "hotel", align: "center" },
        { text: "LLEGADA", value: "llegada", align: "center" },
        { text: "SALIDA", value: "salida", align: "center" },
        { text: "LÍMITE DE PAGO (AGENCIA)", value: "agency", align: "center" },
        {
          text: "LÍMITE DE PAGO (HOTURMEX)",
          value: "hortumex",
          align: "center",
        },
        { text: "TOTAL", value: "total", align: "center" },
        { text: "A PAGAR AGENCIA", value: "agency", align: "center" },
        { text: "STATUS", value: "calories" },
      ],
      desserts: [
        {
          clave: 10005,
          admin: "Sara Ortega",
          creacion: "2021/12/15",
          agencia: "Xoco Tours",
          Usuario: "Roberto Ramirez",
          hotel: "RIU CANCUN",
          llegada: "2021/12/15",
          salida: "2021/12/15",
          agency: "2021/12/15",
          hortumex: "2021/12/15",
          total: "17264",
          calories: "Cancelado",
        },
        {
          clave: 10006,
          admin: "Carmen Camacho",
          creacion: "2021/12/15",
          agencia: "Pardo Tours",
          Usuario: "Carmen Camacho",
          hotel: "OASIS CANCUN",
          llegada: "2021/12/15",
          salida: "2021/12/15",
          agency: "2021/12/15",
          hortumex: "2021/12/15",
          total: "10572",
          calories: "No confirmado",
        },
        {
          clave: 10007,
          admin: "Sara Ortega",
          creacion: "2021/12/15",
          agencia: "Xoco Tours",
          correo: "dan.gh@gmail.com",
          Usuario: "Sara Ortega",
          hotel: "HARD ROCK RESORT",
          llegada: "2021/12/15",
          salida: "2021/12/15",
          agency: "2021/12/15",
          hortumex: "2021/12/15",
          total: "17264",
          calories: "Confirmado",
        },
        {
          clave: 10008,
          admin: "Sara Ortega",
          creacion: "2021/12/15",
          agencia: "Xoco Tours",
          Usuario: "Sar Ortega",
          hotel: "RIU CANCUN",
          llegada: "2021/12/15",
          salida: "2021/12/15",
          agency: "2021/12/15",
          hortumex: "2021/12/15",
          total: "17264",
          calories: "Cancelado",
        },
        {
          clave: 10009,
          admin: "Carmen Camacho",
          creacion: "2021/12/15",
          agencia: "Pardo Tours",
          Usuario: "Carmen Camacho",
          hotel: "OASIS CANCUN",
          llegada: "2021/12/15",
          salida: "2021/12/15",
          agency: "2021/12/15",
          hortumex: "2021/12/15",
          total: "10572",
          calories: "No confirmado",
        },
        {
          clave: 10010,
          admin: "Sara Ortega",
          creacion: "2021/12/15",
          agencia: "Xoco Tours",
          correo: "dan.gh@gmail.com",
          Usuario: "Sara Ortega",
          hotel: "HARD ROCK RESORT",
          llegada: "2021/12/15",
          salida: "2021/12/15",
          agency: "2021/12/15",
          hortumex: "2021/12/15",
          total: "17264",
          calories: "Confirmado",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>
