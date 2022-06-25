<template>
  <div>
    <br />
<v-row><v-col xl="11" lg="11" cols="12">
    <v-card
      max-width="96%"
      max-height="15000"
      style=" margin-left:2%; margin-right:2%; margin-top:2%;  font-family:  'Montserrat'; sans-serif; border-radius: 10px 10px 10px 10px; background-color:rgb(235,235,235);"
    >
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left"><b style="color: black">Secciones</b></th>
              <th class="text-left"><b style="color: black">Modificar</b></th>
              <th class="text-left"><b style="color: black">Ver</b></th>
              <th class="text-left"><b style="color: black">Ninguno</b></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>
                <v-checkbox
                  v-model="item.modificar"
                  :label="`${item.modificar.toString()}`"
                ></v-checkbox>
              </td>
              <td>
                <v-checkbox
                  v-model="item.ver"
                  :label="`${item.ver.toString()}`"
                ></v-checkbox>
              </td>
              <td>
                <v-checkbox
                  v-model="item.ninguno"
                  :label="`${item.ninguno.toString()}`"
                ></v-checkbox>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card></v-col></v-row>
    <br />

    <v-row>
      <v-col style="background-color: " cols="12" lg="5" xl="5">
        <v-sheet min-height="30" style="paddign: 0">
          <v-btn
              disabled
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkbox: true,
      desserts: [
        {
          name: "Dashboard",
          modificar: false,
          ver: false,
          ninguno: false,
        },
        {
          name: "Buscador",
          modificar: false,
          ver: false,
          ninguno: false,
        },
        {
          name: "Reservaciones",
          modificar: false,
          ver: false,
          ninguno: false,
        },
        {
          name: "Usuarios",
          modificar: false,
          ver: false,
          ninguno: false,
        },
        {
          name: "Agencias",
          modificar: false,
          ver: false,
          ninguno: false,
        },
        {
          name: "Finanzas",
          modificar: false,
          ver: false,
          ninguno: false,
        },
        {
          name: "Reportes",
          modificar: false,
          ver: false,
          ninguno: false,
        },
        {
          name: "Diseño",
          modificar: false,
          ver: false,
          ninguno: false,
        },
      ],
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>
