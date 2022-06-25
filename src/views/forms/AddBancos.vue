<template>
  <div
    style="
      margin-top: 1%;
      padding: 10px;
      margin-left: 2%;
      font-size: 15px;
      font-family: 'Montserrat' sans-serif;
    "
  >
    <v-row>
      <v-col xl="11" cols="12">
        <v-sheet>
          <div>
            <v-breadcrumbs :items="items">
              <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </div>
          <h3 style="color: #aaaaaa">AGREGAR NUEVO BANCO:</h3>
          
          <form @submit.prevent="banks(bank)">
          <v-row>
            <v-col xl="6" lg="6" cols="12">
              <v-sheet>
                <p>Banco:*</p>
                <v-text-field
                v-model="bank.name"
                  label=""
                  id="banco"
                  outlined
                  dense
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col xl="4" lg="4" cols="12">
              <p>Imagen de banco:*</p>
              <input
                @change="getImage"
                id="image"
                type="file"
                accept=".jpg,"
                style="display: block"
                ref="fileImage"
              />
              <br />
              <p>*Formato JPG *Tamaño 50px X 50px</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col xl="2" lg="3" md="6" cols="12">
              <v-sheet>
                <p style="font-size: 14px">Comisión de 3 meses:*</p>
                <v-text-field
                v-model="bank.comm_three"
                  label=""
                  id=""
                  outlined
                  dense
                  type="number"
                  append-icon="fas fa-percent"
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col xl="2" lg="3" md="6" cols="12">
              <v-sheet>
                <p style="font-size: 14px">Comisión de 6 meses:*</p>
                <v-text-field
                v-model="bank.comm_six"
                  label=""
                  id=""
                  outlined
                  dense
                  type="number"
                  append-icon="fas fa-percent"
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col xl="2" lg="3" md="6" cols="12">
              <v-sheet>
                <p style="font-size: 14px">Comisión de 9 meses:*</p>
                <v-text-field
                v-model="bank.comm_nine"
                  label=""
                  id=""
                  outlined
                  dense
                  type="number"
                  append-icon="fas fa-percent"
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col xl="2" lg="3" md="6" cols="12">
              <v-sheet>
                <p style="font-size: 14px">Comisión de 12 meses:*</p>
                <v-text-field
                v-model="bank.comm_twelve"
                  label=""
                  id=""
                  outlined
                  dense
                  type="number"
                  append-icon="fas fa-percent"
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col xl="2" lg="3" md="6" cols="12">
              <v-sheet>
                <p style="font-size: 14px">Comisión de normal:*</p>
                <v-text-field
                v-model="bank.comm_normal"
                  label=""
                  outlined
                  dense
                  type="number"
                  append-icon="fas fa-percent"
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col xl="6" lg="6" md="6" cols="12">
              <v-btn
                    type="submit"
                max-width="98%"
                id="guardar"
                style="margin-top: 40px"
                color="green"
                ><b style="color: white; font-size: 18px">Guardar</b></v-btn
              >
            </v-col>
          </v-row>
          </form>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "AddBanco",
  data() {
    let bank ={};
    return{
      bank,
    items: [
      {
        text: "Regresar",
        disabled: false,
        href: "#",
      },
      {
        text: "Panel de control",
        disabled: false,
        href: "/",
      },
      {
        text: "Bancos",
        disabled: false,
        href: "#",
      },
      {
        text: "Agregar Banco",
        disabled: true,
        href: "#",
      },
    ],
    };
  },
  computed: {
    ...mapGetters("bank", ["getBank", "getErrors"]),
  },
  methods:{
    ...mapActions("bank", ["banks", "setErrors"]),
    getImage(){
      const file = this.$refs.fileImage.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.bank.image = reader.result;
      }
      reader.onerror = function (error) {
        console.log('Error: ', error)
      }

       
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
.boton {
  width: 50%;
  margin-left: 5px;
  background-color: #d7d7d7;
  border: 1px solid black;
  position: relative;
  float: right;
}
@media (min-width: 1200px) {
  #guardar {
    width: 80%;
  }
}
@media (max-width: 1199px) {
  #guardar {
    width: 98%;
    margin-left: 1%;
  }
}
</style>