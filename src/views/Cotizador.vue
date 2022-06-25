<template>
  <div :style="backgroundDiv" style="font-family: 'Montserrat'; sans-serif;">
    <br />

    <v-container style="width: 100%; position: relative">
      <v-row justify="space-around">
        <v-btn
          href="/dash"
          style="width: 40%; margin-top: 5px; margin-bottom: 5px"
          class="link"
          ><b>Dashboard</b>
        </v-btn>
        <v-btn
          href="#"
          style="width: 40%; margin-top: 5px; margin-bottom: 5px"
          color="primary"
          class="link"
          ><b>Buscador</b></v-btn
        >
      </v-row>
    </v-container>
    <v-container fluid>
      <v-checkbox :input-value="!getPage" @click="setPage(!getPage)">
        <template v-slot:label>
          <div style="color: black; margin-top: 7px">
            Seleccionar como pantalla de inicio
          </div>
        </template>
      </v-checkbox>
    </v-container>
    <br />
    <v-card
      max-width="320"
      min-height="540"
      max-height="1200"
      style="
        margin-left: 2%;
        margin-right: 2%;
        margin-bottom: 20px;
        border-radius: 10px 10px 10px 10px;
        background-color: rgb(235, 235, 235);
      "
    >
      <form @submit.prevent="SubmitObjetc(busqueda)">
        <!--Card title-->
        <v-container style="padding: 0">
          <h1
            style="
              background-color: rgb(62, 62, 62);
              border-radius: 10px 10px 0 0;
              text-align: center;
              color: white;
              font-size: 18px;
              padding: 8px;
            "
          >
            RESERVAR
          </h1>
        </v-container>
        <!--Buscador autocomplete-->
        <v-container fluid style="width: 100%; height: 130px">
          <v-row>
            <v-card-subtitle
              style="text-align: left; color: rgb(62, 62, 62); font-size: 18px"
            >
              <b>Destino / Hotel</b>
            </v-card-subtitle>
            <v-col cols="12">
              <v-autocomplete
                v-model="busqueda.destination.code"
                :items="lugar"
                dense
                solo
                persistent-hint
                :value="lugar"
                prepend-inner-icon="mdi-city"
                @change="Destino()"
              >
              </v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <!--Check-in/ Check-out-->
        <!--         <v-container
          id="primero"
          style="width: 100%; height: auto; padding: 0; margin-top: -25px"
        >
          <v-container
            fluid
            style="  width:100%;  position absolute; padding:0; text-align:left;"
          >
            <v-container
              id="entrada"
              style="
                width: 50%;
                background-color: ;
                position: relative;
                float: left;
              "
            >
              <b
                style="
                  text-align: center;
                  color: rgb(62, 62, 62);
                  font-size: 18px;
                  margin-left: 5%;
                "
                >Llegada</b
              >
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="busqueda.stay.checkIn"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="busqueda.stay.checkIn"
                    label=""
                    prepend-icon=""
                    prepend-inner-icon="mdi-calendar"
                    solo
                    dense
                    v-bind="attrs"
                    v-on="on"
                    style="font-size: 14px"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="busqueda.stay.checkIn"
                  no-title
                  scrollable
                  locale="Es"
                  :min="date"
                  range
                  :first-day-of-week="1"
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="GetDiffDays()">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-container>
            <v-container
              id="salida"
              style="
                width: 50%;
                background-color: ;
                position: relative;
                float: right;
              "
            >
              <b
                style="
                  text-align: center;
                  color: rgb(62, 62, 62);
                  font-size: 18px;
                  margin-left: 5%;
                "
                >Salida</b
              >
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                :return-value.sync="busqueda.stay.checkOut"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="busqueda.stay.checkOut"
                    label=""
                    :clearable="!busqueda.stay.checkIn"
                    prepend-icon=""
                    prepend-inner-icon="mdi-calendar"
                    solo
                    dense
                    v-bind="attrs"
                    v-on="on"
                    style="font-size: 14px"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="busqueda.stay.checkOut"
                  no-title
                  scrollable
                  locale="Es"
                  :first-day-of-week="1"
                  :disabled="!busqueda.stay.checkIn"
                  :min="busqueda.stay.checkIn"
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu1 = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="GetDiffDays()">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-container>
          </v-container>
        </v-container> -->
        <v-container
          id="primero"
          style="width: 100%; height: auto; padding: 0; margin-top: -25px"
        >
          <v-container
            fluid
            style="  width:100%;  position absolute; padding:0; text-align:left;"
          >
            <v-container
              id="entrada"
              style="
                width: 100%;
                background-color: ;
                position: relative;
                float: left;
              "
            >
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="dates"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-row>
                    <v-col cols="6">
                      <b
                        style="
                          text-align: center;
                          color: rgb(62, 62, 62);
                          font-size: 18px;
                          margin-left: 5%;
                        "
                        >Llegada</b
                      >
                      <v-text-field
                        v-model="busqueda.stay.checkIn"
                        label=""
                        prepend-icon=""
                        prepend-inner-icon="mdi-calendar"
                        solo
                        dense
                        v-bind="attrs"
                        v-on="on"
                        style="font-size: 14px; width: 100%"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <b
                        style="
                          text-align: center;
                          color: rgb(62, 62, 62);
                          font-size: 18px;
                          margin-left: 5%;
                        "
                        >Salida</b
                      >
                      <v-text-field
                        v-model="busqueda.stay.checkOut"
                        label=""
                        prepend-icon=""
                        prepend-inner-icon="mdi-calendar"
                        solo
                        dense
                        v-bind="attrs"
                        v-on="on"
                        style="font-size: 14px; width: 100%"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </template>
                <v-date-picker
                  v-model="dates"
                  no-title
                  scrollable
                  locale="Es"
                  :min="date"
                  range
                  :first-day-of-week="1"
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="GetDiffDays()">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-container>
          </v-container>
        </v-container>
        <!--Nights / Rooms-->
        <v-container style="width: 100%; height: 100px; padding: 0">
          <v-container
            fluid
            style="  width:100%;  position absolute; padding:0; text-align:left;"
          >
            <v-container
              id="entrada"
              style="
                width: 50%;
                padding: 0;
                background-color: ;
                position: relative;
                float: left;
              "
            >
              <b
                style="
                  text-align: center;
                  color: rgb(62, 62, 62);
                  font-size: 18px;
                  margin-left: 13%;
                "
                >Noches</b
              >
              <v-container>
                <v-layout>
                  <v-flex>
                    <v-text-field
                      type="number"
                      step="any"
                      min="0"
                      solo
                      dense
                      disabled
                      v-model.number="dif"
                      style="margin-top: -10px"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-container>
            <v-container
              id="salida"
              style="
                width: 50%;
                padding: 0;
                background-color: ;
                position: relative;
                float: right;
              "
            >
              <b
                style="
                  text-align: center;
                  color: rgb(62, 62, 62);
                  font-size: 18px;
                  margin-left: 13%;
                "
                >Habitaciones</b
              >
              <v-container>
                <v-layout>
                  <v-flex>
                    <v-text-field
                      type="number"
                      step="any"
                      min="1"
                      ref="input"
                      solo
                      dense
                      v-model="array_Occupancies.rooms"
                      height="1px"
                      style="margin-top: -10px; text-align: center"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-container>
          </v-container>
        </v-container>
        <!--Adults / Minors-->
        <v-container style="width: 100%; height: 100px; padding: 0">
          <v-container
            fluid
            style="  width:100%;  position absolute; padding:0; text-align:left;"
          >
            <v-container
              id="entrada"
              style="
                width: 50%;
                padding: 0;
                background-color: ;
                position: relative;
                float: left;
              "
            >
              <b
                style="
                  text-align: center;
                  color: rgb(62, 62, 62);
                  font-size: 18px;
                  margin-left: 13%;
                "
                >Adultos</b
              >
              <v-container>
                <v-layout>
                  <v-flex>
                    <v-text-field
                      type="number"
                      step="any"
                      min="1"
                      ref="input"
                      solo
                      dense
                      v-model="array_Occupancies.adults"
                      height="1px"
                      style="margin-top: -10px"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-container>
            <v-container
              id="salida"
              style="
                width: 50%;
                padding: 0;
                background-color: ;
                position: relative;
                float: right;
              "
            >
              <b
                style="
                  text-align: center;
                  color: rgb(62, 62, 62);
                  font-size: 18px;
                  margin-left: 13%;
                "
                >Menor</b
              >
              <v-container>
                <v-layout>
                  <v-flex>
                    <v-select
                      v-model="array_Occupancies.children"
                      solo
                      dense
                      :items="minors"
                      item-text="text"
                      item-value="value"
                      style="text-align: center; margin-top: -10px"
                      name="menor"
                      @change="GetMinors()"
                    >
                    </v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-container>
          </v-container>
        </v-container>
        <v-row style="margin-left: 0px; margin-bottom: 10px; width: 100%">
          <v-col
            cols="6"
            v-for="(item, idx) in array_Occupancies.children"
            :key="idx"
          >
            <a for="edad">Edad Menor {{ idx + 1 }}</a>
            <v-text-field
              ref="Edad"
              dense
              solo
              type="number"
              v-model="paxes_values[idx]"
              @change="printChildren"
            ></v-text-field>
          </v-col>
        </v-row>
        <!--Buscar reservacion-->
        <v-container style="width: 100%; height: 100px; padding: 0">
          <v-container
            fluid
            style="  width:100%;  position absolute; padding:0; text-align:center; background-color:black;"
          >
            <v-container
              id="entrada"
              style="width: 100%; position: relative; float: left"
            >
              <v-btn
                ref="btn"
                depressed
                :disabled="!busqueda.destination.code || !busqueda.stay.checkIn && !busqueda.stay.checkOut || !array_Occupancies.rooms || !array_Occupancies.adults || !array_Occupancies.children"
                color="primary"
                style="width: 100%"
                class="link"
                type="submit"
                ><b> BUSCAR</b>
              </v-btn>
            </v-container>
          </v-container>
        </v-container>
      </form>
    </v-card>
  </div>
</template>
<script src="http://momentjs.com/downloads/moment.min.js"></script>

<script>
import moment from "moment";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapActions, mapGetters, mapMutations } from "vuex";
/*    @click="GetAgeMinors" */
/*
{
    "stay": {
        "checkIn": "2022-02-02",
        "checkOut": "2022-06-16"
    },
    "occupancies": [
        {
            "rooms": 1,
            "adults": 1,
            "children": 2,
            "paxes": [
				{
					"type": "CH",
					"age": 5
				},
				{
					"type": "CH",
					"age": 6
				}
			]
        }
    ],
    "hotels": {
        "hotel": [
            77,
            168,
            264,
            265,
            297,
            311
        ]
    }
}
*/
export default {
  name: "Cotizador",
  components: { DatePicker },
  data() {
    let busqueda = {
      stay: {},
      occupancies: [],
      destination: {},
    };
    let dates = [];
    return {
      paxes_values: [],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      busqueda,
      requiredValue: [(v) => !!v || "Campo vacio"],
      isEditing: true,
      model: null,
      dates,
      array_Occupancies: {
        rooms: 1,
        adults: 1,
        children: 0,
        paxes: [],
      },
      menu: false,
      menu1: false,
      select: null,
      dif: null,
      lugar: [],
      value: [],
      number: null,
      rooms: null,
      adults: null,
      minors: [
        { text: "0", value: 0 },
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 },
        { text: "4", value: 4 },
        { text: "5", value: 5 },
      ],
      /* de esta otra forma tambien se podria poner una imagen de fondo*/
      backgroundDiv: {
        height: "100%",
        backgroundImage: "url(" + require("../assets/dashboard.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      },
    };
  },
  async created() {
    await this.place();
  },
  methods: {
    ...mapActions("hotels", ["destinations", "quoterResults"]),
    ...mapActions(["setPage"]),
    async place() {
      this.lugar = [];
      const lugar = await this.destinations();
      for (const a of lugar) {
        this.lugar.push({
          text: a.name.content,
          value: a.code,
        });
      }
    },
    GetMinors() {
      if (
        this.array_Occupancies.paxes.length > this.array_Occupancies.children
      ) {
        this.array_Occupancies.paxes = [];
        this.paxes_values.forEach((pax) => {
          this.paxes_values = [];
        });
        console.log(this.array_Occupancies);
      }

      /* if (this.array_Occupancies.children > 0) {
        const a = this.array_Occupancies.children;
        for (const i = 0; i <= this.array_Occupancies.children; i++) {
          console.log("Hola");
        }
      } */
    },
    Destino() {
      console.log(this.busqueda.destination.code);
    },

    async GetDays() {
      this.$refs.menu.save(this.dates);
      this.menu = false;
      console.log(this.dates);
      let init = moment(this.dates[0]);
      let end = moment(this.dates[1]);
      if (end < init) {
        this.busqueda.stay.checkIn = this.dates[1];
        this.busqueda.stay.checkOut = this.dates[0];
      } else {
        this.busqueda.stay.checkIn = this.dates[0];
        this.busqueda.stay.checkOut = this.dates[1];
      }
    },
    async GetDiffDays() {
      await this.GetDays();
      if (!this.busqueda.stay.checkIn || !this.busqueda.stay.checkOut) return;
      let start = await moment(this.busqueda.stay.checkIn);
      let end = await moment(this.busqueda.stay.checkOut);
      let duration = moment.duration(start.diff(end));
      console.log(duration);
      let days = duration.asDays();
      let diff = Math.round(days);
      this.dif = Math.abs(diff) + 1;
      return this.dif;
    },
    GetAgeMinors() {
      console.log(this.value);
    },
    async SubmitObjetc() {
      /*       if (this.array_Occupancies.children) {
        console.log(array_Occupancies.children);
      } */
      if (
        this.array_Occupancies.paxes.length === this.array_Occupancies.children
      ) {
        /*Este Codigo si volver a utilizar*/
        this.busqueda.occupancies = [];
        this.busqueda.occupancies.push(this.array_Occupancies);

        /*Este codigo no utilizar*/
        /* await this.quoterResults(this.busqueda);
      this.$router.push("/resultados"); */

        /*Este Codigo si volver a utilizar*/
        this.$router.replace({
          name: "Resultados",
          params: {
            busqueda: JSON.stringify(this.busqueda),
          },
        });
        console.log("prueba");
      }
      return;
    },
    numberRule: (val) => {
      if (val < 0) return "Please enter a positive number";
      return true;
    },
    printChildren() {
      /* console.log(this.paxes_values); */
      this.array_Occupancies.paxes = [];
      this.paxes_values.forEach((pax) => {
        if (!isNaN(parseInt(pax))) {
          this.array_Occupancies.paxes.push({ type: "CH", age: pax });
        }
      });
      console.log(this.array_Occupancies);
    },
  },
  computed: {
    ...mapGetters(["getPage"]),
    /*     disabledButton() {
      if (
        this.busqueda.destination.code &&
        this.busqueda.stay.checkIn &&
        this.busqueda.stay.checkOut &&
        this.array_Occupancies.rooms &&
        this.array_Occupancies.adults &&
        this.array_Occupancies.children
      ) {
        return false;
      } else {
        return true;
      }
    }, */
  },
};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>
<style>
</style>

