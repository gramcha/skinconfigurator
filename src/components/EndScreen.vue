<template>
  <div id="endScreenPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <label class="control-label col-sm-4">Show Replay Button</label>
        <span class="col-sm-6">
          <input type="radio" id="showReplayButton" value="true" v-model="checkedShowReplayButton">
          <label for="showReplayButton">true</label> &nbsp;
          <input type="radio" id="hideReplayButton" value="false" v-model="checkedShowReplayButton">
          <label for="hideReplayButton">false</label>
        </span>
        <br>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Replay Icon Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('replayIconStyle')" >{{colorsReplayIcon.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showReplayIconColorPicker==true" v-model="colorsReplayIcon" @ok="onOk('replayIconStyle')" @cancel="onCancel('replayIconStyle')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Replay Icon Opacity(%)</label>

        <span class="col-sm-6">
          <vue-slider style="width: 300px;top: auto;bottom: 30px;left: 222px;" v-model="sliderIconOpacity"></vue-slider>
        </span>
      </div>

      <div class="form-group" style="margin-top: -38px;">
        <label class="control-label col-sm-4">Show Title</label>

        <span class="col-sm-6">
        <!--<input type="checkbox" id="showReplayButton" v-model="playButton">-->
          <input type="radio" id="showTitle" value="true" v-model="checkedshowTitle">
          <label for="showTitle">true</label> &nbsp;
          <input type="radio" id="hideTitle" value="false" v-model="checkedshowTitle">
          <label for="hideTitle">false</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Show Description</label>

        <span class="col-sm-6">
        <!--<input type="checkbox" id="showReplayButton" v-model="playButton">-->
          <input type="radio" id="showDescription" value="true" v-model="checkedshowDescription">
          <label for="showDescription">true</label> &nbsp;
          <input type="radio" id="hideDescription" value="false" v-model="checkedshowDescription">
          <label for="hideDescription">false</label>
        </span>
        <br>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-4">Info Panel Position</label>

      <span class="col-sm-6">
          <select v-model="infoPanelPosition" style="width:150px;">
            <option>topLeft</option>
            <option>topRight</option>
            <option>bottomLeft</option>
            <option>bottomRight</option>
          </select>
        </span>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-4">Screen to show on End</label>

      <span class="col-sm-6">
          <select v-model="screenToShowOnEND" style="width:150px;">
            <option>default</option>
            <option>discovery</option>
          </select>
        </span>
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
  import { Photoshop } from 'vue-color';
  import vueSlider from 'vue-slider-component';

  const defaultWhiteColor = {
    hex: '#FFFFFF',
    hsl: {
      h: 0,
      s: 0,
      l: 100,
      a: 1,
    },
    hsv: {
      h: 0,
      s: 0,
      v: 100,
      a: 1,
    },
    rgba: {
      r: 255,
      g: 255,
      b: 255,
      a: 1,
    },
    a: 1,
  };

  export default {
    /**
     * The name of the component.
     */
    name: 'EndScreen',

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
        colorsReplayIcon: defaultWhiteColor,

        sliderIconOpacity: 100,
        checkedShowReplayButton: true,
        pickedPauseButtonPosition: 'center',
        showReplayIconColorPicker: false,
        checkedshowTitle: true,
        checkedshowDescription: false,
        infoPanelPosition: 'topLeft',
        screenToShowOnEND: 'discovery',
      };
    },
    methods: {
      onOk(objName) {
        switch (objName) {
          case 'replayIconStyle':
            this.showReplayIconColorPicker = false;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
      onCancel(objName) {
        switch (objName) {
          case 'replayIconStyle':
            this.showReplayIconColorPicker = false;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
      displayColorPicker(objName) {
        switch (objName) {
          case 'replayIconStyle':
            this.showReplayIconColorPicker = true;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
    },
  };
</script>
<style scoped>

</style>
