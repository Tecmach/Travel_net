<template>
  <div>
    <v-row align="center"
      cols="12"
      lg="12"
      style="padding:10px;  font-family: 'Montserrat'; font-size:25px; sans-serif;"
    >
      <v-col cols="12" md="10" lg="10">
        <div style="font-size: 18px">
          <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </div>
        <v-sheet>
          <p style="margin-left: 2.5%">
            <b>AGREGAR TARIFA</b>
          </p>
          <v-row>
            <v-col style="background-color: " cols="12" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px"> Plan en que aplica la tarifa*</h3>
                <v-select
                  :items="planes"
                  label=""
                  outlined
                  dense
                  style="width: 90%; margin-left: 5%"
                ></v-select>
              </v-sheet>
            </v-col>
            <v-col style="background-color: " cols="12" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <v-row>
                  <v-col style="background-color: " cols="12" lg="4" xl="4">
                    <v-sheet min-height="100" style="paddign: 0">
                      <h3 style="margin-left: 5%; font-size: 18px">Moneda*</h3>
                      <v-select
                        :items="moneda"
                        label=""
                        outlined
                        dense
                        style="width: 90%; margin-left: 5%"
                      ></v-select>
                    </v-sheet>
                  </v-col>
                  <v-col style="background-color: " cols="12" lg="4" xl="4">
                    <v-sheet min-height="100" style="paddign: 0">
                      <h3 style="margin-left: 5%; font-size: 18px">Venta*</h3>
                      <v-select
                        :items="planes"
                        label=""
                        outlined
                        dense
                        style="width: 90%; margin-left: 5%"
                      ></v-select>
                    </v-sheet>
                  </v-col>
                  <v-col style="background-color: " cols="12" lg="4" xl="4">
                    <v-sheet min-height="100" style="paddign: 0">
                      <h3 style="margin-left: 5%; font-size: 18px">Mark-Up (%)*</h3>
                      <v-select
                        :items="markup"
                        label=""
                        outlined
                        dense
                        style="width: 90%; margin-left: 5%"
                      ></v-select>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col style="background-color: " cols="12" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">Código de promoción de la tarifa</h3>
                <v-select
                  :items="planes"
                  label=""
                  outlined
                  dense
                  style="width: 90%; margin-left: 5%"
                ></v-select>
              </v-sheet>
            </v-col>
            <v-col style="background-color: " cols="12" lg="6" xl="6">
              <v-sheet min-height="150" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">
                  Esta tarifa se aplica en las siguientes noches de la semana:
                </h3>
                <v-row>
                  <v-col cols="12"  style="background-color:; position:relative; margin:auto;">
                    <v-sheet>
                      <v-row>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          v-model="ex4"
                          label="Lunes"
                          color="primary"
                          value="red"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          v-model="ex4"
                          label="Martes"
                          color="primary"
                          value="red darken-3"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          v-model="ex4"
                          label="Miercoles"
                          color="primary"
                          value="red"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          v-model="ex4"
                          label="Jueves"
                          color="primary"
                          value="red"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                      </v-row>
                    </v-sheet>
                  </v-col>
                  <v-col cols="12"  style="background-color:; position:relative; margin:auto;">
                    <v-sheet>
                      <v-row>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          v-model="ex4"
                          label="Viernes"
                          color="primary"
                          value="red"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          v-model="ex4"
                          label="Sabado"
                          color="primary"
                          value="red darken-3"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          v-model="ex4"
                          label="Domingo"
                          color="primary"
                          value="red"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                      </v-row>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="background-color: " sm="12" md="6" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">Nombre</h3>
                <input
                  type="text"
                  min="1"
                  style="
                    border: 1px solid black;
                    width: 90%;
                    margin-left: 5%;
                    border-radius: 5px;
                  "
                />
              </v-sheet>
            </v-col>
            <v-col style="background-color: " sm="12" md="6" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">Color</h3>
                <input
                  type="text"
                  min="1"
                  style="
                    border: 1px solid black;
                    width: 90%;
                    margin-left: 5%;
                    border-radius: 5px;
                  "
                />
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="background-color: " cols="12" lg="6" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">Preventa</h3>
                <h3 style="margin-left: 5%; font-size: 18px">
                  Esta es una tarifa de preventa*
                </h3>
                <v-select
                  :items="tarifa"
                  label=""
                  outlined
                  dense
                  style="width: 90%; margin-left: 5%"
                ></v-select>
                <v-row>
                  <v-col style="background-color: " cols="12" lg="9">
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
  name: "addTarifa",
  data: () => ({
    tarifa: ["Si", "No"],
    ex4: [
      "red",
      "indigo",
      "orange",
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "error",
      "red darken-3",
      "indigo darken-3",
      "orange darken-3",
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
    moneda:['USD','MXN'],
    markup:['10%','20%','25%','30%']
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>