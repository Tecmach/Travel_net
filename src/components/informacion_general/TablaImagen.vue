<template>
  <v-row
    style="padding:10px; font-family: 'Montserrat'; sans-serif; font-size:18px;"
  >
    <v-col cols="12" xl="10">
      <v-sheet>
        <h3 style="font-size: 20px" name="imagen"><b> IMÁGENES DEL HOTEL</b></h3>
        <br />
        <div style="font-size: 18px">
          <row>
            <p class="imagen" style="position: relative; float: left">
              <label
                for="image"
                class="btn btn-block btn-outlined boton"
                style="margin-right: 10px"
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
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
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
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small @click="deleteItem(item)" color="red">
              fas fa-times
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
          </template>
        </v-data-table>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "tableImage",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Archivo de imagenes",
        align: "center",
        sortable: false,
        value: "name",
      },
      { text: "", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
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
          name: "Frozen Yogurt",
        },
        {
          name: "Ice cream sandwich",
        },
        {
          name: "Eclair",
        },
        {
          name: "Cupcake",
        },
        {
          name: "Gingerbread",
        },
        {
          name: "Jelly bean",
        },
        {
          name: "Lollipop",
        },
        {
          name: "Honeycomb",
        },
        {
          name: "Donut",
        },
        {
          name: "KitKat",
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