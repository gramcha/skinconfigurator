<template>
  <div id="responsivePanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <legend>Breakpoints</legend>
      <br>
      <div class="form-group" style="border-style: solid; border-color:lightgrey">
        <legend>xs</legend>
        <br>
        <label class="control-label col-sm-4">Id</label>
        <span class="col-sm-6">
          <input v-model="responsive.breakpoints.xs.id" placeholder="edit me" class="col-sm-7">
        </span>
        <label class="control-label col-sm-4">Name</label>
        <span class="col-sm-6">
          <input v-model="responsive.breakpoints.xs.name" placeholder="edit me" class="col-sm-7">
        </span>
        <label class="control-label col-sm-4">Min Width</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="responsive.breakpoints.xs.minWidth" class="col-sm-7"></vue-numeric>
        </span>
        <label class="control-label col-sm-4">Max Width</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="responsive.breakpoints.xs.maxWidth" class="col-sm-7"></vue-numeric>
        </span>
        <label class="control-label col-sm-4">Multiplier</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="responsive.breakpoints.xs.multiplier" class="col-sm-7"></vue-numeric>
        </span>
      </div>
      <br>
      <div class="form-group" style="border-style: solid; border-color:lightgrey">
        <legend>sm</legend>
        <br>
        <label class="control-label col-sm-4">Id</label>
        <span class="col-sm-6">
          <input v-model="responsive.breakpoints.sm.id" placeholder="edit me" class="col-sm-7">
        </span>
        <label class="control-label col-sm-4">Name</label>
        <span class="col-sm-6">
          <input v-model="responsive.breakpoints.sm.name" placeholder="edit me" class="col-sm-7">
        </span>
        <label class="control-label col-sm-4">Min Width</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="responsive.breakpoints.sm.minWidth" class="col-sm-7"></vue-numeric>
        </span>
        <label class="control-label col-sm-4">Max Width</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="responsive.breakpoints.sm.maxWidth" class="col-sm-7"></vue-numeric>
        </span>
        <label class="control-label col-sm-4">Multiplier</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="responsive.breakpoints.sm.multiplier" class="col-sm-7"></vue-numeric>
        </span>
      </div>
      <br>
      <div class="form-group" style="border-style: solid; border-color:lightgrey">
        <legend>md</legend>
        <br>
        <label class="control-label col-sm-4">Id</label>
        <span class="col-sm-6">
          <input v-model="responsive.breakpoints.md.id" placeholder="edit me" class="col-sm-7">
        </span>
        <label class="control-label col-sm-4">Name</label>
        <span class="col-sm-6">
          <input v-model="responsive.breakpoints.md.name" placeholder="edit me" class="col-sm-7">
        </span>
        <label class="control-label col-sm-4">Min Width</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="responsive.breakpoints.md.minWidth" class="col-sm-7"></vue-numeric>
        </span>
        <label class="control-label col-sm-4">Max Width</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="responsive.breakpoints.md.maxWidth" class="col-sm-7"></vue-numeric>
        </span>
        <label class="control-label col-sm-4">Multiplier</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="responsive.breakpoints.md.multiplier" class="col-sm-7"></vue-numeric>
        </span>
      </div>
      <br>
      <div class="form-group" style="border-style: solid; border-color:lightgrey">
        <legend>lg</legend>
        <br>
        <label class="control-label col-sm-4">Id</label>
        <span class="col-sm-6">
          <input v-model="responsive.breakpoints.lg.id" placeholder="edit me" class="col-sm-7">
        </span>
        <label class="control-label col-sm-4">Name</label>
        <span class="col-sm-6">
          <input v-model="responsive.breakpoints.lg.name" placeholder="edit me" class="col-sm-7">
        </span>
        <label class="control-label col-sm-4">Min Width</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="responsive.breakpoints.lg.minWidth" class="col-sm-7"></vue-numeric>
        </span>
        <label class="control-label col-sm-4">Max Width</label>
        <span class="col-sm-6">
          <vue-numeric  v-model="responsive.breakpoints.lg.maxWidth" class="col-sm-7"></vue-numeric>
        </span>
        <label class="control-label col-sm-4">Multiplier</label>
        <span class="col-sm-6">


          <vue-numeric  v-model="responsive.breakpoints.lg.multiplier" class="col-sm-7"></vue-numeric>
        </span>
      </div>
      <br>
      <div class="form-group">
        <label class="control-label col-sm-4">Aspect Ratio</label>
        <span class="col-sm-6">
          <input v-model="responsive.aspectRatio" placeholder="edit me" class="col-sm-7">
        </span>
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
    name: 'Responsive',

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
        responsive: {
          breakpoints: {
            xs: {
              id: 'xs',
              name: 'oo-xsmall',
              maxWidth: 559,
              multiplier: 0.7,
            },
            sm: {
              id: 'sm',
              name: 'oo-small',
              minWidth: 560,
              maxWidth: 839,
              multiplier: 1,
            },
            md: {
              id: 'md',
              name: 'oo-medium',
              minWidth: 840,
              maxWidth: 1279,
              multiplier: 1,
            },
            lg: {
              id: 'lg',
              name: 'oo-large',
              minWidth: 1280,
              multiplier: 1.2,
            },
          },
          aspectRatio: 'auto',
        },
      };
    },
    methods: {},
  };
</script>
