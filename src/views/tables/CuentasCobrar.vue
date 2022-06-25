<template>
  <div>
    <br />

    <v-card
      max-width="98%"
      max-height="15000"
      style=" margin-left:1%; margin-right:1%; margin-top:2%;  font-family: 'Montserrat' sans-serif; border-radius: 10px 10px 10px 10px; "
    >
      <div>
        <v-card>
          <v-card-title style="font-size:17px;">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <b>Cuentas por pagar</b>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-col>
            <v-sheet>
              <div style="position: relative; float: right">
                <router-link :to="`#`" class="link">
                  <v-btn color="green" style="color: white">
                    <i class="fas fa-plus"></i> AGREGAR BANCO</v-btn
                  >
                </router-link>
              </div>
              <div style="position: relative; float: left">
                <p><b>{{cuentas}} cuentas por cobrar /</b> {{page}} páginas</p>
              </div>
            </v-sheet>
          </v-col><br>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
            :single-select="singleSelect"
            :search="search"
            item-key="clave"
            show-select
            class="elevation-1"
          >

            <template v-slot:top>
              <v-switch
                v-model="singleSelect"
                label="Single select"
                class="pa-3"
              ></v-switch>
            </template>
            <template v-slot:item.clave="{ item }">
              <router-link class="link" to="/detalles" ><br>
              <v-icon
                small
                class="mr-2"
                style="
                  color: darkblue;
                  font-size: 14px;
                  border: 1px solid #818181;
                  border-radius: 100px;
                  color: #818181;
                "
              >
                fas fa-ellipsis-h
              </v-icon>
              <span >{{ item.clave }}</span><br><br>
              </router-link>
            </template>
            
            <template v-slot:item.total="{ item }" style="text-align:left;">
              <span style="font-size:13px;"> {{ formatNumber(item.total) }}</span>
            </template>
            <template v-slot:item.pagar="{ item }" style="text-align:left;">
              <span style="font-size:13px;"> {{ formatNumber(item.pagar) }}</span>
            </template>
            <template v-slot:item.agency="{ item }" style="text-align:left;">
              <span style="font-size:13px;"> {{ formatNumber(item.agency) }}</span>
            </template>
            <template v-slot:item.hotel="{ item }" style="text-align:left;">
              <span style="font-size:13px;"> {{ item.hotel }}</span>
            </template>
            <template v-slot:item.admin="{ item }" style="text-align:left;">
              <span style="font-size:13px;"> {{ item.admin }}</span>
            </template>
            <template v-slot:item.agencia="{ item }" style="text-align:left;">
              <img v-if="item.img" :src="item.img" style="width:18px;" />
              <span style="font-size:13px;"> {{ item.agencia }}</span>
            </template>
            <template v-slot:item.entrada="{ item }">
              <span style="font-size:13px;">{{ reformatDate(item.entrada) }}</span>
            </template>
            <template v-slot:item.salida="{ item }">
              <span style="font-size:13px;">{{ reformatDate(item.salida) }}</span>
            </template>
            <template v-slot:item.fecha_limite="{ item }">
              <span style="font-size:13px;">{{ reformatDate(item.fecha_limite) }}</span>
            </template>
            <template v-slot:item.cliente="{ item }">
              <span style="font-size:13px;">{{ item.cliente }}</span>
            </template>
            <template v-slot:item.calories="{ item }">
              <v-chip :color="getEstatus(item.calories)" dark style="font-size:13px;">
                {{ item.calories }}
              </v-chip>
            </template>
             <template v-slot:item.usuario="{ item }">
              <span style="font-size:13px;">{{item.usuario }}</span>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </v-card>
    <br />
  </div>
</template>
<script src="http://momentjs.com/downloads/moment.min.js"></script>

<script>
export default {
  data() {
    return {
      search: "",
      singleSelect: false,
      selected: [],
      cuentas:"58",
      page:"8",
      headers: [
        { text: "ESTATUS", value: "calories" },
        { align: "left", text: "REFERENCIA", value: "clave" },
        { text: "ADMINISTRADOR", value: "admin", align: "left" },
        { text: "AGENCIA", value: "agencia", align: "center" },
        { text: "USUARIO", value: "usuario", align: "center" },
        { text: "CLIENTE", value: "cliente", align: "center" },
        { text: "HOTEL", value: "hotel", align: "center" },
        { text: "FECHA LIMITE DE PAGO", value: "fecha_limite", align: "center" },
        { text: "ENTRADA", value: "entrada", align: "center" },
        { text: "SALIDA", value: "salida", align: "center" },
        { text: "TOTAL", value: "total", align: "center" },
        { text: "PAGADO POR LA AGENCIA", value: "agency", align: "center" },
        { text: "SALDO", value: "pagar", align: "center" },
      ],
      desserts: [
        {
          clave: 10005,
          admin: "Camila Robles",
          img: './img/restel.png',
          agencia: "BlueParrot",
          usuario: "Jose Rosales",
          cliente: "Isabella Pérez",
          hotel: "XCARET",
          fecha_limite: "2021/12/20",
          entrada: "2021/12/20",
          salida: "2021/12/20",
          total: "7800",
          agency: "7800",
          pagar: "7800",
          calories: "Pagado",
        },
        {
          clave: 10006,
          admin: "Camila Robles",
          img: './img/omnibes.png',
          agencia: "BlueParrot",
          usuario: "Jose Rosales",
          cliente: "Isabella Pérez",
          hotel: "XCARET",
          fecha_limite: "2021/12/20",
          entrada: "2021/12/20",
          salida: "2021/12/20",
          total: "3500",
          agency: "7800",
          pagar: "7800",
          calories: "Pendiente",
        },
        {
          clave: 10007,
          admin: "Camila Robles",
          img: './img/HOTELBEDS.png',
          agencia: "BlueParrot",
          correo: "Vuela facil",
          usuario: "Jose Rosales",
          cliente: "Isabella Pérez",
          hotel: "XCARET",
          fecha_limite: "2021/12/20",
          entrada: "2021/12/20",
          salida: "2021/12/20",
          total: "4800",
          agency: "7800",
          pagar: "7800",
          calories: "Pagado",
        },
      ],
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>