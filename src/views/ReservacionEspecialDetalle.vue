<template>
  <div>
    <v-row
      style="padding:10px; margin-top:1%; font-family: 'Montserrat'; sans-serif; font-size:18px;"
    >
      <v-col cols="12" xl="12">
        <v-sheet>
          <v-row>
            <v-col cols="12" style="background-color: red">
              <v-sheet>
                <h3 style="font-size: 22px"><b>RESERVACIÓN #254367</b></h3>
              </v-sheet>
            </v-col>
            <v-col xl="3" lg="3" md="6" cols="12" style="background-color: red">
              <v-sheet>
                <p><b>Estatus:</b></p>
                <p>
                  <v-icon color="#07a34a">far fa-check-circle</v-icon>
                  Confirmado
                </p>
              </v-sheet>
            </v-col>
            <v-col
              xl="3"
              lg="3"
              md="6"
              cols="12"
              style="background-color: blue"
            >
              <v-sheet>
                <p><b>Persona que confirma en el hotel:</b></p>
                <p>Kamila Cuevas</p>
              </v-sheet>
            </v-col>
            <v-col xl="3" lg="3" md="6" cols="12" style="background-color: red">
              <v-sheet>
                <p><b>Clave de confirmación:</b></p>
                <p>475692</p>
              </v-sheet>
            </v-col>
            <v-col
              xl="3"
              lg="3"
              md="6"
              cols="12"
              style="background-color: blue"
            >
              <v-sheet>
                <p><b>Persona que confirma pago en hotel:</b></p>
                <p>Kamila Cuevas</p>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col xl="3" lg="3" md="6" cols="12" style="background-color: red">
              <v-sheet>
                <p><b>Hotel:</b></p>
                <p>RIU cancún</p>
              </v-sheet>
            </v-col>
            <v-col
              xl="3"
              lg="3"
              md="6"
              cols="12"
              style="background-color: blue"
            >
              <v-sheet>
                <p><b>Agencia:</b></p>
                <p>XOCO TOURS</p>
              </v-sheet>
            </v-col>
            <v-col xl="3" lg="3" md="6" cols="12" style="background-color: red">
              <v-sheet>
                <p><b>Comisión de agencia personalizada:</b></p>
                <p>Si</p>
              </v-sheet>
            </v-col>
            <v-col
              xl="3"
              lg="3"
              md="6"
              cols="12"
              style="background-color: blue"
            >
              <v-sheet>
                <p><b>Comisión:</b></p>
                <p>16.00</p>
              </v-sheet>
            </v-col>
            <v-col
              xl="3"
              lg="3"
              md="6"
              cols="12"
              style="background-color: blue"
            >
              <v-sheet>
                <p><b>Usuario:</b></p>
                <p>Juan Robles</p>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col xl="3" lg="3" md="6" cols="12" style="background-color: red">
              <v-sheet>
                <p><b>Llegada:</b></p>
                <p>
                  <v-icon color="#07a34a">fas fa-arrow-down</v-icon> Jueves 5 de
                  febrero
                </p>
              </v-sheet>
            </v-col>
            <v-col
              xl="3"
              lg="3"
              md="6"
              cols="12"
              style="background-color: blue"
            >
              <v-sheet>
                <p><b>Salida:</b></p>
                <p>
                  <v-icon color="red">fas fa-arrow-up</v-icon> Domingo 8 de
                  febrero
                </p>
              </v-sheet>
            </v-col>
            <v-col xl="3" lg="3" md="6" cols="12" style="background-color: red">
              <v-sheet>
                <p><b>Listado de tarifas:</b></p>
                <p>por habitación</p>
              </v-sheet>
            </v-col>
            <v-col
              xl="3"
              lg="3"
              md="6"
              cols="12"
              style="background-color: blue"
            >
              <v-sheet>
                <p><b>Forma de cotización:</b></p>
                <p>Cotizar por personas</p>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              xl="3"
              lg="3"
              md="6"
              cols="12"
              style="background-color: blue"
            >
              <v-sheet>
                <p><b>Límite de pago (agencia):</b></p>
                <p>
                  <v-icon color="#ffc62c">fas fa-info-circle</v-icon> Jueves 5
                  de febrero
                </p>
              </v-sheet>
            </v-col>
            <v-col
              xl="3"
              lg="3"
              md="6"
              cols="12"
              style="background-color: blue"
            >
              <v-sheet>
                <p><b>Límite de pago:</b></p>
                <p>
                  <v-icon color="#ffc62c">fas fa-info-circle</v-icon> Domingo 8
                  de febrero
                </p>
              </v-sheet>
            </v-col>
            <v-col xl="3" lg="3" md="6" cols="12" style="background-color: red">
              <v-sheet>
                <p><b>¿Es grupo?:</b></p>
                <v-row style="margin-top: -40px">
                  <v-col cols="3">
                    <v-sheet>
                      <v-checkbox
                        label="Si"
                        v-model="value"
                        value="value"
                      ></v-checkbox>
                    </v-sheet>
                  </v-col>
                  <v-col cols="3">
                    <v-sheet>
                      <v-checkbox
                        label="No"
                        v-model="value"
                        value="value"
                      ></v-checkbox>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          </v-row>
          <br /><br />
          <hr />
          <!--Información de cliente-->
          <Cliente />
          <br /><br />
          <hr />
          <!--Listado de habitaciones-->
          <Rooms/>
          <br />
          <hr />
          <!--Cargos generales de la reservacion-->
          <v-row>
            <v-col cols="12" style="background-color: red">
              <v-sheet>
                <h3 style="font-size: 22px">
                  <b>CARGOS GENERALES DE LA RESERVACIÓN</b>
                </h3>
              </v-sheet>
            </v-col>
            <v-col xl="3" lg="3" md="6" cols="12" style="background-color: red">
              <v-sheet>
                <p><b>Concepto:</b></p>
                <v-text-field
                  name="name"
                  label=""
                  id="id"
                  outlined
                  dense
                  style="width: 60%"
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col
              xl="3"
              lg="3"
              md="6"
              cols="12"
              style="background-color: blue"
            >
              <v-sheet>
                <p><b>Monto Fijo:</b></p>
                <v-btn color="green"
                  ><b style="color: white">+ Agregar cargo</b></v-btn
                >
              </v-sheet>
            </v-col>
          </v-row>
          <br />
          <hr />
          <Pago/>
          <br />
          <hr />
          <Total/>
          <br />
          <hr />
          <!--Notificaciones de cambio-->
          <v-row>
            <v-col cols="12" style="background-color: red">
              <v-sheet>
                <h3 style="font-size: 22px">
                  <b>NOTIFICACIONES DE CAMBIO</b>
                </h3>
              </v-sheet>
            </v-col>
            <v-col cols="12" style="background-color: red">
              <v-sheet>
                <v-checkbox v-model="agencia">
                  <template v-slot:label>
                    <div style="margin-top: 8px">
                      Notificación a la agencia al cambiar la cotización
                    </div>
                  </template>
                </v-checkbox>
                <v-checkbox v-model="hotel" style="margin-top: -20px">
                  <template v-slot:label>
                    <div style="margin-top: 8px">
                      Notificación al hotel al cambiar la cotización
                    </div>
                  </template>
                </v-checkbox>
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Cliente from "../components/Reservacion_especial_detalle/InformacionCliente.vue";
import Rooms from "../components/Reservacion_especial_detalle/ListadoHabitaciones.vue"
import Pago from "../components/Reservacion_especial_detalle/FormasPago.vue"
import Total from "../components/Reservacion_especial_detalle/Totales.vue"
export default {
  components: {
    Cliente,
    Rooms,
    Pago,
    Total
  },
  name: "detalleSpecial",
  data: () => ({
    agencia: false,
    hotel: false,
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
@media(max-width: 800px){
#room {
	height: 100%;
	width: 1200px;
	border: 1px solid #ddd;
	background: #f1f1f1;
	overflow: scroll;
}
}
</style>