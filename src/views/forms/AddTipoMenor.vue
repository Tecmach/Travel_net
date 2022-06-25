<template>
  <div>
    <v-row
      sm="12"
      md="12"
      lg="12"
      style="padding:10px;  font-family: 'Montserrat'; font-size:25px; sans-serif;"
    >
      <v-col sm="12" md="10" lg="10">
          
          <div style="font-size: 15px">
            <v-breadcrumbs :items="items">
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </div>
        <v-sheet>
          <p style="margin-left: 2.5%"><b>AGREGAR TIPO DE MENOR</b></p>
          <v-row>
            <v-col style="background-color: " sm="12" md="12" lg="12" xl="12">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 2.5%; font-size: 18px">Plan*</h3>
                <v-select
                  :items="planes"
                  label=""
                  outlined
                  dense
                  style="width: 95%; margin-left: 2.5%"
                ></v-select>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="background-color: " sm="12" md="6" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">Desde*</h3>
                <v-select
                  :items="desde"
                  label=""
                  outlined
                  dense
                  style="width: 90%; margin-left: 5%"
                ></v-select>
              </v-sheet>
            </v-col>
            <v-col style="background-color: " sm="12" md="6" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">Hasta*</h3>
                <v-select
                  :items="hasta"
                  label=""
                  outlined
                  dense
                  style="width: 90%; margin-left: 5%"
                ></v-select>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="background-color: " sm="12" md="12" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">
                  ¿Este tipo de menor es gratuito en su hotel?
                </h3>
                <v-select
                  :items="tipo"
                  label=""
                  outlined
                  dense
                  style="width: 90%; margin-left: 5%"
                ></v-select>
                <v-row>
                  <v-col style="background-color: " sm="12" md="12" lg="9">
                    <v-sheet min-height="30" style="paddign: 0">
                      <v-btn
                        style="
                          width: 90%;
                          margin-left: 5%;
                          color: white;
                          background-color: #39b449;
                        "
                      >
                        <b> Guardar</b>
                      </v-btn>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "agregarMenor",
  data: () => ({
    tipo: ["Si", "No"],
    desde: [
      "2 años",
      "3 años",
      "4 años",
      "5 años",
      "6 años",
      "7 años",
      "8 años",
      "9 años",
    ],
    hasta: [
      "2 años",
      "3 años",
      "4 años",
      "5 años",
      "6 años",
      "7 años",
      "8 años",
      "9 años",
    ],
    planes: [
      "EUROPEO",
      "TODO INCLUIDO",
      "AMERICANO MODIFICADO (CON ALIMENTOS PARA ADULTOS",
      "AMERICANO MODIFICADO (CON ALIMENTOS SOLO PARA ADULTOS",
      "CONTINENTAL (INCLUYE DESAYUNO SOLO PARA ADULTOS)",
      "AMERICANO (INCLUYE DESAYUNO SOLO PARA ADULTOS)",
      "CON DESAYUNO BUFFET (INCLUYE DESAYUNO SÓLO PARA ADULTOS)",
      "CON ALIMENTOS Y BEBIDAS",
    ],
    items: [
      {
        text: "REGRESAR",
        disabled: false,
        href: "/",
      },
      {
        text: "PANEL DE CONTROL",
        disabled: false,
        href: "/",
      },
      {
        text: "HOTELES",
        disabled: false,
        href: "reservas",
      },
      {
        text: "DETALLE DE HOTEL",
        disabled: true,
        href: "#",
      },
    ],
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>