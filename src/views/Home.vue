<template>
<div style="width:100%; height:100%;">
</div>
</template>

<script>
import Dashboard from "./Dashboard.vue";
import Cotizador from "./Cotizador.vue";
import { mapGetters } from 'vuex';
export default {
  data: () => ({
  }),
  methods:{
  },
  created(){
    console.log(this.getPage);
    if(!this.getPage) this.$router.push('/cotizador');
    else this.$router.push('/dash');
  },

  components: {
    Dashboard,
    Cotizador,
  },
  computed:{
    ...mapGetters(['getPage']),
    ...mapGetters('auth', ['getToken']),
  }
};
</script>

<style>
</style>