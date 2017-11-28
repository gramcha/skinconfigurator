<template>
  <div id="endScreenPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <label class="control-label col-sm-4">Show Replay Button</label>
        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="endScreen.showReplayButton"
                 :value="endScreen.showReplayButton"
                 name="showReplayButton" id="showReplayButton">
          <label for="showReplayButton">{{endScreen.showReplayButton}}</label>
        </span>
        <br>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Replay Icon Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary"
                  v-on:click="displayColorPicker('replayIconStyle')">{{endScreen.replayIconStyle.color.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showReplayIconColorPicker==true" v-model="endScreen.replayIconStyle.color"
                                @ok="onOk('replayIconStyle')" @cancel="onCancel('replayIconStyle')"/>
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Replay Icon Opacity</label>

        <span class="col-sm-6">
          <vue-numeric  v-model="endScreen.replayIconStyle.opacity" :min="0" :max="1" v-bind:precision="2" ></vue-numeric>
        </span>
        <br>
      </div>

      <div class="form-group" >
        <label class="control-label col-sm-4">Show Title</label>

        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="endScreen.showTitle"
                 :value="endScreen.showTitle"
                 name="showTitle" id="showTitleEnd">
          <label for="showTitleEnd">{{endScreen.showTitle}}</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Show Description</label>

        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="endScreen.showDescription"
                 :value="endScreen.showDescription"
                 name="showDescriptionEnd" id="showDescriptionEnd">
          <label for="showDescriptionEnd">{{endScreen.showDescription}}</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Info Panel Position</label>

        <span class="col-sm-6">
          <select v-model="endScreen.infoPanelPosition" style="width:150px;">
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
          <select v-model="endScreen.screenToShowOnEnd" style="width:150px;">
            <option>default</option>
            <option>discovery</option>
          </select>
        </span>
      </div>
    </div>


  </div>
</template>
<script>

  import SlotMixin from '@/mixins/slot';
  import { Photoshop } from 'vue-color';
  import vueSlider from 'vue-slider-component';
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
    computed: {},
    created() {
      function encodeToColorPickerObject() {
        if (this.endScreen.replayIconStyle.color &&
          typeof this.endScreen.replayIconStyle.color === 'string') {
          if (this.endScreen.replayIconStyle.color.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(this.endScreen.replayIconStyle.color);
            this.endScreen.replayIconStyle.color = { hex: hexcode };
            window.baseSkinInstance.endScreen.replayIconStyle.color =
              this.endScreen.replayIconStyle.color;
          } else {
            const hexcode = ColorCode.colourNameToHex(this.endScreen.replayIconStyle.color);
            this.endScreen.replayIconStyle.color = { hex: hexcode };
            window.baseSkinInstance.endScreen.replayIconStyle.color =
              this.endScreen.replayIconStyle.color;
          }
        }
      }

      EventBus.$on('skin-loaded', () => {
        this.endScreen = window.baseSkinInstance.endScreen;
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
        endScreen: {
          screenToShowOnEnd: 'discovery',
          showReplayButton: true,
          replayIconStyle: {
            color: defaultWhiteColor,
            opacity: 1,
          },
          showTitle: false,
          showDescription: false,
          infoPanelPosition: 'topLeft',
        },
        showReplayIconColorPicker: false,
        sliderIconOpacity: 100,

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
