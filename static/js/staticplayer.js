/**
 * Created by gramachandran on 28/11/17.
 */


window.playerParam = {
  pcode: '5zb2wxOlZcNCe_HVT3a6cawW298X',
  playerBrandingId: '26e2e3c1049c4e70ae08a242638b5c40',
  debug: true,
  skin: {
    config: 'http://localhost:3000/static/skins/skin.json',
  },
  enableDebugTools: {
    startDebugStateMachine: 'all',
  },
};

window.createPlayer = function () {
  window.pp = OO.Player.create('container', 'RmZW4zcDo6KqkTIhn1LnowEZyUYn5Tb2', window.playerParam);
};

OO.ready(() => {
//    window.pready = true;
  window.createPlayer();
});


window.recreatePlayer = function () {
  if (window.pp) {
    window.pp.destroy();
  }
  window.playerParam.skin.config = '';
  window.playerParam.skin.inline = window.convertedSkin;
  window.pp = OO.Player.create('container', 'RmZW4zcDo6KqkTIhn1LnowEZyUYn5Tb2', window.playerParam);
};

window.download = function () {
  if (window.baseSkinInstance && window.convertedSkin) {
    const a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(new Blob([JSON.stringify(window.convertedSkin)], {type: 'text/text'}));
    a.download = 'skin.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
const postJSON = function (urlpath, data) {
  return $.ajax({
    url: urlpath, data: JSON.stringify(data), type: 'POST', contentType: 'application/json',
  });
};
window.updatePlayer = function () {
  if (window.baseSkinInstance) {
    postJSON('http://localhost:3000/updateplayer/', window.baseSkinInstance)
      .done((data) => {
        if (window.recreatePlayer) {
          console.log('recreating');
          window.convertedSkin = data;
          window.recreatePlayer();
        }
        console.log(data);
      })
      .fail((response, status) => {
        console.error(status);
      })
      .always(() => {

      });
  }
}
