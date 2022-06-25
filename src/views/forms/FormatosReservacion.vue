<template>
  <div id="buildin">
    <div>
      <v-breadcrumbs :items="items">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </div>
    <v-main style="padding: 0; background-color: ; margin-top: 2%">
      <Detalles />
      <hr />
      <Form/>
    </v-main>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import Detalles from "../../components/Formato_reserva/Detalles.vue"
import Form from "../../components/Formato_reserva/Form.vue"

export default {
  name: "Formato",
  components: { 
    DatePicker,
    Detalles,
    Form
  },
};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
@media (max-width: 600px) {
  .reserva {
    display: none;
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
<style>
</style>

