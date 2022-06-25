<template>
  <div>
    <br />

    <v-card
      max-width="98%"
      max-height="15000"
      style=" margin-left:1%; margin-right:1%; margin-top:2%;  font-family: 'Montserrat' sans-serif; border-radius: 10px 10px 10px 10px; "
    >
      <div>
        <v-card>
          <v-card-title style="font-size:17px;">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <b>Reservaciones</b>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
            :single-select="singleSelect"
            :search="search"
            item-key="clave"
            show-select
            class="elevation-1"
          >
            <template v-slot:top>
              <v-switch
                v-model="singleSelect"
                label="Single select"
                class="pa-3"
              ></v-switch>
            </template>
            <template v-slot:item.clave="{ item }">
              <router-link class="link" to="/detalles" ><br>
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
              <span >{{ item.clave }}</span><br><br>
              </router-link>
            </template>
            
            <template v-slot:item.pago_op="{ item }">
              <v-icon
                small
                class="mr-2"
                style="
                  font-size: 13px;
                "
                :color="getColoriCON(item.pago_op)"
              >
                fas fa-dollar-sign
              </v-icon>
              <span style="font-size:13px;">{{ item.pago_op }}</span>
            </template>
            <template v-slot:item.pago_ag="{ item }" style="text-align:left;">
              <span style="font-size:13px;"> {{ item.pago_ag }}</span>
            </template>
            <template v-slot:item.hotel="{ item }" style="text-align:left;">
              <span style="font-size:13px;"> {{ item.hotel }}</span>
            </template>
            <template v-slot:item.agenciatitular="{ item }" style="text-align:left;">
              <span style="font-size:13px;"> {{ item.agenciatitular }}</span>
            </template>
            <template v-slot:item.brokers="{ item }" style="text-align:left;">
              <img v-if="item.img" :src="item.img" style="width:18px;" />
              <span style="font-size:13px;"> {{ item.brokers }}</span>
            </template>
            <template v-slot:item.precio="{ item }">
              <span style="font-size:13px;">{{ formatNumber(item.precio) }}</span>
            </template>
            <template v-slot:item.fecha_llegada="{ item }">
              <span style="font-size:13px;">{{ reformatDate(item.fecha_llegada) }}</span>
            </template>
            <template v-slot:item.fecha_limite="{ item }">
              <span style="font-size:13px;">{{ reformatDate(item.fecha_llegada) }}</span>
            </template>
            <template v-slot:item.fecha_reservacion="{ item }">
              <span style="font-size:13px;">{{ reformatDate(item.fecha_llegada) }}</span>
            </template>
            <template v-slot:item.calories="{ item }">
              <v-chip :color="getColor(item.calories)" dark style="font-size:13px;">
                {{ item.calories }}
              </v-chip>
            </template>
             <template v-slot:item.titular="{ item }">
              <span style="font-size:13px;">{{item.titular }} <br> <a :href="`mailto:${item.correo}`"> {{ item.correo}} </a></span>
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
        { align: "left", text: "CLAVE", value: "clave" },
        { text: "BROKER", value: "brokers", align: "left" },
        { text: "AGENCIA", value: "agenciatitular", align: "center" },
        { text: "TITULAR", value: "titular", align: "center" },
        { text: "RESERVACION", value: "fecha_reservacion", align: "center" },
        { text: "HOTEL", value: "hotel", align: "center" },
        { text: "LLEGADA", value: "fecha_llegada", align: "center" },
        { text: "PRECIO", value: "precio", align: "center" },
        { text: "PAGO OP", value: "pago_op", align: "center" },
        { text: "PAGO AG", value: "pago_ag", align: "center" },
        { text: "LÍMITE", value: "fecha_limite", align: "center" },
        { text: "STATUS", value: "calories" },
      ],
      desserts: [
        {
          clave: 10005,
          brokers: "Restel",
          img: './img/restel.png',
          agenciatitular: "Ruben Diaz",
          correo:"dan.gh@gmail.com",
          titular: "Daniel Hernandez",
          fecha_reservacion: "2021/12/15",
          hotel: "XCARET",
          fecha_llegada: "2021/12/15",
          precio: "13500",
          pago_op: "Sin pago",
          pago_ag: "Sin pago",
          fecha_limite: "2021/12/15",
          calories: "Cancelado",
        },
        {
          clave: 10006,
          brokers: "Omnibees",
          img: './img/omnibes.png',
          agenciatitular: "Ruben Diaz",
          titular: "Daniel Hernandez",
          correo:"dan.gh@gmail.com",
          fecha_reservacion: "2021/12/15",
          hotel: "XCARET",
          fecha_llegada: "2021/12/15",
          precio: "13500",
          pago_op: "Sin pago",
          pago_ag: "Sin pago",
          fecha_limite: "2021/12/15",
          calories: "No confirmado",
        },
        {
          clave: 10007,
          brokers: "HotelBeds",
          img: './img/HOTELBEDS.png',
          agenciatitular: "Ruben Diaz",
          correo: "Vuela facil",
          titular: "Daniel Hernandez",
          correo:"dan.gh@gmail.com",
          fecha_reservacion: "2021/12/15",
          hotel: "XCARET",
          fecha_llegada: "2021/12/15",
          precio: "13500",
          pago_op: "Sin pago",
          pago_ag: "Sin pago",
          fecha_limite: "2021/12/15",
          calories: "Confirmado",
        },
      ],
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>