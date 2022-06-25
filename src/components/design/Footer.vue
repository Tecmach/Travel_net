<template>
  <v-row
    cols="12"
    lg="12"
    style="padding:10px; background-color:; font-family: 'Montserrat'; font-size:20px; sans-serif;"
  >
    <v-col cols="12" lg="12">
      <hr />
      <div style="width: 100%; background-color: #fafafa; height: 10%">
        <h3 style="font-size: 23px"><b>HEADER / FOOTER</b></h3>
      </div>
      <v-sheet max-height="500" class="flex">
        <!--  -->
        <v-col lg="5" style="background-color: ; float: left; margin-top: ">
          <v-sheet min-height="360">
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
                      Adjuntar imagenes
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
                      for="footer"
                      class="btn btn-block btn-outlined"
                      style="
                        width: 98%;
                        margin-left: 5px;
                        background-color: #d7d7d7;
                        border: 1px solid black;
                        position: relative;
                        float: right;
                      "
                      >Adjuntar imagen</label
                    >
                    <input
                      id="footer"
                      type="file"
                      accept=".jpg,"
                      @change="footerSelected"
                      multiple
                      style="display: none"
                    />
                  </v-sheet>
                </v-col>
                <v-col
                  xl="8"
                  lg="8"
                  cols="12"
                  style="background-color: ; margin-top: 25px"
                >
                  <v-sheet>
                    <p>
                      Seleccionar una imagen para personalizar tu interface,
                      estas aparecerán en la parte superior e interior de la
                      pantalla.
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
                      ><b> Formato: JPG - 1045 x 300px</b>
                    </p>
                  </div>
                </v-col>
              </v-row>
            </form>
          </v-sheet>
        </v-col>

        <v-col
          cols="12"
          lg="7"
          style="background-color: ; float: left; margin-top: "
        >
          <v-sheet
            max-height="360"
            style="color: #535353; font-family: 'Montserrat'"
          >
            <div v-if="footerpreview">
              <v-img
                :src="footerpreview"
                class="figure-img img-fluid rounded"
                max-height="350"
                max-width="522.5"
                min-height="350"
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
    footer: null,
    footerpreview: null,
  }),

  methods: {
    footerSelected(e) {
      this.footer = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.footer);
      reader.onload = (e) => {
        this.footerpreview = e.target.result;
      };
    },
  },
};
</script>

<style>
</style>