<template>

  <div id="discoveryScreenPanel" class="panel panel-default">
    <!--<h4 id="startScreenHeader">Start Screen</h4>-->
    <div class="panel-body form-horizontal ">

      <div class="form-group">
        <label class="control-label col-sm-4">Panel Title Font Family</label>

        <span class="col-sm-6">
          <input v-model="discoveryScreen.panelTitle.titleFont.fontFamily" placeholder="Roboto Condensed">
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Panel Title Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('playTitleStyle')" >{{discoveryScreen.panelTitle.titleFont.color.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showPaneltitleFontColorPicker==true" v-model="discoveryScreen.panelTitle.titleFont.color" @ok="onOk('playTitleStyle')" @cancel="onCancel('playTitleStyle')" />
            </div>
        </span>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-4">Show Content Title</label>

      <span class="col-sm-6">
        <!--<input type="checkbox" id="showPlayButton" v-model="playButton">-->
          <input type="radio" id="show" value="true" v-model="discoveryScreen.contentTitle.show">
          <label for="show">true</label> &nbsp;
          <input type="radio" id="hide" value="false" v-model="discoveryScreen.contentTitle.show">
          <label for="hide">false</label>
        </span>
      <br>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-4">Content Title Font Family</label>

      <span class="col-sm-6">
          <input v-model="discoveryScreen.contentTitle.font.fontFamily" placeholder="Roboto Condensed">
        </span>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-4">Content Title Color</label>

      <span class="col-sm-6">
        <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('contentFont')" >{{discoveryScreen.contentTitle.font.color.hex}}</button>
        <div class="col-sm-7">
          <photoshop-picker v-if="showContentFontColorPicker==true" v-model="discoveryScreen.contentTitle.font.color" @ok="onOk('contentFont')" @cancel="onCancel('contentFont')" />
        </div>
      </span>
      <br>
    </div>



    <div class="form-group">
      <label class="control-label col-sm-4">Show CountDown Timer On End Screen</label>

      <span class="col-sm-6">
        <!--<input type="checkbox" id="showPlayButton" v-model="playButton">-->
          <input type="radio" id="showCountDown" value="true" v-model="discoveryScreen.showCountDownTimerOnEndScreen">
          <label for="showCountDown">true</label> &nbsp;
          <input type="radio" id="hideCountDown" value="false" v-model="discoveryScreen.showCountDownTimerOnEndScreen">
          <label for="hideCountDown">false</label>
        </span>
      <br>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-4">Count Down Time</label>

      <span class="col-sm-6">
        <vue-numeric  v-model="discoveryScreen.countDownTime"></vue-numeric>
      </span>
    </div>
  </div>
</template>
<script>

  import SlotMixin from '@/mixins/slot';
  import { Photoshop } from 'vue-color';
  import VueNumeric from 'vue-numeric';
  import EventBus from '@/GlobelEventBus/EventBus';
  import ColorCode from '@/utils/ColorCode';

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
    created() {
      function encodeToColorPickerObject() {
        console.log(this.discoveryScreen);
        if (this.discoveryScreen.panelTitle.titleFont.color &&
          typeof this.discoveryScreen.panelTitle.titleFont.color === 'string') {
          if (this.discoveryScreen.panelTitle.titleFont.color.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.discoveryScreen.panelTitle.titleFont.color);
            this.discoveryScreen.panelTitle.titleFont.color = { hex: hexcode };
            window.baseSkinInstance.discoveryScreen.panelTitle.titleFont.color =
              this.discoveryScreen.panelTitle.titleFont.color;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.discoveryScreen.panelTitle.titleFont.color);
            this.discoveryScreen.panelTitle.titleFont.color = { hex: hexcode };
            window.baseSkinInstance.discoveryScreen.panelTitle.titleFont.color =
              this.discoveryScreen.panelTitle.titleFont.color;
          }
        }
        if (this.discoveryScreen.contentTitle.font.color &&
          typeof this.discoveryScreen.contentTitle.font.color === 'string') {
          if (this.discoveryScreen.contentTitle.font.color.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.discoveryScreen.contentTitle.font.color);
            this.discoveryScreen.contentTitle.font.color = { hex: hexcode };
            window.baseSkinInstance.discoveryScreen.contentTitle.font.color =
              this.discoveryScreen.contentTitle.font.color;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.discoveryScreen.contentTitle.font.color);
            this.discoveryScreen.contentTitle.font.color = { hex: hexcode };
            window.baseSkinInstance.discoveryScreen.contentTitle.font.color =
              this.discoveryScreen.contentTitle.font.color;
          }
        }
      }
      EventBus.$on('skin-loaded', () => {
        this.discoveryScreen = window.baseSkinInstance.discoveryScreen;
        encodeToColorPickerObject.call(this);
      });
    },
    components: {
      'photoshop-picker': Photoshop,
      VueNumeric,
    },
    data() {
      return {
        discoveryScreen: {
          panelTitle: {
            titleFont: {
              fontFamily: 'Roboto Condensed',
              color: defaultWhiteColor,
            },
          },
          contentTitle: {
            show: true,
            font: {
              fontFamily: 'Roboto Condensed',
              color: defaultWhiteColor,
            },
          },
          showCountDownTimerOnEndScreen: true,
          countDownTime: 10,
        },
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
