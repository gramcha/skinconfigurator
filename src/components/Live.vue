<template>
  <div id="livePanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <label >Force the Scrubber bar to be hidden during live streams, regardless of if DVR is available</label>
        <span class="col-sm-6">
          <input type="radio" id="ccEnabled" value="true" v-model="live.forceDvrDisabled">
          <label for="ccEnabled">true</label> &nbsp;
          <input type="radio" id="ccDisabled" value="false" v-model="live.forceDvrDisabled">
          <label for="ccDisabled">false</label>
        </span>
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
