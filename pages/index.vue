<template>
  <div class="uk-container-expand">
    <div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style="background-image: url('images/01.jpg');">
      <div class="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
          <h1 uk-parallax="opacity: 1,1,0; y: 100,0,-150; opacity: 1,0.5,0.25;  scale: 1.5,2,3; viewport: 0.9;">Valhalla Artworks</h1>
          <p uk-parallax="opacity: 1,1,0; y: 100,50,100; x: 0,-100,-100; scale: 1.2,0.5,0.25; viewport: 0.9;">A private tattoo studio and art gallery</p>
      </div>

    </div>
    <v-toolbar dark color="#262958">
    <v-icon>local_phone</v-icon>
    <v-toolbar-title>1 (856) 669-4345</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text><i class="fab fa-youtube-square social-icons" uk-parallax="scale: 1,1.2,1; viewport: 0.7;"></i></v-btn>
      <v-btn text><i class="fab fa-facebook-square social-icons" uk-parallax="scale: 1,1.2,1; viewport: 0.7;"></i></v-btn>
      <v-btn text><i class="fab fa-instagram social-icons" uk-parallax="scale: 1,1.2,1; viewport: 0.7;"></i></v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <div class="container-flex uk-padding-small">
    <div class="uk-child-width-1-3@m uk-flex-center uk-text-center" uk-grid>
      <div v-for="(artist, i) in artists" :key="i" uk-parallax="scale: .9,1,.9; viewport: 0.7;" >
        <nuxt-link v-bind:to="'/artist/' + artist.route">
          <div class="uk-text-left">
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                class="mx-auto"
                color="grey lighten-4"
                max-width="600"
              >
                <v-img
                  :aspect-ratio="16/9"
                  v-bind:src="artist.homeImg"
                >
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                      style="height: 100%;"
                    >
                      {{artist.name}}
                    </div>
                  </v-expand-transition>
                </v-img>
                <v-card-text class="pt-4" style="position: relative;">
                  <v-btn absolute color="#262958" class="white--text" fab large right top>
                    <v-icon>person</v-icon>
                  </v-btn>
                  <div class="font-weight-light grey--text title mb-2">Tattoo Artist</div>
                  <h3 class="display-1 font-weight-light blue-font mb-2">{{artist.name}}</h3>
                </v-card-text>
              </v-card>
            </v-hover>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>

  <div class="container-flex home-about uk-padding">
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-child-width-1-2@s uk-margin" uk-grid>
      <div class="uk-card-media-left uk-cover-container  uk-padding">
        <div class="uk-child-width-1-2 uk-text-center " uk-grid>
          <div>
            <img src="images/studio1.jpg">
          </div>
          <div>
            <img src="images/studio2.jpg">
          </div>
          <div>
            <img src="images/studio3.jpg">
          </div>
          <div>
            <img src="images/studio4.jpg">
          </div>
        </div>
      </div>
      <div>
          <div class="uk-card-body">
              <h2>About The Studio</h2>
              <p>Valhalla Artworks is a private tattoo & art studio located in the heart of South Jersey. Our artists come from a variety of art backgrounds, specializing in styles such as photo realism, illustration, bio organic & bio mechanical, neo traditional, traditional, new school, dark art, and many more. Whether this is your first piece of art or you're a seasoned collector, we'd love the opportunity to design a custom piece of art that you'll be proud to display.</p>
              <p>Since we operate as a private tattoo studio, we encourage everyone to schedule time with an artist for a consultation to discuss their thoughts and ideas for their next tattoo.  The best way to schedule a consultation is by selecting an artist and sending them a private message.  You can message artists directly via their profile page here on the studio's website or through their Facebook & Instagram accounts, also listed on their profile pages.  Each artist maintains their own schedule and can provide more specific information in regards to their scheduling and availability.</p>

          </div>
      </div>
    </div>
  </div>


</div>
</template>

<script>
import artists from "../static/artist.json"

export default {
  name: 'Home',
  data () {
    return {
      artists: artists
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
  color: #42b983;
  text-decoration: none;
}

.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .5;
position: absolute;
width: 100%;
}

.blue {
  color: #262958;
}

.get-social {
  background-color: #262958;
}

.home-about {
  background-color: #eee;
}

.social-icons {
  font-size: 30px;
}
</style>
