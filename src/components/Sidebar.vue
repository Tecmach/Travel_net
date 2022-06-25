<template>


</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: "SideBar",
  computed: {
    ...mapGetters(['getDraw', 'getOver'])
  }
};
</script>

<style scoped>
.link {
  text-decoration: none !important;
}


</style>