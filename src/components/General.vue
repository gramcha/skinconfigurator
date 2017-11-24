<template>
  <div id="generalPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">


      <div style="border-style: solid; border-color:lightgrey">
        <legend>Watermark</legend>
        <div class="form-group" style="">
          <label class="control-label col-sm-4">Image Url</label>

          <span class="col-sm-6">
          <input v-model="general.watermark.imageResource.url" placeholder="edit me" class="col-sm-7">
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Android Resource</label>

          <span class="col-sm-6">
          <input v-model="general.watermark.imageResource.androidResource" placeholder="edit me" class="col-sm-7">
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Ios Resource</label>

          <span class="col-sm-6">
          <input v-model="general.watermark.imageResource.iosResource" placeholder="edit me" class="col-sm-7">
        </span>
        </div>


        <div class="form-group">
          <label class="control-label col-sm-4">Position</label>

          <span class="col-sm-6">
          <select v-model="general.watermark.position" style="width:150px;">
            <option>topLeft</option>
            <option>topRight</option>
            <option>bottomLeft</option>
            <option>bottomRight</option>
            <option>centerBottom</option>
            <option>centerTop</option>
            <option>rightCenter</option>
            <option>leftCenter</option>
          </select>
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Clcik Url</label>

          <span class="col-sm-6">
          <input v-model="general.watermark.clickUrl" placeholder="edit me" class="col-sm-7">
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Target</label>

          <span class="col-sm-6">
          <input v-model="general.watermark.target" placeholder="edit me" class="col-sm-7">
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Transparency</label>

          <span class="col-sm-6">
            <vue-numeric  v-model="general.watermark.transparency" :min="0" :max="1" v-bind:precision="2" ></vue-numeric>
          </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Scaling Option</label>

          <span class="col-sm-6">
          <select v-model="general.watermark.scalingOption" style="width:150px;">
            <option>none</option>
            <option>width</option>
            <option>height</option>
            <option>default</option>
          </select>
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Scaling Percentage</label>

          <span class="col-sm-6">
            <vue-numeric  v-model="general.watermark.scalingPercentage" :min="0" :max="100"></vue-numeric>
          </span>
        </div>
      </div>
      <div>
        <br>
        <!--rest of the general items-->
        <div class="form-group">
          <label class="control-label col-sm-4">Buffering Spinner Delay</label>

          <span class="col-sm-6">
            <vue-numeric  v-model="general.bufferingSpinnerDelay"></vue-numeric>
          </span>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-4">Loading Image Url</label>

          <span class="col-sm-6">
          <input v-model="general.loadingImage.imageResource.url" placeholder="edit me" class="col-sm-7">
        </span>
        </div>
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
  import VueNumeric from 'vue-numeric';


  export default {
    /**
     * The name of the component.
     */
    name: 'General',

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
    computed: {},
    components: {
      VueNumeric,
    },
    data() {
      return {
        general: {
          watermark: {
            imageResource: {
              url: '',
              androidResource: 'logo',
              iosResource: 'logo',
            },
            position: 'bottomRight',
            clickUrl: '',
            target: '_blank',
            transparency: 1,
            scalingOption: 'default',
            scalingPercentage: 20,
          },
          bufferingSpinnerDelay: 750,
          loadingImage: {
            imageResource: {
              url: '//player.ooyala.com/static/v4/stable/4.17.8/skin-plugin/assets/images/loader_svg.svg',
            },
          },
          accentColor: '#103676',
        },
      };
    },
    methods: {},
  };
</script>
<style scoped>

</style>
