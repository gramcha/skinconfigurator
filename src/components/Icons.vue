<template>
  <div id="iconsPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div>
        <div v-for="(item, index) in iconsList" class="form-group"
             style="border-style: solid; border-color:lightgrey" v-if="icons[item]">
          <br>
          <label class="control-label col-sm-4">{{item}}</label>
          <br>
          <label class="control-label col-sm-4">Font Family Name</label>
          <span class="col-sm-6">
            <input v-model="icons[item].fontFamilyName" placeholder="edit me" class="col-sm-7">
          </span>
          <label class="control-label col-sm-4">Font String</label>
          <span class="col-sm-6">
          <input v-model="icons[item].fontString" placeholder="edit me" class="col-sm-7">
          </span>
          <label class="control-label col-sm-4">Font Style Class</label>
          <span class="col-sm-6">
          <input v-model="icons[item].fontStyleClass" placeholder="edit me" class="col-sm-7">
          </span>
          <div id="parent">
            <div id="child1" class="block center">
              <button v-on:click="removeIcon(index)">Remove</button>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
  import SlotMixin from '@/mixins/slot';


  export default {
    /**
     * The name of the component.
     */
    name: 'Icons',

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
    components: {
    },
    data() {
      return {
        icons: {
          play: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'h',
            fontStyleClass: 'oo-icon oo-icon-play-slick',
          },
          pause: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'g',
            fontStyleClass: 'oo-icon oo-icon-pause-slick',
          },
          volume: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'b',
            fontStyleClass: 'oo-icon oo-icon-volume-on-ooyala-default',
          },
          volumeOff: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'p',
            fontStyleClass: 'oo-icon oo-icon-volume-mute-ooyala-default',
          },
          expand: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'i',
            fontStyleClass: 'oo-icon oo-icon-system-fullscreen',
          },
          compress: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'j',
            fontStyleClass: 'oo-icon oo-icon-system-minimizescreen',
          },
          ellipsis: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'f',
            fontStyleClass: 'oo-icon oo-icon-system-menu',
          },
          replay: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'c',
            fontStyleClass: 'oo-icon oo-icon-system-replay',
          },
          share: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'o',
            fontStyleClass: 'oo-icon oo-icon-share',
          },
          cc: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'k',
            fontStyleClass: 'oo-icon oo-icon-cc',
          },
          discovery: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'l',
            fontStyleClass: 'oo-icon oo-icon-discovery-binoculars',
          },
          quality: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'm',
            fontStyleClass: 'oo-icon oo-icon-bitrate',
          },
          setting: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'n',
            fontStyleClass: 'oo-icon oo-icon-system-settings',
          },
          dismiss: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'e',
            fontStyleClass: 'oo-icon oo-icon-system-close',
          },
          toggleOn: {
            fontFamilyName: 'fontawesome',
            fontString: '',
            fontStyleClass: '',
          },
          toggleOff: {
            fontFamilyName: 'fontawesome',
            fontString: '',
            fontStyleClass: '',
          },
          left: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'r',
            fontStyleClass: 'oo-icon oo-icon-system-left-arrow',
          },
          right: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 's',
            fontStyleClass: 'oo-icon oo-icon-system-right-arrow',
          },
          learn: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 't',
            fontStyleClass: 'oo-icon oo-icon-system-more-information',
          },
          skip: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'u',
            fontStyleClass: 'oo-icon oo-icon-skip-slick',
          },
          warning: {
            fontFamilyName: 'fontawesome',
            fontString: '',
            fontStyleClass: '',
          },
          auto: {
            fontFamilyName: 'ooyala-slick-type',
            fontString: 'd',
            fontStyleClass: 'oo-icon oo-icon-system-auto',
          },
        },
        iconsList: ['play', 'pause', 'volume', 'volumeOff', 'expand', 'compress', 'ellipsis', 'replay', 'share', 'cc', 'discovery', 'quality',
          'setting', 'dismiss', 'toggleOn', 'toggleOff', 'left', 'right', 'skip', 'warning', 'auto'],
      };
    },
    methods: {
      removeIcon(index) {
        this.iconsList.splice(index, 1);
        const newIcons = {};
        this.iconsList.forEach((item) => {
          newIcons[item] = this.icons[item];
        });
        this.icons = newIcons;
//        console.log('after delete');
//        console.log(this.icons);
      },
    },
  };
</script>
<style scoped>
  #parent {
    text-align:center;
  }
  .block {
    height:32px;
    width:110px;
    text-align:left;
  }
  .center {
    margin:auto;
    /*background-color:green;*/
  }
  .left {
    margin:auto auto auto 0;
    /*background-color:red;*/
  }
  .right {
    margin:auto 0 auto auto;
    /*background-color:yellow;*/
  }
</style>
