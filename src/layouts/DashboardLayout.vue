<template>
<v-app>
  <v-overlay :value="getOver">
    <v-progress-circular
        indeterminate
        size="64"
    ></v-progress-circular>
  </v-overlay>
  <Navbar></Navbar>
    <v-main class="fadeIn">
      <slot/>
    </v-main>
</v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {mapActions, mapGetters} from "vuex";
export default {
  name: "DashboardLayout",
  components:{
    Navbar,
    Sidebar,
  },
  computed:{
    ...mapGetters(['getOver'])
  },
  methods:{
    ...mapActions(['setOver'])
  },
  created() {

  }
}
</script>

<style scoped>

</style>