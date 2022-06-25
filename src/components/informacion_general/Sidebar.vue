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
    >
      <!--   Navbar informacion general-->
      <br>
      <v-list id="dash" style="background-color: rgb(235, 235, 235)">
        <a href="#general" class="link">
          <v-list-group
            :value="false"
            prepend-icon="fas fa-bars"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  class=""
                  style="font-weight: 500; font-size: 15px"
                  >Información general</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
        </a>
      </v-list>
      <hr />
      <!--   Navbar imagenes-->
      <v-list id="buscador" style="background-color: rgb(235, 235, 235)">
        <a href="#imagen" class="link">
          <v-list-group
            :value="false"
            prepend-icon="far fa-image"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Imágenes</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
        </a>
      </v-list>
      <hr />
      <!--   Navbar planes-->
      <v-list id="buscador" style="background-color: rgb(235, 235, 235)">
        <a href="#planes" class="link">
        <v-list-group
          :value="false"
          prepend-icon="far fa-file"
          class="hover--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="" style="font-weight: 500"
                >Planes</v-list-item-title
              >
            </v-list-item-content>
          </template>
        </v-list-group>
        </a>
      </v-list>
      <hr />
      <!--   Navbar habitaciones-->
      <v-list id="buscador" style="background-color: rgb(235, 235, 235)">
        <a href="#rooms" class="link">
          <v-list-group
            :value="false"
            prepend-icon="fas fa-bed"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Habitaciones</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
          </a>
      </v-list>
      <hr />
      <!--   Navbar Menores-->
      <v-list id="buscador" style="background-color: rgb(235, 235, 235)">
        <a href="#minors" class="link">
          <v-list-group
            :value="false"
            prepend-icon="fas fa-horse"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Menores</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
          </a>
      </v-list>
      <hr />
      <!--   Navbar Tarifas-->
      <v-list id="buscador" style="background-color: rgb(235, 235, 235)">
        <a href="#tarifa" class="link">
          <v-list-group
            :value="false"
            prepend-icon="far fa-credit-card"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Tarifas</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
          </a>
      </v-list>
      <hr />
      <!--   Navbar disponibilidad-->
      <v-list id="buscador" style="background-color: rgb(235, 235, 235)">
        <!--<router-link :to="`/detallehotel/general`" class="link"> -->
        <a href="#disponibilidad" class="link">
          <v-list-group
            :value="false"
            prepend-icon="far fa-calendar"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Disponibilidad</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
        </a>
        <!--</router-link> -->
      </v-list>
      <hr />
      <!--   Navbar Politicas de cancelacion-->
      <v-list id="buscador" style="background-color: rgb(235, 235, 235)">
        <a href="#cancelation" class="link">
          <v-list-group
            :value="false"
            prepend-icon="fas fa-ban"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Políticas de cancelación</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
          </a>
      </v-list>
      <hr />
      <!--   Navbar minimo de noches-->
      <v-list id="buscador" style="background-color: rgb(235, 235, 235)">
        <a href="#minimo" class="link">
          <v-list-group
            :value="false"
            prepend-icon="far fa-moon"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Mínimo de noches</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
          </a>
      </v-list>
      <hr />
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "Filtros",
};
</script>


<style>
@media (min-width: 1901px) {
  #sidebar {
    height: 9400px;
  }
}
@media (max-width: 1900px) {
  #sidebar {
    height: 9500px;
  }
}
@media (max-width: 1857px) {
  #sidebar {
    height: 9800px;
  }
}
@media (max-width: 1740px) {
  #sidebar {
    height: 10000px;
  }
}
@media (max-width: 1693px) {
  #sidebar {
    height: 10100px;
  }
}
@media (max-width: 1662px) {
  #sidebar {
    height: 10200px;
  }
}
@media (max-width: 1641px) {
  #sidebar {
    height: 10300px;
  }
}
@media (max-width: 1631px) {
  #sidebar {
    height: 10500px;
  }
}
@media (max-width: 1609px) {
  #sidebar {
    height: 10650px;
  }
}
@media (max-width: 1599px) {
  #sidebar {
    height: 10800px;
  }
}
@media (max-width: 1577px) {
  #sidebar {
    height: 10950px;
  }
}
@media (max-width: 1574px) {
  #sidebar {
    height: 11100px;
  }
}
@media (max-width: 1551px) {
  #sidebar {
    height: 11250px;
  }
}
@media (max-width: 1545px) {
  #sidebar {
    height: 11400px;
  }
}
@media (max-width: 1539px) {
  #sidebar {
    height: 11550px;
  }
}
@media (max-width: 1527px) {
  #sidebar {
    height: 11700px;
  }
}
@media (max-width: 1514px) {
  #sidebar {
    height: 11850px;
  }
}
@media (max-width: 1438px) {
  #sidebar {
    height: 12000px;
  }
}
@media (max-width: 1401px) {
  #sidebar {
    height: 12150px;
  }
}
@media (max-width: 1368px) {
  #sidebar {
    height: 12300px;
  }
}
@media (max-width: 1337px) {
  #sidebar {
    height: 12400px;
  }
}
@media (max-width: 1321px) {
  #sidebar {
    height: 12500px;
  }
}
@media (max-width: 1286px) {
  #sidebar {
    height: 12600px;
  }
}
@media (max-width: 1269px) {
  #sidebar {
    height: 12645px;
  }
}

@media (max-width: 1263px) {
  #sidebar {
    height: 11000px;
  }
}
@media (max-width: 1244px) {
  #sidebar {
    height: 11100px;
  }
}
@media (max-width: 1231px) {
  #sidebar {
    height: 11200px;
  }
}
@media (max-width: 1226px) {
  #sidebar {
    height: 11300px;
  }
}
@media (max-width: 1222px) {
  #sidebar {
    height: 11400px;
  }
}
@media (max-width: 1219px) {
  #sidebar {
    height: 11500px;
  }
}
@media (max-width: 1216px) {
  #sidebar {
    height: 11700px;
  }
}
@media (max-width: 1199px) {
  #sidebar {
    height: 10050px;
  }
}
@media (max-width: 1187px) {
  #sidebar {
    height: 10150px;
  }
}
@media (max-width: 1163px) {
  #sidebar {
    height: 10250px;
  }
}
@media (max-width: 1159px) {
  #sidebar {
    height: 10350px;
  }
}
@media (max-width: 1149px) {
  #sidebar {
    height: 10550px;
  }
}
@media (max-width: 1130px) {
  #sidebar {
    height: 10650px;
  }
}
@media (max-width: 1126px) {
  #sidebar {
    height: 10750px;
  }
}
@media (max-width: 1115px) {
  #sidebar {
    height: 10850px;
  }
}
@media (max-width: 1105px) {
  #sidebar {
    height: 11000px;
  }
}
@media (max-width: 1096px) {
  #sidebar {
    height: 11100px;
  }
}
@media (max-width: 1086px) {
  #sidebar {
    height: 11200px;
  }
}
@media (max-width: 1081px) {
  #sidebar {
    height: 11300px;
  }
}
@media (max-width: 1077px) {
  #sidebar {
    height: 11500px;
  }
}
@media (max-width: 1066px) {
  #sidebar {
    height: 11600px;
  }
}
@media (max-width: 1055px) {
  #sidebar {
    height: 11700px;
  }
}
@media (max-width: 1022px) {
  #sidebar {
    height: 11800px;
  }
}
@media (max-width: 991px) {
  #sidebar {
    display: none;
  }
}
</style>