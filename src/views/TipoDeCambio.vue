<template>
  <div id="buildin">
    <v-main style="padding: 0; background-color: ; margin-top: 2%">
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
              lg="9"
              style="background-color:; float: left"
            >
              <v-sheet rounded="lg" min-height="150">
                <h3><b> MONEDA Y TIPO DE CAMBIO:</b></h3>
                <p><b>ASIGNAR PREFERENCIAS PARA SU TIPO DE CAMBIO:</b></p>
                <p>
                  Seleccione la opsión TIPO DE CAMBIO AUTOMATIZADO, si desea
                  utilizar el tipo de cambio del día de Google Currency y si no
                  esta disponible este servicio de YAHOO FINANCE.
                  <br />
                  Si desea utilizar un tipo de cambio diferente puede hacerlo en
                  dos formas: <br />
                  1.Utilizar el tipo de cambio de Google Currency/Yahoo finance
                  e incrementar una cantidad fija automáticamente.
                  <br />
                  2.Utilizar el tipo de cambio personalizado (este no se
                  actualiza automáticamente).
                </p>
                <p><b>Selecciona la moneda que desee utilizar:</b></p>
                <row>
                  <v-col
                    sm="12"
                    md="12"
                    lg="6"
                    xl="4"
                    style="background-color:; float: left; padding: 0"
                  >
                    <v-sheet min-height="50" style="padding: 0">
                      <v-select
                        :items="items"
                        label=""
                        dense
                        outlined
                        style="width: 75%; position: relative; float: left"
                      ></v-select>
                      <v-btn
                        style="
                          margin-left: 5px;
                          width: 50px;
                          position: relative;
                          float: left;
                          background-color: #3bb44a;
                        "
                        small
                      >
                        <v-icon color="white" style="font-size: 15px"
                          >fas fa-plus
                        </v-icon>
                      </v-btn>
                    </v-sheet>
                  </v-col>
                </row>
                <br /><br /><br />
                <p style="color: red">
                  Nota: Para que los cambios sean válidos, haga lick en el boton
                  "Guardar tipo de cambio". Para "Agregar" y "Borrar" Monedas no
                  es necesario
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
        style="padding:10px;  font-family: 'Montserrat'; font-size:20px; sans-serif;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet
            rounded="lg"
            max-height="500"
            style="margin-top: "
            class="flex"
          >
            <v-col
              sm="12"
              md="12"
              lg="12"
              style="background-color: #fafafa; float: left"
            >
              <v-sheet rounded="lg" min-height="100">
                <v-radio-group
                  v-model="radios"
                  radios="null"
                  mandatory
                  style="background-color: #fafafa"
                >
                  <v-radio
                    label="TIPO DE CAMBIO AUTOMATIZADO"
                    value="radio-1"
                  ></v-radio>
                </v-radio-group>
              </v-sheet>
            </v-col>
            <v-col
              sm="12"
              md="12"
              lg="12"
              style=" float: left; margin-top: -50px"
            >
              <v-sheet  min-height="50">
                <p>Tipo de cambio del día</p>
              </v-sheet>
            </v-col>
            <v-col
              sm="12"
              md="6"
              lg="2"
              xl="3"
              style="
                background-color: ;
                float: left;
                margin-top: -30px;
                font-size: 16px;
              "
            >
              <v-sheet rounded="lg" min-height="50">
                <p style="margin-left: 10px">Dolar Estadounidense</p>
              </v-sheet>
            </v-col>

            <v-col
              sm="12"
              md="6"
              lg="5"
              xl="5"
              style="background-color: ; float: left; margin-top: -30px"
            >
              <v-sheet
                rounded="lg"
                min-height="50"
                style="color: #535353; font-family: 'Montserrat'"
              >
                <div style="font-size: 16px">
                  <p style="margin-left: 10px">
                    <b style="color: red"> 21.237696</b> MXN Sumar:
                    <select
                      name="cars"
                      style="
                        border: 1px solid black;
                        width: 40px;
                        border-radius: 5px;
                        text-align: center;
                        margin-left: 5px;
                      "
                    >
                      <option value="peso" selected>$</option>
                    </select>
                    <input
                      type="number"
                      value="0.200000"
                      style="
                        border: 1px solid black;
                        color: red;
                        width: 100px;
                        border-radius: 5px;
                        text-align: center;
                        margin-left: 5px;
                      "
                    />
                  </p>
                </div>
              </v-sheet>
            </v-col>

            <v-col
              sm="12"
              md="12"
              lg="5"
              xl="4"
              style="background-color: ; float: left; margin-top: -30px"
            >
              <v-sheet rounded="lg" min-height="50" style="text-align: justify">
                <div style="font-size: 16px">
                  <p style="margin-left: 10px">
                    Al tipo de cambio = $
                    <input
                      type="number"
                      value="0.200000"
                      style="
                        border: 1px solid black;
                        color: #499f00;
                        width: 100px;
                        border-radius: 5px;
                        text-align: center;
                        margin-left: 5px;
                      "
                    />
                    MXN
                    <i
                      class="fas fa-times"
                      style="
                        float: right;
                        margin-right: 10px;
                        color: #b31a12;
                        font-size: 20px;
                      "
                    ></i>
                  </p>
                </div>
              </v-sheet>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row
        sm="12"
        md="12"
        lg="12"
        style="padding:10px;  font-family: 'Montserrat'; font-size:20px; margin-top:-30px;sans-serif;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet rounded="lg" max-height="500" class="flex">
            <v-col
              sm="12"
              md="6"
              lg="2"
              xl="3"
              style="
                background-color: ;
                float: left;
                margin-top: -30px;
                font-size: 16px;
              "
            >
              <v-sheet rounded="lg" min-height="50">
                <p style="margin-left: 10px">Peso mexicano</p>
              </v-sheet>
            </v-col>

            <v-col
              sm="12"
              md="6"
              lg="5"
              xl="5"
              style="background-color: ; float: left; margin-top: -30px"
            >
              <v-sheet
                rounded="lg"
                min-height="50"
                style="color: #535353; font-family: 'Montserrat'"
              >
                <div style="font-size: 16px">
                  <p style="margin-left: 10px">
                    <b style="color: red; margin-right: 70px"> 1</b> MXN Sumar:
                    <select
                      name="cars"
                      style="
                        border: 1px solid black;
                        width: 40px;
                        border-radius: 5px;
                        text-align: center;
                        margin-left: 5px;
                      "
                    >
                      <option value="peso" selected>$</option>
                    </select>
                    <input
                      type="number"
                      value="0.200000"
                      style="
                        border: 1px solid black;
                        color: red;
                        width: 100px;
                        border-radius: 5px;
                        text-align: center;
                        margin-left: 5px;
                      "
                    />
                  </p>
                </div>
              </v-sheet>
            </v-col>

            <v-col
              sm="12"
              md="12"
              lg="5"
              xl="4"
              style="background-color:; float: left; margin-top: -30px"
            >
              <v-sheet rounded="lg" min-height="50" style="text-align: justify">
                <div style="font-size: 16px">
                  <p style="margin-left: 10px">
                    Al tipo de cambio = $
                    <input
                      type="number"
                      value="0.200000"
                      style="
                        border: 1px solid black;
                        color: #499f00;
                        width: 100px;
                        border-radius: 5px;
                        text-align: center;
                        margin-left: 5px;
                      "
                    />
                    MXN
                    <i
                      class="fas fa-times"
                      style="
                        float: right;
                        margin-right: 10px;
                        color: #b31a12;
                        font-size: 20px;
                      "
                    ></i>
                  </p>
                </div>
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
        style="padding:10px;  font-family: 'Montserrat'; font-size:20px; sans-serif;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet rounded="lg" max-height="500" class="flex">
            <v-col
              sm="12"
              md="12"
              lg="12"
              style="background-color: #fafafa; float: left"
            >
              <v-sheet rounded="lg" min-height="100">
                <v-radio-group
                  v-model="radios"
                  mandatory
                  style="background-color: #fafafa"
                >
                  <v-radio
                    label="TIPO DE CAMBIO PERSONALIZADO"
                    value="radio-2"
                  ></v-radio>
                </v-radio-group>
              </v-sheet>
            </v-col>
            <v-col
              sm="12"
              md="6"
              lg="5"
              xl="4"
              style="
                background-color: ;
                float: left;
                font-size: 16px;
                margin-top: -30px;
              "
            >
              <v-sheet rounded="lg" min-height="50">
                <p style="margin-left: 10px">
                  Dolar Estadounidense
                  <input
                    type="number"
                    value="0.200000"
                    style="
                      border: 1px solid black;
                      color: #499f00;
                      width: 100px;
                      border-radius: 5px;
                      text-align: center;
                      margin-left: 5px;
                    "
                  />
                  MXN
                </p>
              </v-sheet>
            </v-col>

            <v-col
              sm="12"
              md="6"
              lg="7"
              xl="8"
              style="background-color: ; float: left;
                margin-top:-30px;"
            >
              <v-sheet
                rounded="lg"
                min-height="50"
                style="color: #535353; font-family: 'Montserrat'"
              >
                <div style="font-size: 16px">
                  <p style="margin-left: 10px">
                    <b style="margin-left: 10px">
                      *Este tipo de cambio no se actualiza automaticamente</b
                    >
                    <i
                      class="fas fa-times"
                      style="
                        float: right;
                        margin-right: 10px;
                        color: #b31a12;
                        font-size: 20px;
                      "
                    ></i>
                  </p>
                </div>
              </v-sheet>
            </v-col>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row
        sm="12"
        md="12"
        lg="12"
        style="padding:10px;  font-family: 'Montserrat'; font-size:20px; sans-serif; margin-top:-50px;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet rounded="lg" max-height="500" class="flex">
            <v-col
              sm="12"
              md="6"
              lg="5"
              xl="4"
              style="background-color: ; float: left; font-size: 16px;
                margin-top:-30px;"
            >
              <v-sheet rounded="lg" min-height="50">
                <p style="margin-left: 10px">
                  Peso mexicano
                  <input
                    type="number"
                    value="1"
                    style="
                      border: 1px solid black;
                      color: #499f00;
                      width: 100px;
                      border-radius: 5px;
                      text-align: center;
                      margin-left: 60px;
                    "
                  />
                  MXN
                </p>
              </v-sheet>
            </v-col>

            <v-col
              sm="12"
              md="6"
              lg="7"
              xl="8"
              style="background-color: ; float: left;
                margin-top:-30px;"
            >
              <v-sheet
                rounded="lg"
                min-height="50"
                style="color: #535353; font-family: 'Montserrat'"
              >
                <div style="font-size: 16px">
                  <p style="margin-left: 10px">
                    <b style="margin-left: 10px">
                      *Este tipo de cambio no se actualiza automaticamente</b
                    >
                    <i
                      class="fas fa-times"
                      style="
                        float: right;
                        margin-right: 10px;
                        color: #b31a12;
                        font-size: 20px;
                      "
                    ></i>
                  </p>
                </div>
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
        <v-col sm="12" md="6" lg="5" xl="3">
          <v-sheet rounded="lg" max-height="500" class="flex">

                        <v-btn
                            disabled
                          style="
                            width: 100%;
                            background-color: #3bb44a;
                            margin-top: 10px;
                            color: white;
                            font-size:14px;
                          "
                          type="submit"
                          ><b> GUARDAR ESTE TIPO DE CAMBIO</b></v-btn
                        >
          </v-sheet>
        </v-col>
      </v-row>

      <hr />
    </v-main>
  </div>
</template>

<script>
export default {
  name: "Detalles",
  data: () => ({
    value: 30,
    value1: 35,
    value2: 20,
    max: 100,
    about: true,
    items: ["USD", "MXN"],
  }),
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

