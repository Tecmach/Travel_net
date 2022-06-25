<template>
  <div
    style="padding:10px;  font-family: 'Montserrat'; font-size:15px; sans-serif;"
  >
    <v-container
      fluid
      class="mx-auto"
      style="margin-top: 1%; background-color: ; width: 85%"
    >
      <v-row>
        <v-col cols="12">
          <v-sheet>
            <h3 style="text-align: center; font-size: 20px"><b>REPORTES</b></h3>
            <v-row>
              <v-col cols="12" xl="6" lg="6">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <p><b>Búsqueda por fecha</b></p>
                    <v-text-field
                      v-model="date"
                      label=""
                      readonly
                      prepend-inner-icon="mdi-calendar"
                      outlined
                      dense
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" xl="6" lg="6">
                <p><b>Status de reservación</b></p>
                <v-select :items="status" outlined dense label=""></v-select>
              </v-col>
              <v-col cols="12" xl="6" lg="6">
                <p><b>Máximo rango de búsqueda: 1 año</b></p>
                <v-row>
                  <v-col
                    cols="12"
                    xl="4"
                    md="4"
                    lg="4"
                    style="background-color: "
                  >
                    <p style="text-align: center">Periodo del:</p>
                  </v-col>
                  <v-col
                    cols="6"
                    xl="4"
                    md="4"
                    lg="4"
                    style="background-color: "
                  >
                    <v-text-field
                      name="name"
                      label=""
                      id="de"
                      dense
                      outlined
                      style="width: 86%; position: relative; float: left"
                    ></v-text-field>
                    <p
                      style="margin-left: 5px; position: relative; float: right"
                    >
                      a
                    </p>
                  </v-col>
                  <v-col
                    cols="6"
                    xl="4"
                    md="4"
                    lg="4"
                    style="background-color: "
                  >
                    <v-text-field
                      name="name"
                      label=""
                      id="id"
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" xl="6" lg="6">
                <p><b>Broker</b></p>
                <v-select :items="broker" outlined dense label=""></v-select>
              </v-col>
              <v-col cols="12" xl="6" lg="6">
                <p><b>Tipo de reporte</b></p>
                <v-select :items="reporte" outlined dense label=""></v-select>
              </v-col>
              <v-col cols="12" xl="6" lg="6">
                <p><b>Agencia</b></p>
                <v-select :items="agencia" outlined dense label=""></v-select>
              </v-col>
              <v-col cols="12" xl="6" lg="6">
                <p><b>Moneda</b></p>
                <v-select :items="moneda" outlined dense label=""></v-select>
              </v-col>
              <v-col cols="12" xl="6" lg="6">
                <p><b>Servicios</b></p>
                <v-select :items="servicios" outlined dense label=""></v-select>
              </v-col>
              <v-col cols="12" xl="6" lg="6" style="background-color: ">
                <v-sheet>
                  <v-btn
                      disabled
                    style="
                      margin-top: 38px;
                      width: 70%;
                      color: white;
                      margin-left: 15%;
                    "
                    color="green"
                    ><b> buscar</b></v-btn
                  >
                </v-sheet>
              </v-col>
              <v-col cols="12" xl="6" lg="6" style="background-color: ">
                <v-sheet>
                  <v-btn
                      disabled
                    style="
                      margin-top: 38px;
                      width: 70%;
                      color: black;
                      margin-left: 15%;
                    "
                    color="white"
                    ><b> Limpiar búsqueda</b></v-btn
                  >
                </v-sheet>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
      <br />
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Buscador",
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    status: ["Activo", "No activo"],
    broker: ["Omnibees", "Hotelbeds", "Restel"],
    agencia: ["BlueParrot", "Viajes Hola"],
    moneda: ["MXN", "USD"],
    servicios: "",
    reporte: "",
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>
