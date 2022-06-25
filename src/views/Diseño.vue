<template>
  <div
    style="font-family: 'Montserrat'; font-size:20px; sans-serif;padding: 0; background-color: ; margin-top: 2%"
  >
    <v-row style="background-color: ; margin-top: 1%">
      <v-col cols="12">
        <v-sheet>
          <h3 style="text-align: center"><b> DISEÑO:</b></h3>
        </v-sheet>
      </v-col>
    </v-row>
    <br />
    <Logo/>
    <Banner/>
    <Footer/>
    <br> <br>
  </div>
</template>

<script>
import Logo from "../components/design/Logos.vue";
import Banner from "../components/design/Banner.vue";
import Footer from "../components/design/Footer.vue";
export default {
  components:{
    Logo,
    Banner,
    Footer
  },
  name: "Design",
  data: () => ({
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
  }),
};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");

.boton {
  width: 98%;
  margin-left: 5px;
  background-color: #d7d7d7;
  border: 1px solid black;
  position: relative;
  float: right;
}

#buildin {
  background-color: white;
  width: 100%;
  height: 80%;
  position: absolute;
  background-size: 100% auto;
}
</style>
