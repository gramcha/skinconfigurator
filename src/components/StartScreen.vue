<template>

  <div id="startScreenPanel" class="panel panel-default">
    <!--<h4 id="startScreenHeader">Start Screen</h4>-->
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <label class="control-label col-sm-4">Show Play Button</label>
        <span class="col-sm-6">
        <!--<input type="checkbox" id="showPlayButton" v-model="playButton">-->
          <input type="radio" id="showPlayButton" value="true" v-model="startScreen.showPlayButton">
          <label for="showPlayButton">true</label> &nbsp;
          <input type="radio" id="hidePlayButton" value="false" v-model="startScreen.showPlayButton">
          <label for="hidePlayButton">false</label>
        </span>

        <br>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Promo Image Size</label>

        <span class="col-sm-6">
        <input type="radio" id="defaultPromoImageSize" value="default" v-model="startScreen.promoImageSize">
        <label for="defaultPromoImageSize">default</label> &nbsp;
        <input type="radio" id="smallPromoImageSize" value="small" v-model="startScreen.promoImageSize">
        <label for="smallPromoImageSize">small</label>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Play Button Position</label>

        <span class="col-sm-6">
          <select v-model="startScreen.playButtonPosition" style="width:150px;">
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
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('playIconStyle')" >{{startScreen.playIconStyle.color.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showPlayIconColorPicker==true" v-model="startScreen.playIconStyle.color" @ok="onOk('playIconStyle')" @cancel="onCancel('playIconStyle')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Play Icon Opacity</label>

        <span class="col-sm-6">
          <vue-numeric  v-model="startScreen.playIconStyle.opacity" :min="0" :max="1" v-bind:precision="2" ></vue-numeric>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Show Title</label>

        <span class="col-sm-6">
        <!--<input type="checkbox" id="showPlayButton" v-model="playButton">-->
          <input type="radio" id="showTitle" value="true" v-model="startScreen.showTitle">
          <label for="showTitle">true</label> &nbsp;
          <input type="radio" id="hideTitle" value="false" v-model="startScreen.showTitle">
          <label for="hideTitle">false</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Show Description</label>

        <span class="col-sm-6">
        <!--<input type="checkbox" id="showPlayButton" v-model="playButton">-->
          <input type="radio" id="showDescription" value="true" v-model="startScreen.showDescription">
          <label for="showDescription">true</label> &nbsp;
          <input type="radio" id="hideDescription" value="false" v-model="startScreen.showDescription">
          <label for="hideDescription">false</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Title Font Color</label>

        <span class="col-sm-6">
        <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('titleFont')" >{{startScreen.titleFont.color.hex}}</button>
        <div class="col-sm-7">
          <photoshop-picker v-if="showtitleFontColorPicker==true" v-model="startScreen.titleFont.color" @ok="onOk('titleFont')" @cancel="onCancel('titleFont')" />
        </div>
      </span>
      </div>


      <div class="form-group">
        <label class="control-label col-sm-4">Description Font Color</label>

        <span class="col-sm-6">
        <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('descriptionFont')" >{{startScreen.descriptionFont.color.hex}}</button>
        <div class="col-sm-7">
          <photoshop-picker v-if="showDescriptionFontColorPicker==true" v-model="startScreen.descriptionFont.color" @ok="onOk('descriptionFont')" @cancel="onCancel('descriptionFont')" />
        </div>
      </span>
        <br>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Info Panel Position</label>

        <span class="col-sm-6">
          <select v-model="startScreen.infoPanelPosition" style="width:150px;">
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
          <input type="radio" id="showPromo" value="true" v-model="startScreen.showPromo">
          <label for="showPromo">true</label> &nbsp;
          <input type="radio" id="hidePromo" value="false" v-model="startScreen.showPromo">
          <label for="hidePromo">false</label>
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
      VueNumeric,
    },
    data() {
      return {
        startScreen: {
          promoImageSize: 'default',
          showPlayButton: true,
          playButtonPosition: 'center',
          playIconStyle: {
            color: defaultplayIconStyleColor,
            opacity: 0.34,
          },
          showTitle: true,
          showDescription: false,
          titleFont: {
            color: defaultWhiteColor,
          },
          descriptionFont: {
            color: defaultWhiteColor,
          },
          infoPanelPosition: 'topLeft',
          showPromo: true,
        },
        showPlayIconColorPicker: false,
        showtitleFontColorPicker: false,
        showDescriptionFontColorPicker: false,
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
