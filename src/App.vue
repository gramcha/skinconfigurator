<template>
  <!--<div id="app">-->
    <!--<router-view></router-view>-->
  <div>
    <tabs>
      <tab name="Start Screen">
        <div>
          <start-screen></start-screen>
        </div>
      </tab>
      <tab name="Second tab">
        Second tab content
      </tab>
      <tab name="four tab">
        Third tab content
      </tab>
      <tab name="Third tab">
        Third tab content
      </tab>

    </tabs>
  </div>


  <!--</div>-->
</template>

<script>

  import StartScreen from '@/components/StartScreen';
  import { Tabs, Tab } from 'vue-tabs-component';

  export default {
    /**
     * The name of the application.
     */
    name: 'vue-boilerplate',

    /**
     * Fires when the app has been mounted.
     */
    mounted() {
      // If the user is authenticated,
      // fetch the data from the API
//      if (this.$store.state.auth.authenticated) {
//        this.$store.dispatch('account/find');
//      }
      console.log(this.message);
    },
    components: {
      StartScreen,
      tabs: Tabs,
      tab: Tab,
    },
  };
</script>
