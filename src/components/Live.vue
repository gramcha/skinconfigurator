<template>
  <div id="livePanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <label >Force the Scrubber bar to be hidden during live streams, regardless of if DVR is available</label>
        <br>
        <span class="col-sm-6">
          <input type="checkbox"
                 v-model="live.forceDvrDisabled"
                 :value="live.forceDvrDisabled"
                 name="forceDvrDisabled" id="forceDvrDisabled">
          <label for="forceDvrDisabled">{{live.forceDvrDisabled}}</label>
        </span>
        <br>
      </div>

    </div>
  </div>
</template>
<script>

  import SlotMixin from '@/mixins/slot';
  import EventBus from '@/GlobelEventBus/EventBus';

  export default {
    /**
     * The name of the component.
     */
    name: 'Live',

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
        this.live = window.baseSkinInstance.live;
      });
    },
    components: {
    },
    data() {
      return {
        live: {
          forceDvrDisabled: false,
        },
      };
    },
    methods: {
    },
  };
</script>
