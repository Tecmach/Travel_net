<template>
  <div>
    <SideBar />
    <General id="general"/>
    <TableImage id="imagen" />
    <hr />
    <Checkbox id="planes"/>
    <br /><br />
    <hr />
    <TableRooms id="rooms"/>
    <br /><br />
    <hr />
    <TableMinors id="minors" />
    <br /><br />
    <hr />
    <TableTarifa id="tarifa"/>
    <br /><br />
    <hr />
    <Calendar id="disponibilidad" />
    <br /><br />
    <hr />
    <Cancelation id="cancelation"/>
    <br /><br />
    <hr />
    <Minimo id="minimo"/>
    <router-view></router-view>
  </div>
</template>
<script>
import TableImage from "../../components/informacion_general/TablaImagen.vue";
import Checkbox from "../../components/informacion_general/Checkbox.vue";
import TableRooms from "../../components/informacion_general/TablaRooms.vue";
import TableMinors from "../../components/informacion_general/TablaMenores.vue";
import TableTarifa from "../../components/informacion_general/TablaTarifas.vue";
import Calendar from "../../components/informacion_general/Calendar.vue";
import Minimo from "../../components/informacion_general/Minim.vue";
import Cancelation from "../../components/informacion_general/Cancelation.vue";
import SideBar from "../../components/informacion_general/Sidebar.vue";
import General from "../../components/informacion_general/Informacion_general.vue";
export default {
  name: "detalleHotel",
  components: {
    General,
    TableImage,
    Checkbox,
    TableRooms,
    TableMinors,
    TableTarifa,
    Calendar,
    Minimo,
    Cancelation,
    SideBar,
  },
  data: () => ({
    emailReservas: "",
    emailNoti: "",
    emailReservas: "",
    emailPagos: "",
    emailGrupos: "",
    column: null,
    logo: null,
    reader: null,
    emailRules: [
      (v) => !!v || "E-mail is requi",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    items: [
      {
        text: "REGRESAR",
        disabled: false,
        href: "/",
      },
      {
        text: "PANEL DE CONTROL",
        disabled: false,
        href: "/",
      },
      {
        text: "HOTELES",
        disabled: false,
        href: "reservas",
      },
      {
        text: "DETALLE DE HOTEL",
        disabled: true,
        href: "#",
      },
    ],
  }),
  methods: {
    logoSelected(e) {
      this.logo = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.logo);
      reader.onload = (e) => {
        this.logopreview = e.target.result;
      };
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
.boton {
  width: 170px;
  margin-left: 5px;
  background-color: #d7d7d7;
  border: 1px solid black;
  position: relative;
  float: right;
}
</style>
