<template>
    <v-row style="padding: 10px; margin-top: -10px; background-color: ">
      <v-col cols="12" lg="12">
        <hr />
        <div style="width: 100%; background-color: #fafafa; height: 10%">
          <h3 style="font-size: 23px"><b>BANNER</b></h3>
        </div>
        <v-sheet max-height="600" class="flex">
          <!--  -->
          <v-col
            cols="12"
            lg="5"
            style="background-color: ; float: left; margin-top: "
          >
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
                        class="banner"
                        style="text-align: center; margin-top: 5px"
                      >
                        Adjuntar Banner
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
                        for="banner"
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
                        id="banner"
                        type="file"
                        accept=".jpg,"
                        @change="bannerSelected"
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
                        Seleccionar una imagen de banner, esta aparecerá en la
                        pantalla principal al momento de haver la busqueda de
                        hoteles
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
                        ><b> Formato: JPG - 1045 x 700px</b>
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
              <div v-if="bannerpreview">
                <v-img
                  :src="bannerpreview"
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
      <br />
    </v-row>
</template>

<script>
export default {
  data: () => ({
    title: "true",
    banner: null,
    bannerpreview: null,
  }),
  methods: { 
    bannerSelected(e) {
      this.banner = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.banner);
      reader.onload = (e) => {
        this.bannerpreview = e.target.result;
      };
    },
  },
};
</script>

<style>
</style>