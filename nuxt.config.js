import colors from 'vuetify/es5/util/colors'
import artists from "./static/artist.json";

export default {
  data() {
    return {
      artists: artists
    }
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Valhalla Artworks',
    title: 'Valhalla Artworks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#a5a5a5' },
  /*
  ** Global CSS
  */
 css: ['uikit/dist/css/uikit.css'],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  { src: '~/plugins/uikit.js', ssr: false }
],
generate: {
  routes() {
       return artists.map((artist) => {
           return {
              route: '/artist/' + artist.route,
              payload: artist
           }
       })
   }
},
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-27655139-1'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
