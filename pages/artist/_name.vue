<template>
  <div class="uk-container-expand">

       <div class="uk-card uk-card-default uk-padding-small uk-margin-bottom">
         <div class="uk-grid uk-child-width-1-2@m" uk-grid>
           <div>
            <div class="uk-grid uk-child-width-1-2@l" uk-grid>
              <div  v-if="artist.profile.img1">
                <v-img :aspect-ratio="16/9" v-bind:src="'/' + artist.profile.img1"></v-img>
              </div>
              <div  v-if="artist.profile.img2">
                <v-img :aspect-ratio="16/9" v-bind:src="'/' + artist.profile.img2"></v-img>
              </div>
              <div  v-if="artist.profile.img3">
                <v-img :aspect-ratio="16/9" v-bind:src="'/' + artist.profile.img3"></v-img>
              </div>
              <div  v-if="artist.profile.img4">
                <v-img :aspect-ratio="16/9" v-bind:src="'/' + artist.profile.img4"></v-img>
              </div>
            </div>
           </div>
          <div>
            <h2>About {{artist.name}}</h2>
            <p>{{artist.profile.about}}</p>

            <p><button v-if="artist.appointment_link" class="uk-button uk-button-default uk-margin-small-right" style=" background-color: #2996cc; color: white; height: 40px; text-transform: uppercase; font-family: 'Square Market', 'helvetica neue', helvetica, arial, sans-serif; letter-spacing: 1px; line-height: 38px; padding: 0 28px; border-radius: 3px; font-weight: 500; font-size: 14px; cursor: pointer; display: inline-block; " type="button" uk-toggle="target: #booking-modal">Book An Appointment</button></p>
            <!-- This is the modal -->
            <div id="booking-modal" uk-modal>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">Booking an Appointment</h2>
                    <p>It's always best to communicate with your tattoo artist prior to blindly scheduling an appointment.  Please confirm the following:</p>
                    <ul>
                      <li>1. Artist has been contacted</li>
                      <li>2. Artist is able/willing to complete your project</li>
                      <li>3. Artist has provided the approximate time necessary</li>
                    </ul>
                    <p class="uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                        <a target="_blank" style=" background-color: #2996cc; color: white; height: 40px; text-transform: uppercase; font-family: 'Square Market', 'helvetica neue', helvetica, arial, sans-serif; letter-spacing: 1px; line-height: 38px; padding: 0 28px; border-radius: 3px; font-weight: 500; font-size: 14px; cursor: pointer; display: inline-block; " :href="artist.appointment_link">Yes, I confirm</a>
                    </p>
                </div>
            </div>
            
            <h4> Current wait for an appointment:</h4> 
            <p> Approximately {{ artist.current_wait }}</p>
            
            
            <h4 v-if="artist.does_not_tattoo.length">Not taking appointments for the following:</h4> 
            <ul>
              <li v-for="(item, index) in artist.does_not_tattoo" :key="'does-not-tattoo-' + index"> {{ item }} </li>
            </ul>

            

            <div>
              <span v-if="artist.profile.social.youtube !== ''"><a v-bind:href="artist.profile.social.youtube"><i class="fab fa-youtube-square social-icons"></i></a></span>
              <span v-if="artist.profile.social.facebook !== ''"><a v-bind:href="artist.profile.social.facebook"><i class="fab fa-facebook-square social-icons"></i></a></span>
              <span v-if="artist.profile.social.instagram !== ''"><a v-bind:href="artist.profile.social.instagram"><i class="fab fa-instagram social-icons"></i></a></span>
              <span v-if="artist.profile.social.website !== ''"><a v-bind:href="artist.profile.social.website"><i class="fas fa-address-card social-icons"></i></a></span>
            </div>
          </div>
        </div>
       </div>

    <div style="clear:both"> </div>
    
    <div class="uk-grid uk-grid-collapse uk-child-width-1-6@l" uk-grid>
      <div v-for="(tattoo, i) in artist.profile.portfolio.tattoothumb" :key="'index-artist-' + i"  class="uk-padding-small" uk-lightbox >
        <a v-bind:href="'/' + tattoo.large">
          <div class="uk-card uk-padding-small uk-card-default uk-flex uk-card-body uk-card-hover">
            <v-img :aspect-ratio="1/1" v-bind:src="'/' + tattoo.small"></v-img>
          </div>
        </a>
      </div>
    </div>

    <contactinfo v-bind:name="artist.name" v-bind:email="artist.email" class="uk-container-expand"></contactinfo>

  </div>
</template>


<script>
import contactinfo from '../../components/contactinfo'
import artists from "../../static/artist.json"

export default {
  name: 'artist-id',
  components: {
    contactinfo
  },
  data() {
    return {
      artists: artists,
      artistName: this.$route.params.name
    }
  },
  computed: {
    artist() {
      let index = this.artists.findIndex( x => x.route == this.artistName );
      return this.artists[index];
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
}
.artist-about {
  background-color: #eee;
}
.social-icons {
  font-size: 50px;
  margin-right: 10px;
  color: #262958;
}
</style>
