<template>
  <div id="pauseScreenPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <label class="control-label col-sm-6">Show Pause Button</label>
        <span class="col-sm-6">
          <input type="radio" id="showPauseButton" value="true" v-model="checkedShowPauseButton">
          <label for="showPauseButton">true</label> &nbsp;
          <input type="radio" id="hidePauseButton" value="false" v-model="checkedShowPauseButton">
          <label for="hidePauseButton">false</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-6">Play Button Position</label>

        <span class="col-sm-6">
          <select v-model="pickedPauseButtonPosition" style="width:150px;">
            <option>center</option>
            <option>topLeft</option>
            <option>topRight</option>
            <option>bottomLeft</option>
            <option>bottomRight</option>
          </select>
        </span>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-6">Pause Icon Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('pauseIconStyle')" >{{colorsPauseIcon.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showPauseIconColorPicker==true" v-model="colorsPauseIcon" @ok="onOk('pauseIconStyle')" @cancel="onCancel('pauseIconStyle')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-6">Pause Icon Opacity(%)</label>

        <span class="col-sm-6">
          <vue-slider style="width: 300px;top: auto;bottom: 30px;left: 322px;" v-model="sliderIconOpacity"></vue-slider>
        </span>
      </div>

      <div class="form-group" style="margin-top: -38px;">
        <label class="control-label col-sm-6">Show Title</label>

        <span class="col-sm-6">
        <!--<input type="checkbox" id="showPauseButton" v-model="playButton">-->
          <input type="radio" id="showTitle" value="true" v-model="checkedshowTitle">
          <label for="showTitle">true</label> &nbsp;
          <input type="radio" id="hideTitle" value="false" v-model="checkedshowTitle">
          <label for="hideTitle">false</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-6">Show Description</label>

        <span class="col-sm-6">
        <!--<input type="checkbox" id="showPauseButton" v-model="playButton">-->
          <input type="radio" id="showDescription" value="true" v-model="checkedshowDescription">
          <label for="showDescription">true</label> &nbsp;
          <input type="radio" id="hideDescription" value="false" v-model="checkedshowDescription">
          <label for="hideDescription">false</label>
        </span>
        <br>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-6">Info Panel Position</label>

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
      <label class="control-label col-sm-6">Screen to show on Pause</label>

      <span class="col-sm-6">
          <select v-model="screenToShowOnPause" style="width:150px;">
            <option>default</option>
            <option>discovery</option>
          </select>
        </span>
    </div>
  </div>
</template>
<script>
//  "pauseScreen": {
//    "showPauseIcon": true,
//      "pauseIconPosition": "center",
//      "PauseIconStyle": {
//      "color": "white",
//        "opacity": 1
//    },
//    "showTitle": true,
//      "showDescription": true,
//      "infoPanelPosition": "topLeft",
//      "screenToShowOnPause": "default"
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
    name: 'PauseScreen',

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
      /**
       * Computed property which will compute the classes
       * for the header of the card.
       *
       * @returns {Array} The classes for the header.
       */
      classNamesHeader() {
        const classNames = ['card-header'];

        if (this.contextualStyle) {
          classNames.push(`bg-${this.contextualStyle}`);
          classNames.push('text-white');
        } else {
          classNames.push('bg-default');
        }

        return classNames;
      },
    },
    components: {
      'photoshop-picker': Photoshop,
      vueSlider,
    },
    data() {
      return {
        colorsPauseIcon: defaultWhiteColor,

        sliderIconOpacity: 100,
        checkedShowPauseButton: true,
        pickedPauseButtonPosition: 'center',
        showPauseIconColorPicker: false,
        checkedshowTitle: true,
        checkedshowDescription: false,
        infoPanelPosition: 'topLeft',
        screenToShowOnPause: 'default',
      };
    },
    methods: {
      onOk(objName) {
        switch (objName) {
          case 'pauseIconStyle':
            this.showPauseIconColorPicker = false;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
      onCancel(objName) {
        switch (objName) {
          case 'pauseIconStyle':
            this.showPauseIconColorPicker = false;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
      displayColorPicker(objName) {
        switch (objName) {
          case 'pauseIconStyle':
            this.showPauseIconColorPicker = true;
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
