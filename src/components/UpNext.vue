<template>
  <div id="upNextPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">


      <div class="form-group">
        <label class="control-label col-sm-4">Show Up Next</label>
        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="upNext.showUpNext"
                 :value="upNext.showUpNext"
                 name="showUpNext" id="showUpNext">
          <label for="showUpNext">{{upNext.showUpNext}}</label>
        </span>
        <br>
      </div>
      <div class="form-group">
        <label class="control-label col-sm-4">Time To Show</label>
        <span class="col-sm-6">
          <vue-numeric v-model="upNext.timeToShow" class="col-sm-7"></vue-numeric>
        </span>
        <br>
      </div>
    </div>
  </div>
</template>
<script>

  import SlotMixin from '@/mixins/slot';
  import VueNumeric from 'vue-numeric';
  import EventBus from '@/GlobelEventBus/EventBus';

  export default {
    /**
     * The name of the component.
     */
    name: 'UpNext',

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
      EventBus.$on('skin-loaded', () => {
        this.upNext = window.baseSkinInstance.upNext;
      });
    },
    components: {
      VueNumeric,
    },
    data() {
      return {
        upNext: {
          showUpNext: true,
          timeToShow: 10,
        },
      };
    },
    methods: {
    },
  };
</script>
