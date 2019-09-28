<template>
  <div class="uk-container-expand">
    <div class="uk-padding">
      <div class="uk-grid uk-grid-match uk-child-width-1-2@s uk-child-width-1-2@m uk-grid-collapse" uk-grid>
        <div class="uk-padding-small">
          <div class="uk-card uk-card-default uk-padding ">
            <h2>Contact {{name}}</h2>
            <div v-if="artist">
              <p> Current wait for an appointment is approximately {{ artist.current_wait }}</p>
              <p v-if="artist.does_not_tattoo.length"> {{ artist.name }} is <strong>NOT</strong> taking appointments for the following:</p> 
              <ul>
                <li v-for="(item, index) in artist.does_not_tattoo" :key="'does-not-tattoo-' + index"> {{ item }} </li>
              </ul>
            </div>
              <div v-if="isVisible">
                <form v-on:submit.prevent="onSubmit" method="post" v-if="this.artist.name !== 'Ryan Lebiedzinski'">
                  <fieldset class="uk-fieldset">
                      <div class="uk-margin">
                          <input class="uk-input" type="email" placeholder="E-mail" name="email" v-model="senderEmail">
                      </div>
                      <div class="uk-margin">
                          <input class="uk-input" type="text" placeholder="Phone" name="phone" v-model="phone">
                      </div>

                      <div class="uk-margin">
                          <textarea class="uk-textarea" rows="5" placeholder="Message" v-model="message" name="comments"></textarea>
                      </div>
                      <button class="uk-button uk-button-primary">Send</button>
    		                <input type="hidden" name="artist" v-bind:value="email">
                  </fieldset>
                </form>
              </div>
              <div v-if="!isVisible">
                <h3>Thank you</h3>
                <p>Your email was sent to {{name}}</p>
              </div>
              <div v-if="this.artist.name == 'Ryan Lebiedzinski'">
                {{this.artist.name}} schedules appointments and consultations directly through <a :href="this.artist.profile.social.website"> {{ this.artist.profile.social.website }} </a>
              </div>
            </div>
          </div>
          <div  class="uk-padding-small">
            <div class="uk-card uk-card-default uk-padding">
              <div class="uk-grid uk-child-width-1-2@s" uk-grid>
                <div>
                <img src="/images/map.jpg">
              </div>
              <div>
                <h2>Valhalla Artworks</h2>
                <h4>
                <div>37 Clementon Rd, Ste B</div>
                <div>Berlin NJ 08009</div>
                <br>
                <div class="mt-2">1.856.669.4345</div>
              </h4>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
import UIkit from "uikit"
import artists from "../static/artist.json"

export default {
  name: 'contactinfo',
  data: function () {
    return {
      isVisible: true,
      senderEmail: '',
      phone: '',
      message: '',
      artists: artists,
      artistName: this.$route.params.name    
      }
  },
  props: ['name', 'email'],
  computed: {
    artist() {
      let index = this.artists.findIndex( x => x.route == this.artistName );
      if( index >= 0 ) {
        return this.artists[index];
      }
      return false;
    }
  },
  methods: {
    onSubmit () {

      if( !this.validate() ){
        return false;
      }


      var formData = new FormData();
      formData.append("to", this.email);
      formData.append("sender", this.senderEmail);
      formData.append("phone", this.phone);
      formData.append("message", this.message);
      fetch('https://www.valhallaartworks.com/email.php', {
        method: "POST",
        //credentials: "",
        //mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: this.email,
          sender: this. senderEmail,
          phone: this.phone,
          message: this.message
        })
      })
      .then(res => res.json())
      .then(response => {
        if(response.success){
          this.isVisible = !this.isVisible;
        }
      });
    },
    validate() {
      var validate = true;
      if( !this.senderEmail ) {
        this.notify('Please provide a valid e-mail.');
        validate = false
      }
      if( !this.phone ) {
        this.notify('Please provide a valid phone number.');
        validate = false
      }
      if( !this.message ) {
        this.notify('Please provide a message.');
        validate = false
      }

      return validate;
      
    },
    notify( msg ) {
      UIkit.notification( msg );
    }
  }
}
</script>

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
