<template>
  <div>
    <br />

    <v-card
      max-width="95%"
      max-height="15000"
      style=" margin-left:2.5%; margin-right:2.5%; margin-top:2%; font-family: 'Montserrat'; sans-serif; border-radius: 10px 10px 10px 10px; background-color:rgb(235,235,235);"
    >
      <div>
        <v-card>
          <v-card-title style="font-size: 17px;">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <b> HOTELES</b>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <router-link class="link" to="/detallehotel">
              <v-btn
                style="float: right; color: white; padding: 20px"
                color="green"
                >Agregar hotel</v-btn
              >
            </router-link>
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
          >
            <template v-slot:top>
              <v-switch
                v-model="singleSelect"
                label="Single select"
                class="pa-3"
              ></v-switch>
            </template>

            <template v-slot:item.hotel="{ item }" style="text-align: left">
              <img v-if="item.img" :src="item.img" style="width: 15px" />
              <span>{{ item.hotel }}</span>
            </template>
            <template v-slot:item.clave="{ item }">
              <router-link class="link" to="/detallehotel">
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
                <span>{{ item.clave }}</span>
              </router-link>
            </template>
            <template v-slot:item.calories="{ item }">
              <v-chip :color="getColor(item.calories)" dark>
                {{ item.calories }}
              </v-chip>
            </template>

            <template v-slot:item.saldo="{ item }"><br>
              <v-icon
                small
                class="mr-2"
                style="color: darkblue; font-size: 14px; color: #818181"
                :color="getColorIcon(item.saldo)"
              >
                {{ getIcon(item.saldo) }}
              </v-icon>
              <span>{{ formatNumberSin(item.saldo) }}</span><br><br>
            </template>
            <template v-slot:item.destino="{ item }">
              <span>{{ item.destino }} <br />{{ item.agencia }}</span>
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
  name: "Hoteles",
  data() {
    return {
      search: "",
      singleSelect: false,
      selected: [],
      headers: [
        { align: "LEFT", text: "ID", value: "clave" },
        { text: "HOTEL", value: "hotel", align: "LEFT" },
        { text: "DESTINO", value: "destino", align: "LEFT" },
        { text: "ZONA", value: "zona", align: "LEFT" },
        { text: "SALDO", value: "saldo", align: "LEFT" },
        { text: "STATUS", value: "calories" },
      ],
      desserts: [
        {
          clave: 10005,
          hotel: "Riu Jalisco",
          destino: "Rivera Nayarit",
          img: "./img/blueparrot.png",
          zona: "Zona Hotelera",
          saldo: -144885,
          calories: "No activo",
        },
        {
          clave: 10006,
          hotel: "Rosita Hotel",
          destino: "Puerto Vallarta",
          img: "./img/HOTELBEDS.png",
          zona: "Centro",
          saldo: 54885,
          calories: "No activo",
        },
        {
          clave: 10007,
          hotel: "Hard Rock",
          destino: "Los Cabos",
          img: "./img/restel.png",
          zona: "San José del Cabo",
          saldo: 264885,
          calories: "Activo",
        },
        {
          clave: 10006,
          hotel: "Rosita Hotel",
          destino: "Puerto Vallarta",
          img: "./img/HOTELBEDS.png",
          zona: "Centro",
          saldo: 54885,
          calories: "No activo",
        },
        {
          clave: 10005,
          hotel: "Riu Jalisco",
          destino: "Rivera Nayarit",
          img: "./img/blueparrot.png",
          zona: "Zona Hotelera",
          saldo: -144885,
          calories: "No activo",
        },
        {
          clave: 10007,
          hotel: "Hard Rock",
          destino: "Los Cabos",
          img: "./img/restel.png",
          zona: "San José del Cabo",
          saldo: 264885,
          calories: "Activo",
        },
      ],
    };
  },
  methods: {
    getIcon(saldo) {
      if (saldo <= 0) return "fas fa-info-circle";
      else return "fas fa-dollar-sign";
    },
    getColor(calories) {
      if (calories == "No activo") return "red";
      else if (calories == "Activo") return "green";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>