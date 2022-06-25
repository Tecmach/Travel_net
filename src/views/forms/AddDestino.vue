<template>
  <div
    style="
      padding: 10px;
      margin-top: 1%;
      font-family: 'Montserrat' sans-serif;
      font-size: 18px;
    "
  >
    <div>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <v-row>
      <v-col xl="10" lg="10" cols="12">
        <v-sheet>
          <form @submit.prevent="destiny(destiny2)">
            <h3 style="font-size: 20px; margin-left: 2.5%">
              <b>AGREGAR DESTINO</b>
            </h3>
            <br />
            <p style="margin-left: 2.5%"><b>Nombre*</b></p>
            <v-text-field
              v-model="destiny2.name"
              label=""
              outlined
              dense
              style="width: 95%; margin-left: 2.5%"
            ></v-text-field>
            <v-row>
              <v-col style="background-color: " cols="12" lg="5" xl="5">
                <v-sheet min-height="30" style="paddign: 0">
                  <v-btn
                      disabled
                    absolute
                    type="submit"
                    style="
                      width: 90%;
                      margin-left: 5%;
                      color: white;
                      background-color: #39b449;
                    "
                  >
                    <b> Guardar</b>
                  </v-btn>
                </v-sheet>
              </v-col>
            </v-row>
          </form>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "addDestino",
  data() {
    let destiny2 = {};
    return {
      status: true,
      destiny2,
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
          text: "Hoteles",
          disabled: false,
          href: "#",
        },
        {
          text: "Destinos",
          disabled: false,
          href: "#",
        },
        {
          text: "Agregar destino",
          disabled: true,
          href: "#",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("hotels", ["getDestiny", "getErrors"]),
  },
  methods:{

    ...mapActions("hotels", ["destiny", "setErrors"]),
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>
