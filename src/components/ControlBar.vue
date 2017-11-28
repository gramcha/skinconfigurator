<template>

  <div id="controlBarPanel" class="panel panel-default">

    <div class="panel-body form-horizontal ">


      <div class="form-group">
        <label class="control-label col-sm-4">Volume Control Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('volumeControl')" >{{controlBar.volumeControl.color.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showvolumeControlColorPicker==true" v-model="controlBar.volumeControl.color" @ok="onOk('volumeControl')" @cancel="onCancel('volumeControl')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Icon Active Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('iconactivecolor')" >{{controlBar.iconStyle.active.color.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showIconActiveColorPicker==true" v-model="controlBar.iconStyle.active.color" @ok="onOk('iconactivecolor')" @cancel="onCancel('iconactivecolor')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Icon active Color Opacity</label>

        <span class="col-sm-6">
          <vue-numeric  v-model="controlBar.iconStyle.active.opacity" :min="0" :max="1" v-bind:precision="2" ></vue-numeric>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Icon Inactive Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('iconInactivecolor')" >{{controlBar.iconStyle.inactive.color.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showIconInactiveColorPicker==true" v-model="controlBar.iconStyle.inactive.color" @ok="onOk('iconInactivecolor')" @cancel="onCancel('iconInactivecolor')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Icon Inactive Color Opacity</label>

        <span class="col-sm-6">
          <vue-numeric  v-model="controlBar.iconStyle.inactive.opacity" :min="0" :max="1" v-bind:precision="2" ></vue-numeric>
        </span>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Auto Hide</label>
        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="controlBar.autoHide"
                 :value="controlBar.autoHide"
                 name="autoHide" id="autoHide">
          <label for="autoHide">{{controlBar.autoHide}}</label>
        </span>
        <br>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Height</label>

        <span class="col-sm-6">
          <vue-numeric  v-model="controlBar.Height"></vue-numeric>
        </span>
      </div>

      <div style="border-style: solid; border-color:lightgrey">
        <legend>Logo</legend>
        <div class="form-group" style="">
          <label class="control-label col-sm-4">Image Url</label>

          <span class="col-sm-6">
          <input v-model="controlBar.logo.imageResource.url" placeholder="edit me" class="col-sm-7">
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Android Resource</label>

          <span class="col-sm-6">
          <input v-model="controlBar.logo.imageResource.androidResource" placeholder="edit me" class="col-sm-7">
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Ios Resource</label>

          <span class="col-sm-6">
          <input v-model="controlBar.logo.imageResource.iosResource" placeholder="edit me" class="col-sm-7">
        </span>
        </div>




        <div class="form-group">
          <label class="control-label col-sm-4">Clcik Url</label>

          <span class="col-sm-6">
          <input v-model="controlBar.logo.clickUrl" placeholder="edit me" class="col-sm-7">
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Target</label>

          <span class="col-sm-6">
          <input v-model="controlBar.logo.target" placeholder="edit me" class="col-sm-7">
        </span>
        </div>


        <div class="form-group">
          <label class="control-label col-sm-4">Width</label>

          <span class="col-sm-6">
            <vue-numeric  v-model="controlBar.logo.width"></vue-numeric>
          </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Height</label>

          <span class="col-sm-6">
            <vue-numeric  v-model="controlBar.logo.height"></vue-numeric>
          </span>
        </div>
      </div>
      <br>
      <div style="border-style: solid; border-color:lightgrey">
        <legend>Ad Scrubber Bar</legend>
        <div class="form-group">
          <label class="control-label col-sm-4">Background Color</label>
          <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('AdSbbackgroundColor')" >{{controlBar.adScrubberBar.backgroundColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showAdSbbackgroundColor==true" v-model="controlBar.adScrubberBar.backgroundColor" @ok="onOk('AdSbbackgroundColor')" @cancel="onCancel('AdSbbackgroundColor')" />
            </div>
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Buffered Color</label>
          <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('AdSbbufferedColor')" >{{controlBar.adScrubberBar.bufferedColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showAdSbbufferedColor==true" v-model="controlBar.adScrubberBar.bufferedColor" @ok="onOk('AdSbbufferedColor')" @cancel="onCancel('AdSbbufferedColor')" />
            </div>
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Played Color</label>
          <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('AdSbplayedColor')" >{{controlBar.adScrubberBar.playedColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showAdSbplayedColor==true" v-model="controlBar.adScrubberBar.playedColor" @ok="onOk('AdSbplayedColor')" @cancel="onCancel('AdSbplayedColor')" />
            </div>
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Scrubber Handle Color</label>
          <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('AdSbscrubberHandleColor')" >{{controlBar.adScrubberBar.scrubberHandleColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showAdSbscrubberHandleColor==true" v-model="controlBar.adScrubberBar.scrubberHandleColor" @ok="onOk('AdSbscrubberHandleColor')" @cancel="onCancel('AdSbscrubberHandleColor')" />
            </div>
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Scrubber Handle Border Color</label>
          <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('AdSbscrubberHandleBorderColor')" >{{controlBar.adScrubberBar.scrubberHandleBorderColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showAdSbscrubberHandleBorderColor==true" v-model="controlBar.adScrubberBar.scrubberHandleBorderColor" @ok="onOk('AdSbscrubberHandleBorderColor')" @cancel="onCancel('AdSbscrubberHandleBorderColor')" />
            </div>
        </span>
        </div>

      </div>

      <br>
      <div style="border-style: solid; border-color:lightgrey">
        <legend>Scrubber Bar</legend>
        <div class="form-group">
          <label class="control-label col-sm-4">Background Color</label>
          <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('SbbackgroundColor')" >{{controlBar.scrubberBar.backgroundColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showSbbackgroundColor==true" v-model="controlBar.scrubberBar.backgroundColor" @ok="onOk('SbbackgroundColor')" @cancel="onCancel('SbbackgroundColor')" />
            </div>
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Buffered Color</label>
          <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('SbbufferedColor')" >{{controlBar.scrubberBar.bufferedColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showSbbufferedColor==true" v-model="controlBar.scrubberBar.bufferedColor" @ok="onOk('SbbufferedColor')" @cancel="onCancel('SbbufferedColor')" />
            </div>
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Played Color</label>
          <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('SbplayedColor')" >{{controlBar.scrubberBar.playedColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showSbplayedColor==true" v-model="controlBar.scrubberBar.playedColor" @ok="onOk('SbplayedColor')" @cancel="onCancel('SbplayedColor')" />
            </div>
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Scrubber Handle Color</label>
          <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('SbscrubberHandleColor')" >{{controlBar.scrubberBar.scrubberHandleColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showSbscrubberHandleColor==true" v-model="controlBar.scrubberBar.scrubberHandleColor" @ok="onOk('SbscrubberHandleColor')" @cancel="onCancel('SbscrubberHandleColor')" />
            </div>
        </span>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-4">Scrubber Handle Border Color</label>
          <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('SbscrubberHandleBorderColor')" >{{controlBar.scrubberBar.scrubberHandleBorderColor.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showSbscrubberHandleBorderColor==true" v-model="controlBar.scrubberBar.scrubberHandleBorderColor" @ok="onOk('SbscrubberHandleBorderColor')" @cancel="onCancel('SbscrubberHandleBorderColor')" />
            </div>
        </span>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-4">Thumbnail Preview</label>
          <span class="col-sm-6">
            <input type="checkbox"
                   v-model="controlBar.scrubberBar.thumbnailPreview"
                   :value="controlBar.scrubberBar.thumbnailPreview"
                   name="thumbnailPreview" id="thumbnailPreview">
            <label for="thumbnailPreview">{{controlBar.scrubberBar.thumbnailPreview}}</label>
        </span>

          <br>
        </div>
      </div>
      <br>
      <div class="form-group">
        <label class="control-label col-sm-4">Tooltips Enabled</label>
        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="controlBar.tooltips.enabled"
                 :value="controlBar.tooltips.enabled"
                 name="tooltipsenabled" id="tooltipsenabled">
          <label for="tooltipsenabled">{{controlBar.tooltips.enabled}}</label>
        </span>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
  import SlotMixin from '@/mixins/slot';
  import { Photoshop } from 'vue-color';
  import vueSlider from 'vue-slider-component';
  import VueNumeric from 'vue-numeric';
  import ColorCode from '@/utils/ColorCode';
  import EventBus from '@/GlobelEventBus/EventBus';


  const defaultVolumeControlColor = {
    hex: '#c100df',
    hsl: {
      h: 0,
      s: 0,
      l: 1,
      a: 1,
    },
    hsv: {
      h: 0,
      s: 0,
      v: 1,
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

  const defaultbgColor = {
    hex: '#afafaf',
    hsl: {
      h: 0,
      s: 0,
      l: 69,
      a: 1,
    },
    hsv: {
      h: 0,
      s: 0,
      v: 69,
      a: 1,
    },
    rgba: {
      r: 175,
      g: 175,
      b: 175,
      a: 1,
    },
    a: 1,
  };
  const defaultbufferedColor = {
    hex: '#7f7f7f',
    hsl: {
      h: 0,
      s: 0,
      l: 50,
      a: 1,
    },
    hsv: {
      h: 0,
      s: 0,
      v: 50,
      a: 1,
    },
    rgba: {
      r: 127,
      g: 127,
      b: 127,
      a: 1,
    },
    a: 1,
  };
  const defaultplayedColor = {
    hex: '#ff3f80',
    hsl: {
      h: 94,
      s: 100,
      l: 62,
      a: 1,
    },
    hsv: {
      h: 340,
      s: 75,
      v: 100,
      a: 1,
    },
    rgba: {
      r: 255,
      g: 63,
      b: 128,
      a: 1,
    },
    a: 1,
  };
  const defaultsbHandleColor = {
    hex: '#4389ff',
    hsl: {
      h: 60,
      s: 100,
      l: 63,
      a: 1,
    },
    hsv: {
      h: 218,
      s: 74,
      v: 100,
      a: 1,
    },
    rgba: {
      r: 67,
      g: 137,
      b: 255,
      a: 1,
    },
    a: 1,
  };

  export default {
    /**
     * The name of the component.
     */
    name: 'ControlBar',

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
        if (this.controlBar.volumeControl.color &&
          typeof this.controlBar.volumeControl.color === 'string') {
          if (this.controlBar.volumeControl.color.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.volumeControl.color);
            this.controlBar.volumeControl.color = { hex: hexcode };
            window.baseSkinInstance.controlBar.volumeControl.color =
              this.controlBar.volumeControl.color;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.volumeControl.color);
            this.controlBar.volumeControl.color = { hex: hexcode };
            window.baseSkinInstance.controlBar.volumeControl.color =
              this.controlBar.volumeControl.color;
          }
        }
        if (this.controlBar.iconStyle.active.color &&
          typeof this.controlBar.iconStyle.active.color === 'string') {
          if (this.controlBar.iconStyle.active.color.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.iconStyle.active.color);
            this.controlBar.iconStyle.active.color = { hex: hexcode };
            window.baseSkinInstance.controlBar.iconStyle.active.color =
              this.controlBar.iconStyle.active.color;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.iconStyle.active.color);
            this.controlBar.iconStyle.active.color = { hex: hexcode };
            window.baseSkinInstance.controlBar.iconStyle.active.color =
              this.controlBar.iconStyle.active.color;
          }
        }
        if (this.controlBar.iconStyle.inactive.color &&
          typeof this.controlBar.iconStyle.inactive.color === 'string') {
          if (this.controlBar.iconStyle.inactive.color.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.iconStyle.inactive.color);
            this.controlBar.iconStyle.inactive.color = { hex: hexcode };
            window.baseSkinInstance.controlBar.iconStyle.inactive.color =
              this.controlBar.iconStyle.inactive.color;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.iconStyle.inactive.color);
            this.controlBar.iconStyle.inactive.color = { hex: hexcode };
            window.baseSkinInstance.controlBar.iconStyle.inactive.color =
              this.controlBar.iconStyle.inactive.color;
          }
        }
        if (this.controlBar.adScrubberBar.backgroundColor &&
          typeof this.controlBar.adScrubberBar.backgroundColor === 'string') {
          if (this.controlBar.adScrubberBar.backgroundColor.includes('rgb')) {
            console.log('else bgcolor');
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.adScrubberBar.backgroundColor);
            this.controlBar.adScrubberBar.backgroundColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.adScrubberBar.backgroundColor =
              this.controlBar.adScrubberBar.backgroundColor;
            console.log(this.controlBar.adScrubberBar.backgroundColor);
          } else {
            console.log('else bgcolor');
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.adScrubberBar.backgroundColor);
            this.controlBar.adScrubberBar.backgroundColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.adScrubberBar.backgroundColor =
              this.controlBar.adScrubberBar.backgroundColor;
            console.log(this.controlBar.adScrubberBar.backgroundColor);
          }
        }
        if (this.controlBar.adScrubberBar.bufferedColor &&
          typeof this.controlBar.adScrubberBar.bufferedColor === 'string') {
          if (this.controlBar.adScrubberBar.bufferedColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.adScrubberBar.bufferedColor);
            this.controlBar.adScrubberBar.bufferedColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.adScrubberBar.bufferedColor =
              this.controlBar.adScrubberBar.bufferedColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.adScrubberBar.bufferedColor);
            this.controlBar.adScrubberBar.bufferedColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.adScrubberBar.bufferedColor =
              this.controlBar.adScrubberBar.bufferedColor;
          }
        }
        if (this.controlBar.adScrubberBar.playedColor &&
          typeof this.controlBar.adScrubberBar.playedColor === 'string') {
          if (this.controlBar.adScrubberBar.playedColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.adScrubberBar.playedColor);
            this.controlBar.adScrubberBar.playedColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.adScrubberBar.playedColor =
              this.controlBar.adScrubberBar.playedColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.adScrubberBar.playedColor);
            this.controlBar.adScrubberBar.playedColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.adScrubberBar.playedColor =
              this.controlBar.adScrubberBar.playedColor;
          }
        }
        if (this.controlBar.adScrubberBar.scrubberHandleColor &&
          typeof this.controlBar.adScrubberBar.scrubberHandleColor === 'string') {
          if (this.controlBar.adScrubberBar.scrubberHandleColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.adScrubberBar.scrubberHandleColor);
            this.controlBar.adScrubberBar.scrubberHandleColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.adScrubberBar.scrubberHandleColor =
              this.controlBar.adScrubberBar.scrubberHandleColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.adScrubberBar.scrubberHandleColor);
            this.controlBar.adScrubberBar.scrubberHandleColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.adScrubberBar.scrubberHandleColor =
              this.controlBar.adScrubberBar.scrubberHandleColor;
          }
        }
        if (this.controlBar.adScrubberBar.scrubberHandleBorderColor &&
          typeof this.controlBar.adScrubberBar.scrubberHandleBorderColor === 'string') {
          if (this.controlBar.adScrubberBar.scrubberHandleBorderColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.adScrubberBar.scrubberHandleBorderColor);
            this.controlBar.adScrubberBar.scrubberHandleBorderColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.adScrubberBar.scrubberHandleBorderColor =
              this.controlBar.adScrubberBar.scrubberHandleBorderColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.adScrubberBar.scrubberHandleBorderColor);
            this.controlBar.adScrubberBar.scrubberHandleBorderColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.adScrubberBar.scrubberHandleBorderColor =
              this.controlBar.adScrubberBar.scrubberHandleBorderColor;
          }
        }
        if (this.controlBar.scrubberBar.backgroundColor &&
          typeof this.controlBar.scrubberBar.backgroundColor === 'string') {
          if (this.controlBar.scrubberBar.backgroundColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.scrubberBar.backgroundColor);
            this.controlBar.scrubberBar.backgroundColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.scrubberBar.backgroundColor =
              this.controlBar.scrubberBar.backgroundColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.scrubberBar.backgroundColor);
            this.controlBar.scrubberBar.backgroundColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.scrubberBar.backgroundColor =
              this.controlBar.scrubberBar.backgroundColor;
          }
        }
        if (this.controlBar.scrubberBar.bufferedColor &&
          typeof this.controlBar.scrubberBar.bufferedColor === 'string') {
          if (this.controlBar.scrubberBar.bufferedColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.scrubberBar.bufferedColor);
            this.controlBar.scrubberBar.bufferedColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.scrubberBar.bufferedColor =
              this.controlBar.scrubberBar.bufferedColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.scrubberBar.bufferedColor);
            this.controlBar.scrubberBar.bufferedColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.scrubberBar.bufferedColor =
              this.controlBar.scrubberBar.bufferedColor;
          }
        }
        if (this.controlBar.scrubberBar.playedColor &&
          typeof this.controlBar.scrubberBar.playedColor === 'string') {
          if (this.controlBar.scrubberBar.playedColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.scrubberBar.playedColor);
            this.controlBar.scrubberBar.playedColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.scrubberBar.playedColor =
              this.controlBar.scrubberBar.playedColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.scrubberBar.playedColor);
            this.controlBar.scrubberBar.playedColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.scrubberBar.playedColor =
              this.controlBar.scrubberBar.playedColor;
          }
        }
        if (this.controlBar.scrubberBar.scrubberHandleColor &&
          typeof this.controlBar.scrubberBar.scrubberHandleColor === 'string') {
          if (this.controlBar.scrubberBar.scrubberHandleColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.scrubberBar.scrubberHandleColor);
            this.controlBar.scrubberBar.scrubberHandleColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.scrubberBar.scrubberHandleColor =
              this.controlBar.scrubberBar.scrubberHandleColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.scrubberBar.scrubberHandleColor);
            this.controlBar.scrubberBar.scrubberHandleColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.scrubberBar.scrubberHandleColor =
              this.controlBar.scrubberBar.scrubberHandleColor;
          }
        }
        if (this.controlBar.scrubberBar.scrubberHandleBorderColor &&
          typeof this.controlBar.scrubberBar.scrubberHandleBorderColor === 'string') {
          if (this.controlBar.scrubberBar.scrubberHandleBorderColor.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(
              this.controlBar.scrubberBar.scrubberHandleBorderColor);
            this.controlBar.scrubberBar.scrubberHandleBorderColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.scrubberBar.scrubberHandleBorderColor =
              this.controlBar.scrubberBar.scrubberHandleBorderColor;
          } else {
            const hexcode = ColorCode.colourNameToHex(
              this.controlBar.scrubberBar.scrubberHandleBorderColor);
            this.controlBar.scrubberBar.scrubberHandleBorderColor = { hex: hexcode };
            window.baseSkinInstance.controlBar.scrubberBar.scrubberHandleBorderColor =
              this.controlBar.scrubberBar.scrubberHandleBorderColor;
          }
        }
      }
      EventBus.$on('skin-loaded', () => {
        this.controlBar = window.baseSkinInstance.controlBar;
        encodeToColorPickerObject.call(this);
      });
    },
    components: {
      'photoshop-picker': Photoshop,
      vueSlider,
      VueNumeric,
    },
    data() {
      return {
        controlBar: {
          volumeControl: {
            color: defaultVolumeControlColor,
          },
          iconStyle: {
            active: {
              color: defaultWhiteColor,
              opacity: 1,
            },
            inactive: {
              color: defaultWhiteColor,
              opacity: 0.95,
            },
          },
          autoHide: true,
          height: 90,
          logo: {
            imageResource: {
              url: '',
              androidResource: 'logo',
              iosResource: 'logo',
            },
            clickUrl: 'http://www.ooyala.com',
            target: '_blank',
            width: 96,
            height: 24,
          },
          adScrubberBar: {
            backgroundColor: defaultbgColor,
            bufferedColor: defaultbufferedColor,
            playedColor: defaultplayedColor,
            scrubberHandleColor: defaultsbHandleColor,
            scrubberHandleBorderColor: defaultWhiteColor,
          },
          scrubberBar: {
            backgroundColor: defaultbgColor,
            bufferedColor: defaultbufferedColor,
            playedColor: defaultplayedColor,
            scrubberHandleColor: defaultsbHandleColor,
            scrubberHandleBorderColor: defaultWhiteColor,
            thumbnailPreview: true,
          },
          tooltips: {
            enabled: false,
          },
        },
        showvolumeControlColorPicker: false,
        showIconActiveColorPicker: false,
        showIconInactiveColorPicker: false,
        showAdSbbackgroundColor: false,
        showAdSbbufferedColor: false,
        showAdSbplayedColor: false,
        showAdSbscrubberHandleColor: false,
        showAdSbscrubberHandleBorderColor: false,
        showSbbackgroundColor: false,
        showSbbufferedColor: false,
        showSbplayedColor: false,
        showSbscrubberHandleColor: false,
        showSbscrubberHandleBorderColor: false,
      };
    },
    methods: {
      onOk(objName) {
        switch (objName) {
          case 'volumeControl':
            this.showvolumeControlColorPicker = false;
            break;
          case 'iconactivecolor':
            this.showIconActiveColorPicker = false;
            break;
          case 'iconInactivecolor':
            this.showIconInactiveColorPicker = false;
            break;
          case 'AdSbbackgroundColor':
            this.showAdSbbackgroundColor = false;
            break;
          case 'AdSbbufferedColor':
            this.showAdSbbufferedColor = false;
            break;
          case 'AdSbplayedColor':
            this.showAdSbplayedColor = false;
            break;
          case 'AdSbscrubberHandleColor':
            this.showAdSbscrubberHandleColor = false;
            break;
          case 'AdSbscrubberHandleBorderColor':
            this.showAdSbscrubberHandleBorderColor = false;
            break;
          case 'SbbackgroundColor':
            this.showSbbackgroundColor = false;
            break;
          case 'SbbufferedColor':
            this.showSbbufferedColor = false;
            break;
          case 'SbplayedColor':
            this.showSbplayedColor = false;
            break;
          case 'SbscrubberHandleColor':
            this.showSbscrubberHandleColor = false;
            break;
          case 'SbscrubberHandleBorderColor':
            this.showSbscrubberHandleBorderColor = false;
            break;
          default:
            console.log('unkfalsewn ui obj');
        }
      },
      onCancel(objName) {
        switch (objName) {
          case 'volumeControl':
            this.showvolumeControlColorPicker = false;
            break;
          case 'iconactivecolor':
            this.showIconActiveColorPicker = false;
            break;
          case 'iconInactivecolor':
            this.showIconInactiveColorPicker = false;
            break;
          case 'AdSbbackgroundColor':
            this.showAdSbbackgroundColor = false;
            break;
          case 'AdSbbufferedColor':
            this.showAdSbbufferedColor = false;
            break;
          case 'AdSbplayedColor':
            this.showAdSbplayedColor = false;
            break;
          case 'AdSbscrubberHandleColor':
            this.showAdSbscrubberHandleColor = false;
            break;
          case 'AdSbscrubberHandleBorderColor':
            this.showAdSbscrubberHandleBorderColor = false;
            break;
          case 'SbbackgroundColor':
            this.showSbbackgroundColor = false;
            break;
          case 'SbbufferedColor':
            this.showSbbufferedColor = false;
            break;
          case 'SbplayedColor':
            this.showSbplayedColor = false;
            break;
          case 'SbscrubberHandleColor':
            this.showSbscrubberHandleColor = false;
            break;
          case 'SbscrubberHandleBorderColor':
            this.showSbscrubberHandleBorderColor = false;
            break;
          default:
            console.log('unkfalsewn ui obj');
        }
      },
      displayColorPicker(objName) {
        switch (objName) {
          case 'volumeControl':
            this.showvolumeControlColorPicker = true;
            break;
          case 'iconactivecolor':
            this.showIconActiveColorPicker = true;
            break;
          case 'iconInactivecolor':
            this.showIconInactiveColorPicker = true;
            break;
          case 'AdSbbackgroundColor':
            this.showAdSbbackgroundColor = true;
            break;
          case 'AdSbbufferedColor':
            this.showAdSbbufferedColor = true;
            break;
          case 'AdSbplayedColor':
            this.showAdSbplayedColor = true;
            break;
          case 'AdSbscrubberHandleColor':
            this.showAdSbscrubberHandleColor = true;
            break;
          case 'AdSbscrubberHandleBorderColor':
            this.showAdSbscrubberHandleBorderColor = true;
            break;
          case 'SbbackgroundColor':
            this.showSbbackgroundColor = true;
            break;
          case 'SbbufferedColor':
            this.showSbbufferedColor = true;
            break;
          case 'SbplayedColor':
            this.showSbplayedColor = true;
            break;
          case 'SbscrubberHandleColor':
            this.showSbscrubberHandleColor = true;
            break;
          case 'SbscrubberHandleBorderColor':
            this.showSbscrubberHandleBorderColor = true;
            break;
          default:
            console.log('unkfalsewn ui obj');
        }
      },
    },
  };
</script>
