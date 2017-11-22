<template>

  <div id="startScreenPanel" class="panel panel-default">
    <h4 id="startScreenHeader">Start Screen</h4>
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <br>
        <span><h5>Show Play Button</h5></span>
        <input type="checkbox" id="showPlayButton" v-model="checkedShowPlayButton">
        <label for="showPlayButton">{{ checkedShowPlayButton }}</label>
        <br>
      </div>
      <div class="form-group">
        <span><h5>PromoImageSize</h5></span>
        <br>
        <input type="radio" id="defaultPromoImageSize" value="default" v-model="pickedPromoImageSize">
        <label for="defaultPromoImageSize">default</label>
        <br>
        <input type="radio" id="smallPromoImageSize" value="small" v-model="pickedPromoImageSize">
        <label for="smallPromoImageSize">small</label>
        <br>
      </div>

      <div class="form-group">
        <br>
        <span><h5>PlayButtonPosition</h5></span>
        <br>
        <input type="radio" id="centerPlayButtonPosition" value="center" v-model="pickedPlayButtonPosition">
        <label for="centerPlayButtonPosition">center</label>
        <br>
        <input type="radio" id="bottomPlayButtonPosition" value="bottom" v-model="pickedPlayButtonPosition">
        <label for="bottomPlayButtonPosition">bottom</label>
        <br>
        <input type="radio" id="leftPlayButtonPosition" value="left" v-model="pickedPlayButtonPosition">
        <label for="leftPlayButtonPosition">left</label>
        <br>
        <input type="radio" id="rightPlayButtonPosition" value="right" v-model="pickedPlayButtonPosition">
        <label for="rightPlayButtonPosition">right</label>
        <br>
      </div>
      <div class="form-group">
        <label ><h5>Play Icon Color</h5></label>
        <br>
        <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('playIconStyle')" >{{colorsPlayIcon.hex}}</button>
        <div class="col-sm-7">
          <photoshop-picker v-if="showPlayIconColorPicker==true" v-model="colorsPlayIcon" @ok="onOk('playIconStyle')" @cancel="onCancel('playIconStyle')" />
        </div>
        <br>
      </div>
      <div class="form-group">
        <label ><h5>Play Icon Opacity(%)</h5></label>
        <br>
        <vue-slider v-model="sliderIconOpacity"></vue-slider>
        <br>
      </div>
      <div class="form-group">
        <span><h5>Show Title</h5></span>
        <input type="checkbox" id="showTitle" v-model="checkedshowTitle">
        <label for="showTitle">{{ checkedshowTitle }}</label>
        <br>
      </div>
      <div class="form-group">
        <span><h5>Show Description</h5></span>
        <input type="checkbox" id="showDescription" v-model="checkedshowDescription">
        <label for="showDescription">{{ checkedshowDescription }}</label>
        <br>
      </div>
    </div>
    <div class="form-group">
      <label ><h5>Title Font Color</h5></label>
      <br>
      <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('titleFont')" >{{colorsTitleFont.hex}}</button>
      <div class="col-sm-7">
        <photoshop-picker v-if="showtitleFontColorPicker==true" v-model="colorsTitleFont" @ok="onOk('titleFont')" @cancel="onCancel('titleFont')" />
      </div>
      <br>
    </div>
    <div class="form-group">
      <label ><h5>Description Font Color</h5></label>
      <br>
      <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('descriptionFont')" >{{colorsDescriptionFont.hex}}</button>
      <div class="col-sm-7">
        <photoshop-picker v-if="showDescriptionFontColorPicker==true" v-model="colorsDescriptionFont" @ok="onOk('descriptionFont')" @cancel="onCancel('descriptionFont')" />
      </div>
      <br>
    </div>
  </div>
</template>
<script>
  //  "startScreen": {
  //    "promoImageSize": "default",
  //      "showPlayButton": true,
  //      "playButtonPosition": "center",
  //      "playIconStyle": {
  //      "color": "#ffffff",
  //        "opacity": 0.34
  //    },
  //    "showTitle": true,
  //      "showDescription": false,
  //      "titleFont": {
  //      "color": "white"
  //    },
  //    "descriptionFont": {
  //      "color": "white"
  //    },
  //    "infoPanelPosition": "topLeft",
  //      "showPromo": true
  //  }

  import SlotMixin from '@/mixins/slot';
  import { Photoshop } from 'vue-color';
  import vueSlider from 'vue-slider-component';

  const defaultplayIconStyleColor = {
    hex: '#194d33',
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
    name: 'StartScreen',

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
        colorsPlayIcon: defaultplayIconStyleColor,
        colorsTitleFont: defaultWhiteColor,
        colorsDescriptionFont: defaultWhiteColor,
        sliderIconOpacity: 34,
        pickedPromoImageSize: 'small',
        checkedShowPlayButton: true,
        pickedPlayButtonPosition: 'center',
        showPlayIconColorPicker: false,
        showtitleFontColorPicker: false,
        showDescriptionFontColorPicker: false,
        checkedshowTitle: true,
        checkedshowDescription: false,
      };
    },
    methods: {
      onOk(objName) {
        switch (objName) {
          case 'titleFont':
            this.showtitleFontColorPicker = false;
            break;
          case 'playIconStyle':
            this.showPlayIconColorPicker = false;
            break;
          case 'descriptionFont':
            this.showDescriptionFontColorPicker = false;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
      onCancel(objName) {
        switch (objName) {
          case 'titleFont':
            this.showtitleFontColorPicker = false;
            break;
          case 'playIconStyle':
            this.showPlayIconColorPicker = false;
            break;
          case 'descriptionFont':
            this.showDescriptionFontColorPicker = false;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
      displayColorPicker(objName) {
        switch (objName) {
          case 'titleFont':
            this.showtitleFontColorPicker = true;
            break;
          case 'playIconStyle':
            this.showPlayIconColorPicker = true;
            break;
          case 'descriptionFont':
            this.showDescriptionFontColorPicker = true;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
    },
  };
</script>
<style scoped>
  .button {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    background-color: #538fbe;
    padding: 20px 70px;
    font-size: 24px;
    border: 1px solid #2d6898;
  }
</style>
