<template>
  <div id="localizationPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">

      <div class="form-group">
        <label class="control-label col-sm-4">Default Language</label>

        <span class="col-sm-6">
          <select v-model="localization.defaultLanguage" style="width:150px;">
            <option>en</option>
            <option>es</option>
            <option>zh</option>
            <option>ja</option>
          </select>
        </span>
      </div>

      <legend>Available Language File</legend>
      <br>
      <div v-for="item in localization.availableLanguageFile" class="form-group" style="border-style: solid; border-color:lightgrey">
        <br>
        <label class="control-label col-sm-4">Language</label>
        <span class="col-sm-6">
          <input v-model="item.language" placeholder="edit me" class="col-sm-7">
        </span>
        <label class="control-label col-sm-4">Language File</label>
        <span class="col-sm-6">
          <input v-model="item.anguageFile" placeholder="edit me" class="col-sm-7">
        </span>
        <label class="control-label col-sm-4">Android Resource</label>
        <span class="col-sm-6">
          <input v-model="item.androidResource" placeholder="edit me" class="col-sm-7">
        </span>
        <label class="control-label col-sm-4">Android Resource</label>
        <span class="col-sm-6">
          <input v-model="item.iosResource" placeholder="edit me" class="col-sm-7">
        </span>
      </div>
    </div>
  </div>
</template>
<script>

  //  "localization": {
  //    "defaultLanguage": "en",
  //      "availableLanguageFile": [
  //      {
  //        "language": "en",
  //        "languageFile": "",
  //        "androidResource": "skin-config/languageFiles/en.json",
  //        "iosResource": "en"
  //      },
  //      {
  //        "language": "es",
  //        "languageFile": "",
  //        "androidResource": "skin-config/languageFiles/es.json",
  //        "iosResource": "es"
  //      },
  //      {
  //        "language": "zh",
  //        "languageFile": "",
  //        "androidResource": "skin-config/languageFiles/zh.json",
  //        "iosResource": "zh"
  //      },
  //      {
  //        "language": "ja",
  //        "languageFile": "",
  //        "androidResource": "skin-config/languageFiles/ja.json",
  //        "iosResource": "ja"
  //      }
  //    ]
  //  },
  import SlotMixin from '@/mixins/slot';
  import vueSlider from 'vue-slider-component';


  export default {
    /**
     * The name of the component.
     */
    name: 'Localization',

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
      vueSlider,
    },
    data() {
      return {
        localization: {
          defaultLanguage: 'en',
          availableLanguageFile: [
            {
              language: 'en',
              languageFile: '',
              androidResource: 'skin-config/languageFiles/en.json',
              iosResource: 'en',
            },
            {
              language: 'es',
              languageFile: '',
              androidResource: 'skin-config/languageFiles/es.json',
              iosResource: 'es',
            },
            {
              language: 'zh',
              languageFile: '',
              androidResource: 'skin-config/languageFiles/zh.json',
              iosResource: 'zh',
            },
            {
              language: 'ja',
              languageFile: '',
              androidResource: 'skin-config/languageFiles/ja.json',
              iosResource: 'ja',
            },
          ],
        },
      };
    },
    methods: {},
  };
</script>
<style scoped>

</style>
