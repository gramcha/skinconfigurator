<template>
  <!--<div id="app">-->
    <!--<router-view></router-view>-->
  <div>
    <tabs>
      <tab name="place holder"></tab>
      <tab name="Screens">
        <tabs name="sub screens">
          <tab name="Start">
            <div>
              <start-screen></start-screen>
            </div>
          </tab>
          <tab name="Pause">
            <pause-screen></pause-screen>
          </tab>
          <tab name="End">
            <end-screen></end-screen>
          </tab>
          <tab name="Ad">
            <ad-screen></ad-screen>
          </tab>
          <tab name="Discovery">
            <discovery-screen></discovery-screen>
          </tab>
          <tab name="Share">
            <share-screen></share-screen>
          </tab>
          <tab name="More Options">
            <more-options-screen></more-options-screen>
          </tab>
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
  import DiscoveryScreen from '@/components/DiscoveryScreen';
  import ShareScreen from '@/components/ShareScreen';
  import MoreOptionsScreen from '@/components/MoreOptionsScreen';
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
      DiscoveryScreen,
      ShareScreen,
      MoreOptionsScreen,
    },
  };
</script>
