<template>
  <div>
    <br />

    <v-card
      max-width="98%"
      max-height="15000"
      style="
        margin-left: 1%;
        margin-right: 1%;
        margin-top: 2%;
        font-family: 'Montserrat' sans-serif;
        border-radius: 10px 10px 10px 10px;
      "
    >
      <div>
        <v-card>
          <v-card-title style="font-size: 17px">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <b>BANCOS</b>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-col>
            <v-sheet>
              <div style="position: relative; float: right">
                <router-link :to="`/addbanco`" class="link">
                  <v-btn color="green" style="color: white">
                    <i class="fas fa-plus"></i> AGREGAR BANCO</v-btn
                  >
                </router-link>
              </div>
              <div style="position: relative; float: left">
                <p><b>{{reservas}} bancos /</b> {{page}} páginas</p>
              </div>
            </v-sheet>
          </v-col><br>
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
            <template v-slot:default>
              <v-switch
                v-model="singleSelect"
                label="Single select"
                class="pa-3"
              ></v-switch>
            </template>
            <template v-slot:top>
              <v-switch
                v-model="singleSelect"
                label="Single select"
                class="pa-3"
              ></v-switch>
            </template>
            <template v-slot:item.clave="{ item }">
              <router-link class="link" to="/detalles"
                ><br />
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
                <span>{{ item.clave }}</span
                ><br /><br />
              </router-link>
            </template>

            <template v-slot:item.tres="{ item }" style="text-align: left">
              <span style="font-size: 13px">
                {{ formatPercent(item.tres) }}</span
              >
            </template>
            <template v-slot:item.seis="{ item }" style="text-align: left">
              <span style="font-size: 13px">
                {{ formatPercent(item.seis) }}</span
              >
            </template>
            <template v-slot:item.nueve="{ item }" style="text-align: left">
              <span style="font-size: 13px">
                {{ formatPercent(item.nueve) }}</span
              >
            </template>
            <template v-slot:item.doce="{ item }" style="text-align: left">
              <span style="font-size: 13px">
                {{ formatPercent(item.doce) }}</span
              >
            </template>
            <template v-slot:item.normal="{ item }" style="text-align: left">
              <span style="font-size: 13px">
                {{ formatPercent(item.normal) }}</span
              >
            </template>
            <template v-slot:item.banco="{ item }" style="text-align: left">
              <img v-if="item.img" :src="item.img" style="width: 18px" />
              <span style="font-size: 13px"> {{ item.banco }}</span>
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
      reservas:"72",
      page:"8",
      headers: [
        { align: "left", text: "REFERENCIA", value: "clave" },
        { text: "BANCO", value: "banco", align: "center" },
        { text: "COMISIÓN POR 3 MESES", value: "tres", align: "center" },
        { text: "COMISIÓN POR 6 MESES", value: "seis", align: "center" },
        { text: "COMISIÓN POR 9 MESES", value: "nueve", align: "center" },
        { text: "COMISIÓN POR 12 MESES", value: "doce", align: "center" },
        { text: "COMISIÓN NORMAL", value: "normal", align: "center" },
      ],
      desserts: [
        {
          clave: 10005,
          img: "./img/restel.png",
          banco: "Citibanamex",
          tres: "8",
          seis: "6",
          nueve: "10",
          doce: "5",
          normal: "6",
        },
        {
          clave: 10006,
          img: "./img/omnibes.png",
          banco: "Bancomer",
          tres: "8",
          seis: "6",
          nueve: "10",
          doce: "5",
          normal: "6",
        },
        {
          clave: 10007,
          img: "./img/HOTELBEDS.png",
          banco: "Santander",
          tres: "8",
          seis: "6",
          nueve: "10",
          doce: "5",
          normal: "6",
        },
        {
          clave: 10008,
          img: "./img/HOTELBEDS.png",
          banco: "Banorte",
          tres: "8",
          seis: "6",
          nueve: "10",
          doce: "5",
          normal: "6",
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