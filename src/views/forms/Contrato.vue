<template>
  <div id="buildin">
    <v-main style="padding: 0; background-color: ">
      <div>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </div>
      <hr />
      <Header/>
      <Body/>
      <!---->
    </v-main>
  </div>
</template> 

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import Header from "../../components/Contrato/Cabecera.vue"
import Body from "../../components/Contrato/Contenido.vue"

export default {
  name: "Detalles",
  components: { 
    DatePicker,
    Header,
    Body
  },
  data:()=>({
    
    items: [
      {
        text: "PANEL DE CONTROL",
        disabled: false,
        href: "/",
      },
      {
        text: "RESERVACIONES",
        disabled: false,
        href: "reservas",
      },
      {
        text: "CONFIRMACIÓN",
        disabled: true,
        href: "#",
      },
    ],
  })
 
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
@media (max-width: 600px) {
  p .total {
    font-size: 17px;
  }
  .reserva {
    display: none;
  }
}
@media (min-width: 992px) {
  .guardar1 {
    display: none;
  }
  .guardar {
    display: block;
  }
}
@media (max-width: 991px) {
  .guardar {
    display: none;
  }
  .guardar1 {
    display: block;
  }
}
#buildin {
  background-color: white;
  width: 100%;
  height: 80%;
  position: absolute;
  background-size: 100% auto;
}
</style>
<style></style>
