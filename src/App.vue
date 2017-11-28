<template>
  <!--<div id="app">-->
    <!--<router-view></router-view>-->
  <div >
    <!--<div class="jumbotron_modified">-->
    <div class="bd-pageheader">
      <div class="container">
        <h1>Ooyala Player Skin Configurator</h1>
        <p class="lead">Welcome! Configure our new player skin below. This page allows you to modify the player skin and download skin.json file.</p>
      </div>
    </div>
    <div id="one">
      <tabs>
        <tab name="Home">
          <home></home>
        </tab>
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
        <tab name="Generic">
          <tabs name="genric sub">
            <tab name="General">
              <general></general>
            </tab>
            <tab name="Localization">
              <localization></localization>
            </tab>
            <tab name="Responsive">
              <responsive></responsive>
            </tab>
            <tab name="Closed Captions">
              <closed-caption-option></closed-caption-option>
            </tab>
            <tab name="Up Next">
              <up-next></up-next>
            </tab>
            <tab name="Live">
              <live></live>
            </tab>
          </tabs>
        </tab>
        <tab name="ControlBar">
          <control-bar></control-bar>
        </tab>
        <tab name="Buttons & Icons">
          <tabs name="sub buttons and icons">
            <tab name="Buttons">
              <buttons></buttons>
            </tab>
            <tab name="Icons">
              <icons></icons>
            </tab>
          </tabs>
        </tab>

      </tabs>
    </div>
    <div id="two">
      <o-player></o-player>
    </div>
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
  import General from '@/components/General';
  import Localization from '@/components/Localization';
  import Responsive from '@/components/Responsive';
  import ClosedCaptionOption from '@/components/ClosedCaptionOption';
  import UpNext from '@/components/UpNext';
  import Live from '@/components/Live';
  import Buttons from '@/components/Buttons';
  import Icons from '@/components/Icons';
  import ControlBar from '@/components/ControlBar';
  import Home from '@/components/Home';
  import OPlayer from '@/components/OPlayer';
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
    },
    components: {
      OPlayer,
      UpNext,
      StartScreen,
      tabs: Tabs,
      tab: Tab,
      PauseScreen,
      EndScreen,
      AdScreen,
      DiscoveryScreen,
      ShareScreen,
      MoreOptionsScreen,
      General,
      Localization,
      Responsive,
      ClosedCaptionOption,
      Live,
      Buttons,
      Icons,
      ControlBar,
      Home,
    },
    methods: {
    },
  };
</script>
<style>


  .bd-pageheader {
    padding: 2rem 15px;
    /*margin-bottom: 1.5rem;*/
    color: #cdbfe3;
    text-align: center;
    background-color: #563d7c;
  }
  .bd-pageheader p {
    font-size: 1.5rem;
  }

  .bd-pageheader p {
    margin-bottom: 0;
    font-size: 1.25rem;
    font-weight: 300;
  }
  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }

  .jumbotron_modified {
    padding: 1rem 1rem;
    /*margin-bottom: 1rem;*/
    background-color: #e9ecef;
    border-radius: 0.3rem;
  }

  .wrapper {
    border : 1px solid lightgrey;
    overflow:hidden;
  }

  /*.wrapper div {*/
  /*min-height: 200px;*/
  /*padding: 10px;*/
  /*}*/
  #one {
    /*background-color: gray;*/
    float:left;
    margin-right:20px;
    width:60%;
    border-right:1px solid lightgrey;
  }
  #two {
    /*background-color: white;*/
    overflow:hidden;
    margin:10px;
    /*border:2px dashed #ccc;*/
    min-height:170px;
  }

  @media screen and (max-width: 400px) {
    #one {
      float: none;
      margin-right:0;
      width:auto;
      border:0;
      border-bottom:2px solid #000;
    }
  }
</style>
