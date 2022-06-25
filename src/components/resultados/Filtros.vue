<template>
  <v-card
    max-height="1500"
    style="background-color: rgb(235, 235, 235); float: left; width: 100%"
    class="overflow-auto filter_desktop"
  >
    <v-container
      style="
        background-color: rgb(235, 235, 235);
        position: relative;
        padding: 2px;
      "
      class="overflow-auto"
      v-if="filterHidden(getShowFilters)"
    >
      <!--Card title-->
      <v-container style="padding: 0">
        <h1 style="text-align: center; font-size: 20px; padding: 8px">
          FILTROS
        </h1>
      </v-container>
      <!--Card Destino/hotel-->
      <v-container style=" ">
        <v-row align="center">
          <v-card-subtitle
            style="text-align: center; color: rgb(62, 62, 62); font-size: 18px"
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
            >
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <!-- Checkin / CheckOut -->
      <v-container
        id="primero"
        style="width: 100%; height: auto; padding: 0; margin-top: -25px"
      >
        <v-container
          fluid
          style="  width:100%; padding:0; text-align:left;"
        >
          <v-container
            id="entrada"
            style="
              width: 50%;
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
                :first-day-of-week="1"
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="GetDiffDays()"> OK </v-btn>
              </v-date-picker>
            </v-menu>
          </v-container>
          <v-container
            id="salida"
            style="
              width: 50%;
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
                <v-btn text color="primary" @click="GetDiffDays()"> OK </v-btn>
              </v-date-picker>
            </v-menu>
          </v-container>
        </v-container>
      </v-container>
      <!--Card Rooms/Adultos/Menores-->
      <v-container
        style="
          width: 100%;
          background-color: rgb(235, 235, 235);
          float: left;
          position: relative;
          padding: 2px;
        "
      >
        <div
          style="
            width: 33.3%;
            float: left;
            text-align: center;
          "
        >
          <b style="text-align: center; color: rgb(62, 62, 62); font-size: 18px"
            >Rooms</b
          >
          <v-form style="padding: 0; margin-button: 10px">
            <v-container>
              <v-layout>
                <v-flex>
                  <v-text-field
                    type="number"
                    step="any"
                    min="0"
                    ref="input"
                    solo
                    :rules="[numberRule]"
                    v-model.number="rooms"
                    height="1px"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </div>
        <div
          style="
            width: 33.3%;
            background-color: rgb(235, 235, 235);
            float: left;
            float: left;
            text-align: center;
          "
        >
          <b style="color: rgb(62, 62, 62); font-size: 18px">Adultos</b>
          <v-form style="padding: 0">
            <v-container>
              <v-layout>
                <v-flex>
                  <v-text-field
                    type="number"
                    step="any"
                    min="0"
                    ref="input"
                    solo
                    :rules="[numberRule]"
                    v-model.number="adults"
                    height="1px"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </div>
        <div
          style="
            width: 33.4%;
            background-color: rgb(235, 235, 235);
            float: left;
            float: left;
            text-align: center;
          "
        >
          <b style="text-align: center; color: rgb(62, 62, 62); font-size: 15px"
            >Menores</b
          >
          <v-form style="padding: 0; margin-button: 10px">
            <v-container>
              <v-layout>
                <v-flex>
<!--                   <v-select
                  solo
                  :items="minors"
                  v-model="Menor"
                  value="10"
                  type="number"
                  >

                  </v-select> -->
                  <v-select
                  solo
                  :items="minors"
                      item-text="text"
                      item-value="value">

                  </v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </div>
      </v-container>
      <!--Card Brokers-->
      <v-list style="background-color: rgb(235, 235, 235)">
        <v-list-group
          :value="false"
          align-center
          prepend-icon="fas fa-link"
          class="primary--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="" style="font-weight: 500"
                >Brokers
              </v-list-item-title>
            </v-list-item-content>
            <hr />
          </template>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="broker"
              label="Todos"
              value="Todos"
            ></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="broker"
              label="HotelBeds"
              value="HotelBeds"
            ></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="broker"
              label="Omnibees"
              value="Omnibees"
            ></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="broker"
              label="Restel"
              value="Restel"
            ></v-checkbox>
          </v-list-item>
        </v-list-group>
      </v-list>
      <hr />
      <!--Card Rango de precio-->
      <v-list style="background-color: rgb(235, 235, 235)">
        <v-list-group
          :value="false"
          prepend-icon="fas fa-dollar-sign"
          class="primary--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="" style="font-weight: 500"
                >Rango de precio</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <v-list-item link class="ml-3">
            <v-row>
              <v-col class="px-4">
                <v-range-slider
                  v-model="range"
                  :max="max"
                  :min="min"
                  hide-details
                  class="align-center"
                >
                  <template v-slot:prepend>
                    <v-text-field
                      :value="'$' + range[0]"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="text"
                      style="width: 60px"
                      disabled
                      @change="$set(range, 0, $event)"
                    ></v-text-field>
                    <label for=""></label>
                  </template>
                  <template v-slot:append>
                    <v-text-field
                      :value="'$' + range[1]"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="text"
                      style="width: 60px"
                      disabled
                      @change="$set(range, 1, $event)"
                    ></v-text-field>
                  </template>
                </v-range-slider>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list-group>
      </v-list>
      <hr />
      <!--Card Categoria-->
      <v-list style="background-color: rgb(235, 235, 235)">
        <v-list-group
          :value="false"
          prepend-icon="fa fa-list-alt"
          class="primary--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title style="font-weight: 500"
                >Categoria</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <v-rating
              :value="6"
              color="amber"
              length="6"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <v-rating
              :value="5.5"
              color="amber"
              length="6"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <v-rating
              :value="5"
              color="amber"
              length="5"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <v-rating
              :value="4.5"
              color="amber"
              length="5"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <v-rating
              :value="4"
              color="amber"
              length="4"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <v-rating
              :value="3.5"
              color="amber"
              length="4"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <v-rating
              :value="3"
              color="amber"
              length="3"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <v-rating
              :value="2.5"
              color="amber"
              length="3"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <v-rating
              :value="2"
              color="amber"
              length="2"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <p>
              <br />
              Apartotel 3*
            </p>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <p>
              <br />
              Apartotel 4*
            </p>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <p>
              <br />
              Boutique
            </p>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <p>
              <br />
              Otros
            </p>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox label="" v-model="value" value="value"></v-checkbox>
            <p>
              <br />
              Resort
            </p>
          </v-list-item>
        </v-list-group>
      </v-list>
      <hr />
      <!--Card Zona-->
      <v-list style="background-color: rgb(235, 235, 235)">
        <v-list-group
          :value="false"
          align-center
          prepend-icon="fas fa-map"
          class="primary--text"
          style=""
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="" style="font-weight: 500"
                >Zona</v-list-item-title
              >
            </v-list-item-content>
            <hr />
          </template>
          <v-list-item link class="ml-3">
            <v-checkbox v-model="zona" label="Todos" value="Todos"></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="zona"
              label="Aeropuerto"
              value="Aeropuerto"
            ></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="zona"
              label="Cancun"
              value="Cancun"
            ></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="zona"
              label="Cancun Centro"
              value="CanCen"
            ></v-checkbox>
          </v-list-item>
        </v-list-group>
      </v-list>
      <hr />
      <!--Card Plan de alimentos-->
      <v-list style="background-color: rgb(235, 235, 235)">
        <v-list-group
          :value="false"
          align-center
          prepend-icon="fas fa-utensils"
          class="primary--text"
          style=""
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="" style="font-weight: 500"
                >Plan de alimentos</v-list-item-title
              >
            </v-list-item-content>
            <hr />
          </template>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="alimentos"
              label="Todos"
              value="Todos"
            ></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="alimentos"
              label="Desayuno"
              value="Desayuno"
            ></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="alimentos"
              label="Desayuno y comida"
              value="DesComi"
            ></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="alimentos"
              label="Desayuno, comida y cena"
              value="DesComice"
            ></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="alimentos"
              label="Otros"
              value="Otros"
            ></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="alimentos"
              label="Sin alimentos"
              value="Sin"
            ></v-checkbox>
          </v-list-item>
          <v-list-item link class="ml-3">
            <v-checkbox
              v-model="alimentos"
              label="Todo incluido"
              value="TodoIn"
            ></v-checkbox>
          </v-list-item>
        </v-list-group>
      </v-list>
      <hr />

      <center>
        <v-btn
          style="
            position: relative;
            width: 90%;
            background-color: #636363;
            color: white;
          "
          >FILTRAR</v-btn
        >
      </center>
      <br />
    </v-container>
  </v-card>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "Filtros",
  components: { DatePicker },
  data() {
    let busqueda = {
      stay: {},
      occupancies: [],
      destination: {
        /*         "code": "GUA" */
      },
    };
    return {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      busqueda,
      filter_active: true,
      broker: [],
      alimentos: [],
      zona: [],
      lugar: [],
      time1: null,
      menu: false,
      menu1: false,
      time2: null,
      rooms: null,
      adults: null,
      switch1: true,
      min: 1345,
      value: null,
      result: [],
      max: 17850,
      range: [-20, 70],
      item: [
        "Precio: Mayor a menor",
        "Precio: Menor a mayor",
        "A-Z",
        "Estrellas: Menor a mayor",
        "Estrellas: Mayor a menor",
      ],
      minors: [
        { text: "0", value: 0 },
        { text: "1", value: 1 },
        { text: "2", value: 2 },
        { text: "3", value: 3 },
        { text: "4", value: 4 },
        { text: "5", value: 5 },
      ],
    };
  },

  async created() {
    await this.place();
  },
  methods: {
    ...mapActions("hotels", ["destinations", "quoterResults"]),
    async place() {
      this.lugar = [];
      const lugar = await this.destinations();
      for (const a of lugar) {
        this.lugar.push({
          text: a.name.content,
          value: a.code,
        });
      }
      console.log(lugar);
    },

        Destino() {
      console.log(this.busqueda.destination.code);

    },
    filterHidden(getShowFilters) {
      if (screen.width < 600) {
        return getShowFilters == false;
      } else {
        return getShowFilters == true;
      }
    },
    disabledFilter(type) {
      this.filter_active = type;
    },

    numberRule: (val) => {
      if (val < 0) return "Please enter a positive number";
      return true;
    },
  },
  computed: {
    ...mapGetters("filtros", ["getShowFilters"]),
  },
};
</script>


<style>
</style>
