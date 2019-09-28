<template>
  <div>
    <div class="container-flex">
      <iframe v-bind:src="googleMap" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <v-toolbar dark color="#262958">
        <a v-bind:href="googleDirections">
          <v-icon >place</v-icon>
        </a>
      <a href="https://maps.google.com/maps?ll=39.799453,-74.939573&z=16&t=m&hl=en-US&gl=US&mapclient=embed&daddr=Valhalla%20Artworks%2037%20Clementon%20Rd%20Berlin%2C%20NJ%2008009@39.79945319999999,-74.93957329999999">
        <v-toolbar-title>  Get Directions</v-toolbar-title>
      </a>
    </v-toolbar>
    <div class="container-flex directions uk-padding" >
      <div class="uk-card uk-card-default uk-align-center" style="max-width: 500px;">
        <div class="uk-card-body">
          <h2>Valhalla Artworks</h2>
          <h4>
          <div>37 Clementon Rd, Ste B</div>
          <div>Berlin NJ 08009</div>
          <br>
          <div class="mt-2">1.856.669.4345</div>
          </h4>
          <div>
            <a class="uk-button uk-button-primary" v-bind:href="googleDirections">Get Directions</a>
          </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Directions',
  props: {
    msg: String
  },
  data() {
    return {
      googleDirections: 'https://maps.google.com/maps?ll=39.799453,-74.939573&z=16&t=m&hl=en-US&gl=US&mapclient=embed&daddr=Valhalla%20Artworks%2037%20Clementon%20Rd%20Berlin%2C%20NJ%2008009@39.79945319999999,-74.93957329999999',
      googleMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.3360516756698!2d-74.9417619842934!3d39.7994531794418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c12d6619694969%3A0x98807d800b8512c5!2sValhalla+Artworks!5e0!3m2!1sen!2sus!4v1536180838513'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #FFF;
}
.directions {
  background-color: #eee;
}
</style>
