<template>

  <div id="shareScreenPanel" class="panel panel-default">
    <div class="form-group">
      <label class="control-label col-sm-4">Share Content</label>

      <span class="col-sm-6">
        <input type="checkbox" id="social" value="social" v-model="checkedShareContents">
        <label for="social">social</label>
        <input type="checkbox" id="embed" value="embed" v-model="checkedShareContents">
        <label for="embed">embed</label>
      </span>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-4">Social Content</label>

      <span class="col-sm-6">
        <input type="checkbox" id="twitter" value="twitter" v-model="checkedShareContents">
        <label for="twitter">twitter</label>
        <input type="checkbox" id="facebook" value="facebook" v-model="checkedShareContents">
        <label for="facebook">facebook</label>
        <input type="checkbox" id="google+" value="google+" v-model="checkedShareContents">
        <label for="google+">google+</label>
        <input type="checkbox" id="email" value="email" v-model="checkedShareContents">
        <label for="email">email</label>
      </span>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-4">Embed Source</label>

      <span class="col-sm-6">
          <input v-model="embedSource" placeholder="edit me">
        </span>
    </div>
  </div>
</template>
<script>
  //  "discoveryScreen": {
  //    "panelTitle": {
  //      "titleFont": {
  //        "fontFamily": "Roboto Condensed",
  //          "color": "white"
  //      }
  //    },
  //    "contentTitle": {
  //      "show": true,
  //        "font": {
  //        "fontFamily": "Roboto Condensed",
  //          "color": "white"
  //      }
  //    },
  //    "showCountDownTimerOnEndScreen": true,
  //      "countDownTime": 10
  //  }

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
        checkedShareContents: ['social', 'embed'],
        checkedSocialContent: ['twitter', 'facebook', 'google+', 'email'],
        embedSource: "<iframe width='640' height='480' frameborder='0' allowfullscreen src='//player.ooyala.com/static/v4/stable/4.17.8/skin-plugin/iframe.html?ec=<ASSET_ID>&pbid=<PLAYER_ID>&pcode=<PUBLISHER_ID>'></iframe>",
      };
    },
    methods: {
    },
  };
</script>
<style scoped>

</style>
