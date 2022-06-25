<template>
  <v-row
    style="padding:10px; font-family: 'Montserrat'; sans-serif; font-size:18px;"
  >
    <v-col cols="12" xl="10">
      <v-sheet>
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="description"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title><b> HABITACIONES</b></v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#464646"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <b> + AGREGAR</b>
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
                            v-model="editedItem.name"
                            label="Nombre"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.description"
                            label="Descripción"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.cap"
                            label="Capacidad máxima"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.number"
                            label="Número de habitaciones"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.tarifa"
                            label="Tarifa menores"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.lim"
                            label="Limite de niños"
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
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)" color="red">
              fas fa-times
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="#464646" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name:'tableRooms',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Nombre",
        align: "start",
        sortable: false,
        value: "name",
      },
      {
        text: "Descripción",
        value: "description",
        sortable: false,
        align: "start",
      },
      { text: "Cap. Máxima", value: "cap", sortable: false, align: "center" },
      {
        text: "No. Habitaciones",
        value: "number",
        sortable: false,
        align: "center",
      },
      {
        text: "Tarifa menores",
        value: "tarifa",
        sortable: false,
        align: "start",
      },
      { text: "Lim. Niños", value: "lim", sortable: false, align: "center" },
      { text: "Actions", value: "actions", sortable: false, align: "start" },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      description: "",
      cap: 0,
      number: 0,
      tarifa: "",
      lim: 0,
    },
    defaultItem: {
      name: "",
      description: "",
      cap: 0,
      number: 0,
      tarifa: "",
      lim: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "AGREGAR" : "EDITAR";
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
          name: "DELUXE OCEAN VIEW",
          description:
            " Recientemente remodelada, esta habitación dispone de dos camas matrimoniales o una cama king size, balcón privado con vista al jardín, decoración contemporánea, servicio a la habitación las 24 horas, internet de alta velocidad (cargo extra), aire acondicionado, television con cable, teléfono con buzón de voz, radio-despertador, minibar, cafetera, caja de seguridad tamaño laptop, secadora de cabello, pisos de mármol, espejo de aumento, llave electrónica de acceso a la habitación, plancha y tabla de planchar, localizada en la torre principal.",
          cap: 4.0,
          number: 123.0,
          tarifa: "Menor gratis por adulto pagado, limitado a X menores",
          lim: 2.0,
        },
        {
          name: "DELUXE OCEAN VIEW",
          description:
            " Recientemente remodelada, esta habitación dispone de dos camas matrimoniales o una cama king size, balcón privado con vista al jardín, decoración contemporánea, servicio a la habitación las 24 horas, internet de alta velocidad (cargo extra), aire acondicionado, television con cable, teléfono con buzón de voz, radio-despertador, minibar, cafetera, caja de seguridad tamaño laptop, secadora de cabello, pisos de mármol, espejo de aumento, llave electrónica de acceso a la habitación, plancha y tabla de planchar, localizada en la torre principal.",
          cap: 4.0,
          number: 123.0,
          tarifa: "Menor gratis por adulto pagado, limitado a X menores",
          lim: 2.0,
        },
        {
          name: "DELUXE OCEAN VIEW",
          description:
            " Recientemente remodelada, esta habitación dispone de dos camas matrimoniales o una cama king size, balcón privado con vista al jardín, decoración contemporánea, servicio a la habitación las 24 horas, internet de alta velocidad (cargo extra), aire acondicionado, television con cable, teléfono con buzón de voz, radio-despertador, minibar, cafetera, caja de seguridad tamaño laptop, secadora de cabello, pisos de mármol, espejo de aumento, llave electrónica de acceso a la habitación, plancha y tabla de planchar, localizada en la torre principal.",
          cap: 4.0,
          number: 123.0,
          tarifa: "Menor gratis por adulto pagado, limitado a X menores",
          lim: 2.0,
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