<template>
  <div id="moreOptionsScreenPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">

      <div class="form-group">
        <label class="control-label col-sm-4">Bright Opacity(%)</label>

        <span class="col-sm-6">
          <vue-slider style="width: 300px;top: auto;bottom: 30px;left: 222px;" v-model="sliderBrightOpacity"></vue-slider>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Dark Opacity(%)</label>

        <span class="col-sm-6">
          <vue-slider style="width: 300px;top: auto;bottom: 30px;left: 222px;" v-model="sliderDarkOpacity"></vue-slider>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Icon Size</label>

        <span class="col-sm-6">
          <input v-model="iconSize" placeholder="edit me">
        </span>
      </div>



      <div class="form-group">
        <label class="control-label col-sm-4">Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('color')" >{{colors.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showColorPicker==true" v-model="colors" @ok="onOk('color')" @cancel="onCancel('color')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Icon Style Active Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('activecolor')" >{{activeColors.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showActiveColorPicker==true" v-model="activeColors" @ok="onOk('activecolor')" @cancel="onCancel('activecolor')" />
            </div>
        </span>
      </div>


      <div class="form-group">
        <label class="control-label col-sm-4">Icon Style Active Color Opacity(%)</label>

        <span class="col-sm-6">
          <vue-slider style="width: 300px;top: auto;bottom: 30px;left: 222px;" v-model="sliderActiveOpacity"></vue-slider>
        </span>
      </div>


      <div class="form-group">
        <label class="control-label col-sm-4">Icon Style InActive Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('inactivecolor')" >{{inactiveColors.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showInActiveColorPicker==true" v-model="inactiveColors" @ok="onOk('inactivecolor')" @cancel="onCancel('inactivecolor')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Icon Style InActive Color Opacity(%)</label>

        <span class="col-sm-6">
          <vue-slider style="width: 300px;top: auto;bottom: 30px;left: 222px;" v-model="sliderInActiveOpacity"></vue-slider>
        </span>
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
    name: 'MoreOptionsScreen',

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
        colors: defaultWhiteColor,
        activeColors: defaultWhiteColor,
        inactiveColors: defaultWhiteColor,
        sliderBrightOpacity: 100,
        sliderDarkOpacity: 40,
        iconSize: 30,
        showColorPicker: false,
        showActiveColorPicker: false,
        showInActiveColorPicker: false,
        sliderActiveOpacity: 100,
        sliderInActiveOpacity: 95,


      };
    },
    methods: {
      onOk(objName) {
        switch (objName) {
          case 'color':
            this.showColorPicker = false;
            break;
          case 'activecolor':
            this.showActiveColorPicker = false;
            break;
          case 'inactivecolor':
            this.showInActiveColorPicker = false;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
      onCancel(objName) {
        switch (objName) {
          case 'color':
            this.showColorPicker = false;
            break;
          case 'activecolor':
            this.showActiveColorPicker = false;
            break;
          case 'inactivecolor':
            this.showInActiveColorPicker = false;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
      displayColorPicker(objName) {
        switch (objName) {
          case 'color':
            this.showColorPicker = true;
            break;
          case 'activecolor':
            this.showActiveColorPicker = true;
            break;
          case 'inactivecolor':
            this.showInActiveColorPicker = true;
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
