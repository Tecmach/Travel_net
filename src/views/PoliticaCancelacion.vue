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
          <p style="margin-left: 2.5%">
            <b>AGREGAR POLITICA DE CANCELACIÓN</b>
          </p>
          <v-row>
            <v-col style="background-color: " sm="12" md="6" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 15px">Desde*</h3>
                <input
                  type="number"
                  min="1"
                  style="
                    border: 1px solid black;
                    width: 90%;
                    margin-left: 5%;
                    border-radius: 5px;
                  "
                  placeholder="dias"
                />
              </v-sheet>
            </v-col>
            <v-col style="background-color: " sm="12" md="6" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 15px">Hasta*</h3>
                <input
                  type="number"
                  min="1"
                  style="
                    border: 1px solid black;
                    width: 90%;
                    margin-left: 5%;
                    border-radius: 5px;
                  "
                  placeholder="dias"
                />
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="background-color: " sm="12" md="12" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 15px">Preventa</h3>
                <h3 style="margin-left: 5%; font-size: 15px">
                  En estas fechas las cancelaciones
                </h3>
                <v-select
                  :items="cargos"
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
                        disabled
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
  name: "Cancelacion",
  data: () => ({
    cargos: ["Generan cargos", "No generan cargos"],
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
