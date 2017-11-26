<template>
  <div id="upNextPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">


      <div class="form-group">
        <label class="control-label col-sm-4">Show Up Next</label>
        <span class="col-sm-6">
          <input type="radio" id="ccEnabled" value="true" v-model="upNext.showUpNext">
          <label for="ccEnabled">true</label> &nbsp;
          <input type="radio" id="ccDisabled" value="false" v-model="upNext.showUpNext">
          <label for="ccDisabled">false</label>
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
