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
            <center>
              <v-form>
                <v-col
                  sm="12"
                  md="12"
                  lg="6"
                  style="background-color: ; float: left; margin-top: -20px"
                >
                  <v-sheet rounded="lg" min-height="370">
                    <p style="font-size: 20px">
                      <b>AGREGAR USUARIO DE AGENCIA</b>
                    </p>
                    <br />

                    <v-container>
                      <v-row>
                        <p style="text-align: center; height: 10%">
                          <b>Agencia:*</b>
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
                          <b> Teléfono 1:</b>
                        </p>
                        <v-col cols="12" sm="12"
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
                          <b> Teléfono 2:</b>
                        </p>
                        <v-col cols="12" sm="12"
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
                        <p style="text-align: center; height: 10%">
                          <b>Idioma:*</b>
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
                            margin-top: 30px;
                          "
                        >
                          <b>Sexo*</b>
                        </p>
                        <v-col cols="12" sm="10">
                          <v-radio-group v-model="row" row>
                            <v-radio label="Femenino" value="radio-1"></v-radio>
                            <v-radio
                              label="Masculino"
                              value="radio-2"
                            ></v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-row>
                      <v-row>
                        <p style="text-align: center; height: 10%">
                          <b>Clave de usuario:*</b>
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
                          <b>Contraseña:*</b>
                        </p>
                        <v-col cols="12" sm="12">
                          <v-text-field
                            v-model="first"
                            label="Nombre"
                            outlined
                            type="password"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <p style="text-align: center; height: 10%">
                          <b>Verificar contraseña:*</b>
                        </p>
                        <v-col cols="12" sm="12">
                          <v-text-field
                            v-model="first"
                            label="Nombre"
                            outlined
                            type="password"
                          ></v-text-field>
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
              </v-form>
            </center>
          </v-sheet>
        </v-col>
      </v-row>
      <hr />
      |
    </v-main>
  </div>
</template>

<script>
export default {
  name: "agregarUsuario",
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

