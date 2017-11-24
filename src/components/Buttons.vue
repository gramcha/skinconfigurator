<template>
  <div id="buttonsPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div>
        <legend>Desktop Content</legend>
        <br>
        <div v-for="item in buttons.desktopContent" class="form-group" style="border-style: solid; border-color:lightgrey">
          <br>
          <label class="control-label col-sm-4">Name</label>
          <span class="col-sm-6">
          <input v-model="item.name" placeholder="edit me" class="col-sm-7">
        </span>
          <label class="control-label col-sm-4">Location</label>
          <span class="col-sm-6">
          <input v-model="item.location" placeholder="edit me" class="col-sm-7">
        </span>
          <label class="control-label col-sm-4">When Does Not Fit</label>
          <span class="col-sm-6">
          <select v-model="item.whenDoesNotFit" style="width:150px;">
            <option>keep</option>
            <option>drop</option>
            <option>moveToMoreOptions</option>
          </select>
        </span>
          <br>
          <label class="control-label col-sm-4">Min Width</label>
          <span class="col-sm-6">
          <vue-numeric  v-model="item.minWidth" class="col-sm-7"></vue-numeric>
        </span>
        </div>
        <br>
      </div>

      <div>
        <legend>Desktop Ad</legend>
        <br>
        <div v-for="item in buttons.desktopAd" class="form-group" style="border-style: solid; border-color:lightgrey">
          <br>
          <label class="control-label col-sm-4">Name</label>
          <span class="col-sm-6">
          <input v-model="item.name" placeholder="edit me" class="col-sm-7">
        </span>
          <label class="control-label col-sm-4">Location</label>
          <span class="col-sm-6">
          <input v-model="item.location" placeholder="edit me" class="col-sm-7">
        </span>
          <label class="control-label col-sm-4">When Does Not Fit</label>
          <span class="col-sm-6">
          <select v-model="item.whenDoesNotFit" style="width:150px;">
            <option>keep</option>
            <option>drop</option>
            <option>moveToMoreOptions</option>
          </select>
        </span>
          <br>
          <label class="control-label col-sm-4">Min Width</label>
          <span class="col-sm-6">
          <vue-numeric  v-model="item.minWidth" class="col-sm-7"></vue-numeric>
        </span>
        </div>
        <br>
      </div>

      <div>
        <legend>Mobile Content</legend>
        <br>
        <div v-for="item in buttons.mobileContent" class="form-group" style="border-style: solid; border-color:lightgrey">
          <br>
          <label class="control-label col-sm-4">Name</label>
          <span class="col-sm-6">
          <input v-model="item.name" placeholder="edit me" class="col-sm-7">
        </span>
          <label class="control-label col-sm-4">Location</label>
          <span class="col-sm-6">
          <input v-model="item.location" placeholder="edit me" class="col-sm-7">
        </span>
          <label class="control-label col-sm-4">When Does Not Fit</label>
          <span class="col-sm-6">
          <select v-model="item.whenDoesNotFit" style="width:150px;">
            <option>keep</option>
            <option>drop</option>
            <option>moveToMoreOptions</option>
          </select>
        </span>
          <br>
          <label class="control-label col-sm-4">Min Width</label>
          <span class="col-sm-6">
          <vue-numeric  v-model="item.minWidth" class="col-sm-7"></vue-numeric>
        </span>
        </div>
        <br>
      </div>

      <div>
        <legend>Mobile Ad</legend>
        <br>
        <div v-for="item in buttons.mobileAd" class="form-group" style="border-style: solid; border-color:lightgrey">
          <br>
          <label class="control-label col-sm-4">Name</label>
          <span class="col-sm-6">
          <input v-model="item.name" placeholder="edit me" class="col-sm-7">
        </span>
          <label class="control-label col-sm-4">Location</label>
          <span class="col-sm-6">
          <input v-model="item.location" placeholder="edit me" class="col-sm-7">
        </span>
          <label class="control-label col-sm-4">When Does Not Fit</label>
          <span class="col-sm-6">
          <select v-model="item.whenDoesNotFit" style="width:150px;">
            <option>keep</option>
            <option>drop</option>
            <option>moveToMoreOptions</option>
          </select>
        </span>
          <br>
          <label class="control-label col-sm-4">Min Width</label>
          <span class="col-sm-6">
          <vue-numeric  v-model="item.minWidth" class="col-sm-7"></vue-numeric>
        </span>
        </div>
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
    name: 'Buttons',

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
      VueNumeric,
    },
    data() {
      return {
        buttons: {
          desktopContent: [
            {
              name: 'playPause',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 45,
            },
            {
              name: 'volume',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 240,
            },
            {
              name: 'live',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 45,
            },
            {
              name: 'timeDuration',
              location: 'controlBar',
              whenDoesNotFit: 'drop',
              minWidth: 145,
            },
            {
              name: 'flexibleSpace',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 1,
            },
            {
              name: 'share',
              location: 'controlBar',
              whenDoesNotFit: 'moveToMoreOptions',
              minWidth: 45,
            },
            {
              name: 'discovery',
              location: 'controlBar',
              whenDoesNotFit: 'moveToMoreOptions',
              minWidth: 45,
            },
            {
              name: 'closedCaption',
              location: 'controlBar',
              whenDoesNotFit: 'moveToMoreOptions',
              minWidth: 45,
            },
            {
              name: 'quality',
              location: 'controlBar',
              whenDoesNotFit: 'moveToMoreOptions',
              minWidth: 45,
            },
            {
              name: 'logo',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 125,
            },
            {
              name: 'fullscreen',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 45,
            },
            {
              name: 'moreOptions',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 45,
            },
          ],
          desktopAd: [
            {
              name: 'playPause',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 45,
            },
            {
              name: 'volume',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 240,
            },
            {
              name: 'flexibleSpace',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 1,
            },
            {
              name: 'logo',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 125,
            },
            {
              name: 'fullscreen',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 45,
            },
            {
              name: 'moreOptions',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 45,
            },
          ],
          mobileContent: [
            {
              name: 'volume',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 50,
            },
            {
              name: 'live',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 45,
            },
            {
              name: 'timeDuration',
              location: 'controlBar',
              whenDoesNotFit: 'drop',
              minWidth: 100,
            },
            {
              name: 'flexibleSpace',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 1,
            },
            {
              name: 'share',
              location: 'moreOptions',
            },
            {
              name: 'discovery',
              location: 'moreOptions',
            },
            {
              name: 'closedCaption',
              location: 'moreOptions',
            },
            {
              name: 'fullscreen',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 50,
            },
            {
              name: 'moreOptions',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 50,
            },
          ],
          mobileAd: [
            {
              name: 'volume',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 50,
            },
            {
              name: 'flexibleSpace',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 1,
            },
            {
              name: 'fullscreen',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 50,
            },
            {
              name: 'moreOptions',
              location: 'controlBar',
              whenDoesNotFit: 'keep',
              minWidth: 50,
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
