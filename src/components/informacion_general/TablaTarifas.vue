<template>
  <v-row
    style="padding:10px; font-family: 'Montserrat'; sans-serif; font-size:18px;"
  >
    <v-col cols="12" xl="10">
      <v-sheet>
        <v-row>
          <v-col cols="12" style="background-color: ">
            <v-sheet>
              <h3><b style="font-size: 20px; float: left">TARIFAS</b></h3>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#464646"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                    style="float: right"
                  >
                    <b> + TARIFAS Y PROMOCIONES</b>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.room"
                            label="Habitación"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.simple"
                            label="SIMPLE"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.double"
                            label="DOBLE"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.triple"
                            label="TRIPLE"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.quadruple"
                            label="CUADRUPLE"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.minor"
                            label="MENORES DE 0 A 11"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <br />
              <br />
            </v-sheet>
          </v-col>
          <v-col cols="12" xl="6" lg="6">
            <p><b>EUROPEO, Peso Mexicano MARK-UP DEL 20.00%</b></p>
          </v-col>
          <v-col cols="12" xl="6" lg="6">
            <div style="float: right">
              <v-btn
                color="#464646"
                style="color: white; font-size: 10px; margin-right: 10px"
                ><v-icon small>mdi-pencil</v-icon><b>EDITAR</b></v-btn
              >
              <v-btn color="red" style="color: white; font-size: 10px"
                ><v-icon small>fas fa-times</v-icon><b></b
              ></v-btn>
            </div>
          </v-col>
          <v-col cols="12" style="background-color: ">
            <p><b>Aplicable en las noches de los siguientes periodos:</b></p>
            <v-row style="padding: 0; margin-top: 30px">
              <v-col
                cols="12"
                xl="3"
                style="background-color: ; margin-top: -30px"
              >
                <v-sheet style="padding: 0">
                  <p>14/Dic/2019 - 30/Dic/2019</p>
                </v-sheet>
              </v-col>
              <v-col
                cols="12"
                xl="3"
                style="background-color: ; margin-top: -30px"
              >
                <v-sheet>
                  <p>1/Ene/2020 - 4/Ene/2020</p>
                </v-sheet>
              </v-col>
              <v-col
                cols="12"
                xl="3"
                style="background-color: ; margin-top: -30px"
              >
                <v-sheet>
                  <p>1/Feb/2020 - 29/Feb/2020</p>
                </v-sheet>
              </v-col>
            </v-row>
            <v-row style="padding: 0">
              <v-col
                cols="12"
                xl="3"
                style="background-color: ; margin-top: -30px"
              >
                <v-sheet style="padding: 0">
                  <p>6/Abr/2019 - 18/Abr/2019</p>
                </v-sheet>
              </v-col>
              <v-col
                cols="12"
                xl="3"
                style="background-color: ; margin-top: -30px"
              >
                <v-sheet>
                  <p>10/Jul/2020 - 16/Ago/2020</p>
                </v-sheet>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" style="background-color: ">
            <p><b>Aplicable en las noches de los siguientes periodos:</b></p>
            <p>Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo</p>
            <p><b>Tarifa de preventa:</b></p>
            <p>No</p>
            <p><b>Precios</b></p>
          </v-col>
          <v-col cols="12" style="margin-top: -30px">
            <v-sheet>
              <v-data-table
                :headers="headers"
                :items="desserts"
                sort-by="simple"
                class="elevation-1"
              >
                <template v-slot:top>
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
                  <v-icon small @click="deleteItem(item)" color="red">
                    fas fa-times
                  </v-icon>
                </template>
                <template v-slot:item.simple="{ item }">
                  <span>{{ formatNumber(item.simple) }}</span>
                </template>
                <template v-slot:item.double="{ item }">
                  <span>{{ formatNumber(item.double) }}</span>
                </template>
                <template v-slot:item.triple="{ item }">
                  <span>{{ formatNumber(item.triple) }}</span>
                </template>
                <template v-slot:item.quadruple="{ item }">
                  <span>{{ formatNumber(item.quadruple) }}</span>
                </template>
                <template v-slot:no-data>
                  <v-btn color="#464646" @click="initialize" style="color:white;"><b>Reset</b>  </v-btn>
                </template>
              </v-data-table>
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "tableMinors",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "HABITACIÓN",
        align: "center",
        sortable: false,
        value: "room",
      },
      {
        text: "SENCILLA",
        value: "simple",
        sortable: false,
        align: "center",
      },
      {
        text: "DOBLE",
        value: "double",
        sortable: false,
        align: "center",
      },
      {
        text: "TRIPLE",
        value: "triple",
        sortable: false,
        align: "center",
      },
      {
        text: "CUADRUPLE",
        value: "quadruple",
        sortable: false,
        align: "center",
      },
      {
        text: "MENORES DE 0 A 11",
        value: "minor",
        sortable: false,
        align: "center",
      },
      { text: "Actions", value: "actions", sortable: false, align: "start" },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      room: "",
      simple: 0,
      double: 0,
      triple: 0,
      quadruple: 0,
      minor: "Gratis",
    },
    defaultItem: {
      room: "",
      simple: 0,
      double: 0,
      triple: 0,
      quadruple: 0,
      minor: "Gratis",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "AGREGAR TIPO DE MENOR" : "EDITAR";
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
          room: "Estándar",
          simple: "1516",
          double: "1516",
          triple: "1766",
          quadruple: "2016",
          minor: "Gratis",
        },
        {
          room: "Estándar vista al mar",
          simple: "1855",
          double: "1855",
          triple: "2105",
          quadruple: "2355",
          minor: "Gratis",
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