<template>
  <div
    style="padding:10px;  font-family: 'Montserrat'; font-size:15px; sans-serif;"
  >
    <v-container
      fluid
      class="mx-auto"
      style="margin-top: 1%; background-color: ; width: 95%"
    >
      <v-row>
        <v-col cols="12">
          <v-sheet>
            <v-card>
              <v-card-title>
                <v-spacer></v-spacer>
                <v-btn style="font-size: 20px"
                  ><i class="far fa-envelope"></i
                ></v-btn>
                <v-btn style="font-size: 20px; margin-left: 10px"
                  ><i class="fas fa-download"></i
                ></v-btn>
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
                    style="display: none"
                  ></v-switch>
                </template>

                <template
                  v-slot:item.agencia="{ item }"
                  style="text-align: left"
                >
                  <img
                    v-if="item.imgAgency"
                    :src="item.imgAgency"
                    style="width: 15px"
                  />
                  <span> {{ item.agencia }}</span>
                </template>
                <template
                  v-slot:item.brokers="{ item }"
                  style="text-align: left"
                >
                  <img v-if="item.img" :src="item.img" style="width: 15px" />
                  <span> {{ item.brokers }}</span>
                </template>
                <template v-slot:item.fecha="{ item }">
                  <span>{{ reformatDate(item.fecha) }}</span>
                </template>
                <template v-slot:item.status="{ item }">
                  <v-chip :color="getStatus(item.status)" dark>
                    {{ item.status }}
                  </v-chip>
                </template>
              </v-data-table>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>
      <br />
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ResultsTable",
  data() {
    return {
      search: "",
      singleSelect: false,
      selected: [],
      headers: [
        { text: "FECHA", value: "fecha", align: "left" },
        { text: "AGENCIA", value: "agencia", align: "left" },
        { text: "BROKER", value: "brokers", align: "left" },
        { text: "MONEDA", value: "moneda", align: "left" },
        { text: "STATUS", value: "status" },
      ],
      desserts: [
        {
          clave: 10005,
          brokers: "Restel",
          img: "./img/restel.png",
          agencia: "BlueParrot",
          imgAgency: "./img/blueparrot.png",
          moneda: "MXN",
          fecha: "2021/12/15",
          status: "Activo",
        },
        {
          clave: 10006,
          brokers: "Omnibees",
          img: "./img/omnibes.png",
          agencia: "Viajes Hola",
          imgAgency: "./img/HOTELBEDS.png",
          moneda: "USD",
          fecha: "2021/12/15",
          status: "No activo",
        },
        {
          clave: 10007,
          brokers: "HotelBeds",
          img: "./img/HOTELBEDS.png",
          agencia: "BlueParrot",
          imgAgency: "./img/blueparrot.png",
          moneda: "MXN",
          fecha: "2021/12/15",
          status: "Activo",
        },
        {
          clave: 10008,
          brokers: "Restel",
          img: "./img/restel.png",
          agencia: "BlueParrot",
          imgAgency: "./img/blueparrot.png",
          moneda: "MXN",
          fecha: "2021/12/15",
          status: "Activo",
        },
        {
          clave: 10009,
          brokers: "Omnibees",
          img: "./img/omnibes.png",
          agencia: "Viajes Hola",
          imgAgency: "./img/HOTELBEDS.png",
          moneda: "USD",
          fecha: "2021/12/15",
          status: "No activo",
        },
        {
          clave: 10010,
          brokers: "HotelBeds",
          img: "./img/HOTELBEDS.png",
          agencia: "BlueParrot",
          imgAgency: "./img/blueparrot.png",
          moneda: "MXN",
          fecha: "2021/12/15",
          status: "Activo",
        },
        {
          clave: 10011,
          brokers: "Restel",
          img: "./img/restel.png",
          agencia: "BlueParrot",
          imgAgency: "./img/blueparrot.png",
          moneda: "MXN",
          fecha: "2021/12/15",
          status: "Activo",
        },
        {
          clave: 10012,
          brokers: "Omnibees",
          img: "./img/omnibes.png",
          agencia: "Viajes Hola",
          imgAgency: "./img/HOTELBEDS.png",
          moneda: "USD",
          fecha: "2021/12/15",
          status: "No activo",
        },
        {
          clave: 10013,
          brokers: "HotelBeds",
          img: "./img/HOTELBEDS.png",
          agencia: "BlueParrot",
          imgAgency: "./img/blueparrot.png",
          moneda: "MXN",
          fecha: "2021/12/15",
          status: "Activo",
        },
        {
          clave: 10014,
          brokers: "Restel",
          img: "./img/restel.png",
          agencia: "BlueParrot",
          imgAgency: "./img/blueparrot.png",
          moneda: "MXN",
          fecha: "2021/12/15",
          status: "Activo",
        },
        {
          clave: 10015,
          brokers: "Omnibees",
          img: "./img/omnibes.png",
          agencia: "Viajes Hola",
          imgAgency: "./img/HOTELBEDS.png",
          moneda: "USD",
          fecha: "2021/12/15",
          status: "No activo",
        },
        {
          clave: 10016,
          brokers: "HotelBeds",
          img: "./img/HOTELBEDS.png",
          agencia: "BlueParrot",
          imgAgency: "./img/blueparrot.png",
          moneda: "MXN",
          fecha: "2021/12/15",
          status: "Activo",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>