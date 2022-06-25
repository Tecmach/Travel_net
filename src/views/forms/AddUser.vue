
<template>
  <div style="font-family: 'Montserrat'; sans-serif;">
    
      <div>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </div>
  <FormUser/>
  <TableCheckbox/>
  </div>
</template>
<script>
import FormUser from "../../components/add_user/Form.vue";
import TableCheckbox from   "../../components/add_user/TablaPermisos.vue";
export default {
  name: "addUser",
  components: {
      FormUser,
      TableCheckbox
  },
  
  data:()=>({
    
    items: [
      {
        text: "PANEL DE CONTROL",
        disabled: false,
        href: "/",
      },
      {
        text: "ADMIN",
        disabled: false,
        href: "reservas",
      },
      {
        text: "AGREGAR USUARIO",
        disabled: true,
        href: "#",
      },
    ],
  })
 
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400&display=swap");
</style>