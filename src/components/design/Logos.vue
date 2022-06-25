<template>
  <v-row style="padding: 10px; margin-top: -10px; background-color: ">
    <v-col cols="12" style="background-color: ">
      <v-sheet>
        <v-container
          fluid
          style="padding: 0; background-color: #fafafa; margin-top: -20px"
        >
          <v-radio-group v-model="title">
            <template v-slot:label> </template>
            <v-radio value="true">
              <template v-slot:label>
                <div style="margin-top: 10px; font-size: 23px">
                  <b>Logo</b>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
        </v-container>
      </v-sheet>
    </v-col>
    <v-col cols="12">
      <v-sheet>
        <!--  -->
        <v-col
          cols="12"
          xl="5"
          lg="6"
          style="background-color: ; float: left; margin-top: "
        >
          <v-sheet min-height="270">
            <br />

            <form method="POST" enctype="multipart/form-data">
              <v-row>
                <v-col
                  xl="5"
                  lg="5"
                  cols="6"
                  style="background-color: ; margin-top: 10px"
                >
                  <v-sheet>
                    <p
                      class="imagen"
                      style="text-align: center; margin-top: 5px"
                    >
                      Adjuntar logo
                    </p>
                  </v-sheet>
                </v-col>
                <v-col
                  xl="5"
                  lg="6"
                  cols="6"
                  style="background-color: ; margin-top: 10px"
                >
                  <v-sheet>
                    <label
                      for="image"
                      class="btn btn-block btn-outlined boton"
                      style=""
                      >Adjuntar imagen</label
                    >
                    <input
                      id="image"
                      type="file"
                      accept=".jpg,"
                      @change="logoSelected"
                      style="display: none"
                    />
                  </v-sheet>
                </v-col>
                <v-col
                  xl="8"
                  lg="8"
                  cols="12"
                  style="background-color: ; margin-top: 10px"
                >
                  <v-sheet>
                    <p>
                      Selecciona una imagen de tu logo para personalizar tu
                      espacio
                    </p>
                  </v-sheet>
                </v-col>
                <br />
                <v-col xl="8" lg="8" cols="10" style="padding: 0">
                  <div
                    style="
                      width: 98%;
                      background-color: #ebebeb;
                      float: left;
                      margin-left: 2%;
                    "
                  >
                    <p>
                      <i class="fas fa-info-circle"></i
                      ><b> Formato: JPG - 400 x 400px</b>
                    </p>
                  </div>
                </v-col>
              </v-row>
            </form>
          </v-sheet>
        </v-col>

        <v-col
          cols="12"
          xl="7"
          lg="6"
          style="background-color: ; float: left; margin-top: "
          disabled
        >
          <v-sheet
            max-height="270"
            style="color: #535353; font-family: 'Montserrat'"
          >
            <div v-if="logopreview">
              <v-img
                :src="logopreview"
                class="figure-img img-fluid rounded"
                max-height="270"
                max-width="270"
                min-height="270"
                style="border-radius: 8px; position: relative; margin: auto"
              >
              </v-img>
            </div>
          </v-sheet>
        </v-col>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    title: "true",
    logo: null,
    logopreview: null,
  }),
  methods: {
    logoSelected(e) {
      this.logo = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.logo);
      reader.onload = (e) => {
        this.logopreview = e.target.result;
      };
    },
  },
};
</script>

<style>
</style>