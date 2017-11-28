<template>
  <div id="oPlayerPanel" class="panel panel-default">
    <div class="panel-body form-horizontal ">
      <div id="container"></div>
      <br>
      <button onclick='updatePlayer()' class="btn btn-success btn-lg" style="width: 100%">Test Video</button>
      <br>
      <br>
      <button onclick='download()'  class="btn btn-success btn-lg" style="width: 100%">Download</button>
    </div>
  </div>
</template>
<script>

  let playerCreationTimer = null;
  function timer() {
    if (window.pready && window.pready === true) {
      window.pready = false;
      window.createPlayer();
      clearInterval(playerCreationTimer);
    }
  }

  export default {
    name: 'OPlayer',
    methods: {
      download() {
        window.updatePlayer(false);
        window.download();
      },
      updatePlayer() {
        window.updatePlayer(true);
      },
    },
    mounted() {
      playerCreationTimer = setInterval(timer, 1000);
    },
  };
</script>

