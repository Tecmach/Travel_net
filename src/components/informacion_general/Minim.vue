<template>
  <v-row
    style="padding:10px; font-family: 'Montserrat'; sans-serif; font-size:18px;"
  >
    <v-col cols="12" xl="10">
      <v-sheet>
        <v-row>
          <v-col cols="12" style="background-color: ">
            <v-sheet>
              <h3>
                <b style="font-size: 20px; float: left">MíNIMO DE NOCHES</b>
              </h3>
              <br /><br />
              <p><b>Periodos actuales</b></p>
            </v-sheet>
          </v-col>
          <v-col cols="12" xl="12">
            <v-data-table
              :headers="headers"
              :items="desserts"
              sort-by="calories"
              class="elevation-1"
            >
              <template v-slot:top>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                      <v-card-title class="text-h5"
                        >Are you sure you want to delete this
                        item?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete"
                          >Cancel</v-btn
                        >
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="deleteItemConfirm"
                          >OK</v-btn
                        >
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)" color="red"> fas fa-times </v-icon>
              </template>
              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize"> Reset </v-btn>
              </template>
            </v-data-table>
          </v-col>
          <v-col cols="12" style="background-color: ">
            <v-sheet>
              <p><b>Agregar nuevo periodo</b></p>
            </v-sheet>
          </v-col>
          <v-col cols="12" lg="3" xl="3" style="background-color: ">
            <v-sheet>
              <p style="font-size:14px;">Desde*</p>
              <v-text-field
                v-model="editedItem.desde"
                outlined
                dense
                label="Desde"
              ></v-text-field>
            </v-sheet>
          </v-col>
          <v-col cols="12" lg="3" xl="3" style="background-color: ">
            <v-sheet>
              <p style="font-size:14px;">Hasta*</p>
              <v-text-field
                v-model="editedItem.hasta"
                outlined
                dense
                label="Hasta"
              ></v-text-field>
            </v-sheet>
          </v-col>
          <v-col cols="12" lg="3" xl="3" style="background-color: ">
            <v-sheet>
              <p style="font-size:14px;">Mínimo de noches*</p>
              <v-text-field
                v-model="editedItem.minimo"
                outlined
                dense
                type="number"
                min="1"
                label="Minimo de noches"
              ></v-text-field>
            </v-sheet>
          </v-col>
          <v-col cols="12" lg="3" xl="3" style="background-color: ">
            <v-sheet>
              <p style="font-size:14px;">Estancia completa*</p>
              <v-select :items="items"
                v-model="editedItem.estancia" label="Estancia completa" outlined dense>

              </v-select>
            </v-sheet>
          </v-col>
          <v-col cols="12" lg="3" xl="3" style="background-color: ">
            <v-sheet>
              <p style="font-size:14px;">Días de la semana*</p>
              <v-text-field
                v-model="editedItem.dias"
                outlined dense
                label="Dìas de la semana"
              ></v-text-field>
            </v-sheet>
          </v-col>
            <v-col style="background-color: " cols="12" lg="6" xl="6">
              <v-sheet min-height="150" style="paddign: 0">
                <h3 style="margin-left: 5%; font-size: 18px">
                  Esta tarifa se aplica en las siguientes noches de la semana:
                </h3>
                <v-row>
                  <v-col cols="12"  style="background-color:; position:relative; margin:auto;">
                    <v-sheet>
                      <v-row>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          label="Lunes"
                          color="primary"
                          value="Lunes"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          label="Martes"
                          color="primary"
                          value="red darken-3"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          label="Miercoles"
                          color="primary"
                          value="red"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          label="Jueves"
                          color="primary"
                          value="red"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                      </v-row>
                    </v-sheet>
                  </v-col>
                  <v-col cols="12"  style="background-color:; position:relative; margin:auto;">
                    <v-sheet>
                      <v-row>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          label="Viernes"
                          color="primary"
                          value="red"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          label="Sabado"
                          color="primary"
                          value="red darken-3"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                        <v-col lg="3" md="3" sm="6" cols="12">
                        <v-checkbox
                          label="Domingo"
                          color="primary"
                          value="red"
                          hide-details
                        ></v-checkbox>
                        </v-col>
                      </v-row>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-col>
          <v-col cols="6" lg="3" xl="3" style="background-color: ">
            <v-sheet>
              <v-btn style="margin-top:38px; width:100%; color: white;" color="red" @click="close"><b> cancelar</b></v-btn>
            </v-sheet>
          </v-col>
          <v-col cols="6" lg="3" xl="3" style="background-color: ">
            <v-sheet>
              <v-btn style="margin-top:38px; width:100%; color: white;" color="green" @click="save" disabled><b> GUARDAR</b></v-btn>
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    items:['Gratis', 'No Gratis'],
    headers: [
      {
        text: "DESDE",
        align: "center",
        sortable: false,
        value: "desde",
      },
      { text: "HASTA", value: "hasta", align: "center", sortable: false },
      {
        text: "MÍNIMO DE NOCHES",
        value: "minimo",
        align: "center",
        sortable: false,
      },
      {
        text: "DÍAS DE LA SEMANA",
        value: "dias",
        align: "center",
        sortable: false,
      },
      {
        text: "ESTANCIA COMPLETA",
        value: "estancia",
        align: "center",
        sortable: false,
      },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      desde: "",
      hasta: "",
      minimo: 1,
      dias: "",
      estancia: "",
    },
    defaultItem: {
      desde: "",
      hasta: "",
      minimo: 1,
      dias: "",
      estancia: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          desde: "12-DIC-2022",
          hasta: "23-ABR-2022",
          minimo: 2.0,
          dias: "Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo",
          estancia: "Gratis",
        },
        {
          desde: "12-DIC-2021",
          hasta: "23-ABR-2022",
          minimo: 2.0,
          dias: "Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo",
          estancia: "Gratis",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>
