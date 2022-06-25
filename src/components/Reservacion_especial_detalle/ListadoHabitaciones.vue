<template>
  <v-row
    style="padding:0;  font-family: 'Montserrat'; font-size:15px; sans-serif;"
  >
    <v-col style="background-color:red " cols="12">
      <v-sheet style="paddign: 0">
        <h3 style="font-size: 20px"><b>LISTADO DE HABITACIONES</b></h3>
      </v-sheet>
    </v-col>
    <v-col cols="12" style="overflow-x: scroll">
      <v-sheet>
        <div id="rooms" style="background-color: red; padding:0;">
          <v-row>
            <v-col cols="2" style="background-color: blue">
              <v-btn color="red" style="color: white; margin-top:35px;"
                ><i class="fas fa-times"></i
              ></v-btn>
              <v-btn
                color="green"
                style="color: white; font-size: 11px; margin-left: 10px; margin-top:35px;"
                ><i class="fas fa-plus"></i> <b> Agregar</b></v-btn
              >
            </v-col>
            <div style="margin-top:10px;">
              <p>Cant. Hab.</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 100px;"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px;margin-top:10px;">
              <p>Ocupaciones</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 100px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px;margin-top:10px;">
              <p>Plan</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 80px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px;margin-top:10px;">
              <p>T. Hab.</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 80px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px;margin-top:10px;">
              <p>Noches</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 80px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px;margin-top:10px;">
              <p>Personas</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 60px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px;margin-top:10px;">
              <p>Tarifas</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 80px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px; margin-top:10px;">
              <p>Junior</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 80px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px; margin-top:10px;">
              <p>Tarifas</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 80px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px; margin-top:10px;">
              <p>Menores</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 80px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px;margin-top:10px;">
              <p>Tarifas</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 80px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px;margin-top:10px;">
              <p>Menores S/C</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 80px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px;margin-top:10px;">
              <p>Total</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 60px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px;margin-top:10px;">
              <p>Markup Cant</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 80px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-left:5px;margin-top:10px;">
              <p>Markup %</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 70px"
                outlined
                dense
              ></v-text-field>
            </div>
          </v-row>
        </div>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({}),
};
</script>
<style scoped>

@media (max-width: 800px) {
  #rooms {
    height: 100%;
    width: 1400px;
    border: 1px solid #ddd;
    background: #f1f1f1;
    overflow-x: scroll;
  }
}
@media (max-width: 1636px) {
  #rooms {
    height: 100%;
    width: 1636px;
    border: 1px solid #ddd;
    background: #f1f1f1;
    overflow-x: scroll;
  }
}
@media (max-width: 1876px) {
  #rooms {
    height: 100%;
    width: 1600px;
    border: 1px solid #ddd;
    background: #f1f1f1;
    overflow-x: scroll;
  }
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>