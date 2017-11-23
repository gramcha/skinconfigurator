<template>

  <div id="startScreenPanel" class="panel panel-default">
    <!--<h4 id="startScreenHeader">Start Screen</h4>-->
    <div class="panel-body form-horizontal ">

      <div class="form-group">
        <label class="control-label col-sm-6">Panel Title Font Family</label>

        <span class="col-sm-6">
          <input v-model="panelFontFamily" placeholder="Roboto Condensed">
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-6">Panel Title Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('playTitleStyle')" >{{colorsPanelTitle.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showPaneltitleFontColorPicker==true" v-model="colorsPanelTitle" @ok="onOk('playTitleStyle')" @cancel="onCancel('playTitleStyle')" />
            </div>
        </span>
      </div>
    </div>


    <div class="form-group">
      <label class="control-label col-sm-6">Content Title Font Family</label>

      <span class="col-sm-6">
          <input v-model="contentFontFamily" placeholder="Roboto Condensed">
        </span>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-6">Content Title Color</label>

      <span class="col-sm-6">
        <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('contentFont')" >{{colorsContentFont.hex}}</button>
        <div class="col-sm-7">
          <photoshop-picker v-if="showContentFontColorPicker==true" v-model="colorsContentFont" @ok="onOk('contentFont')" @cancel="onCancel('contentFont')" />
        </div>
      </span>
      <br>
    </div>



    <div class="form-group">
      <label class="control-label col-sm-6">Show CountDown Timer On End Screen</label>

      <span class="col-sm-6">
        <!--<input type="checkbox" id="showPlayButton" v-model="playButton">-->
          <input type="radio" id="showCountDown" value="true" v-model="checkedshowCountDownTimerOnEndScreen">
          <label for="showCountDown">true</label> &nbsp;
          <input type="radio" id="hideCountDown" value="false" v-model="checkedshowCountDownTimerOnEndScreen">
          <label for="hideCountDown">false</label>
        </span>
      <br>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-6">Count Down Time</label>

      <span class="col-sm-6">
          <vue-slider style="width: 300px;top: auto;bottom: 30px;left: 322px;" :min=1 :max=60 v-model="sliderCountDownTime"></vue-slider>
        </span>
    </div>
  </div>
</template>
<script>
  //  "startScreen": {
  //    "promoImageSize": "default",
  //      "showPlayButton": true,
  //      "playButtonPosition": "center",
  //      "playTitleStyle": {
  //      "color": "#ffffff",
  //        "opacity": 0.34
  //    },
  //    "showTitle": true,
  //      "showDescription": false,
  //      "titleFont": {
  //      "color": "white"
  //    },
  //    "contentFont": {
  //      "color": "white"
  //    },
  //    "infoPanelPosition": "topLeft",
  //      "showPromo": true
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
    name: 'DiscoveryScreen',

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
        colorsPanelTitle: defaultWhiteColor,
        colorsContentFont: defaultWhiteColor,
        showPaneltitleFontColorPicker: false,
        showContentFontColorPicker: false,
        checkedshowCountDownTimerOnEndScreen: true,
        panelFontFamily: 'Roboto Condensed',
        contentFontFamily: 'Roboto Condensed',
        sliderCountDownTime: 10,
      };
    },
    methods: {
      onOk(objName) {
        switch (objName) {
          case 'playTitleStyle':
            this.showPaneltitleFontColorPicker = false;
            break;
          case 'contentFont':
            this.showContentFontColorPicker = false;
            break;
          default:
            console.log('unkfalsewn ui obj');
        }
      },
      onCancel(objName) {
        switch (objName) {
          case 'playTitleStyle':
            this.showPaneltitleFontColorPicker = false;
            break;
          case 'contentFont':
            this.showContentFontColorPicker = false;
            break;
          default:
            console.log('unkfalsewn ui obj');
        }
      },
      displayColorPicker(objName) {
        switch (objName) {
          case 'playTitleStyle':
            this.showPaneltitleFontColorPicker = true;
            break;
          case 'contentFont':
            this.showContentFontColorPicker = true;
            break;
          default:
            console.log('unkfalsewn ui obj');
        }
      },
    },
  };
</script>
<style scoped>

</style>
