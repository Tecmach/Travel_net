<template>
  <v-app class="login" style="font-family: 'Montserrat' sans-serif;">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card class="d-flex justify-center align-center flex-column">
        <v-card-title
          v-if="!messageConfirm"
          class="d-flex justify-center mb-5 mt-5"
        >
          <span class="headline">Recuperar password</span>
        </v-card-title>
        <v-card-text v-if="!messageConfirm">
          <v-alert
            v-for="(error, idx) in getErrors"
            :key="idx"
            dense
            text
            type="error"
          >
            {{ error }}
          </v-alert>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  v-model="emailRecovery"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-text v-if="messageConfirm && !loader">
          <v-container
            class="d-flex flex-column justify-center align-center mt-5"
          >
            <v-icon color="primary" style="font-size: 40px">
              fas fa-check-circle
            </v-icon>
            <p class="mt-5" style="font-size: 20px">
              Se te ha enviado un email para recuperar tu password
            </p>
          </v-container>
        </v-card-text>
        <v-card-text v-if="loader" class="d-flex justify-center mt-5">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog()">
            Cerrar
          </v-btn>
          <v-btn
            v-if="!messageConfirm"
            color="blue darken-1"
            text
            @click="sendEmailRecov()"
          >
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row class="">
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="8"
        class="d-flex justify-center align-center loginImage"
      >
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="4"
        class="d-flex justify-center align-center"
      >
        <form
          @submit.prevent="!panelSA ? signin(user) : signup(user)"
          style="width: 80%"
        >
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <img src="../assets/Logo-Sistema.svg" width="220px" />
            </v-col>
            <v-col
              v-if="!registerSucss && !loader2"
              cols="12"
              class="d-flex justify-center"
            >
              <p style="font-size: 28px">
               <b> {{ panelSA ? "Crea tu cuenta" : "INICIAR SESIÓN" }}</b>
              </p>
            </v-col>
          </v-row>

          <v-row> 
            <v-alert
              v-for="(error, idx) in getErrors"
              :key="idx"
              dense
              text
              type="error"
            >
              {{ error }}
            </v-alert>
          </v-row>

          <v-row v-if="!panelSA && !registerSucss">
            <v-col class="d-flex flex-column pa-0" cols="12" sm="12">
              <p class="ml-2">Usuario</p>
              <v-text-field
                outlined
                v-model="user.email"
                prepend-inner-icon="far fa-user"
              ></v-text-field>
            </v-col>

            <v-col class="d-flex flex-column pa-0" cols="12" sm="12">
              <p class="ml-2">Contraseña</p>
              <v-text-field
                outlined
                v-model="user.password"
                prepend-inner-icon="fas fa-lock"
                :append-icon="show1 ? 'far fa-eye' : 'far fa-eye-slash'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
              ></v-text-field>
              <p
                @click.stop="openDialog()"
                style="cursor: pointer; text-align: center; text-decoration: underline;"
                class="ml-2"
              >
                ¿Olvidaste tu contraseña?
              </p>
            </v-col>

            <v-btn
              class="pa-6 link"
              block
              style="color: white"
              color="primary"
              type="submit"
            >
              Iniciar sesión
            </v-btn>
          </v-row>
          <v-row v-if="loader2">
            <v-col
              class="d-flex flex-column pa-0 align-center mt-5"
              cols="12"
              sm="12"
            >
              <v-progress-circular
                class="mt-5"
                :size="50"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  computed: {
    ...mapGetters("auth", ["getErrors"]),
  },
  methods: {
    ...mapActions("auth", ["signin", "setErrors", "sendEmailRecoveryPass"]),
    async sendEmailRecov() {
      this.setErrors("clear");
      this.messageConfirm = true;
      this.loader = true;
      await this.sendEmailRecoveryPass({ email: this.emailRecovery });
      if (this.getErrors.length > 0) {
        this.messageConfirm = false;
        this.loader = false;
      }
      this.loader = false;
    },
    openDialog() {
      this.setErrors("clear");
      this.dialog = true;
    },
    closeDialog() {
      this.messageConfirm = false;
      this.dialog = false;
      this.emailRecovery = "";
    },
  },
  data() {
    let user = {};
    return {
      user,
      show1: false,
      dialog: false,
      emailRecovery: "",
      messageConfirm: false,
      loader: false,
      panelSA: false,
      registerSucss: false,
      loader2: false,
    };
  },
  created() {
    this.setErrors("clear");
  },
};
</script>

<style scoped>
.loginImage {
  background-image: url("../assets/axaltaportada.jpg");
  background-size: cover;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>
