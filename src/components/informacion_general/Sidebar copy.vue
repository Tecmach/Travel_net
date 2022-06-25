<template>
  
    <v-card
      max-width="300"
      id="sidebar"
      style="background-color: rgb(235, 235, 235); float: left"
      class="overflow-auto filter_desktop"
    >
      <v-container
        style="
          width: 300px;
          background-color: rgb(235, 235, 235);
          position: relative;
          padding: 2px;
        "
        class="overflow-auto"
        v-if="filterHidden(getShowFilters)"
      >
        <br>
        <!--Información general-->
        <v-list style="background-color: rgb(235, 235, 235)" id="info">
          <v-list-group
            :value="false"
            align-center
            prepend-icon="fas fa-bars"
            class="primary--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500; font-size:15px;"
                  >Información general</v-list-item-title
                >
              </v-list-item-content>
              <hr />
            </template>
          </v-list-group>
        </v-list>
        <hr>
        <!--Imagenes-->
        <v-list style="background-color: rgb(235, 235, 235)" id="info">
          <v-list-group
            :value="false"
            align-center
            prepend-icon="far fa-image"
            class="primary--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500; font-size:15px;"
                  >Imágenes</v-list-item-title
                >
              </v-list-item-content>
              <hr />
            </template>
          </v-list-group>
        </v-list>
        <hr />
        <br />
      </v-container>
    </v-card>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapGetters } from 'vuex';

export default {
  name: "Filtros",
  components: { DatePicker },
  data: () => ({
    filter_active: true,
    items: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
    values: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
    time1: null,
    time2: null,
    rooms: null,
    adults: null,
    minors: null,
    switch1: true,
    min: 1345,
    max: 17850,
    range: [-20, 70],
    item: [
      "Precio: Mayor a menor",
      "Precio: Menor a mayor",
      "A-Z",
      "Estrellas: Menor a mayor",
      "Estrellas: Mayor a menor",
    ],
  }),
  methods: {
    filterHidden(getShowFilters){
      if(screen.width<600){
       return getShowFilters==false;
      }
      else{
       return getShowFilters==true;
      }
    },
    disabledFilter(type) {
      this.filter_active = type;
    },
    disabledBeforeTodayAndAfterAWeek(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return (
        date < today ||
        date > new Date(today.getTime() + 365 * 24 * 3600 * 1000)
      );
    },
    disabledBeforeTodayAndAfterAWeekAndCheckIn(date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return (
        date < today ||
        date > new Date(today.getTime() + 365 * 24 * 3600 * 1000)
      );
    },
    nochestotales(time1, time2) {
      var fecha1 = moment(this.time1);
      var fecha2 = moment(this.time2);

      console.log(fecha2.diff(fecha1, "days"), " dias de diferencia");
    },

    numberRule: (val) => {
      if (val < 0) return "Please enter a positive number";
      return true;
    },
    date() {
      console.log(this.time1);

      console.log(this.time2);
    },
  },
  computed:{
      ...mapGetters('filtros', ['getShowFilters'])
  }
};
</script>


<style>
@media (min-width:1901px){
#sidebar{
  
      height:9400px;
}
}
@media(max-width: 1900px){
  #sidebar{
    height: 9500px;
  }
}
@media(max-width: 1857px){
  #sidebar{
    height: 9800px;
  }
}
@media(max-width: 1740px){
  #sidebar{
    height: 10000px;
  }
}
@media(max-width: 1693px){
  #sidebar{
    height: 10100px;
  }
}
@media(max-width: 1662px){
  #sidebar{
    height: 10200px;
  }
}
@media(max-width: 1641px){
  #sidebar{
    height: 10300px;
  }
}
@media(max-width: 1631px){
  #sidebar{
    height: 10500px;
  }
}
@media(max-width: 1609px){
  #sidebar{
    height: 10650px;
  }
}
@media(max-width: 1599px){
  #sidebar{
    height: 10800px;
  }
}
@media(max-width: 1577px){
  #sidebar{
    height: 10950px;
  }
}
@media(max-width: 1574px){
  #sidebar{
    height: 11100px;
  }
}
@media(max-width: 1551px){
  #sidebar{
    height: 11250px;
  }
}
@media(max-width: 1545px){
  #sidebar{
    height: 11400px;
  }
}
@media(max-width: 1539px){
  #sidebar{
    height: 11550px;
  }
}
@media(max-width: 1527px){
  #sidebar{
    height: 11700px;
  }
}
@media(max-width: 1514px){
  #sidebar{
    height: 11850px;
  }
}
@media(max-width: 1438px){
  #sidebar{
    height: 12000px;
  }
}
@media(max-width: 1401px){
  #sidebar{
    height: 12150px;
  }
}
@media(max-width: 1368px){
  #sidebar{
    height: 12300px;
  }
}
@media(max-width: 1337px){
  #sidebar{
    height: 12400px;
  }
}
@media(max-width: 1321px){
  #sidebar{
    height: 12500px;
  }
}
@media(max-width: 1286px){
  #sidebar{
    height: 12600px;
  }
}
@media(max-width: 1269px){
  #sidebar{
    height: 12645px;
  }
}

@media(max-width: 1263px){
  #sidebar{
    height: 11000px;
  }
}
@media(max-width: 1244px){
  #sidebar{
    height: 11100px;
  }
}
@media(max-width: 1231px){
  #sidebar{
    height: 11200px;
  }
}
@media(max-width: 1226px){
  #sidebar{
    height: 11300px;
  }
}
@media(max-width: 1222px){
  #sidebar{
    height: 11400px;
  }
}
@media(max-width: 1219px){
  #sidebar{
    height: 11500px;
  }
}
@media(max-width: 1216px){
  #sidebar{
    height: 11700px;
  }
}
@media(max-width: 1199px){
  #sidebar{
    height: 10050px;
  }
}
@media(max-width: 1187px){
  #sidebar{
    height: 10150px;
  }
}
@media(max-width: 1163px){
  #sidebar{
    height: 10250px;
  }
}
@media(max-width: 1159px){
  #sidebar{
    height: 10350px;
  }
}
@media(max-width: 1149px){
  #sidebar{
    height: 10550px;
  }
}
@media(max-width: 1130px){
  #sidebar{
    height: 10650px;
  }
}
@media(max-width: 1126px){
  #sidebar{
    height: 10750px;
  }
}
@media(max-width: 1115px){
  #sidebar{
    height: 10850px;
  }
}
@media(max-width: 1105px){
  #sidebar{
    height: 11000px;
  }
}
@media(max-width: 1096px){
  #sidebar{
    height: 11100px;
  }
}
@media(max-width: 1086px){
  #sidebar{
    height: 11200px;
  }
}
@media(max-width: 1081px){
  #sidebar{
    height: 11300px;
  }
}
@media(max-width: 1077px){
  #sidebar{
    height: 11500px;
  }
}
@media(max-width: 1066px){
  #sidebar{
    height: 11600px;
  }
}
@media(max-width: 1055px){
  #sidebar{
    height: 11700px;
  }
}
@media(max-width: 1022px){
  #sidebar{
    height: 11800px;
  }
}
@media(max-width: 991px){
  #sidebar{
    display: none;
  }
}
</style>