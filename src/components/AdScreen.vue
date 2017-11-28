<template>
  <div id="adScreenPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <label class="control-label col-sm-6">Show Ad Marquee</label>
        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="adScreen.showAdMarquee"
                 :value="adScreen.showAdMarquee"
                 name="showAdMarquee" id="showAdMarquee">
          <label for="showAdMarquee">{{adScreen.showAdMarquee}}</label>
        </span>
        <br>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-6">Show Ad Countdown</label>
        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="adScreen.showAdCountDown"
                 :value="adScreen.showAdCountDown"
                 name="showAdCountDown" id="showAdCountDown">
          <label for="showAdCountDown">{{adScreen.showAdCountDown}}</label>
        </span>
        <br>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-6">Show Control Bar</label>
        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="adScreen.showControlBar"
                 :value="adScreen.showControlBar"
                 name="showControlBar" id="showControlBar">
          <label for="showControlBar">{{adScreen.showControlBar}}</label>
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
