<template>
  <v-container fluid style="background-color: ; width: 100%">
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <a href=""><i class="fas fa-angle-left"></i> Regresar</a>
          <p></p>
          <button
            style="margin-left: 10px"
            @click="setShowFilters(!getShowFilters)"
          >
            <i class="fas fa-sliders-h" style="color: #133163"></i> Filtros
          </button>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="item" label="Ordenar por:" solo></v-select>
        </v-col>
      </v-row>
    </v-container>
    <hr />
    <!--     <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in destinos" :key="(item.id, i)">
                <td>{{ item.name.content }}</td>
                <td>{{ item.code }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row> -->
    <v-container v-for="item in results.hotels.hotels" :key="(item.id)" >

    {{item }} {{item.id}}
    </v-container>
    <v-row v-for="results in results.hotels.hotels" :key="(results.id)">
      <v-col sm="12" md="12" lg="12">
        <v-sheet rounded="lg" max-height="500" style="margin-top: 2%">
          <!--  -->
          <v-col
            sm="12"
            md="12"
            lg="4"
            style="background-color: ; float: left; margin-top: -2%"
          >
            <v-sheet rounded="lg">
              <v-carousel
                height="227"
                style="border-radius: 8px"
                hide-delimiters
              >
                <v-carousel-item
                  max-height="227"
                  max-width="900"
                  min-height="227"
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
            </v-sheet>
          </v-col>

          <v-col
            sm="12"
            md="12"
            lg="5"
            style="background-color: ; float: left; margin-top: -2%"
          >
            <v-sheet rounded="lg" max-height="500" min-height="227">
              <v-card-text style="">
                <b style="font-size: 18px">{{results.name}}</b>
                <v-menu bottom left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" icon>
                      <i class="fas fa-angle-down"></i>
                    </v-btn>
                  </template>
                  <v-list>
                    <router-link :to="``" class="link">
                      <v-list-item link class="ml-3">
                        <v-list-item-title
                          ><i class="fas fa-bed" style="color: #9e9e9e"></i> Ver
                          más</v-list-item-title
                        >
                      </v-list-item>
                    </router-link>
                    <router-link :to="``" class="link">
                      <v-list-item link class="ml-3">
                        <v-list-item-title
                          ><i
                            class="fas fa-share-alt"
                            style="color: #9e9e9e"
                          ></i>
                          Compartir</v-list-item-title
                        >
                      </v-list-item>
                    </router-link>
                  </v-list>
                </v-menu>
                <p>{{results.zoneName}}</p>
                <v-row align="center" class="mx-0">
                  <div class="black--text ms-1">
                    <b>Categoria:</b>
                  </div>
                  <v-rating
                    :value="starts(results)"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating> </v-row
                ><br />
                <p>
                  El Hotel Xcaret México ofrece una zona de playa privada, una
                  piscina al airer libre y una pista de tenis en Playa del
                  Carmen, a 6 km de la terminar marítima...
                  <a href="">Ver más</a>
                </p>
                <v-row>
                  <v-col cols="4">
                    <v-btn style="width: 98%; margin-left: 1%" outlined
                      ><i class="fas fa-share-alt"></i
                      ><b style="font-size: 10px">compartir</b>
                    </v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn style="width: 98%; margin-left: 1%" outlined
                      ><i class="fas fa-compress-alt"></i
                      ><b style="font-size: 10px">comparar</b>
                    </v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn style="width: 98%; margin-left: 1%" outlined
                      ><i class="fas fa-compress-alt"></i
                      ><b style="font-size: 10px">comparar</b>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-sheet>
          </v-col>

          <v-col
            sm="12"
            md="12"
            lg="3"
            style="background-color: ; float: left; margin-top: -2%"
          >
            <v-sheet
              rounded="lg"
              max-height="500"
              min-height="227"
              style="background-color: red"
            >
              <v-card-text style="">
                <p style="text-align: center">
                  Precio por noche: <b style="color: ">$10,680 MXN</b>
                </p>
                <br />
                <p style="text-align: center">3 noches, 3 habitaciones</p>
                <p style="text-align: center; font-size: 20px; color: #023061">
                  <b>$96,120.00 MXN</b>
                </p>
                <v-btn
                  href="/formato"
                  id="dos"
                  class="link"
                  style="
                    width: 90%;
                    position: relative;
                    margin-top: 17px;
                    margin-left: 5%;
                    font-size: 12px;
                    background-color: #3bb44a;
                  "
                  ><b style="color: white">RESERVAR</b></v-btn
                >
              </v-card-text>
            </v-sheet>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
<!--     <v-row>
      <v-col sm="12" md="12" lg="12">
        <v-sheet rounded="lg" max-height="500" style="margin-top: 5%">

          <v-col
            sm="12"
            md="12"
            lg="4"
            style="background-color: ; float: left; margin-top: -4%"
          >
            <v-sheet rounded="lg">
              <v-carousel
                height="227"
                style="border-radius: 8px"
                hide-delimiters
              >
                <v-carousel-item
                  max-height="227"
                  max-width="680"
                  min-height="227"
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
            </v-sheet>
          </v-col>

          <v-col
            sm="12"
            md="12"
            lg="5"
            style="background-color: ; float: left; margin-top: -4%"
          >
            <v-sheet rounded="lg" max-height="500" min-height="227">
              <v-card-text style="">
                <b>HOTEL XCARET MÉXICO</b>
                <v-menu bottom left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" icon>
                      <i class="fas fa-angle-down"></i>
                    </v-btn>
                  </template>
                  <v-list>
                    <router-link :to="``" class="link">
                      <v-list-item link class="ml-3">
                        <v-list-item-title
                          ><i class="fas fa-bed" style="color: #9e9e9e"></i> Ver
                          más</v-list-item-title
                        >
                      </v-list-item>
                    </router-link>
                    <router-link :to="``" class="link">
                      <v-list-item link class="ml-3">
                        <v-list-item-title
                          ><i
                            class="fas fa-share-alt"
                            style="color: #9e9e9e"
                          ></i>
                          Compartir</v-list-item-title
                        >
                      </v-list-item>
                    </router-link>
                  </v-list>
                </v-menu>
                <p><b>Ubicación:</b> Cancún</p>
                <p>
                  <b>Descripción:</b> El Hotel Xcaret México ofrece una zona de
                  playa privada, una piscina al airer libre y una pista de tenis
                  en Playa del Carmen, a 6 km de la terminar marítima...
                  <a href="">Ver más</a>
                </p>
                <v-row align="center" class="mx-0">
                  <div class="black--text ms-1">
                    <b>Categoria:</b>
                  </div>
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                </v-row>
              </v-card-text>
            </v-sheet>
          </v-col>

          <v-col
            sm="12"
            md="12"
            lg="3"
            style="background-color: ; float: left; margin-top: -4%"
          >
            <v-sheet rounded="lg" max-height="500" min-height="227">
              <v-card-text style="">
                <p>Promedio por noche: <b style="color: ">$509 MXN</b></p>
                <p>Total estancia <b>$1,229 MXN</b></p>
                <v-btn
                  href="#"
                  style="
                    width: 90%;
                    position: relative;
                    margin-left: 5%;
                    font-size: 12px;
                  "
                  color="primary"
                  >COMPARAR</v-btn
                >
                <v-btn
                  href="#"
                  style="
                    width: 90%;
                    position: relative;
                    margin-top: 2%;
                    margin-left: 5%;
                    font-size: 12px;
                    background-color: #3bb44a;
                  "
                  >ELEGIR</v-btn
                >
              </v-card-text>
            </v-sheet>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>-->

<!--     <v-row>
      <v-col sm="12" md="12" lg="12">
        <v-sheet rounded="lg" max-height="500" style="margin-top: 5%">
          <v-col
            sm="12"
            md="12"
            lg="4"
            style="background-color: ; float: left; margin-top: -4%"
          >
            <v-sheet rounded="lg">
              <v-carousel
                height="227"
                style="border-radius: 8px"
                hide-delimiters
              >
                <v-carousel-item
                  max-height="227"
                  max-width="680"
                  min-height="227"
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
            </v-sheet>
          </v-col>

          <v-col
            sm="12"
            md="12"
            lg="5"
            style="background-color: ; float: left; margin-top: -4%"
          >
            <v-sheet rounded="lg" max-height="500" min-height="227">
              <v-card-text style="">
                <b>HOTEL XCARET MÉXICO</b>
                <v-menu bottom left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" icon>
                      <i class="fas fa-angle-down"></i>
                    </v-btn>
                  </template>
                  <v-list>
                    <router-link :to="``" class="link">
                      <v-list-item link class="ml-3">
                        <v-list-item-title
                          ><i class="fas fa-bed" style="color: #9e9e9e"></i> Ver
                          más</v-list-item-title
                        >
                      </v-list-item>
                    </router-link>
                    <router-link :to="``" class="link">
                      <v-list-item link class="ml-3">
                        <v-list-item-title
                          ><i
                            class="fas fa-share-alt"
                            style="color: #9e9e9e"
                          ></i>
                          Compartir</v-list-item-title
                        >
                      </v-list-item>
                    </router-link>
                  </v-list>
                </v-menu>
                <p><b>Ubicación:</b> Cancún</p>
                <p>
                  <b>Descripción:</b> El Hotel Xcaret México ofrece una zona de
                  playa privada, una piscina al airer libre y una pista de tenis
                  en Playa del Carmen, a 6 km de la terminar marítima...
                  <a href="">Ver más</a>
                </p>
                <v-row align="center" class="mx-0">
                  <div class="black--text ms-1">
                    <b>Categoria:</b>
                  </div>
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                </v-row>
              </v-card-text>
            </v-sheet>
          </v-col>

          <v-col
            sm="12"
            md="12"
            lg="3"
            style="background-color: ; float: left; margin-top: -4%"
          >
            <v-sheet rounded="lg" max-height="500" min-height="227">
              <v-card-text style="">
                <p>Promedio por noche: <b style="color: ">$509 MXN</b></p>
                <p>Total estancia <b>$1,229 MXN</b></p>
                <v-btn
                  href="#"
                  style="
                    width: 90%;
                    position: relative;
                    margin-left: 5%;
                    font-size: 12px;
                  "
                  color="primary"
                  >COMPARAR</v-btn
                >
                <v-btn
                  href="#"
                  style="
                    width: 90%;
                    position: relative;
                    margin-top: 2%;
                    margin-left: 5%;
                    font-size: 12px;
                    background-color: #3bb44a;
                  "
                  >ELEGIR</v-btn
                >
              </v-card-text>
            </v-sheet>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row> -->
    <hr />
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props:{
    results: Object
  },
  name: "ResultadosList",
  data: () => ({
    destinos: [],
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
    item: [
      "Precio: Mayor a menor",
      "Precio: Menor a mayor",
      "A-Z",
      "Estrellas: Menor a mayor",
      "Estrellas: Mayor a menor",
    ],
  }),
  async created() {
    await this.res();
  },
  methods: {
    ...mapActions("filtros", ["setShowFilters"]),
    ...mapActions("hotels", ["destinations", "res"]),
    async res() {
      this.destinos = await this.destinations();
      console.log(this.destinos);
    },
    starts(hotel){
      console.log(hotel.categoryCode);
      if(hotel.categoryCode ==="5EST"){
        return 5;
      }
     else if(hotel.categoryCode ==="4EST"){
        return 4;
      }
     else if(hotel.categoryCode ==="3EST"){
        return 3;
      }
     else if(hotel.categoryCode ==="2EST"){
        return 2;
      }
     else if(hotel.categoryCode ==="1EST"){
        return 1;
      }
      else if(hotel.categoryCode ==="H2_5"){
        return 2.5;
      }
      else if(hotel.categoryCode ==="H3_5"){
        return 3.5;
      }
      return 0;

    }
  },
  computed: {
    ...mapGetters("filtros", ["getShowFilters"]),
  },
};
</script>

<style>
@media (max-width: 2380px) {
  .filter {
    display: none;
  }
}

@media (max-width: 1263px) {
  .filter {
    display: none;
  }
}
@media (max-width: 1521px) {
  #dos {
    margin-top: 30px;
  }
}
</style>
