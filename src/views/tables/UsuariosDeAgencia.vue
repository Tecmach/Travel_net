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
          <v-card-title style="font-size: 17px">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <b>USUARIOS AGENCIAS</b>
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
                <router-link :to="`/addUsuario`" class="link">
                  <v-btn color="green" style="color: white">
                    <i class="fas fa-plus"></i> AGREGAR AGENCIA</v-btn
                  >
                </router-link>
              </div>
              <div style="position: relative; float: left">
                <p><b>{{usuarios}} usuarios de agencias /</b> {{page}} páginas</p>
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
            <template v-slot:top>
              <v-switch
                v-model="singleSelect"
                label="Single select"
                class="pa-3"
              ></v-switch>
            </template>

            <template v-slot:item.agencia="{ item }" style="text-align: left"
              ><br />
              <img v-if="item.img" :src="item.img" style="width: 15px" />
              <span>{{ item.agencia }}</span
              ><br /><br />
            </template>
            <template v-slot:item.clave="{ item }">
              <router-link class="link" to="/detalles">
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
            <template v-slot:item.CONTACTO="{ item }">
              <span>{{ item.CONTACTO }} <br />{{ item.agencia }}</span>
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
  name: "AgenciasUsuarios",
  data() {
    return {
      search: "",
      singleSelect: false,
      selected: [],
      usuarios:"12",
      page:"1",
      headers: [
        { align: "LEFT", text: "ID", value: "clave" },
        { text: "AGENCIA", value: "agencia", align: "LEFT" },
        { text: "CONTACTO", value: "CONTACTO", align: "LEFT" },
        { text: "CARGO", value: "Cargo", align: "LEFT" },
        { text: "TELÉFONO", value: "Telefono", align: "LEFT" },
        { text: "CORREO ELECTRÓNICO", value: "correo", align: "LEFT" },
        { text: "STATUS", value: "calories" },
      ],
      desserts: [
        {
          clave: 10005,
          agencia: "Vuela facil",
          CONTACTO: "Daniel León",
          Telefono: "3481131785",
          img: "./img/blueparrot.png",
          Cargo: "Gerente",
          correo: "Daniel@gmail.com",
          calories: "No activo",
        },
        {
          clave: 10006,
          agencia: "Vuela facil",
          CONTACTO: "Luis Gonzalez",
          Telefono: "3481131565",
          img: "./img/HOTELBEDS.png",
          Cargo: "Dueño",
          correo: "LuisG@gmail.com",
          calories: "No activo",
        },
        {
          clave: 10007,
          agencia: "Vuela facil",
          CONTACTO: "Juan Perez",
          Telefono: "3333759458",
          img: "./img/restel.png",
          Cargo: "Gerente ejecutivo",
          correo: "JuanPZ@gmail.com",
          calories: "Activo",
        },
      ],
    };
  },
  methods: {
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