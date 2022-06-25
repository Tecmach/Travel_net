<template>
  <div id="buildin">
    <v-main style="padding: 0; background-color: ; margin-top: 2%">
      <div>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </div>
      <v-row
        sm="12"
        md="12"
        lg="12"
        style="padding:10px;  font-family: 'Montserrat';  sans-serif;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet
            rounded="lg"
            max-height="500"
            style="margin-top: 50px"
            class="flex"
          >
            <!--  -->
            <v-col
              sm="12"
              md="12"
              lg="5"
              style="background-color: ; float: left; margin-top: -50px"
            >
              <v-sheet rounded="lg" min-height="370">
                <h3><b> DETALLE DE RESERVACIÓN:</b></h3>
                <br />
                <p>
                  <b>Hotel:</b> Hotel Xcaret México
                  <img
                    src="../assets/logo-xcaret.png"
                    style="width: 90px; height: 60px"
                  />
                </p>
                <p><b>Habitaciones:</b>1</p>
                <p><b>Plan de alimentación:</b> Desayuno incluido</p>
                <p><b>Entrada:</b> Jueves 5 de febrero</p>
                <p><b>Noches:</b> 5</p>
                <p><b>Tipo de Confirmación:</b> Disponible</p>
                <p>
                  <b>Agencia:</b> Blue Parrot
                  <img
                    src="../assets/blueparrot.png"
                    style="width: 90px; height: 60px"
                  />
                </p>
              </v-sheet>
            </v-col>

            <v-col
              sm="12"
              md="12"
              lg="3"
              style="background-color: ; float: left; margin-top: -50px"
            >
              <v-sheet
                rounded="lg"
                min-height="370"
                style="color: #535353; font-family: 'Montserrat'"
              >
                <br />
                <v-row align="star" class="mx-0">
                  <div class="black--text ms-1">
                    <b>Categoria:</b>
                  </div>
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                </v-row>
                <br />
                <p><b>Tipo de habitación:</b> Suite VISTAL AL JARDIN</p>
                <p><b>Destino:</b> Riviera Maya</p>
                <p><b>Salida:</b> Lunes, 6 de Enero 2021</p>
                <p><b>Ubicación:</b> Ciudad</p>
                <p>
                  <b>Broker:</b> HotelDo
                  <img
                    src="../assets/hoteldo.png"
                    style="width: 120px; height: 60px"
                  />
                </p>
              </v-sheet>
            </v-col>

            <v-col
              sm="12"
              md="12"
              lg="4"
              style="background-color: ; float: left; margin-top: -50px"
            >
              <v-sheet rounded="lg" min-height="0" style="text-align: justify">
                <br />
                <p>Importe: <b style="float: right"> $ 54,186.12 MXN</b></p>
                <p>Impuestos: <b style="float: right"> $ 8,669.79 MXN</b></p>
                <hr />
                <p style="color: #3ab948; font-size: 16px" class="total">
                  IMPORTE TOTAL: <b style="float: right"> $ 62,865.00 MXN</b>
                </p>
                <div style="width: 98%; position: relative; margin-left: 1%">
                  <div
                    style="
                      width: 10%;
                      position: relative;
                      background-color: ;
                      float: left;
                    "
                  >
                    <center>
                      <i class="fas fa-info-circle" @click="about = !about"></i>
                    </center>
                  </div>
                  <div
                    style="width: 100%; background-color: #ebebeb"
                    v-if="about === true"
                  >
                    <p>
                      Tarifa basada en 1 habitación ocupada por 3 adultos y un
                      niño
                    </p>
                  </div>
                </div>
                <br />
              </v-sheet>
            </v-col>

            <v-col
              sm="12"
              md="12"
              lg="8"
              style="background-color: ; float: left; margin-top: -40px"
              class="cuatro"
            >
              <v-sheet rounded="lg" min-height="100">
                <p>
                  <b>Información adicional:</b> 55% de descuento por habitacion.
                  Aplica para estadías entre 3-Enero-2021 y 30-Enero-2021.
                  Valido para reservaciones antes del 1-Diciembre-2021
                </p>
              </v-sheet>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
      <hr />
      <v-row
        sm="12"
        md="12"
        lg="12"
        style="padding:10px;  font-family: 'Montserrat'; sans-serif;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet
            rounded="lg"
            max-height="500"
            style="margin-top: 50px"
            class="flex"
          >
            <!--  -->
            <v-col
              sm="12"
              md="12"
              lg="5"
              style="background-color: ; float: left; margin-top: -50px"
              class="uno"
            >
              <v-sheet rounded="lg" min-height="370">
                <v-container>
                  <h3><b> NOMBRE DE PASAJEROS:</b></h3>
                  <br />
                  <p><b>Información Titular:</b> Hernández Díaz Carlos</p>
                  <p><b>Habitación 1:</b></p>
                  <p style="margin-left: 50px">
                    <b>Adulto 1:*</b> Hernández Díaz Carlos
                  </p>
                  <p style="margin-left: 50px">
                    <b>Adulto 2:*</b> Vazquez Quesada Elizabeth
                  </p>
                  <p><b>Menor 1 (Edad 5):*</b> Hernández Díaz Carlos</p>
                  <p><b>Menor 2 (Edad 4):*</b> Vazquez Quesada Elizabeth</p>
                </v-container>
              </v-sheet>
            </v-col>
            <v-col
              sm="12"
              md="12"
              lg="5"
              style="background-color: ; float: left; margin-top: -40px"
              class="uno"
            >
              <v-sheet rounded="lg" min-height="370">
                <v-container>
                  <h3><b> INFORMACIÓN DEL TITULAR:</b></h3>
                  <p><b> Teléfono:</b> (33) 2345 5467</p>
                  <p><b>Correo electrónico:</b> carlos.hd@gmail.com</p>
                  <p>
                    <b
                      >Peticiones Especiales <br />
                      (No garantizadas):
                    </b>
                    Habitación frente al mar en planta baja.
                  </p>
                  <h3>
                    <b> FORMAS DE PAGO:</b> Pago con tarjeta de crédito y débito
                  </h3>
                  <br />
                  <p><b>Nombre de tarjeta:</b> Carlos Hernandéz Díaz</p>
                  <p><b>Número de tarjeta:</b> **** **** **** 1234</p>
                </v-container>
              </v-sheet>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "Detalle",
  components: { DatePicker },
  data: () => ({
    value: 30,
    value1: 35,
    value2: 20,
    max: 100,
    about: true,
    items: [
      {
        text: "PANEL DE CONTROL",
        disabled: false,
        href: "/",
      },
      {
        text: "RESERVACIONES",
        disabled: false,
        href: "reservas",
      },
      {
        text: "CONFIRMACIÓN",
        disabled: true,
        href: "#",
      },
    ],
  }),
};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
@media (max-width: 600px) {
  .total {
    font-size: 15px;
  }
  .reserva {
    display: none;
  }
}
#buildin {
  background-color: white;
  width: 100%;
  height: 80%;
  position: absolute;
  background-size: 100% auto;
}
</style>
<style>
</style>

