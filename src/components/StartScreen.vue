<template>

  <div id="startScreenPanel" class="panel panel-default">
    <!--<h4 id="startScreenHeader">Start Screen</h4>-->
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <label class="control-label col-sm-4">Show Play Button</label>
        <span class="col-sm-6">
        <!--<input type="checkbox" id="showPlayButton" v-model="playButton">-->
          <input type="radio" id="showPlayButton" value="true" v-model="checkedShowPlayButton">
          <label for="showPlayButton">true</label> &nbsp;
          <input type="radio" id="hidePlayButton" value="false" v-model="checkedShowPlayButton">
          <label for="hidePlayButton">false</label>
        </span>

        <br>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Promo Image Size</label>

        <span class="col-sm-6">
        <input type="radio" id="defaultPromoImageSize" value="default" v-model="pickedPromoImageSize">
        <label for="defaultPromoImageSize">default</label> &nbsp;
        <input type="radio" id="smallPromoImageSize" value="small" v-model="pickedPromoImageSize">
        <label for="smallPromoImageSize">small</label>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Play Button Position</label>

        <span class="col-sm-6">
          <select v-model="pickedPlayButtonPosition" style="width:150px;">
            <option>center</option>
            <option>topLeft</option>
            <option>topRight</option>
            <option>bottomLeft</option>
            <option>bottomRight</option>
          </select>
        </span>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Play Icon Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('playIconStyle')" >{{colorsPlayIcon.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showPlayIconColorPicker==true" v-model="colorsPlayIcon" @ok="onOk('playIconStyle')" @cancel="onCancel('playIconStyle')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Play Icon Opacity(%)</label>

        <span class="col-sm-6">
          <vue-slider style="width: 300px;top: auto;bottom: 30px;left: 222px;" v-model="sliderIconOpacity" ></vue-slider>
        </span>
      </div>

      <div class="form-group" style="margin-top: -38px;">
        <label class="control-label col-sm-4">Show Title</label>

        <span class="col-sm-6">
        <!--<input type="checkbox" id="showPlayButton" v-model="playButton">-->
          <input type="radio" id="showTitle" value="true" v-model="checkedshowTitle">
          <label for="showTitle">true</label> &nbsp;
          <input type="radio" id="hideTitle" value="false" v-model="checkedshowTitle">
          <label for="hideTitle">false</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Show Description</label>

        <span class="col-sm-6">
        <!--<input type="checkbox" id="showPlayButton" v-model="playButton">-->
          <input type="radio" id="showDescription" value="true" v-model="checkedshowDescription">
          <label for="showDescription">true</label> &nbsp;
          <input type="radio" id="hideDescription" value="false" v-model="checkedshowDescription">
          <label for="hideDescription">false</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Title Font Color</label>

        <span class="col-sm-6">
        <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('titleFont')" >{{colorsTitleFont.hex}}</button>
        <div class="col-sm-7">
          <photoshop-picker v-if="showtitleFontColorPicker==true" v-model="colorsTitleFont" @ok="onOk('titleFont')" @cancel="onCancel('titleFont')" />
        </div>
      </span>
      </div>


      <div class="form-group">
        <label class="control-label col-sm-4">Description Font Color</label>

        <span class="col-sm-6">
        <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('descriptionFont')" >{{colorsDescriptionFont.hex}}</button>
        <div class="col-sm-7">
          <photoshop-picker v-if="showDescriptionFontColorPicker==true" v-model="colorsDescriptionFont" @ok="onOk('descriptionFont')" @cancel="onCancel('descriptionFont')" />
        </div>
      </span>
        <br>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Info Panel Position</label>

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
        <label class="control-label col-sm-4">Show Promo</label>

        <span class="col-sm-6">
        <!--<input type="checkbox" id="showPlayButton" v-model="playButton">-->
          <input type="radio" id="showPromo" value="true" v-model="checkedShowPromo">
          <label for="showPromo">true</label> &nbsp;
          <input type="radio" id="hidePromo" value="false" v-model="checkedShowPromo">
          <label for="hidePromo">false</label>
        </span>
        <br>
      </div>
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
        infoPanelPosition: 'topLeft',
        checkedShowPromo: true,
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
            console.log('unkfalsewn ui obj');
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
            console.log('unkfalsewn ui obj');
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
            console.log('unkfalsewn ui obj');
        }
      },
    },
  };
</script>
<style scoped>

</style>
