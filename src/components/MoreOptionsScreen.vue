<template>
  <div id="moreOptionsScreenPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">

      <div class="form-group">
        <label class="control-label col-sm-4">Bright Opacity</label>

        <span class="col-sm-6">
          <vue-numeric  v-model="moreOptionsScreen.brightOpacity" :min="0" :max="1" v-bind:precision="2" ></vue-numeric>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Dark Opacity</label>

        <span class="col-sm-6">
          <vue-numeric  v-model="moreOptionsScreen.darkOpacity" :min="0" :max="1" v-bind:precision="2" ></vue-numeric>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Icon Size</label>

        <span class="col-sm-6">
          <vue-numeric  v-model="moreOptionsScreen.iconSize" ></vue-numeric>
        </span>
      </div>



      <div class="form-group">
        <label class="control-label col-sm-4">Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('color')" >{{moreOptionsScreen.color.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showColorPicker==true" v-model="moreOptionsScreen.color" @ok="onOk('color')" @cancel="onCancel('color')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Icon Style Active Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('activecolor')" >{{moreOptionsScreen.iconStyle.active.color.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showActiveColorPicker==true" v-model="moreOptionsScreen.iconStyle.active.color" @ok="onOk('activecolor')" @cancel="onCancel('activecolor')" />
            </div>
        </span>
      </div>


      <div class="form-group">
        <label class="control-label col-sm-4">Icon Style Active Color Opacity</label>

        <span class="col-sm-6">
          <vue-numeric  v-model="moreOptionsScreen.iconStyle.active.opacity" :min="0" :max="1" v-bind:precision="2" ></vue-numeric>
        </span>
      </div>


      <div class="form-group">
        <label class="control-label col-sm-4">Icon Style InActive Color</label>

        <span class="col-sm-6">
          <button type="button" class="btn btn-outline-primary" v-on:click="displayColorPicker('inactivecolor')" >{{moreOptionsScreen.iconStyle.inactive.color.hex}}</button>
            <div class="col-sm-7">
              <photoshop-picker v-if="showInActiveColorPicker==true" v-model="moreOptionsScreen.iconStyle.inactive.color" @ok="onOk('inactivecolor')" @cancel="onCancel('inactivecolor')" />
            </div>
        </span>
      </div>

      <div class="form-group">
        <label class="control-label col-sm-4">Icon Style InActive Color Opacity(%)</label>

        <span class="col-sm-6">
          <vue-numeric  v-model="moreOptionsScreen.iconStyle.inactive.opacity" :min="0" :max="1" v-bind:precision="2" ></vue-numeric>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import SlotMixin from '@/mixins/slot';
  import { Photoshop } from 'vue-color';
  import VueNumeric from 'vue-numeric';

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
    name: 'MoreOptionsScreen',

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
      VueNumeric,
    },
    data() {
      return {
        moreOptionsScreen: {
          brightOpacity: 1,
          darkOpacity: 0.4,
          iconSize: 30,
          color: defaultWhiteColor,
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
        },
        showColorPicker: false,
        showActiveColorPicker: false,
        showInActiveColorPicker: false,
      };
    },
    methods: {
      onOk(objName) {
        switch (objName) {
          case 'color':
            this.showColorPicker = false;
            break;
          case 'activecolor':
            this.showActiveColorPicker = false;
            break;
          case 'inactivecolor':
            this.showInActiveColorPicker = false;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
      onCancel(objName) {
        switch (objName) {
          case 'color':
            this.showColorPicker = false;
            break;
          case 'activecolor':
            this.showActiveColorPicker = false;
            break;
          case 'inactivecolor':
            this.showInActiveColorPicker = false;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
      displayColorPicker(objName) {
        switch (objName) {
          case 'color':
            this.showColorPicker = true;
            break;
          case 'activecolor':
            this.showActiveColorPicker = true;
            break;
          case 'inactivecolor':
            this.showInActiveColorPicker = true;
            break;
          default:
            console.log('unknown ui obj');
        }
      },
    },
  };
</script>
<style scoped>

</style>
