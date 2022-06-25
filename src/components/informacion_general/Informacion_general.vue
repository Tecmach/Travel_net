<template>
  <div>

    <v-row ref="info"
      style="padding:10px; font-family: 'Montserrat'; sans-serif; font-size:18px;"
    >
      <v-col xl="10" cols="12">
        <div style="font-size: 15px">
          <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </div>
        <v-sheet>
          <v-row>
            <v-col cols="12" xl="6" lg="6" style="background-color: ">
              <v-sheet>
                <h3 style="font-size: 20px" name="info"><b>INFORMACIÓN GENERAL</b></h3>
                <p>Nombre*</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row style="margin-top: 30px">
            <v-col
              cols="12"
              xl="6"
              lg="6"
              style="background-color: ; margin-top: -40px"
            >
              <v-sheet>
                <p>Dirección*</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              xl="6"
              lg="6"
              style="background-color: ; margin-top: -40px"
            >
              <v-sheet>
                <p>Ubicación en el mapa</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <!--El api key esta en el main.js-->
    <GoogleMap
      :latitude="20.65193"
      :longitude="-103.406803"
      :title="'Titulo Marcador'"
    />
    <v-row
      style="padding:10px; font-family: 'Montserrat'; sans-serif; font-size:18px;"
    >
      <v-col xl="10" cols="12">
        <v-sheet>
          <v-row style="margin-top: 40px">
            <v-col
              cols="12"
              xl="6"
              lg="6"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Slogan o mensajes publicitarios</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              xl="3"
              lg="3"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Destacado</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              xl="3"
              lg="3"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Hotel publicado</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row style="margin-top: 40px">
            <v-col
              cols="12"
              xl="6"
              lg="6"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Presentación del hotel</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row style="margin-top: 40px">
            <v-col
              cols="12"
              xl="4"
              lg="4"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Categoria*</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              xl="4"
              lg="4"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Destino*</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              xl="4"
              lg="4"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Zona*</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row style="margin-top: 40px">
            <v-col
              cols="12"
              xl="12"
              lg="12"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Correos electrónicos de reservaciones*</p>
                <v-text-field
                  v-model="emailReservas"
                  :rules="emailRules"
                  label="E-mail"
                  requi
                  outlined
                  dense
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row style="margin-top: 40px">
            <v-col
              cols="12"
              xl="12"
              lg="12"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>
                  Correos electrónicos de notificación de cambio de tarifas*
                </p>
                <v-text-field
                  v-model="emailNoti"
                  :rules="emailRules"
                  label="E-mail"
                  requi
                  outlined
                  dense
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row style="margin-top: 40px">
            <v-col
              cols="12"
              xl="12"
              lg="12"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Correos electrónicos de notificación de pagos CxP*</p>
                <v-text-field
                  v-model="emailPagos"
                  :rules="emailRules"
                  label="E-mail"
                  requi
                  outlined
                  dense
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row style="margin-top: 40px">
            <v-col
              cols="12"
              xl="12"
              lg="12"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>
                  Correos electrónicos de notificación de pagos CxP para grupos*
                </p>
                <v-text-field
                  v-model="emailGrupos"
                  :rules="emailRules"
                  label="E-mail"
                  requi
                  outlined
                  dense
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row style="margin-top: 40px">
            <v-col
              cols="12"
              xl="4"
              lg="4"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Hora de entrada (Check-In)*</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              xl="4"
              lg="4"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Hora de salida (Check-In)*</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col
              cols="12"
              xl="4"
              lg="4"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p>Hotel*</p>
                <v-text-field
                  name="name"
                  label=""
                  dense
                  outlined
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row style="margin-top: 40px">
            <v-col
              cols="12"
              xl="12"
              lg="12"
              style="background-color: ; margin-top: -60px"
            >
              <v-sheet>
                <p><b>Imagen principal</b></p>
                <p>
                  Considere que la imagen que debe especificar en éste apartado,
                  es de su hotel. No es recomendable que suba aquí una imagen de
                  alguna habitación, pues las fotografías de habitaciones podrán
                  ser especificadas posteriormente.
                </p>
              </v-sheet>
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col style="" sm="12" md="12" xl="6">
              <v-sheet min-height="100">
                <div style="font-size: 18px">
                  <row>
                    <p class="imagen" style="position: relative; float: left">
                      <label
                        for="image"
                        class="btn btn-block btn-outlined boton"
                        style="margin-right: 10px"
                        >Elegir imagenes</label
                      >
                    </p>
                    <input
                      id="image"
                      type="file"
                      accept=".jpg,"
                      @change="logoSelected"
                      style="display: none"
                    />
                    <p>No le ha elegido ningun archivo</p>
                    <br /><br />
                    <p>*Formato JPG <br />*Tamaño 850px x 500px</p>
                  </row>
                </div>
              </v-sheet>
            </v-col>
          </v-row>

          <v-row>
            <v-col style="background-color: " sm="12" md="12" lg="12" xl="12">
              <v-sheet min-height="100">
                <v-row>
                  <v-col style="background-color: " cols="12" lg="5" xl="5">
                    <v-sheet min-height="30">
                      <v-btn
                          disabled
                        style="
                          width: 95%;
                          margin-left: %;
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
          <hr />
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GoogleMap from "./Maps.vue";
export default {
components:{
    GoogleMap
}
}
</script>

<style>

</style>
