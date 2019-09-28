<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      light
      fixed
      app
    >
      <v-list>
        <v-list-item to="/">
          <v-icon large>home</v-icon>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-title>
            <h3>Artists</h3>
          </v-list-item-title>
        </v-list-item>
        
        <v-list-item
          v-for="(item, i) in artists"
          :key="i"
          :to="'/artist/'+item.route"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        
        <v-list-item>
          <v-list-item-title><h3>Studio</h3></v-list-item-title>
        </v-list-item>
        
        <v-list-item ripple to="/directions">
          <v-icon >place</v-icon>
          <v-list-item-content>
            <v-list-item-title> &nbsp;Get Directions</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item ripple to="/contact">
          <v-icon >message</v-icon>
          <v-list-item-content>
            <v-list-item-title> &nbsp;&nbsp;Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      
      <v-toolbar-title v-text="title" />
      <v-spacer />
      
    </v-app-bar>
    <v-content >
      <v-container  fluid >
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019 Valhalla Artworks</span>
    </v-footer>
  </v-app>
</template>

<script>
import artists from "../static/artist.json"

export default {
  data () {
    return {
      icon: 'arrow_right',
      artists: artists,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Valhalla Artworks'
    }
  }
}
</script>

<style scoped>
a,
a:hover {
  color: #42b983;
  text-decoration: none;
}
</style>
