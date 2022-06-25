<template>
  <div>
    <v-row
      sm="12"
      md="12"
      lg="12"
      style="padding:10px;  font-family: 'Montserrat'; sans-serif;"
    >
      <v-col sm="12" md="12" lg="12">
        <v-sheet rounded="lg" max-height="500" style="margin-top: 50px">
          <!--  -->
          <v-col
            sm="12"
            md="12"
            lg="7"
            style="background-color: ; float: left; margin-top: -50px"
          >
            <v-sheet rounded="lg" min-height="370">
              <h3><b>INFORMACIÓN DEL TITULAR</b></h3>
              <br />
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="5">
                      <p
                        style="text-align: LEFT; height: 10%; margin-top: 25px"
                      >
                        <b>Nombre</b>
                      </p>
                      <v-text-field
                        v-model="first"
                        label="Nombre"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="5">
                      <p
                        style="text-align: LEFT; height: 10%; margin-top: 25px"
                      >
                        <b>Apellido</b>
                      </p>
                      <v-text-field
                        v-model="last"
                        label="Apellido"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="5">
                      <p style="text-align: LEFT; height: 10%">
                        <b>Teléfono</b>
                      </p>
                      <v-text-field
                        v-model="phoneNumber"
                        :counter="10"
                        :error-messages="errors"
                        outlined
                        dense
                        label="Phone Number"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="5">
                      <p style="text-align: LEFT; height: 10%">
                        <b> Correo electronico</b>
                      </p>
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        dense
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="10">
                      <p style="text-align: left">
                        <b>Peticiones especiales</b>
                      </p>
                      <v-text-field
                        name="name"
                        label="label"
                        outlined
                        dense
                        id="id"
                      ></v-text-field>
                    </v-col> </v-row
                  ><br />
                  <hr />
                  <br />
                  <h3><b>NOMBRE DE HUÉSPEDES</b></h3>
                  <br />
                  <p style="font-size: 18px"><b>HABITACIÓN 1:</b></p>
                  <v-row>
                    <p
                      style="text-align: center; height: 10%; margin-top: 58px"
                    >
                      <b> Adulto 1*</b>
                    </p>
                    <v-col cols="12" sm="5">
                      <p><b>Nombre</b></p>
                      <v-text-field
                        v-model="first"
                        label="Nombre"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <p><b>Apellido</b></p>
                      <v-text-field
                        v-model="last"
                        label="Apellido"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <p
                      style="text-align: center; height: 10%; margin-top: 58px"
                    >
                      <b> Adulto 2*</b>
                    </p>
                    <v-col cols="12" sm="5">
                      <p><b>Nombre</b></p>
                      <v-text-field
                        v-model="first"
                        label="Nombre"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <p><b>Apellido</b></p>
                      <v-text-field
                        v-model="last"
                        label="Apellido"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <p
                      style="text-align: center; height: 10%; margin-top: 58px"
                    >
                      <b> Menor 1*</b>
                    </p>
                    <v-col cols="12" sm="5">
                      <p><b>Nombre</b></p>
                      <v-text-field
                        v-model="first"
                        label="Nombre"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <p><b>Apellido</b></p>
                      <v-text-field
                        v-model="last"
                        label="Apellido"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <p
                      style="text-align: center; height: 10%; margin-top: 58px"
                    >
                      <b>Menor 2*</b>
                    </p>
                    <v-col cols="12" sm="5">
                      <p><b>Nombre</b></p>
                      <v-text-field
                        v-model="first"
                        label="Nombre"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <p><b>Apellido</b></p>
                      <v-text-field
                        v-model="last"
                        label="Apellido"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <br />
                  <p style="font-size: 18px"><b>HABITACIÓN 2:</b></p>
                  <v-row>
                    <p
                      style="text-align: center; height: 10%; margin-top: 58px"
                    >
                      <b> Adulto 1*</b>
                    </p>
                    <v-col cols="12" sm="5">
                      <p><b>Nombre</b></p>
                      <v-text-field
                        v-model="first"
                        label="Nombre"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <p><b>Apellido</b></p>
                      <v-text-field
                        v-model="last"
                        label="Apellido"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <p
                      style="text-align: center; height: 10%; margin-top: 58px"
                    >
                      <b> Adulto 2*</b>
                    </p>
                    <v-col cols="12" sm="5">
                      <p><b>Nombre</b></p>
                      <v-text-field
                        v-model="first"
                        label="Nombre"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <p><b>Apellido</b></p>
                      <v-text-field
                        v-model="last"
                        label="Apellido"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <p
                      style="text-align: center; height: 10%; margin-top: 58px"
                    >
                      <b> Menor 1*</b>
                    </p>
                    <v-col cols="12" sm="5">
                      <p><b>Nombre</b></p>
                      <v-text-field
                        v-model="first"
                        label="Nombre"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <p><b>Apellido</b></p>
                      <v-text-field
                        v-model="last"
                        label="Apellido"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <p
                      style="text-align: center; height: 10%; margin-top: 58px"
                    >
                      <b>Menor 2*</b>
                    </p>
                    <v-col cols="12" sm="5">
                      <p><b>Nombre</b></p>
                      <v-text-field
                        v-model="first"
                        label="Nombre"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4">
                      <p><b>Apellido</b></p>
                      <v-text-field
                        v-model="last"
                        label="Apellido"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <hr />
                  <h3><b>FORMAS DE PAGO</b></h3>
                  <br />

                  <v-row>
                    <v-col cols="12" sm="8">
                      <v-radio-group v-model="radioGroup">
                        <v-radio
                          :label="`Pagar con tarjeta de crédito o débito`"
                          :value="1"
                        ></v-radio>
                        <v-radio
                          :label="`Reservar con pago pendiente`"
                          :value="2"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <div style="width: 100%; position: relative">
                    <div
                      style="
                        width: 100%;
                        position: relative;
                        background-color: #ebebeb;
                        float: left;
                      "
                    >
                      <i
                        class="fas fa-info-circle"
                        @click="politicas = !politicas"
                      >
                        POLÍTICA DEL HOTEL</i
                      >
                    </div>
                    <div
                    id="terminos"
                      style="width: 100%; background-color: #ebebeb"
                      v-if="politicas === true"
                    >
                      <v-container>
                        <p>
                          Permite cancelar sin cargo hasta 4 días antes de la
                          fecha de llegada, de 3 días a 24 horas antes de su
                          llegada, aplica 1 noche de estancia. En caso de No
                          Show o salida anticipada queda sujeto al cobro por el
                          total reservado. Una vez confirmada esta reserva, no
                          permitirá modificaciones. En caso de requerir alguna
                          modificación (cambiar fechas, agregar o disminuir
                          personas, cambiar nombres, cambiar tipo de habitación
                          o cambiar plan de alimentos) deberá realizar otra
                          reserva aceptando las tarifas y condiciones vigentes y
                          cancelar esta reserva aceptando las políticas y costos
                          de cancelación. Estos cambios estan sujetos a cambios
                          de precio y disponibilidad de último momento.
                          <br />Cualquier cancelación con menos de 3 días de la
                          fecha de entrada al hotel reservado, tiene una
                          penalización de $533.45 (1 Noche(s)). En caso de no
                          presentarse o cancelar a apartir del 05-11-2021 el
                          monto de penalización será de $3,543.34MXN
                        </p>
                      </v-container>
                    </div>
                    <div
                      style="
                        width: 100%;
                        position: relative;
                        background-color: #ebebeb;
                        float: left;
                      "
                    >
                      <v-container>
                        <v-checkbox
                          v-model="checkbox"
                          :rules="[
                            (v) => !!v || '¡Debes aceptar para continuar!',
                          ]"
                          label="Acepto términos y condiciones"
                          required
                        ></v-checkbox>
                      </v-container>
                    </div>
                  </div>
                  <v-row>
                    <br>
                    <v-col cols="12" sm="6">
                      <v-btn
                        style="
                          width: 100%;
                          background-color: #3bb44a;
                          margin-top: 10px;
                          color: white;
                        "
                        type="submit"
                        ><b> RESERVAR</b></v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-sheet>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    value: 30,
    value1: 35,
    value2: 20,
    max: 100,
    about: true,
    politicas: true,
    checkbox: false,
    first: "",
    last: "",
    email: "",
    phoneNumber: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    items: [
      {
        text: "Regresar",
        disabled: false,
        href: "#",
      },
      {
        text: "Panel de control",
        disabled: false,
        href: "/",
      },
      {
        text: "Reservaciones",
        disabled: true,
        href: "#",
      },
    ],
  }),
};
</script>

<style>
</style>