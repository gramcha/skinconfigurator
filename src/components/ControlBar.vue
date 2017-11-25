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
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('iconinactivecolor')" >{{controlBar.iconStyle.inactive.color.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showIconInactiveColorPicker==true" v-model="controlBar.iconStyle.inactive.color" @ok="onOk('iconinactivecolor')" @cancel="onCancel('iconinactivecolor')" />
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
          <input type="radio" id="show" value="true" v-model="controlBar.autoHide">
          <label for="show">true</label> &nbsp;
          <input type="radio" id="hide" value="false" v-model="controlBar.autoHide">
          <label for="hide">false</label>
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
          <input type="radio" id="showthumbnailPreview" value="true" v-model="controlBar.scrubberBar.thumbnailPreview">
          <label for="showthumbnailPreview">true</label> &nbsp;
          <input type="radio" id="hidethumbnailPreview" value="false" v-model="controlBar.scrubberBar.thumbnailPreview">
          <label for="hidethumbnailPreview">false</label>
        </span>

          <br>
        </div>
      </div>
      <br>
      <div class="form-group">
        <label class="control-label col-sm-4">Tooltips Enabled</label>
        <span class="col-sm-6">
          <input type="radio" id="enabledtooltips" value="true" v-model="controlBar.tooltips.enabled">
          <label for="enabledtooltips">true</label> &nbsp;
          <input type="radio" id="disabledtooltips" value="false" v-model="controlBar.tooltips.enabled">
          <label for="disabledtooltips">false</label>
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
    components: {
      'photoshop-picker': Photoshop,
      vueSlider,
      VueNumeric,
    },
    created() {
      this.convertScrubberBarColorForColorPicker();
      this.convertAdScrubberBarColorForColorPicker();
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
            backgroundColor: 'rgba(175,175,175,1)',
            bufferedColor: 'rgba(127,127,127,1)',
            playedColor: 'rgba(255,63,128,1)',
            scrubberHandleColor: 'rgba(67,137,255,1)',
            scrubberHandleBorderColor: 'rgba(255,255,255,1)',
          },
          scrubberBar: {
            backgroundColor: 'rgba(175,175,175,0.5)',
            bufferedColor: 'rgba(175,175,175,0.7)',
            playedColor: '',
            scrubberHandleColor: 'rgba(67,137,255,1)',
            scrubberHandleBorderColor: 'rgba(255,255,255,1)',
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
            this.showPlayIconColorPicker = false;
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
            this.showPlayIconColorPicker = false;
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
            this.showPlayIconColorPicker = true;
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
      convertScrubberBarColorForColorPicker() {
        if (this.controlBar.scrubberBar.backgroundColor.includes('rgb')) {
          this.controlBar.scrubberBar.backgroundColor = ColorCode
            .rgbToHex(this.controlBar.scrubberBar.backgroundColor);
        } else {
          this.controlBar.scrubberBar.backgroundColor = ColorCode
            .colourNameToHex(this.controlBar.scrubberBar.backgroundColor);
        }

        if (this.controlBar.scrubberBar.bufferedColor.includes('rgb')) {
          this.controlBar.scrubberBar.bufferedColor = ColorCode
            .rgbToHex(this.controlBar.scrubberBar.bufferedColor);
        } else {
          this.controlBar.scrubberBar.bufferedColor = ColorCode
            .colourNameToHex(this.controlBar.scrubberBar.bufferedColor);
        }

        if (this.controlBar.scrubberBar.playedColor.includes('rgb')) {
          this.controlBar.scrubberBar.playedColor = ColorCode
            .rgbToHex(this.controlBar.scrubberBar.playedColor);
        } else {
          this.controlBar.scrubberBar.playedColor = ColorCode
            .colourNameToHex(this.controlBar.scrubberBar.playedColor);
        }

        if (this.controlBar.scrubberBar.scrubberHandleColor.includes('rgb')) {
          this.controlBar.scrubberBar.scrubberHandleColor = ColorCode
            .rgbToHex(this.controlBar.scrubberBar.scrubberHandleColor);
        } else {
          this.controlBar.scrubberBar.scrubberHandleColor = ColorCode
            .colourNameToHex(this.controlBar.scrubberBar.scrubberHandleColor);
        }

        if (this.controlBar.scrubberBar.scrubberHandleBorderColor.includes('rgb')) {
          this.controlBar.scrubberBar.scrubberHandleBorderColor = ColorCode
            .rgbToHex(this.controlBar.scrubberBar.scrubberHandleBorderColor);
        } else {
          this.controlBar.scrubberBar.scrubberHandleBorderColor = ColorCode
            .colourNameToHex(this.controlBar.scrubberBar.scrubberHandleBorderColor);
        }
      },
      convertAdScrubberBarColorForColorPicker() {
        if (this.controlBar.adScrubberBar.backgroundColor.includes('rgb')) {
          this.controlBar.adScrubberBar.backgroundColor = ColorCode
            .rgbToHex(this.controlBar.adScrubberBar.backgroundColor);
        } else {
          this.controlBar.adScrubberBar.backgroundColor = ColorCode
            .colourNameToHex(this.controlBar.adScrubberBar.backgroundColor);
        }

        if (this.controlBar.adScrubberBar.bufferedColor.includes('rgb')) {
          this.controlBar.adScrubberBar.bufferedColor = ColorCode
            .rgbToHex(this.controlBar.adScrubberBar.bufferedColor);
        } else {
          this.controlBar.adScrubberBar.bufferedColor = ColorCode
            .colourNameToHex(this.controlBar.adScrubberBar.bufferedColor);
        }

        if (this.controlBar.adScrubberBar.playedColor.includes('rgb')) {
          this.controlBar.adScrubberBar.playedColor = ColorCode
            .rgbToHex(this.controlBar.adScrubberBar.playedColor);
        } else {
          this.controlBar.adScrubberBar.playedColor = ColorCode
            .colourNameToHex(this.controlBar.adScrubberBar.playedColor);
        }

        if (this.controlBar.adScrubberBar.scrubberHandleColor.includes('rgb')) {
          this.controlBar.adScrubberBar.scrubberHandleColor = ColorCode
            .rgbToHex(this.controlBar.adScrubberBar.scrubberHandleColor);
        } else {
          this.controlBar.adScrubberBar.scrubberHandleColor = ColorCode
            .colourNameToHex(this.controlBar.adScrubberBar.scrubberHandleColor);
        }

        if (this.controlBar.adScrubberBar.scrubberHandleBorderColor.includes('rgb')) {
          this.controlBar.adScrubberBar.scrubberHandleBorderColor = ColorCode
            .rgbToHex(this.controlBar.adScrubberBar.scrubberHandleBorderColor);
        } else {
          this.controlBar.adScrubberBar.scrubberHandleBorderColor = ColorCode
            .colourNameToHex(this.controlBar.adScrubberBar.scrubberHandleBorderColor);
        }
      },
    },
  };
</script>
<style scoped>

</style>
