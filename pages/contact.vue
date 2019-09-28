<template>
  <contactinfo name="Valhalla Artworks" email="mj@valhallaartworks.com"></contactinfo>
</template>

<script>
import contactinfo from '../components/contactinfo'

export default {
  name: 'Contact',
  components: {
    contactinfo
  },
  props: {
    msg: String
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
  color: #42b983;
}
</style>
