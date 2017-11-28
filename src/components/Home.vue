<template>
  <div id="homePanel" class="panel panel-default" >
    <div class="panel-body form-horizontal ">
      <div class="form-group">
        <!--<label>Copy & Paste base skin.json for start configuring.</label>-->
        <!--<br>-->
        <span>
          <textarea v-model="baseSkin" placeholder="Copy & Paste base skin.json to start configuring." style="width: 100%; height: 400px"></textarea>
        </span>
        <br>

      </div>

      <div class="form-group">

      <button v-on:click="updateBaseSkin" class="btn btn-success btn-lg" style="width: 100%">Load</button>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-unused-vars */


  import SlotMixin from '@/mixins/slot';
  import EventBus from '@/GlobelEventBus/EventBus';

  const postJSON = function (urlpath, data) {
    return $.ajax({
      url: urlpath, data: JSON.stringify(data), type: 'POST', contentType: 'application/json',
    });
  };
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
    computed: {},
    components: {},
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
      updatePlayer() {
        postJSON('http://localhost:3000/updateplayer/', window.baseSkinInstance)
          .done((data) => {
//            do something useful with server returned data
            if (window.recreatePlayer) {
              console.log('recreating');
              window.convertedSkin = data;
              window.recreatePlayer();
            }
            console.log(data);
          })
          .fail((response, status) => {
//            handle error response
          })
          .always(() => {
//            do something useful in either case
//            like remove the spinner
          });
      },
    },
  };
</script>

