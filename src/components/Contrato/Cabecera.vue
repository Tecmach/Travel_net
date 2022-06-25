<template>
  <div>
    <v-row
      cols="12"
      md="12"
      lg="12"
      style="padding:10px;  font-family: 'Montserrat'; font-size:10px; sans-serif;"
    >
      <v-col cols="12" md="12" lg="12">
        <v-sheet rounded="lg" max-height="500" style="">
          <!--  -->
          <v-col
            cols="12"
            md="12"
            lg="6"
            style="background-color: ; float: left"
          >
            <p style="font-size: 20px"><b>CONTRATO DE AGENCIA</b></p>
            <br />
            <v-sheet rounded="lg" min-height="40">
              <v-container style="width: 90.3%">
                <v-row align="center" justify="space-around">
                  <p
                    style="
                      text-align: center;
                      height: 10%;
                      font-size: 15px;
                      margin-right: 10px;
                    "
                  >
                    <b>Agencia:</b>
                  </p>
                  <v-select
                    :items="agencia"
                    label="Outlined style"
                    outlined
                    dense
                  ></v-select>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row
    align="center"
      cols="12"
      md="12"
      lg="12"
      style="padding:10px;  font-family: 'Montserrat'; font-size:10px; margin-top:-50px; sans-serif;"
    >
      <v-col cols="12" md="12" lg="12" >
        <v-sheet rounded="lg" max-height="500" min-height="40" style="" align-center>
          <!--  -->
          <v-col
            cols="12"
            xl="7"
            style="background-color: ; float: left"
          >
            <v-sheet rounded="lg">
              <v-col
                cols="12"
                md="12"
                lg="3"
                style="float: left; background-color: "
              >
                <v-row align="center" justify="space-around">
                  <p style="font-size: 15px; margin-top: 14px">
                    <b>Vigencia ilimitada:</b>
                  </p>
                  <v-checkbox input-value="true" value dense></v-checkbox>
                </v-row>
              </v-col>
              <v-col
                cols="12"
                md="12"
                lg="9"
                style="float: left; background-color: "
              >
                <v-row
                  cols="12"
                  md="12"
                  lg="12"
                  align="center"
                  justify="space-around"
                >
                  <v-col
                    cols="12"
                    md="12"
                    lg="4"
                    style="
                      padding: 0;
                      background-color: ;
                      text-align: center;
                    "
                  >
                    <p style="height: 10%; font-size: 15px; margin-top: 14px">
                      <b>Fecha de vigencia:</b>
                    </p>
                  </v-col>
                  <v-col
                    xs="12"
                    sm="6"
                    md="6"
                    lg="4"
                    style="background-color: "
                  >
                    <date-picker
                      solo
                      v-model="time1"
                      @change="date"
                      :disabled-date="disabledBeforeTodayAndAfterAWeek"
                      selecionarFecha
                      locale="es"
                      style="width: 90%; margin-left: 5%"
                    ></date-picker>
                  </v-col>
                  <v-col
                    xs="12"
                    sm="6"
                    md="6"
                    lg="4"
                    style="background-color: "
                  >
                    <date-picker
                      solo
                      v-model="time2"
                      @change="date"
                      :disabled-date="disabledBeforeTodayAndAfterAWeek"
                      selecionarFecha
                      locale="es"
                      style="width: 90%; margin-left: 5%"
                    ></date-picker>
                  </v-col>
                </v-row>
              </v-col>
            </v-sheet>
          </v-col>
          <v-col
            cols="12"
            xl="5"
            style="background-color: ; float: left"
          >
            <v-sheet rounded="lg" min-height="40">
              <v-col
                cols="12"
                md="12"
                lg="5"
                style="float: left; background-color: "
              >
                <v-row
                  cols="12"
                  md="12"
                  lg="12"
                  align="center"
                  justify="space-around"
                >
                  <v-col
                    cols="12"
                    md="6"
                    lg="6"
                    style="
                      padding: 0;
                      background-color: ;
                      text-align: center;
                    "
                  >
                    <p style="height: 10%; font-size: 15px; margin-top: 14px">
                      <b>Creado el:</b>
                    </p>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    lg="6"
                    style="background-color: "
                  >
                    <date-picker
                      solo
                      v-model="time3"
                      @change="date"
                      :disabled-date="disabledBeforeTodayAndAfterAWeek"
                      selecionarFecha
                      locale="es"
                      style="width: 90%; margin-left: 5%"
                    ></date-picker>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                cols="12"
                md="12"
                lg="7"
                style="float: left; background-color: "
              >
                <v-row
                  cols="12"
                  md="12"
                  lg="12"
                  align="center"
                  justify="space-around"
                >
                  <v-col
                    cols="12"
                    md="6"
                    lg="8"
                    style="
                      padding: 0;
                      background-color: ;
                      text-align: center;
                    "
                  >
                    <p style="height: 10%; font-size: 15px; margin-top: 14px">
                      <b>Días para avisar de fin de contrato:</b>
                    </p>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    lg="4"
                    style="background-color: "
                  ><input type="number" style="width:90%; padding:5px; border:1px solid black; margin-left:5%; border-radius:4px; font-size:15px; background-color:white; text-align:center;"  min="1" value="1">
                  </v-col>
                </v-row>
              </v-col>
            </v-sheet>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row
      cols="12"
      md="12"
      lg="12"
      style="padding:10px;  font-family: 'Montserrat'; font-size:10px; margin-top:-40px; sans-serif;"
    >
      <v-col cols="12" md="12" lg="12">
        <v-sheet rounded="lg" max-height="500" style="">
          <!--  -->
          <v-col
            cols="12"
            md="12"
            lg="4"
            style="background-color: ; float: left"
          >
            <v-sheet rounded="lg" min-height="40">
              <v-col
                cols="12"
                md="12"
                lg="12"
                style="float: left; background-color: "
              >
                <v-row align="center" justify="space-around">
                  <p
                    style="
                      text-align: center;
                      height: 10%;
                      font-size: 15px;
                      margin-right: 10px;
                    "
                  >
                    <b>Perfil:</b>
                  </p>
                  <v-select
                    :items="agencia"
                    label="Outlined style"
                    outlined
                    dense
                  ></v-select>
                </v-row>
              </v-col>
            </v-sheet>
          </v-col>
          <v-col
            cols="12"
            md="12"
            lg="4"
            style="background-color: ; float: left"
          >
            <v-sheet rounded="lg" min-height="40">
              <v-col
                cols="12"
                md="12"
                lg="12"
                style="float: left; background-color: "
              >
                <v-row align="center" justify="space-around">
                  <p
                    style="
                      text-align: center;
                      height: 10%;
                      font-size: 15px;
                      margin-right: 10px;
                    "
                  >
                    <b>Nombre de perfil:</b>
                  </p>
                  <v-select
                    :items="agencia"
                    label="Outlined style"
                    outlined
                    dense
                  ></v-select>
                </v-row>
              </v-col>
            </v-sheet>
          </v-col>
          <v-col
            cols="12"
            md="12"
            lg="4"
            style="background-color: ; float: left"
          >
            <v-sheet rounded="lg" min-height="40">
              <v-col
                cols="12"
                md="12"
                lg="12"
                style="float: left; background-color: "
              >
                <v-row align="center" justify="space-around">
                  <v-btn

                    href="#"
                    style="
                      width: 90%;
                      position: relative;
                      margin-top: 2%;
                      margin-left: 5%;
                      font-size: 12px;
                      background-color: #3bb44a;
                      color:white
                    "
                    ><b>ELEGIR</b></v-btn
                  >
                </v-row>
              </v-col>
            </v-sheet>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<!--Días para avisar de fin de contrato:

​
-->
<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  name: "Header",
  components: {
    DatePicker,
  },
  data: () => ({
    time1: null,
    time2: null,
    time3: null,

    agencia: ["Foor", "Bar", "Fizz", "Buzz"],
  }),
};
</script>

<style>
</style>
