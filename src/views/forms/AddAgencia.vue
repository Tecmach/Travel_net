<template>
  <div id="buildin">
    <div>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <v-main style="padding: 0; background-color: ; margin-top: 2%">
      <v-row
        sm="12"
        md="12"
        lg="12"
        style="padding:10px; font-size:15px; font-family: 'Montserrat'; sans-serif;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet rounded="lg" max-height="500" style="margin-top: ">
            <!--  -->
            <v-form>
              <v-col
                sm="12"
                md="12"
                lg="6"
                style="background-color: ; float: left; margin-top: -20px"
              >
                <v-sheet rounded="lg" min-height="370">
                  <p style="font-size: 20px"><b>AGREGAR NUEVA AGENCIA</b></p>
                  <br />

                  <v-container>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Razón social:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="rSocial"
                          label=""
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Nombre comercial:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="nameCom"
                          label=""
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>RFC:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          :rules="RfcRules"
                          :counter="13"
                          v-model="rfc"
                          label=""
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b> Teléfono fijo:</b>
                      </p>
                      <v-col cols="12" sm="12"
                        ><v-text-field
                          v-model="landline"
                          :counter="10"
                          :error-messages="errors"
                          outlined
                          label="Phone Number"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b> Teléfono móvil:</b>
                      </p>
                      <v-col cols="12" sm="12"
                        ><v-text-field
                          v-model="phoneNumber"
                          :counter="10"
                          type="number"
                          :error-messages="errors"
                          outlined
                          label="Phone Number"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Código postal:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Colonia:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Municipio:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Estado:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>País:</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Calle:</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p
                        style="
                          text-align: center;
                          height: 10%;
                          margin-top: 25px;
                        "
                      >
                        <b>Num. Int</b>
                      </p>
                      <v-col cols="12" md="12" lg="12" xl="4">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <p
                        style="
                          text-align: center;
                          height: 10%;
                          margin-top: 25px;
                        "
                      >
                        <b>Num. Ext*</b>
                      </p>
                      <v-col cols="12" md="12" lg="12" xl="4">
                        <v-text-field
                          v-model="last"
                          label="Apellido"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Moneda*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-select
                          :items="moneda"
                          label="Outlined style"
                          outlined
                        ></v-select>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="12">
                        <v-btn
                            disabled
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
                lg="6"
                style="background-color: ; float: left; margin-top: -20px"
              >
                <v-sheet rounded="lg" min-height="370">
                  <p style="font-size: 20px"><b>DATOS DE CONTACTO</b></p>
                  <br />

                  <v-container>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Nombre:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Apellido paterno:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Apellido materno:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Cargo:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p
                        style="
                          text-align: center;
                          height: 10%;
                          margin-top: 25px;
                        "
                      >
                        <b> Tel. fijo:</b>
                      </p>
                      <v-col cols="12" sm="4"
                        ><v-text-field
                          v-model="phoneNumber"
                          :counter="10"
                          :error-messages="errors"
                          outlined
                          label="Phone Number"
                          required
                        ></v-text-field>
                      </v-col>
                      <p
                        style="
                          text-align: center;
                          height: 10%;
                          margin-top: 25px;
                        "
                      >
                        <b> Tel. móvil:</b>
                      </p>
                      <v-col cols="12" sm="4"
                        ><v-text-field
                          v-model="phoneNumber"
                          :counter="10"
                          :error-messages="errors"
                          outlined
                          label="Phone Number"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b> Correo electronico*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p
                        style="
                          text-align: center;
                          height: 10%;
                          margin-top: 30px;
                        "
                      >
                        <b>Sexo*</b>
                      </p>
                      <v-col cols="12" sm="10">
                        <v-radio-group v-model="row" row>
                          <v-radio label="Femenino" value="radio-1"></v-radio>
                          <v-radio label="Masculino" value="radio-2"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                    <br />
                    <p style="font-size: 20px">
                      <b>DIRECCIÓN PARA EL ENVÍO DE CORREO ELECTRÓNICO:</b>
                    </p>
                    <br />
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b> Correo electronico*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Clave:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Servidor SMTP:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Número exterior:</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-sheet>
              </v-col>
            </v-form>
          </v-sheet>
        </v-col>
      </v-row>
      <hr />
      |
      <v-row
        sm="12"
        md="12"
        lg="12"
        style="padding:10px; font-size:15px; font-family: 'Montserrat'; sans-serif;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet rounded="lg" max-height="500" style="margin-top: ">
            <!--  -->
            <v-form>
              <v-col
                sm="12"
                md="12"
                lg="6"
                style="background-color: ; float: left; margin-top: -50px"
              >
                <v-sheet rounded="lg" min-height="370">
                  <p style="font-size: 20px">
                    <b>CONECTAR AL CERRAR SESIÓN:</b>
                  </p>
                  <br />

                  <v-container>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Página web:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                          type="url"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Página web:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-checkbox
                          v-model="checkbox"
                          :label="` ${checkbox.toString()}`"
                        ></v-checkbox>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b>Clave de Back Office:*</b>
                      </p>
                      <v-col cols="12" sm="12">
                        <v-text-field
                          v-model="first"
                          label="Nombre"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-sheet>
              </v-col>
              <v-col
                sm="12"
                md="12"
                lg="6"
                style="background-color: ; float: left; margin-top: -50px"
              >
                <v-sheet rounded="lg" min-height="370">
                  <p style="font-size: 20px"><b>CONFIGURAR EL FRONT END:</b></p>
                  <br />

                  <v-container>
                    <v-row>
                      <p
                        style="
                          text-align: center;
                          height: 10%;
                          margin-top: 30px;
                        "
                      >
                        <b>Header y footer: </b>
                      </p>
                      <v-col cols="12" sm="8">
                        <v-radio-group v-model="row" row>
                          <v-radio label="Activo" value="primary"></v-radio>
                          <v-radio label="Inactivo" value="radio-2"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p
                        style="
                          text-align: center;
                          height: 10%;
                          margin-top: 30px;
                          margin-left: 70px;
                        "
                      >
                        <b>Menú: </b>
                      </p>
                      <v-col cols="12" sm="10">
                        <v-radio-group v-model="row" row>
                          <v-radio label="Activo" value="radio-1"></v-radio>
                          <v-radio label="Inactivo" value="radio-2"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p
                        style="
                          text-align: center;
                          height: 10%;
                          margin-top: 30px;
                          margin-left: 70px;
                        "
                      >
                        <b>Logo: </b>
                      </p>
                      <v-col cols="12" sm="10">
                        <v-radio-group v-model="row" row>
                          <v-radio label="Activo" value="radio-1"></v-radio>
                          <v-radio label="Inactivo" value="radio-2"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-sheet>
              </v-col>
            </v-form>
          </v-sheet>
        </v-col>
      </v-row>
      <hr />
      |
      <v-row
        sm="12"
        md="12"
        lg="12"
        style="padding:10px; font-size:15px; font-family: 'Montserrat'; sans-serif;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet rounded="lg" max-height="500" style="margin-top: 0px">
            <!--  -->
            <v-form>
              <v-col
                sm="12"
                md="12"
                lg="6"
                style="background-color: ; float: left; margin-top: -50px"
              >
                <v-sheet rounded="lg" min-height="370">
                  <v-container>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b
                          >Observaciones y politicas para reservaciones de
                          Hoteles:</b
                        >
                      </p>
                      <v-col cols="12" sm="12">
                        <v-textarea
                          outlined
                          name="input-7-4"
                          label=""
                          value=""
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b
                          >Observaciones y politicas para reservaciones de
                          Hoteles:</b
                        >
                      </p>
                      <v-col cols="12" sm="12">
                        <v-textarea
                          outlined
                          name="input-7-4"
                          label=""
                          value=""
                        ></v-textarea>
                      </v-col>
                    </v-row>
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
                lg="6"
                style="background-color: ; float: left; margin-top: -50px"
              >
                <v-sheet rounded="lg" min-height="370">
                  <v-container>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b
                          >Observaciones y politicas para reservaciones de
                          Atracciones:</b
                        >
                      </p>
                      <v-col cols="12" sm="12">
                        <v-textarea
                          outlined
                          name="input-7-4"
                          label=""
                          value=""
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                      <p style="text-align: center; height: 10%">
                        <b
                          >Observaciones y politicas para reservaciones de
                          Atracciones:</b
                        >
                      </p>
                      <v-col cols="12" sm="12">
                        <v-textarea
                          outlined
                          name="input-7-4"
                          label=""
                          value=""
                        ></v-textarea>
                      </v-col>
                    </v-row>
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
            </v-form>
          </v-sheet>
        </v-col>
      </v-row>
      <hr />
      |
    </v-main>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "agregarAgencia",
  components: { DatePicker },
  data: () => ({
    value: 30,
    value1: 35,
    value2: 20,
    max: 100,
    about: true,
    politicas: true,
    checkbox: false,
    first: "",
    rfc: "",
    rSocial: "",
    nameCom: "",
    last: "",
    email: "",
    phoneNumber: "",
    landline: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    RfcRules: [
      (v) => !!v || "El RFC es requerido",
      (v) => v.length <= 13 || "El máximo de caracteres del RFC son 13",
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
    moneda: ["MXN", "USD", "EUR", "CAD", "JPY"],
  }),
};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
@media (max-width: 1924px) {
  .guardar1 {
    display: none;
  }
  .guardar {
    display: block;
  }
}
@media (max-width: 991px) {
  .guardar {
    display: none;
  }
  .guardar1 {
    display: block;
  }
}
#buildin {
  background-color: white;
  width: 100%;
  height: auto;
  position: absolute;
  background-size: 100% auto;
}
</style>
<style>
</style>

