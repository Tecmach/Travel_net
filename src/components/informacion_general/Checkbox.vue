<template>
  <v-row
    style="padding:10px; font-family: 'Montserrat'; sans-serif; font-size:18px;" id="planes"
  >
    <v-col xl="10" cols="12">
      <v-sheet>
        <v-row>
          <v-col cols="12" xl="6" lg="6" style="background-color: ">
            <v-sheet>
                <h3 style="font-size: 20px"><b>PLANES SOPORTADOS EN EL HOTEL</b></h3>
                <v-checkbox v-model="europeo">
                  <template v-slot:label>
                    <p style="font-size: 12px">
                      <b style="font-size: 18px">EUROPEO</b> <br />
                      Todo incluido.
                    </p>
                  </template>
                </v-checkbox>
                <v-checkbox v-model="todo">
                  <template v-slot:label>
                    <p style="font-size: 12px">
                      <b style="font-size: 18px">TODO INCLUIDO</b> <br />
                      Incluye alojamiento, todos los alimentos, snacks entre
                      comidas, barra libre, actividades recrerativas, impuestos
                      y propinas.
                    </p>
                  </template>
                </v-checkbox>
                <v-checkbox v-model="americanoMod">
                  <template v-slot:label>
                    <p style="font-size: 12px">
                      <b style="font-size: 18px"
                        >AMERICANO MODIFICADO (CON ALIMENTOS PARA ADULTOS)</b
                      >
                      <br />
                      Incluye alojamiento, desayuno y una de las comidas para
                      los adultos.
                    </p>
                  </template>
                </v-checkbox>
                <v-checkbox v-model="americanoCom">
                  <template v-slot:label>
                    <p style="font-size: 12px">
                      <b style="font-size: 18px"
                        >AMERICANO COMPLETO (INCLUYE ALIMENTOS SÓLO PARA LOS
                        ADULTOS)</b
                      >
                      <br />
                      Incluye alojamiento y tres comidas.
                    </p>
                  </template>
                </v-checkbox>
                <v-checkbox v-model="continental">
                  <template v-slot:label>
                    <p style="font-size: 12px">
                      <b style="font-size: 18px"
                        >CONTINENTAL (INCLUYE DESAYUNO SÓLO PARA ADULTOS)</b
                      >
                      <br />
                      Incluye alojamiento y desayuno continental (sin huevos).
                    </p>
                  </template>
                </v-checkbox>
                <v-checkbox v-model="americano">
                  <template v-slot:label>
                    <p style="font-size: 12px">
                      <b style="font-size: 18px"
                        >AMERICANO (INCLUYE DESAYUNO SOLO PARA ADULTOS)</b
                      >
                      <br />
                      Incluye alojamiento y desayuno americano (con huevos).
                    </p>
                  </template>
                </v-checkbox>
                <v-checkbox v-model="conDesayuno">
                  <template v-slot:label>
                    <p style="font-size: 12px">
                      <b style="font-size: 18px"
                        >CON DESAYUNO BUFFET (INCLUYE DESAYUNO SÓLO PARA
                        ADULTOS)</b
                      >
                      <br />
                      Incluye alojamiento y desayuno buffet.
                    </p>
                  </template>
                </v-checkbox>
                <v-checkbox v-model="conAlimentos">
                  <template v-slot:label>
                    <p style="font-size: 12px">
                      <b style="font-size: 18px">CON ALIMENTOS Y BEBIDAS</b>
                      <br />
                      Incluye alojamiento, todos los alimentos, snacks y barra
                      libre (nacional o internacional segun hotel).
                    </p>
                  </template>
                </v-checkbox>
                <v-row>
                  <v-col style="background-color: " cols="12" lg="7" xl="7">
                    <v-sheet min-height="30" style="paddign: 0">
                      <v-btn
                          disabled
                        style="
                          width: 100%;
                          color: white;
                          background-color: #39b449;
                        "
                      >
                        <b> Guardar</b>
                      </v-btn>
                    </v-sheet>
                  </v-col>
                </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Checkbox",
  data: () => ({
    checkbox:false,
    europeo: false,
    todo:false,
    americanoMod: false,
    americanoCom: false,
    continental: false,
    americano: false,
    conDesayuno: false,
    conAlimentos: false,
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>
