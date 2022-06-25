<template>
  <div>
    <v-row
      sm="12"
      md="12"
      lg="12"
      style="padding:10px;  font-family: 'Montserrat'; font-size:25px; sans-serif;"
    >
      <v-col sm="12" md="10" lg="10">
        <div style="font-size: 15px">
          <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </div>
        <v-sheet>
          <p style="margin-left: 2.5%"><b>AGREGAR HABITACION</b></p>
          <v-row>
            <v-col style="" sm="12" md="12" lg="12" xl="12">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 2.5%; font-size: 18px">Nombre*</h3>
                <v-text-field
                  name="name"
                  label=""
                  id="id"
                  outlined
                  dense
                  style="width: 95%; margin-left: 2.5%"
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="background-color: " sm="12" md="12" lg="12" xl="12">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 2.5%; font-size: 18px">Direccion*</h3>
                <v-text-field
                  name="address"
                  label=""
                  id="id"
                  outlined
                  style="width: 95%; margin-left: 2.5%"
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="background-color: " cols="12" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">
                  Capacidad maxima*
                </h3>
                <v-text-field
                  name="name"
                  label=""
                  id="id"
                  outlined
                  dense
                  min="1"
                  type="number"
                  style="width: 90%; margin-left: 5%"
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col style="background-color: " cols="12" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">
                  Numero total de habitaciones de este tipo en el hotel*
                </h3>
                <v-text-field
                  name="name"
                  label=""
                  id="id"
                  outlined
                  dense
                  min="1"
                  type="number"
                  style="width: 90%; margin-left: 5%"
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col style="background-color: " cols="12" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">
                  Número máximo de menores en esta habitación
                </h3>
                <v-select
                  :items="tipo"
                  label=""
                  outlined
                  dense
                  style="width: 90%; margin-left: 5%"
                ></v-select>
              </v-sheet>
            </v-col>
            <v-col style="" cols="12" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">Numero</h3>
                <v-text-field
                  label=""
                  outlined
                  dense
                  style="width: 90%; margin-left: 5%"
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col style="" sm="12" md="12" xl="6">
              <v-sheet min-height="100" style="paddign: 0">
                <div
                  style="
                    width: 90%;
                    margin-left: 5%;
                    font-size: 18px;
                  "
                >
                  <row>
                    <p class="imagen" style="position: relative; float: left">
                      <label
                        for="image"
                        class="btn btn-block btn-outlined boton"
                        style="margin-right:10px;"
                        >Elegir imagenes</label
                      >
                    </p>
                    <input
                      id="image"
                      type="file"
                      accept=".jpg,"
                      @change="logoSelected"
                      style="display: none"
                    />
                    <p>No le ha elegido ningun archivo</p>
                    <br /><br />
                    <p>*Formato JPG <br />*Tamaño 850px x 500px</p>
                  </row>
                </div>
              </v-sheet>
            </v-col>
          </v-row>

          <v-row>
            <v-col style="background-color: " sm="12" md="12" lg="12" xl="12">
              <v-sheet min-height="100" style="paddign: 0">
                <div style="width:95%; margin-left:2.5%; font-size:18px;">
                  <b-table style="width:100%; text-align:center;" striped hover :items="item" :fields="fields"></b-table>
                </div>
                
                <v-row>
                  <v-col style="background-color: " cols="12" lg="5" xl="5">
                    <v-sheet min-height="30" style="paddign: 0">
                      <v-btn
                        style="
                          width: 90%;
                          margin-left: 5%;
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
  </div>
</template>

<script>
export default {
  name: "agregarMenor",
  data: () => ({
    tipo: ["1", "2","3", "4"],
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
    
        fields: [
          {
            key:'first_name',
            label:'¿Aplica a este tipo de ocupación?'
          },
          {
            key:'adultos',
            label:'Número de adultos en esta ocupación'
          },
          {
            key:'ocupacion',
            label:'Nombre de ocupación'
          },
        ],
    item: [
          { adultos: 1, first_name: '', ocupacion: 'Sencilla' },
          { adultos: 2, first_name: '', ocupacion: 'Doble' },
          { adultos: 3, first_name: '', ocupacion: 'Tríple' },
          { adultos: 4, first_name: '', ocupacion: 'Cuatruple' },
          { adultos: 5, first_name: '', ocupacion: 'Quintuple' },
          { adultos: 6, first_name: '', ocupacion: 'Sextuple' },
          { adultos: 7, first_name: '', ocupacion: 'Septuple' }
        ]
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
.boton {
  width: 150px;
  margin-left: 5px;
  background-color: #d7d7d7;
  border: 1px solid black;
  position: relative;
  float: right;
}
</style>