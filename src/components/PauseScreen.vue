<template>
  <div id="pauseScreenPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <label class="control-label col-sm-4">Show Pause Button</label>
        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="pauseScreen.showPauseIcon"
                 :value="pauseScreen.showPauseIcon"
                 name="showPauseIcon" id="showPauseIcon">
          <label for="showPauseIcon">{{pauseScreen.showPauseIcon}}</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Play Button Position</label>

        <span class="col-sm-6">
          <select v-model="pauseScreen.pauseIconPosition" style="width:150px;">
            <option>center</option>
            <option>topLeft</option>
            <option>topRight</option>
            <option>bottomLeft</option>
            <option>bottomRight</option>
          </select>
        </span>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Pause Icon Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('pauseIconStyle')" >{{pauseScreen.PauseIconStyle.color.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showPauseIconColorPicker==true" v-model="pauseScreen.PauseIconStyle.color" @ok="onOk('pauseIconStyle')" @cancel="onCancel('pauseIconStyle')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Pause Icon Opacity</label>

        <span class="col-sm-6">
          <vue-numeric  v-model="pauseScreen.PauseIconStyle.opacity" :min="0" :max="1" v-bind:precision="2" ></vue-numeric>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Show Title</label>

        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="pauseScreen.showTitle"
                 :value="pauseScreen.showTitle"
                 name="showTitle" id="showTitlepause">
          <label for="showTitlepause">{{pauseScreen.showTitle}}</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Show Description</label>

        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="pauseScreen.showDescription"
                 :value="pauseScreen.showDescription"
                 name="showDescription" id="showDescriptionpause">
          <label for="showDescriptionpause">{{pauseScreen.showDescription}}</label>
        </span>
        <br>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-4">Info Panel Position</label>

      <span class="col-sm-6">
          <select v-model="pauseScreen.infoPanelPosition" style="width:150px;">
            <option>topLeft</option>
            <option>topRight</option>
            <option>bottomLeft</option>
            <option>bottomRight</option>
          </select>
        </span>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-4">Screen to show on Pause</label>

      <span class="col-sm-6">
          <select v-model="pauseScreen.screenToShowOnPause" style="width:150px;">
            <option>default</option>
            <option>discovery</option>
          </select>
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
    },
    created() {
      function encodeToColorPickerObject() {
        if (this.pauseScreen.PauseIconStyle.color &&
          typeof this.pauseScreen.PauseIconStyle.color === 'string') {
          if (this.pauseScreen.PauseIconStyle.color.includes('rgb')) {
            const hexcode = ColorCode.rgbToHex(this.pauseScreen.PauseIconStyle.color);
            this.pauseScreen.PauseIconStyle.color = { hex: hexcode };
            window.baseSkinInstance.pauseScreen.PauseIconStyle.color =
              this.pauseScreen.PauseIconStyle.color;
          } else {
            const hexcode = ColorCode.colourNameToHex(this.pauseScreen.PauseIconStyle.color);
            this.pauseScreen.PauseIconStyle.color = { hex: hexcode };
            window.baseSkinInstance.pauseScreen.PauseIconStyle.color =
              this.pauseScreen.PauseIconStyle.color;
          }
        }
      }
      EventBus.$on('skin-loaded', () => {
        this.pauseScreen = window.baseSkinInstance.pauseScreen;
        encodeToColorPickerObject.call(this);
      });
    },
    components: {
      'photoshop-picker': Photoshop,
      VueNumeric,
    },
    data() {
      return {
        pauseScreen: {
          showPauseIcon: true,
          pauseIconPosition: 'center',
          PauseIconStyle: {
            color: defaultWhiteColor,
            opacity: 100,
          },
          showTitle: true,
          showDescription: true,
          infoPanelPosition: 'topLeft',
          screenToShowOnPause: 'default',
        },
        showPauseIconColorPicker: false,
      };
    },
    methods: {
      onOk(objName) {
        console.log(objName);
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

