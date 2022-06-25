<template>

    <v-row
      style="
        margin-top: 2%;
        padding: 10px;
        font-family: 'Montserrat' sans-serif;
        font-size: 18px;
      "
    >
      <v-col xl="11" cols="12">
        <v-sheet>
          <h3 style="font-size:20px;margin-left: 1.5%;color: rgb(170, 170, 170);"><b>AGREGAR USUARIO:</b></h3>
          <v-row>
            <v-col xl="6" lg="6" cols="12">
              <v-sheet>
                <p style="margin-left: 2.5%">Estatus</p>
                <v-select
                  :items="estatus"
                  v-model="value"
                  label=""
                  outlined
                  dense
                  style="width: 95%; margin-left: 2.5%"
                ></v-select>
              </v-sheet>
            </v-col>
            <v-col xl="6" lg="6" cols="12">
              <v-sheet>
                <p style="margin-left: 2.5%">Tipo de usuario</p>
                <v-select
                  :items="usuario"
                  v-model="value"
                  label=""
                  outlined
                  dense
                  style="width: 95%; margin-left: 2.5%"
                ></v-select>
              </v-sheet>
            </v-col>
            <v-col xl="6" lg="6" cols="12">
              <v-sheet>
                <p style="margin-left: 2.5%">Nombre*</p>
                <v-text-field
                  name="name"
                  label=""
                  id="name"
                  outlined
                  dense
                  style="width: 95%; margin-left: 2.5%"
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col xl="6" lg="6" cols="12">
              <v-sheet>
                <p style="margin-left: 2.5%">Correo*</p>
                <v-text-field
                  name="email"
                  label=""
                  id="email"
                  v-model="email"
                  :rules="emailRules"
                  outlined
                  dense
                  style="width: 95%; margin-left: 2.5%"
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col xl="6" lg="6" cols="12">
              <v-sheet>
                <p style="margin-left: 2.5%">Meta mensual*</p>
                <v-text-field
                  name="meta"
                  label=""
                  id="meta"
                  outlined
                  dense
                  type="number"
                  prepend-icon="fas fa-dollar-sign"
                  style="width: 95%; margin-left: 2.5%"
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col xl="6" lg="6" cols="12">
              <v-sheet>
                <p style="margin-left: 2.5%">¿Es vendedor?*</p>
                <v-select
                    :items="vendedor"
                    v-model="value"
                    label=""
                    outlined
                    dense
                    style="width: 95%; margin-left:2.5%;"
                ></v-select>
              </v-sheet>
            </v-col>
            <v-col xl="6" lg="6" cols="12">
              <v-sheet>
                <p style="margin-left: 2.5%">Contraseña*</p>
                <v-text-field
                  name="pass"
                  label=""
                  id="pass"
                  outlined
                  dense
                  type="password"
                  style="width: 95%; margin-left: 2.5%"
                ></v-text-field>
              </v-sheet>
            </v-col>
            <v-col xl="6" lg="6" cols="12">
              <v-sheet>
                <p style="margin-left: 2.5%">Repetir contraseña*</p>
                <v-text-field
                  name="pass"
                  label=""
                  id="pass"
                  outlined
                  dense
                  type="password"
                  style="width: 95%; margin-left: 2.5%"
                ></v-text-field>
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
</template>
<script>
export default {
  name: "FormUser",
  data: () => ({
    email:"",
    estatus: ["Activo", "No activo"],
    usuario: [
      "Invitado",
      "Agencia",
      "Administrador",
      "Administrador (Personalizado)",
      "Invitado (Personalizado)",
    ],
    vendedor:['Si', 'No'],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>