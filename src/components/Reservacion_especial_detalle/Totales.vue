<template>
  <v-row
    style="padding:0;  font-family: 'Montserrat'; font-size:15px; sans-serif;"
  >
    <v-col style="background-color: red" cols="12">
      <v-sheet style="paddign: 0">
        <h3 style="font-size: 20px"><b>TOTALES</b></h3>
      </v-sheet>
    </v-col>
    <v-col cols="12" style="overflow-x: scroll">
      <v-sheet>
        <div id="rooms" style="background-color: red; padding: 0">
          <v-row>
            <v-col cols="2" style="background-color: blue">
              <v-btn color="red" style="color: white; margin-top: 52px"
                ><i class="fas fa-times"></i
              ></v-btn>
              <v-btn
                color="green"
                style="
                  color: white;
                  font-size: 11px;
                  margin-left: 10px;
                  margin-top: 52px;
                "
                ><i class="fas fa-plus"></i> <b> Agregar</b></v-btn
              >
            </v-col>
            <div style="margin-top: 27px">
              <p>Habitaciones</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 150px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-top: 27px; margin-left: 10px">
              <p>Cargos</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 150px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-top: 27px; margin-left: 10px">
              <p>Total</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 150px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-top: 5px; margin-left: 10px">
              <p>
                Formas de pago <br />
                + comisión bancaria
              </p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 150px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-top: 27px; margin-left: 10px">
              <p>Comisión agencia</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 150px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-top: 27px; margin-left: 10px">
              <p>A pagar agencia</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 150px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-top: 27px; margin-left: 10px">
              <p>A pagar hotel</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 150px"
                outlined
                dense
              ></v-text-field>
            </div>
            <div style="margin-top: 27px; margin-left: 10px">
              <p>Utilidad</p>
              <v-text-field
                name="name"
                label=""
                id="id"
                style="width: 150px"
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
export default {};
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