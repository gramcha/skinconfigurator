<template>

  <div id="shareScreenPanel" class="panel panel-default">
    <div class="form-group">
      <label class="control-label col-sm-4">Share Content</label>

      <span class="col-sm-6">
        <input type="checkbox" id="social" value="social" v-model="shareScreen.shareContent">
        <label for="social">social</label>
        <input type="checkbox" id="embed" value="embed" v-model="shareScreen.shareContent">
        <label for="embed">embed</label>
      </span>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-4">Social Content</label>

      <span class="col-sm-6">
        <input type="checkbox" id="twitter" value="twitter" v-model="shareScreen.socialContent">
        <label for="twitter">twitter</label>
        <input type="checkbox" id="facebook" value="facebook" v-model="shareScreen.socialContent">
        <label for="facebook">facebook</label>
        <input type="checkbox" id="google+" value="google+" v-model="shareScreen.socialContent">
        <label for="google+">google+</label>
        <input type="checkbox" id="email" value="email" v-model="shareScreen.socialContent">
        <label for="email">email</label>
      </span>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-4">Embed Source</label>

      <span class="col-sm-6">
          <input v-model="shareScreen.embed.source" placeholder="edit me">
        </span>
    </div>
  </div>
</template>
<script>
//  "shareScreen": {
//    "shareContent": [
//      "social",
//      "embed"
//    ],
//      "socialContent": [
//      "twitter",
//      "facebook",
//      "google+",
//      "email"
//    ],
//      "embed": {
//  "source": ""
//    }
//  },

  import SlotMixin from '@/mixins/slot';
  import { Photoshop } from 'vue-color';
  import vueSlider from 'vue-slider-component';


  export default {
    /**
     * The name of the component.
     */
    name: 'ShareScreen',

    /**
     * The mixins that the component can use.
     */
    mixins: [
      SlotMixin,
    ],

    /**
     * The properties that the component accepts.
     */
    props: {
      contextualStyle: {
        type: String,
        required: false,
      },
    },

    /**
     * The computed properties that the component can use.
     */
    computed: {
    },
    components: {
      'photoshop-picker': Photoshop,
      vueSlider,
    },
    data() {
      return {
        shareScreen: {
          shareContent: [
            'social',
            'embed',
          ],
          socialContent: [
            'twitter',
            'facebook',
            'google+',
            'email',
          ],
          embed: {
            source: "<iframe width='640' height='480' frameborder='0' allowfullscreen src='//player.ooyala.com/static/v4/stable/4.17.8/skin-plugin/iframe.html?ec=<ASSET_ID>&pbid=<PLAYER_ID>&pcode=<PUBLISHER_ID>'></iframe>",
          },
        },
      };
    },
    methods: {
    },
  };
</script>
