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
      <tab name="Pause Screen">
        <pause-screen></pause-screen>
      </tab>
      <tab name="End Screen">
        <end-screen></end-screen>
      </tab>
      <tab name="Ad Screen">
        <ad-screen></ad-screen>
      </tab>
      <tab name="sub1">
        <tabs>
          <tab name="1"></tab>
          <tab name="2"></tab>
          <tab name="3"></tab>
        </tabs>
      </tab>


    </tabs>
  </div>


  <!--</div>-->
</template>

<script>

  import StartScreen from '@/components/StartScreen';
  import PauseScreen from '@/components/PauseScreen';
  import EndScreen from '@/components/EndScreen';
  import AdScreen from '@/components/AdScreen';
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
      PauseScreen,
      EndScreen,
      AdScreen,
    },
  };
</script>
