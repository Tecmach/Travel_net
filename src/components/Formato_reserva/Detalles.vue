<template>
  <div>
    <v-row
      sm="12"
      md="12"
      lg="12"
      style="padding:10px;  font-family: 'Montserrat';  sans-serif;"
    >
      <v-col sm="12" md="12" lg="12">
        <v-sheet rounded="lg" max-height="500" style="margin-top: 50px">
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
                  src="../../assets/logo-xcaret.png"
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
                  src="../../assets/blueparrot.png"
                  style="width: 90px; height: 60px"
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
                  src="../../assets/hoteldo.png"
                  style="width: 120px; height: 60px"
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
            <v-sheet rounded="lg" min-height="370" style="text-align: justify">
              <br />
              <p>Importe: <b style="float: right"> $ 54,186.12 MXN</b></p>
              <p>Impuestos (16%): <b style="float: right"> $ 8,669.79 MXN</b></p>
              <hr />
              <p style="color: #3ab948; font-size: 16px">
                IMPORTE TOTAL: <b style="float: right"> $ 62,865.00 MXN</b>
              </p>
              <div style="width: 98%; position: relative; margin-left: 1%; margin-top:30px;">
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

              <div style="width: 100%; position: relative; float: left;">
                <v-container>
                  <v-checkbox
                    v-model="checkbox"
                    :rules="[(v) => !!v || '¡Debes aceptar para continuar!']"
                    required
                  >
                    <template v-slot:label>
                      <div>
                        Acepto
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on }">
                            <a  href="#terminos" @click.stop v-on="on">
                              términos y condiciones
                            </a>
                          </template>
                        </v-tooltip>
                      </div>
                    </template>
                  </v-checkbox>
                </v-container>
              </div>
              <p>Fecha límite de pago: 14 de Julio 2022</p>
              <v-btn
                style="
                  width: 100%;
                  background-color: #3bb44a;
                  margin-top: 10px;
                  color: white;
                "
                class="reserva"
                ><b> RESERVAR</b></v-btn
              >
            </v-sheet>
          </v-col>

          <v-col
            sm="12"
            md="12"
            lg="8"
            style="background-color: ; float: left; margin-top: -40px"
          >
            <v-sheet rounded="lg" min-height="100">
              <p>
                <b>Información adicional:</b> 55% de descuento por habitacion.
                Aplica para estadías entre 3-Enero-2021 y 30-Enero-2021. Valido
                para reservaciones antes del 1-Diciembre-2021
              </p>
            </v-sheet>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Detalles",
  data: () => ({
    about: true,
  }),
};
</script>

<style>
</style>