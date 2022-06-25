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
            <b>
            DESTINOS</b>
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
              <div style="position:relative; float:right;">
              <router-link :to="`/adddestino`" class="link">
                <v-btn color="green" style="color: white">
                  <i class="fas fa-plus"></i> Destino</v-btn
                >
              </router-link>
              <router-link :to="`/addzona`" class="link">
                <v-btn color="green" style="color: white; margin-left:10px;">
                  <i class="fas fa-plus"></i> Zona</v-btn
                >
              </router-link>
              </div>
            </v-sheet>
          </v-col>
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
              <router-link class="link" to="/detalles"><br>
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
                <span>{{ item.clave }}</span><br><br>
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
        { align: "left", text: "ID", value: "clave" },
        { text: "DESTINO", value: "destino", align: "left" },
        { text: "ZONA", value: "zona", align: "left" },
        { text: "STATUS", value: "status" },
      ],
      desserts: [
        {
          clave: 10005,
          destino: "Acapulco",
          zona: "Altabrisa",
          status: "Activo",
        },
        {
          clave: 10006,
          destino: "Aguascalientes",
          zona: "Centro",
          status: "No activo",
        },
        {
          clave: 10007,
          destino: "Bacalar",
          zona: "Laguna",
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