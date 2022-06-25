<template>
  <div
    style="padding:10px;  font-family: 'Montserrat';  sans-serif; border: 1px solid white"
  >
    <v-container class="mx-auto my-12" max-width="1170">
      <div
        style="
          text-align: center;
          width: 100%;
          position: relative;
          margin: auto;
        "
      >
        <br />
        <h3>Brokers</h3>
        <p>Consultar configuración de sus brokers:</p>
        <v-btn
          color="green"
          style="position: relative; margin-right: 10px; float: right"
          ><v-icon color="white"> fas fa-plus </v-icon> </v-btn
        ><br />
      </div>
      <br />
    </v-container>
    <v-card class="mx-auto my-12" max-width="1170">
      <v-row
        sm="12"
        md="12"
        lg="12"
        xl=""
        style="padding:10px;  font-family: 'Montserrat';  sans-serif;"
      >
        <v-col sm="12" md="12" lg="12">
          <v-sheet rounded="lg" min-height="50" max-height="3500" style="">
            <!--  -->
            <v-container style="background-color: #fdfdfd">
              <div style="background-color: #ebebeb; width: 100%; padding: 0">
                <hr style="margin-top: -10px" />
                <v-container>
                  <p style="font-size: 18px">
                    <b style="">
                      <img
                        src="../assets/HOTELBEDS.png"
                        style="width: 15px; height: 15px"
                      />
                      HotelBeds</b
                    >
                  </p>
                </v-container>
              </div>
              <br />
              <div style="width: 100%; position: relative">
                <p></p>
                <v-checkbox
                  v-model="hotelbeds"
                  hide-details
                  :label="hotelbeds ? 'Activo' : 'Inactivo'"
                  class="shrink mr-2 mt-0"
                ></v-checkbox>

                <div
                  style="width: 100%; background-color: "
                  v-if="hotelbeds === true"
                >
                  <v-container>
                    <v-row
                      sm="12"
                      md="12"
                      lg="12"
                      style="padding:10px;  font-family: 'Montserrat'; sans-serif;"
                    >
                      <v-col sm="12" md="12" lg="12">
                        <v-sheet
                          rounded="lg"
                          max-height="500"
                          style="margin-top: 50px; background-color: #fdfdfd"
                        >
                          <!--  -->
                          <v-col
                            sm="12"
                            md="12"
                            lg="12"
                            style="
                              background-color: ;
                              float: left;
                              margin-top: -50px;
                            "
                          >
                            <v-sheet
                              rounded="lg"
                              min-height="200"
                              style="background-color: #fdfdfd"
                            >
                              <br />
                              <v-form>
                                <v-container>
                                  <v-row>
                                    <v-col cols="12" xl="10">
                                      <p>
                                        <b>URL:</b>
                                      </p>
                                      <v-text-field
                                        v-model="first"
                                        label="Nombre"
                                        outlined
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col cols="12" xl="5">
                                      <p>
                                        <b>Clave de usuario:</b>
                                      </p>
                                      <v-text-field
                                        v-model="first"
                                        label="Nombre"
                                        outlined
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" xl="5">
                                      <p>
                                        <b> Markup</b>
                                      </p>
                                      <v-text-field
                                        v-model="last"
                                        label="Apellido"
                                        outlined
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </v-form>
                            </v-sheet>
                          </v-col>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
              </div>
            </v-container>
            <v-container style="background-color: #fdfdfd">
              <div style="background-color: #ebebeb">
                <hr style="margin-top: -10px" />
                <v-container>
                  <p style="font-size: 18px">
                    <b>
                      <img
                        src="../assets/omnibes.png"
                        style="width: 20px; height: 20px"
                      />
                      Omnibees</b
                    >
                  </p></v-container
                >
              </div>
              <br />
              <div style="width: 100%; position: relative">
                <v-checkbox
                  v-model="Omnibees"
                  hide-details
                  :label="Omnibees ? 'Activo' : 'Inactivo'"
                  class="shrink mr-2 mt-0"
                ></v-checkbox>
                <div style="width: 100%" v-if="Omnibees === true">
                  <v-container>
                    <v-row
                      sm="12"
                      md="12"
                      lg="12"
                      style="padding:10px;  font-family: 'Montserrat'; sans-serif;"
                    >
                      <v-col sm="12" md="12" lg="12">
                        <v-sheet
                          rounded="lg"
                          max-height="500"
                          style="margin-top: 50px"
                        >
                          <!--  -->
                          <v-col
                            sm="12"
                            md="12"
                            lg="12"
                            style="
                              background-color: ;
                              float: left;
                              margin-top: -50px;
                            "
                          >
                            <v-sheet
                              rounded="lg"
                              min-height="200"
                              style="background-color: #fdfdfd"
                            >
                              <br />
                              <v-form>
                                <v-container style="background-color: #fdfdfd">
                                  <v-row>
                                    <v-col cols="12" xl="10">
                                      <p>
                                        <b>URL:</b>
                                      </p>
                                      <v-text-field
                                        v-model="first"
                                        label="Nombre"
                                        outlined
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col cols="12" xl="5">
                                      <p>
                                        <b>Clave de usuario:</b>
                                      </p>
                                      <v-text-field
                                        v-model="first"
                                        label="Nombre"
                                        outlined
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" xl="5">
                                      <p>
                                        <b> Markup</b>
                                      </p>
                                      <v-text-field
                                        v-model="last"
                                        label="Apellido"
                                        outlined
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </v-form>
                            </v-sheet>
                          </v-col>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
              </div>
            </v-container>
            <v-container style="background-color: #fdfdfd">
              <div style="background-color: #ebebeb">
                <hr style="margin-top: -10px" />
                <v-container>
                  <p style="font-size: 18px">
                    <b>
                      <img
                        src="../assets/restel.png"
                        style="width: 15px; height: 15px"
                      />
                      Restel</b
                    >
                  </p>
                </v-container>
              </div>
              <br />
              <div style="width: 100%; position: relative">
                <v-checkbox
                  v-model="Restel"
                  hide-details
                  :label="Restel ? 'Activo' : 'Inactivo'"
                  class="shrink mr-2 mt-0"
                ></v-checkbox>
                <div style="width: 100%" v-if="Restel === true">
                  <v-container>
                    <v-row
                      sm="12"
                      md="12"
                      lg="12"
                      style="padding:10px;  font-family: 'Montserrat'; sans-serif;"
                    >
                      <v-col sm="12" md="12" lg="12">
                        <v-sheet
                          rounded="lg"
                          max-height="500"
                          style="margin-top: 50px"
                        >
                          <!--  -->
                          <v-col
                            sm="12"
                            md="12"
                            lg="12"
                            style="
                              background-color: ;
                              float: left;
                              margin-top: -50px;
                            "
                          >
                            <v-sheet
                              rounded="lg"
                              min-height="200"
                              style="background-color: #fdfdfd"
                            >
                              <br />
                              <v-form>
                                <v-container style="background-color: #fdfdfd">
                                  <v-row>
                                    <v-col cols="12" xl="10">
                                      <p>
                                        <b>URL:</b>
                                      </p>
                                      <v-text-field
                                        v-model="first"
                                        label="Nombre"
                                        outlined
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                  <v-row>
                                    <v-col cols="12" xl="5">
                                      <p>
                                        <b>Clave de usuario:</b>
                                      </p>
                                      <v-text-field
                                        v-model="first"
                                        label="Nombre"
                                        outlined
                                      ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" xl="5">
                                      <p>
                                        <b> Markups</b>
                                      </p>
                                      <v-text-field
                                        v-model="last"
                                        label="Apellido"
                                        outlined
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </v-form>
                            </v-sheet>
                          </v-col>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
              </div>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    hotelbeds: true,
    Omnibees: true,
    Restel: true,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500&display=swap");
</style>