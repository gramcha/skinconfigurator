<template>
  <div id="homePanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <label >Base Skin config</label>
        <br>
        <span>
          <textarea v-model="baseSkin" placeholder="add skin.json" style="width: 500px; height: 400px"></textarea>
        </span>
        <br>
        <button v-on:click="updateBaseSkin">Load</button>
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
    name: 'Home',

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
        baseSkin: null,
        baseSkinInstance: null,
      };
    },
    methods: {
      updateBaseSkin() {
        if (this.baseSkin) {
          this.baseSkinInstance = JSON.parse(this.baseSkin);
          window.baseSkinInstance = this.baseSkinInstance;
          EventBus.$emit('skin-loaded');
          console.log('Event fired from home');
        }
      },
    },
  };
</script>
<style scoped>

</style>
