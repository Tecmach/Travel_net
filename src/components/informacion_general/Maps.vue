
<template>
    <v-row>
      <v-col cols="12" xl="10" style="background-color: ">
        <v-sheet>
  <gmap-map
    :center="center"
    :zoom="16"
    style="width: 95%; height: 500px; margin-left:2.5%; border-radius:10px;"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :title="m.title"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
        </v-sheet>
      </v-col>
    </v-row>
</template>
<script>
  export default {
    name:'Maps',
    data () {
      return {
        
        center: {lat: this.latitude, lng: this.longitude},
        markers: [{
          position: {lat: this.latitude, lng: this.longitude},
          title: this.title
        }]
      }
    },

    props: {
        latitude: Number,
        longitude: Number,
        title: String
    }
  }
</script>
