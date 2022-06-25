<template>
  <div>
    <v-row
      sm="12"
      md="12"
      lg="12"
      style="padding:10px;  font-family: 'Montserrat';  sans-serif;"
    >
      <v-col sm="12" md="12" lg="7">
        <v-sheet rounded="lg" min-height="50" max-height="3500" style="">
          <!--  -->
          <v-container>
            <p style="font-size: 15px">
              <b>
                <img
                  src="../../assets/HOTELBEDS.png"
                  style="width: 15px; height: 15px"
                />
                HotelBeds</b
              >
            </p>
            <br />
            <hr style="margin-top: -35px" />
            <div style="width: 100%; position: relative">
              <v-checkbox
                v-model="hotelbeds"
                hide-details
                :label="hotelbeds ? 'Activo' : 'Inactivo'"
                class="shrink mr-2 mt-0"
              ></v-checkbox>
              <div
                style="width: 100%; background-color: #ebebeb"
                v-if="hotelbeds === true"
              >
                <v-container>
                  <v-row
                    sm="12"
                    md="12"
                    lg="12"
                    style="padding:0; background-color:;  font-family: 'Montserrat'; sans-serif;"
                  >
                    <v-col sm="12" md="12" lg="12">
                      <v-sheet max-height="500" style="">
                        <!--  -->
                        <v-form>
                          <v-container>
                            <v-row>
                              <v-col
                                cols="12"
                                sm="3"
                                style="background-color: "
                                ><v-radio-group
                                  v-model="column"
                                  column
                                  v-on:click="!column"
                                >
                                  <v-radio
                                    label="Comision agencias"
                                    value="radio-1"
                                  ></v-radio>
                                </v-radio-group>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="2"
                                style="background-color: "
                              >
                                <v-text-field
                                  v-model="last"
                                  type="number"
                                  outlined
                                  dense
                                  append-icon="fas fa-percent"
                                  min="0"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="3"
                                style="background-color: "
                              >
                                <p style="margin-top: 10px">
                                  Markup operadora: 20%
                                </p>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-form>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
                <v-container>
                  <v-row
                    sm="12"
                    md="12"
                    lg="12"
                    style="padding:0; background-color:;  font-family: 'Montserrat'; sans-serif;"
                  >
                    <v-col sm="12" md="12" lg="12">
                      <v-sheet max-height="500" style="">
                        <!--  -->
                        <v-form>
                          <v-container>
                            <v-row>
                              <v-col
                                cols="12"
                                sm="3"
                                style="background-color: "
                                ><v-radio-group
                                  v-model="column"
                                  column
                                  v-on:click="!column"
                                >
                                  <v-radio
                                    label="Markup agencia"
                                    value="radio-2"
                                  ></v-radio>
                                </v-radio-group>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="2"
                                style="background-color: "
                              >
                                <v-text-field
                                  v-model="last"
                                  type="number"
                                  outlined
                                  dense
                                  append-icon="fas fa-percent"
                                  min="0"
                                ></v-text-field>
                              </v-col>
                              <v-col sm="12" md="12" lg="4" style="padding: 0">
                                <v-sheet rounded="lg">
                                  <v-container>
                                    <v-row
                                      sm="12"
                                      md="12"
                                      lg="12"
                                      style="padding:0; background-color:;  font-family: 'Montserrat'; sans-serif;"
                                    >
                                      <v-col sm="12" md="12" lg="12">
                                        <v-sheet max-height="500" style="">
                                          <!--  -->
                                          <v-form>
                                            <v-container>
                                              <v-row>
                                                <v-col
                                                  cols="12"
                                                  sm="8"
                                                  style="
                                                    background-color: ;
                                                  "
                                                >
                                                  <p style="margin-top: 10px">
                                                    Markup operadora:
                                                  </p>
                                                </v-col>
                                                <v-col
                                                  cols="12"
                                                  sm="4"
                                                  style="background-color: "
                                                >
                                                  <v-text-field
                                                    v-model="last"
                                                    type="number"
                                                    outlined
                                                    dense
                                                    append-icon="fas fa-percent"
                                                    min="0"
                                                  ></v-text-field>
                                                </v-col>
                                              </v-row>
                                            </v-container>
                                          </v-form>
                                        </v-sheet>
                                      </v-col>
                                    </v-row>
                                  </v-container>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-form>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-container>
          <v-container>
            <p style="font-size: 15px">
              <b>
                <img
                  src="../../assets/omnibes.png"
                  style="width: 20px; height: 20px"
                />
                Omnibees</b
              >
            </p>
            <br />
            <hr style="margin-top: -35px" />
            <div style="width: 100%; position: relative">
              <v-checkbox
                v-model="Omnibees"
                hide-details
                :label="Omnibees ? 'Activo' : 'Inactivo'"
                class="shrink mr-2 mt-0"
              ></v-checkbox>
              <div
                style="width: 100%; background-color: #ebebeb"
                v-if="Omnibees === true"
              >
                <v-container>
                  <v-row
                    sm="12"
                    md="12"
                    lg="12"
                    style="padding:0; background-color:;  font-family: 'Montserrat'; sans-serif;"
                  >
                    <v-col sm="12" md="12" lg="12">
                      <v-sheet max-height="500" style="">
                        <!--  -->
                        <v-form>
                          <v-container>
                            <v-row>
                              <v-col
                                cols="12"
                                sm="3"
                                style="background-color: "
                                ><v-radio-group
                                  v-model="column"
                                  column
                                  v-on:click="!column"
                                >
                                  <v-radio
                                    label="Comision agencias"
                                    value="radio-1"
                                  ></v-radio>
                                </v-radio-group>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="2"
                                style="background-color: "
                              >
                                <v-text-field
                                  v-model="last"
                                  type="number"
                                  outlined
                                  dense
                                  append-icon="fas fa-percent"
                                  min="0"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="3"
                                style="background-color: "
                              >
                                <p style="margin-top: 10px">
                                  Markup operadora: 20%
                                </p>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-form>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
                <v-container>
                  <v-row
                    sm="12"
                    md="12"
                    lg="12"
                    style="padding:0; background-color:;  font-family: 'Montserrat'; sans-serif;"
                  >
                    <v-col sm="12" md="12" lg="12">
                      <v-sheet max-height="500" style="">
                        <!--  -->
                        <v-form>
                          <v-container>
                            <v-row>
                              <v-col
                                cols="12"
                                sm="3"
                                style="background-color: "
                                ><v-radio-group
                                  v-model="column"
                                  column
                                  v-on:click="!column"
                                >
                                  <v-radio
                                    label="Markup agencia"
                                    value="radio-2"
                                  ></v-radio>
                                </v-radio-group>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="2"
                                style="background-color: "
                              >
                                <v-text-field
                                  v-model="last"
                                  type="number"
                                  outlined
                                  dense
                                  append-icon="fas fa-percent"
                                  min="0"
                                ></v-text-field>
                              </v-col>
                              <v-col sm="12" md="12" lg="4" style="padding: 0">
                                <v-sheet rounded="lg">
                                  <v-container>
                                    <v-row
                                      sm="12"
                                      md="12"
                                      lg="12"
                                      style="padding:0; background-color:;  font-family: 'Montserrat'; sans-serif;"
                                    >
                                      <v-col sm="12" md="12" lg="12">
                                        <v-sheet max-height="500" style="">
                                          <!--  -->
                                          <v-form>
                                            <v-container>
                                              <v-row>
                                                <v-col
                                                  cols="12"
                                                  sm="8"
                                                  style="
                                                    background-color: ;
                                                  "
                                                >
                                                  <p style="margin-top: 10px">
                                                    Markup operadora:
                                                  </p>
                                                </v-col>
                                                <v-col
                                                  cols="12"
                                                  sm="4"
                                                  style="background-color: "
                                                >
                                                  <v-text-field
                                                    v-model="last"
                                                    type="number"
                                                    outlined
                                                    dense
                                                    append-icon="fas fa-percent"
                                                    min="0"
                                                  ></v-text-field>
                                                </v-col>
                                              </v-row>
                                            </v-container>
                                          </v-form>
                                        </v-sheet>
                                      </v-col>
                                    </v-row>
                                  </v-container>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-form>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-container>
          <v-container>
            <p style="font-size: 15px">
              <b>
                <img
                  src="../../assets/restel.png"
                  style="width: 15px; height: 15px"
                />
                Restel</b
              >
            </p>
            <br />
            <hr style="margin-top: -35px" />
            <div style="width: 100%; position: relative">
              <v-checkbox
                v-model="Restel"
                hide-details
                :label="Restel ? 'Activo' : 'Inactivo'"
                class="shrink mr-2 mt-0"
              ></v-checkbox>
              <div
                style="width: 100%; background-color: #ebebeb"
                v-if="Restel === true"
              >
                <v-container>
                  <v-row
                    sm="12"
                    md="12"
                    lg="12"
                    style="padding:0; background-color:;  font-family: 'Montserrat'; sans-serif;"
                  >
                    <v-col sm="12" md="12" lg="12">
                      <v-sheet max-height="500" style="">
                        <!--  -->
                        <v-form>
                          <v-container>
                            <v-row>
                              <v-col
                                cols="12"
                                sm="3"
                                style="background-color: "
                                ><v-radio-group
                                  v-model="column"
                                  column
                                  v-on:click="!column"
                                >
                                  <v-radio
                                    label="Comision agencias"
                                    value="radio-1"
                                  ></v-radio>
                                </v-radio-group>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="2"
                                style="background-color: "
                              >
                                <v-text-field
                                  v-model="last"
                                  type="number"
                                  outlined
                                  dense
                                  append-icon="fas fa-percent"
                                  min="0"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="3"
                                style="background-color: "
                              >
                                <p style="margin-top: 10px">
                                  Markup operadora: 20%
                                </p>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-form>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
                <v-container>
                  <v-row
                    sm="12"
                    md="12"
                    lg="12"
                    style="padding:0; background-color:;  font-family: 'Montserrat'; sans-serif;"
                  >
                    <v-col sm="12" md="12" lg="12">
                      <v-sheet max-height="500" style="">
                        <!--  -->
                        <v-form>
                          <v-container>
                            <v-row>
                              <v-col
                                cols="12"
                                sm="3"
                                style="background-color: "
                                ><v-radio-group
                                  v-model="column"
                                  column
                                  v-on:click="!column"
                                >
                                  <v-radio
                                    label="Markup agencia"
                                    value="radio-2"
                                  ></v-radio>
                                </v-radio-group>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="2"
                                style="background-color: "
                              >
                                <v-text-field
                                  v-model="last"
                                  type="number"
                                  outlined
                                  dense
                                  append-icon="fas fa-percent"
                                  min="0"
                                ></v-text-field>
                              </v-col>
                              <v-col sm="12" md="12" lg="4" style="padding: 0">
                                <v-sheet rounded="lg">
                                  <v-container>
                                    <v-row
                                      sm="12"
                                      md="12"
                                      lg="12"
                                      style="padding:0; background-color:;  font-family: 'Montserrat'; sans-serif;"
                                    >
                                      <v-col sm="12" md="12" lg="12">
                                        <v-sheet max-height="500" style="">
                                          <!--  -->
                                          <v-form>
                                            <v-container>
                                              <v-row>
                                                <v-col
                                                  cols="12"
                                                  sm="8"
                                                  style="
                                                    background-color: ;
                                                  "
                                                >
                                                  <p style="margin-top: 10px">
                                                    Markup operadora:
                                                  </p>
                                                </v-col>
                                                <v-col
                                                  cols="12"
                                                  sm="4"
                                                  style="background-color: "
                                                >
                                                  <v-text-field
                                                    v-model="last"
                                                    type="number"
                                                    outlined
                                                    dense
                                                    append-icon="fas fa-percent"
                                                    min="0"
                                                  ></v-text-field>
                                                </v-col>
                                              </v-row>
                                            </v-container>
                                          </v-form>
                                        </v-sheet>
                                      </v-col>
                                    </v-row>
                                  </v-container>
                                </v-sheet>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-form>
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
    <hr />
    <v-row
      sm="12"
      md="12"
      lg="12"
      style="padding:10px;  font-family: 'Montserrat';  sans-serif; margin-top:-45px;"
    >
      <v-col sm="12" md="12" lg="7">
        <v-sheet rounded="lg" min-height="50" max-height="1500" style="">
          <!--  -->
          <v-container style="padding: 25px">
            <v-row
              sm="12"
              md="12"
              lg="12"
              style="padding:0; background-color:;  font-family: 'Montserrat'; sans-serif;"
            >
              <v-col sm="12" md="12" lg="12">
                <v-sheet max-height="500">
                  <!--  -->
                  <v-form>
                    <h3 style="font-size: 20px">
                      <b> POLITICAS DE VENTAS:</b>
                    </h3>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="4" style="background-color: ">
                          <v-row align="center" justify="space-around">
                            <p
                              style="
                                height: 10%;
                                font-size: 15px;
                                margin-top: 14px;
                              "
                            >
                              <b>Límite de crédito:</b>
                            </p>
                            <v-checkbox
                              input-value="true"
                              value
                              dense
                              label="Ilimitado"
                            ></v-checkbox>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>
                    <p style="color: ">
                      Importe pendiente de pago:$0.00 USD
                    </p>
                  </v-form>
                </v-sheet>
              </v-col>
            </v-row>
            <v-row
              sm="12"
              md="12"
              lg="12"
              style="padding:0;   font-family: 'Montserrat'; sans-serif;"
            >
              <v-container style="background-color: ">
                <p><b> Politicas de cancelación</b></p></v-container
              >
              <v-container
                style="background-color: ; width: 100%; padding: 0"
              >
                <v-col sm="12" md="12" lg="12">
                  <v-sheet max-height="500">
                    <!--  -->
                    <v-form>
                      <v-container style="padding: 0; hei: 80%">
                        <v-row>
                          <v-col
                            cols="6"
                            md="3"
                            lg="2"
                            xl="2"
                            style="background-color: "
                          >
                            <v-text-field
                              v-model="last"
                              type="number"
                              outlined
                              dense
                              min="0"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="6"
                            sm="1"
                            style="background-color: "
                          >
                            <p style="margin-top: 10px">Días</p>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-sheet>
                </v-col>
              </v-container>
              <v-container style="background-color: ; padding: 0">
                <v-radio-group>
                  <v-radio
                    label="Previos a incluir en gastos de cancelación"
                    value="Previo"
                  ></v-radio>
                  <v-radio
                    label="Posteriores a la operación de reserva"
                    value="Posterior"
                  ></v-radio>
                </v-radio-group>
              </v-container>
            </v-row>
            <v-row
              sm="12"
              md="12"
              lg="12"
              style="padding:0;   font-family: 'Montserrat'; sans-serif;"
            >
              <v-container style="background-color: ">
                <p><b> Modalidades de pago</b></p></v-container
              >
              <v-container style="background-color: ; padding: 0">
                <v-checkbox
                  label="No se aceptan reservas con pago pendiente"
                  v-model="value"
                  value="value"
                ></v-checkbox>
              </v-container>
            </v-row>
            <v-row
              sm="12"
              md="12"
              lg="12"
              style="padding:0;   font-family: 'Montserrat'; sans-serif;"
            >
              <v-container style="background-color: ">
                <p><b> Reservaciones</b></p></v-container
              >
              <v-container style="background-color: ; padding: 0">
                <v-radio-group>
                  <v-radio
                    label="Permitir confirmar todas las reservas"
                    value="Permitir-t"
                  ></v-radio>
                  <v-radio
                    label="No permitir confirmar las reservaciones que incurran en gastos de cancelación"
                    value="No-permitir"
                  ></v-radio>
                  <v-radio
                    label="Permitir confirmar reservas que incurran en gastos de cancelación"
                    value="Permitir-c"
                  ></v-radio>
                </v-radio-group>
              </v-container>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
    <hr />
    <v-row
      sm="12"
      md="12"
      lg="12"
      style="padding:0;  font-family: 'Montserrat'; font-size:20px; sans-serif; background-color:;"
    >
      <v-col sm="12" md="12" lg="12" style="padding: 10px">
        <v-sheet max-height="500" style="margin-top: 50px" class="flex">
          <!--  -->
          <v-col
            sm="12"
            md="12"
            lg="4"
            style="background-color: ; float: left; margin-top: -50px"
          >
            <v-sheet min-height="370">
              <v-container>
                <h3 style="font-size: 20px"><b> Mostrar</b></h3>
                <v-checkbox
                  label="Mostrar el nombre del broker en los resultados"
                  v-model="broker"
                  value="broker"
                ></v-checkbox>
                <v-checkbox
                  label="Agrupar hoteles por nombre del hotel"
                  v-model="hotel"
                  value="hotel"
                ></v-checkbox
                ><br />
                <p style="font-size: 15px"><b>Tipo de mapa</b></p>
                <v-radio-group v-model="column" column>
                  <v-radio label="Open street map" value="radio-1"></v-radio>
                  <v-radio label="Mapbox" value="radio-2"></v-radio>
                  <v-radio label="Google maps" value="radio-3"></v-radio>
                </v-radio-group>
                <v-checkbox
                  label="No mostrar fechas limite de pago"
                  v-model="fechas"
                  value="fechas"
                ></v-checkbox>
                <v-checkbox
                  label="No mostrar las políticas de cancelación"
                  v-model="cancel"
                  value="cancel"
                ></v-checkbox>
                <v-checkbox
                  label="Evitar voucher sin políticas del proveedor"
                  v-model="evitar"
                  value="evitar"
                ></v-checkbox>

                <v-row>
                  <v-col cols="12" sm="12">
                    <v-btn
                        disabled
                      class="guardar"
                      style="
                        width: 100%;
                        background-color: #3bb44a;
                        margin-top: 10px;
                        color: white;
                      "
                      type="submit"
                      ><b> guardar</b></v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
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
              <v-container>
                <h3 style="font-size: 20px"><b>OPCIONES DE PAGO</b></h3>
                <br />
                <p><b>Configuración</b></p>
                <v-checkbox
                  label="Mostrar opción ''tarjeta agencia''"
                  v-model="configuracion"
                  value="broker"
                ></v-checkbox>
                <p><b>Opciones de pago</b></p>
                <p>Pago con tarjeta de crédito o débito</p>
                <p>Usuario</p>
                <v-checkbox
                  label="Activo Company:"
                  v-model="usuario"
                  value="broker"
                ></v-checkbox>
                <p>URL: http://multipagos.bb.com.mx</p>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-btn
                      class="guardar1"
                      style="
                        width: 100%;
                        background-color: #3bb44a;
                        margin-top: 10px;
                        color: white;
                      "
                      type="submit"
                      ><b> guardar</b></v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
    name: "Body", data: () => ({
    value: 30,
    value1: 35,
    value2: 20,
    max: 100,
    time1: null,
    time2: null,
    about: true,
    row: null,
    column: null,
    hotelbeds: true,
    enabled: false,
    Omnibees: true,
    Restel: true,
    broker: null,
    hotel: null,
    fechas: null,
    cancel: null,
    evitar: null,
    configuracion:null,
    usuario:null,
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
    agencia: ["Foor", "Bar", "Fizz", "Buzz"],
  }),
};
</script>

<style>
</style>
