<template>
  <div id="closedCaptionOptionPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">


      <div class="form-group">
        <label class="control-label col-sm-4">Enabled</label>
        <span class="col-sm-6">
          <input type="radio" id="ccEnabled" value="true" v-model="closedCaptionOptions.enabled">
          <label for="ccEnabled">true</label> &nbsp;
          <input type="radio" id="ccDisabled" value="false" v-model="closedCaptionOptions.enabled">
          <label for="ccDisabled">false</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Language</label>
        <span class="col-sm-6">
         <input v-model="closedCaptionOptions.language" placeholder="edit me" class="col-sm-7">
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">textColor</label>
        <span class="col-sm-6">
         <button type="button" class="btn btn-outline-primary"
                 v-on:click="displayColorPicker('textColor')">{{closedCaptionOptions.textColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showtextColorPicker==true" v-model="closedCaptionOptions.textColor"
                                @ok="onOk('textColor')" @cancel="onCancel('textColor')"/>
            </div>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Window Color</label>
        <span class="col-sm-6">
         <button type="button" class="btn btn-outline-primary"
                 v-on:click="displayColorPicker('windowColor')">{{closedCaptionOptions.windowColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showwindowColorPicker==true" v-model="closedCaptionOptions.windowColor"
                                @ok="onOk('windowColor')" @cancel="onCancel('windowColor')"/>
            </div>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">backgroundColor</label>
        <span class="col-sm-6">
         <button type="button" class="btn btn-outline-primary"
                 v-on:click="displayColorPicker('backgroundColor')">{{closedCaptionOptions.backgroundColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showbackgroundColorPicker==true" v-model="closedCaptionOptions.backgroundColor"
                                @ok="onOk('backgroundColor')" @cancel="onCancel('backgroundColor')"/>
            </div>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">textOpacity</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="closedCaptionOptions.textOpacity" :min="0" :max="1" v-bind:precision="2" class="col-sm-7"></vue-numeric>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">backgroundOpacity</label>
        <span class="col-sm-6">

         <vue-numeric  v-model="closedCaptionOptions.backgroundOpacity" :min="0" :max="1" v-bind:precision="2" class="col-sm-7"></vue-numeric>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">windowOpacity</label>
        <span class="col-sm-6">
         <vue-numeric  v-model="closedCaptionOptions.windowOpacity" :min="0" :max="1" v-bind:precision="2" class="col-sm-7"></vue-numeric>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">fontType</label>
        <span class="col-sm-6">
         <input v-model="closedCaptionOptions.fontType" placeholder="edit me" class="col-sm-7">
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">fontSize</label>
        <span class="col-sm-6">
         <input v-model="closedCaptionOptions.fontSize" placeholder="edit me" class="col-sm-7">
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">textEnhancement</label>
        <span class="col-sm-6">
         <input v-model="closedCaptionOptions.textEnhancement" placeholder="edit me" class="col-sm-7">
        </span>
        <br>
      </div>
    </div>
  </div>
</template>
<script>

  import SlotMixin from '@/mixins/slot';
  import { Photoshop } from 'vue-color';
  import VueNumeric from 'vue-numeric';
  import EventBus from '@/GlobelEventBus/EventBus';
  import ColorCode from '@/utils/ColorCode';

  const defaultBlackColor = {
    hex: '#000000',
    hsl: {
      h: 0,
      s: 0,
      l: 0,
      a: 1,
    },
    hsv: {
      h: 0,
      s: 0,
      v: 0,
      a: 1,
    },
    rgba: {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    },
    a: 1,
  };

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
    name: 'ClosedCaptionOption',

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
    created() {
      function encodeToColorPickerObject() {
        if (this.closedCaptionOptions.textColor &&
          typeof this.closedCaptionOptions.textColor === 'string') {
          if (this.closedCaptionOptions.textColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.closedCaptionOptions.textColor);
            this.closedCaptionOptions.textColor = { hex: hexcode };
            window.baseSkinInstance.closedCaptionOptions.textColor =
              this.closedCaptionOptions.textColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.closedCaptionOptions.textColor);
            this.closedCaptionOptions.textColor = { hex: hexcode };
            window.baseSkinInstance.closedCaptionOptions.textColor =
              this.closedCaptionOptions.textColor;
          }
        }
        if (this.closedCaptionOptions.windowColor &&
          typeof this.closedCaptionOptions.windowColor === 'string') {
          if (this.closedCaptionOptions.windowColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.closedCaptionOptions.windowColor);
            this.closedCaptionOptions.windowColor = { hex: hexcode };
            window.baseSkinInstance.closedCaptionOptions.windowColor =
              this.closedCaptionOptions.windowColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.closedCaptionOptions.windowColor);
            this.closedCaptionOptions.windowColor = { hex: hexcode };
            window.baseSkinInstance.closedCaptionOptions.windowColor =
              this.closedCaptionOptions.windowColor;
          }
        }
        if (this.closedCaptionOptions.backgroundColor &&
          typeof this.closedCaptionOptions.backgroundColor === 'string') {
          if (this.closedCaptionOptions.backgroundColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.closedCaptionOptions.backgroundColor);
            this.closedCaptionOptions.backgroundColor = { hex: hexcode };
            window.baseSkinInstance.closedCaptionOptions.backgroundColor =
              this.closedCaptionOptions.backgroundColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.closedCaptionOptions.backgroundColor);
            this.closedCaptionOptions.backgroundColor = { hex: hexcode };
            window.baseSkinInstance.closedCaptionOptions.backgroundColor =
              this.closedCaptionOptions.backgroundColor;
          }
        }
      }
      EventBus.$on('skin-loaded', () => {
        this.closedCaptionOptions = window.baseSkinInstance.closedCaptionOptions;
        encodeToColorPickerObject.call(this);
      });
    },
    components: {
      'photoshop-picker': Photoshop,
      VueNumeric,
    },
    data() {
      return {
        closedCaptionOptions: {
          enabled: true,
          language: 'en',
          textColor: defaultWhiteColor,
          windowColor: defaultBlackColor,
          backgroundColor: defaultBlackColor,
          textOpacity: 1,
          backgroundOpacity: 0.6,
          windowOpacity: 0,
          fontType: 'Proportional Sans-Serif',
          fontSize: 'Medium',
          textEnhancement: 'Uniform',
        },
        showtextColorPicker: false,
        showwindowColorPicker: false,
        showbackgroundColorPicker: false,
      };
    },
    methods: {
      onOk(objName) {
        switch (objName) {
          case 'textColor':
            this.showtextColorPicker = false;
            break;
          case 'windowColor':
            this.showwindowColorPicker = false;
            break;
          case 'backgroundColor':
            this.showbackgroundColorPicker = false;
            break;
          default:
            console.log('unkfalsewn ui obj');
        }
      },
      onCancel(objName) {
        switch (objName) {
          case 'textColor':
            this.showtextColorPicker = false;
            break;
          case 'windowColor':
            this.showwindowColorPicker = false;
            break;
          case 'backgroundColor':
            this.showbackgroundColorPicker = false;
            break;
          default:
            console.log('unkfalsewn ui obj');
        }
      },
      displayColorPicker(objName) {
        switch (objName) {
          case 'textColor':
            this.showtextColorPicker = true;
            break;
          case 'windowColor':
            this.showwindowColorPicker = true;
            break;
          case 'backgroundColor':
            this.showbackgroundColorPicker = true;
            break;
          default:
            console.log('unkfalsewn ui obj');
        }
      },
    },
  };
</script>

