<template>
  <div id="adScreenPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <label class="control-label col-sm-6">Show Ad Marquee</label>
        <span class="col-sm-6">
          <input type="radio" id="showAdMarquee" value="true" v-model="adScreen.showAdMarquee">
          <label for="showAdMarquee">true</label> &nbsp;
          <input type="radio" id="hideAdMarquee" value="false" v-model="adScreen.showAdMarquee">
          <label for="hideAdMarquee">false</label>
        </span>
        <br>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-6">Show Ad Countdown</label>
        <span class="col-sm-6">
          <input type="radio" id="showAdCountdown" value="true" v-model="adScreen.showAdCountDown">
          <label for="showAdMarquee">true</label> &nbsp;
          <input type="radio" id="hideAdCountdown" value="false" v-model="adScreen.showAdCountDown">
          <label for="hideAdMarquee">false</label>
        </span>
        <br>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-6">Show Control Bar</label>
        <span class="col-sm-6">
          <input type="radio" id="showControlBar" value="true" v-model="adScreen.showControlBar">
          <label for="showControlBar">true</label> &nbsp;
          <input type="radio" id="hideControlBar" value="false" v-model="adScreen.showControlBar">
          <label for="hideControlBar">false</label>
        </span>
        <br>
      </div>

      </div>
  </div>
</template>
<script>
  //  "endScreen": {
  //    "screenToShowOnEnd": "discovery",
  //      "showReplayButton": true,
  //      "replayIconStyle": {
  //      "color": "white",
  //        "opacity": 1
  //    },
  //    "showTitle": false,
  //      "showDescription": false,
  //      "infoPanelPosition": "topLeft"
  //  }
  import SlotMixin from '@/mixins/slot';
  import EventBus from '@/GlobelEventBus/EventBus';

  export default {
    /**
     * The name of the component.
     */
    name: 'AdScreen',

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
    created() {
      EventBus.$on('skin-loaded', () => {
        this.adScreen = window.baseSkinInstance.adScreen;
      });
    },
    components: {
    },
    data() {
      return {
        adScreen: {
          showAdMarquee: true,
          showAdCountDown: true,
          showControlBar: false,
        },
      };
    },
    methods: {},
  };
</script>
