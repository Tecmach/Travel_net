<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="setSide(!getSide)"></v-app-bar-nav-icon>

      <v-img
        class="mx-2"
        :src="require('@/assets/Logo-Sistema.svg')"
        max-height="80"
        max-width="140"
        align-start
        contain
      ></v-img>
      <v-spacer ></v-spacer>
      <p style="margin-top: 15px">
        <b id="name">Pau Cuevas</b>
      </p>
      <v-divider id="divider" class="mx-4" vertical></v-divider>
      <p id="usd" style="margin-top:12px; text-align:center;"> <b style="color:blue;">1USD = $20.93 MXN </b><br> 24 Diciembre 2020</p>
      <v-divider id="divider" class="mx-4" vertical></v-divider>
      <v-btn icon class="" @click="logout">
        <v-icon style="color: rgb(242, 33, 39)">mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      width="320"
      :value="getSide"
      dark
      class="boxShawdom"
      style="color: white"
      app
    >
      <v-overlay :value="getOver"></v-overlay>
      <!--   Navbar dashboard-->
      <v-list id="dash">
        <router-link :to="`/dash`" class="link">
          <v-list-group
            :value="false"
            prepend-icon="fas fa-home"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Dashboard</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
        </router-link>
      </v-list>
      <!--   Navbar Buscador-->
      <v-list id="buscador">
        <router-link :to="`/cotizador`" class="link">
          <v-list-group
            :value="false"
            prepend-icon="fas fa-search"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Buscador</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
        </router-link>
      </v-list>
      <!--   Navbar reservaciones-->
      <v-list>
        <v-list-group
          :value="false"
          prepend-icon="fas fa-calendar-week"
          class="hover--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="" style="font-weight: 500"
                >Reservaciones</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <router-link :to="`/reservas`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i
                  class="fas fa-suitcase-rolling"
                  style="margin-left: 10px"
                ></i>
                Reservaciones</v-list-item-title
              >
            </v-list-item>
          </router-link>
          <router-link :to="`/special`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i class="fas fa-luggage-cart" style="margin-left: 10px"></i>
                Reservaciones especiales</v-list-item-title
              >
            </v-list-item>
          </router-link>
        </v-list-group>
      </v-list>
      <!--   Navbar Agencia-->
      <v-list>
        <v-list-group
          :value="false"
          prepend-icon="fas fa-user-friends"
          class="hover--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="" style="font-weight: 500"
                >Usuarios</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <router-link :to="`/agencias`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title>
                <i class="fas fa-store-alt" style="margin-left: 10px"></i>
                Agencias</v-list-item-title
              >
            </v-list-item>
          </router-link>
          <router-link :to="`/agenciasUsuarios`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i class="far fa-user" style="margin-left: 10px"></i> Usuario
                de agencia</v-list-item-title
              >
            </v-list-item>
          </router-link>
          <router-link :to="`/contrato`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i class="far fa-file" style="margin-left: 10px"></i> Contrato
                de agencia</v-list-item-title
              >
            </v-list-item>
          </router-link>
        </v-list-group>
      </v-list>
      <!--   Navbar hoteles-->
      <v-list>
        <v-list-group
          :value="false"
          prepend-icon="fas fa-suitcase"
          class="hover--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="" style="font-weight: 500"
                >Hoteles</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <router-link :to="`/hoteles`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i class="fas fa-hotel" style="margin-left: 10px"></i>
                Hoteles</v-list-item-title
              >
            </v-list-item>
          </router-link>
          <router-link :to="`/zonadestino`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i class="fas fa-map-marker-alt" style="margin-left: 10px"></i>
                Zonas / Destinos
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-group>
      </v-list>
      <!--   Navbar brockers-->
      <v-list id="brockers">
        <router-link :to="`/brokers`" class="link">
          <v-list-group
            :value="false"
            prepend-icon="fas fa-link"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Brokers</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
        </router-link>
      </v-list>
      <!--   Navbar finanzas-->
      <v-list>
        <v-list-group
          :value="false"
          prepend-icon="fas fa-chart-line"
          class="hover--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="" style="font-weight: 500"
                >Finanzas</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <router-link :to="`/cuentacobrar`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i class="fas fa-wallet" style="margin-left: 10px"></i> Cuentas
                por cobrar</v-list-item-title
              >
            </v-list-item>
          </router-link>
          <router-link :to="`/cuentapagar`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i class="fas fa-wallet" style="margin-left: 10px"></i> Cuentas
                por pagar</v-list-item-title
              >
            </v-list-item>
          </router-link>
          <router-link :to="`/cambio`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i
                  class="fas fa-hand-holding-usd"
                  style="margin-left: 10px"
                ></i
                >Tipo de cambio</v-list-item-title
              >
            </v-list-item>
          </router-link>
          <router-link :to="`/bancos`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i class="fas fa-university" style="margin-left: 10px"></i>
                Bancos</v-list-item-title
              >
            </v-list-item>
          </router-link>
        </v-list-group>
      </v-list>
      <!--   Navbar reportes-->
      <v-list id="brockers">
        <router-link :to="`/reportes`" class="link">
          <v-list-group
            :value="false"
            prepend-icon="far fa-file"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Reportes</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
        </router-link>
      </v-list>
      <!--   Navbar diseño-->
      <v-list id="dash">
        <router-link :to="`/design`" class="link">
          <v-list-group
            :value="false"
            prepend-icon="far fa-image"
            class="hover--text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="" style="font-weight: 500"
                  >Diseño</v-list-item-title
                >
              </v-list-item-content>
            </template>
          </v-list-group>
        </router-link>
      </v-list>
      <!--   Navbar admin-->
      <v-list>
        <v-list-group
          :value="false"
          prepend-icon="far fa-user"
          class="hover--text"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="" style="font-weight: 500"
                >Admin</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <router-link :to="`/user`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i class="fas fa-users" style="margin-left: 10px"></i>
                Usuarios</v-list-item-title
              >
            </v-list-item>
          </router-link>
          <router-link :to="`/adduser`" class="link">
            <v-list-item link class="ml-3">
              <v-list-item-title
                ><i class="fas fa-user-check" style="margin-left: 10px"></i>
                Permisos</v-list-item-title
              >
            </v-list-item>
          </router-link>
        </v-list-group>
      </v-list>

      <!--    <v-list id="inspiration">-->
      <!--      <router-link :to="`/inspiration`" class="link">-->
      <!--        <v-list-group-->
      <!--            :value="true"-->
      <!--            prepend-icon="fas fa-lightbulb"-->
      <!--            class="hover&#45;&#45;text"-->
      <!--        >-->
      <!--          <template v-slot:activator>-->
      <!--            <v-list-item-content>-->
      <!--              <v-list-item-title-->
      <!--                  class="secondary&#45;&#45;text"-->
      <!--                  style="font-weight: 500"-->
      <!--              >Inspiración</v-list-item-title-->
      <!--              >-->
      <!--            </v-list-item-content>-->
      <!--          </template>-->
      <!--        </v-list-group>-->
      <!--      </router-link>-->
      <!--    </v-list>-->
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters("auth", ["getUser"]),
    ...mapGetters(["getOver", "getSide", "getPage"]),
  },
  methods: {
    ...mapActions(["setSide"]),
    ...mapActions("auth", ["logout"]),
  },
  created() {},
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style>
.link {
  text-decoration: none !important;
}
@media (max-width: 718px) {
  #usd {
    display: none;
  }
  #divider{
    display: none;
  }
}
@media (max-width: 3100px) and (min-width: 719px) {
  #name {
    margin-top: 10px;
  }  
  #usd {
    display: block;
  }
}
</style>

