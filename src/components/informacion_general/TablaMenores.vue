<template>
  <v-row
    style="padding:10px; font-family: 'Montserrat'; sans-serif; font-size:18px;"
  >
    <v-col cols="12" xl="10">
      <v-sheet>
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="age"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title><b> MENORES</b></v-toolbar-title>
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
                    <b> + AGREGAR MENOR</b>
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
                            v-model="editedItem.plan"
                            label="Plan"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.age"
                            label="Edades"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.description"
                            label="Descripción"
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
  name:'tableMinors',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Plan",
        align: "center",
        sortable: false,
        value: "plan",
      },
      {
        text: "Edades",
        value: "age",
        sortable: false,
        align: "center",
      },
      { text: "Descripción", value: "description", sortable: false, align: "center" },
      { text: "Actions", value: "actions", sortable: false, align: "start" },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      plan: "",
      age: "",
      description: "",
    },
    defaultItem: {
      plan: "",
      age: "",
      description: "",
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
          plan: "Todo incluido",
          age:
            "Menor de 0 a 6 (Gratuito)",
          description: "Todo incluido",
        },
        {
          plan: "Todo incluido",
          age:
            "Menor de 7 a 12 (No Gratuito)",
          description: "Todo incluido",
        },
        {
          plan: "Todo incluido",
          age:
            "Menor de 13 a 17 (No Gratuito)",
          description: "Todo incluido",
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