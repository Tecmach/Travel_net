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
        style="padding:10px;  font-family: 'Montserrat'; font-size:10px; sans-serif;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet rounded="lg" max-height="500" style="">
            <!--  -->
            <v-col
              sm="12"
              md="12"
              lg="6"
              style="background-color: ; float: left"
            >
              <v-sheet rounded="lg" min-height="40">
                <p style="font-size: 18px">RESERVACIÓN: <b>#6829482</b></p>
              </v-sheet>
            </v-col>
            <v-col
              sm="12"
              md="12"
              lg="6"
              style="background-color: ; float: left"
            >
              <v-sheet rounded="lg" min-height="40">
                <v-container style="width: 33.3%; float: left">
                  <v-row align="center" justify="space-around">
                    <v-btn
                      tile
                      color="white"
                      justify="space-around"
                      style="width: 95%; border-radius: 5px; font-size: 11px"
                    >
                      <v-icon left>fas fa-print</v-icon>Imprimir
                    </v-btn>
                  </v-row>
                </v-container>
                <v-container style="width: 33.3%; float: left">
                  <v-row align="center" justify="space-around">
                    <v-btn
                      tile
                      color="#4caf50"
                      justify="space-around"
                      style="width: 95%; border-radius: 5px; font-size: 11px"
                    >
                      <v-icon left>far fa-envelope</v-icon> enviar
                    </v-btn>
                  </v-row>
                </v-container>
                <v-container style="width: 33.3%; float: left">
                  <v-row align="center" justify="space-around">
                    <v-btn
                    @click="makePDF"
                      tile
                      color="#ff3301"
                      justify="space-around"
                      style="
                        width: 95%;
                        color: white;
                        border-radius: 5px;
                        font-size: 11px;
                      "
                    >
                      <v-icon left style="color: white">
                        far fa-file-pdf
                      </v-icon>
                      pdf
                    </v-btn>
                  </v-row>
                </v-container>
              </v-sheet>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row
        sm="12"
        md="12"
        lg="12"
        style="padding:10px;  font-family: 'Montserrat'; font-size:20px; sans-serif;"
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
              cols="12"
              lg="4"
              style="background-color: ; float: left; margin-top: -40px"
              class="uno"
            >
              <v-sheet rounded="lg" min-height="370">
                <v-container>
                  <h3><b>INFORMACIÓN DE TITULAR</b></h3>
                  <br />

                  <v-row>
                    <v-col cols="6">
                      <p><b>Nombre:</b></p>
                      <p>Jose Antonio</p>
                    </v-col>
                    <v-col cols="6">
                      <p><b>Teléfono:</b></p>
                      <p>3481131782</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <p><b>Teléfono:</b></p>
                      <p>33 2345 5467</p>
                    </v-col>
                    <v-col cols="6">
                      <p><b>Correo E.</b></p>
                      <p>jose-antonio.b@gmail.com</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <br>
                      <p><b>Peticiones especiales (No garantizadas):</b></p>
                      <p>Habitación frente al mar, en planta baja.</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-sheet>
            </v-col>
            <v-col
              sm="12"
              md="12"
              lg="5"
              style="background-color: ; float: left; margin-top: -50px"
              class="uno"
            >
              <v-sheet rounded="lg" min-height="370">
                <v-container>
                  <h3><b>INFORMACIÓN DE TITULAR</b></h3>
                  <br />
                  <p style="font-size: 20px"><b>Habitación 1:</b></p>
                  <v-row>
                    <v-col cols="5">
                      <p><b>Adulto 1:</b></p>
                      <p>Carlos Hernández Díaz</p>
                    </v-col>
                    <v-col cols="5">
                      <p><b>Adulto 2:</b></p>
                      <p>Elizabeth Vazquez Quesada</p>
                    </v-col>
                  </v-row>
                  <v-row style="margin-top: -15px">
                    <v-col cols="5">
                      <p><b>Menor 1:</b></p>
                      <p>Carlos Hernández Quezada</p>
                    </v-col>
                    <v-col cols="5">
                      <p><b>Menor 2:</b></p>
                      <p>Isabella Hernández Quezada</p>
                    </v-col>
                  </v-row>
                  <br>
                  <p style="font-size: 20px"><b>Habitación 2:</b></p>
                  <v-row>
                    <v-col cols="5">
                      <p><b>Adulto 1:</b></p>
                      <p>Carlos Hernández Díaz</p>
                    </v-col>
                    <v-col cols="5">
                      <p><b>Adulto 2:</b></p>
                      <p>Elizabeth Vazquez Quesada</p>
                    </v-col>
                  </v-row>
                  <v-row style="margin-top: -15px">
                    <v-col cols="5">
                      <p><b>Menor 1:</b></p>
                      <p>Carlos Hernández Quezada</p>
                    </v-col>
                    <v-col cols="5">
                      <p><b>Menor 2:</b></p>
                      <p>Isabella Hernández Quezada</p>
                    </v-col>
                  </v-row>
                </v-container>
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
        style="padding:10px;  font-family: 'Montserrat';  sans-serif;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet rounded="lg" max-height="500" style="">
            <!--  -->
            <v-col
              sm="12"
              md="12"
              lg="7"
              style="background-color: ; float: left"
            >
              <v-sheet rounded="lg" min-height="250">
                <v-container>
                  <h3><b>FORMAS DE PAGOS:</b></h3>
                  <br />
                  <p><b>Pago con tarjeta de crédito y débito</b></p>
                  <p><b>Nombre de tarjeta:</b> Carlos Hernández Díaz</p>
                  <p><b>Número de tarjeta:</b> **** **** **** 1234</p>
                </v-container>
              </v-sheet>
            </v-col>
            <v-col
              sm="12"
              md="12"
              lg="7"
              style="background-color: ; float: left"
            >
              <v-sheet rounded="lg" min-height="250">
                <v-container>
                  <h3><b> DETALLE DE HOTEL:</b></h3>
                  <br />
                  <p><b>Hotel:</b> Hotel Xcaret México Todo Incluido</p>
                  <p>
                    <b>Dirección:</b> Carretera Chetumal - Puerto Juarez KM
                    77710 Playa Del Carmen
                  </p>
                  <p><b>Teléfono:</b> (98) 4871 5200</p>
                </v-container>
              </v-sheet>
            </v-col>
            <v-col
              sm="12"
              md="12"
              lg="7"
              style="background-color: ; float: left"
            >
              <v-sheet rounded="lg" min-height="250">
                <v-container>
                  <h3><b> EXTRAS:</b></h3>
                  <p><b>Comentarios del Hotel:</b></p>
                  <p>
                    1x Suite importe total estima de tasas y recargos para esta
                    reserva: 80.00 Mexicanos Peso pagaderas a la llegada. Free
                    Ecologico
                  </p>
                  <p><b>Comentarios del Broker:</b></p>
                  <p>
                    Payable through CLUB TURAVIA S.A DE C.V., VAT
                    number:CTU940107CK8, acting as agent for the service
                    operating company, details of which can be provided upon
                    request
                  </p>
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
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default {
  name: "Detalles",
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
  methods:{
    makePDF(){
      window.html2canvas = html2canvas;
      var doc = new jsPDF("l", "mm", [1000,1900]);
/*       const doc = new jsPDF("p", "pt",{
        orientation: "landscape",
        unit: "in",
      }) */
      doc.html(document.querySelector("#buildin"), {
        callback: function(pdf){
          pdf.save("Detalle_de_Reservacion.pdf");
          

        }
      })
    }
  }
};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
@media (max-width: 600px) {
  p .total {
    font-size: 17px;
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

