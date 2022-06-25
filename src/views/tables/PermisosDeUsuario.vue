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
          <v-card-title style="text-align: center">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <b style="color: rgb(170, 170, 170); font-size: 17px"
              >PERMISOS DE USUARIO</b
            >
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
              <router-link class="link" to="/adduser">
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
            <template v-slot:item.status="{ item }">
              <v-chip :color="getStatus(item.status)" dark>
                {{ item.status }}
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
        { align: "center", text: "ID", value: "clave" },
        { text: "NOMBRE", value: "name", align: "center" },
        { text: "CORREO ELECTRONICO", value: "email", align: "center" },
        { text: "TIPO DE USUARIO", value: "typeUser", align: "center" },
        { text: "STATUS", value: "status" },
      ],
      desserts: [
        {
          clave: 10005,
          name: "Rubén Hernández Díaz",
          email: "rub.di@gmail.com",
          typeUser: "Administrador",
          status: "Activo",
        },
        {
          clave: 10006,
          name: "Yolanda Landa Martín",
          email: "juan.marin@gmail.com",
          typeUser: "Agencia",
          status: "No activo",
        },
        {
          clave: 10007,
          name: "Rubén Hernández Díaz",
          email: "rben.diaz@gmail.com",
          typeUser: "Invitado",
          status: "Activo",
        },
        {
          clave: 10008,
          name: "Rubén Hernández Díaz",
          email: "rub.di@gmail.com",
          typeUser: "Administrador (Personalizado)",
          status: "Activo",
        },
        {
          clave: 10009,
          name: "Yolanda Landa Martín",
          email: "juan.marin@gmail.com",
          typeUser: "Agencia",
          status: "No activo",
        },
        {
          clave: 10010,
          name: "Rubén Hernández Díaz",
          email: "rben.diaz@gmail.com",
          typeUser: "Invitado (Personalizado)",
          status: "Activo",
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