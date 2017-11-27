/* eslint-disable dot-notation,no-unused-vars */
/**
 * Created by gramachandran on 26/11/17.
 */
/**
 * Created by gramachandran on 14/11/17.
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

function controlBarColorCorrection(skinInstance) {
  if (skinInstance.controlBar && skinInstance.controlBar.volumeControl.color) {
    if (skinInstance.controlBar.volumeControl.color.hex) {
      skinInstance.controlBar.volumeControl.color =
        skinInstance.controlBar.volumeControl.color.hex;
    }
  }
  if (skinInstance.controlBar && skinInstance.controlBar.iconStyle &&
    skinInstance.controlBar.iconStyle.active &&
    skinInstance.controlBar.iconStyle.active.color) {
    if (skinInstance.controlBar.iconStyle.active.color.hex) {
      skinInstance.controlBar.iconStyle.active.color =
        skinInstance.controlBar.iconStyle.active.color.hex;
    }
  }
  if (skinInstance.controlBar && skinInstance.controlBar.iconStyle &&
    skinInstance.controlBar.iconStyle.inactive &&
    skinInstance.controlBar.iconStyle.inactive.color) {
    if (skinInstance.controlBar.iconStyle.inactive.color.hex) {
      skinInstance.controlBar.iconStyle.inactive.color =
        skinInstance.controlBar.iconStyle.inactive.color.hex;
    }
  }
  //
  if (skinInstance.controlBar && skinInstance.controlBar.adScrubberBar.backgroundColor) {
    if (skinInstance.controlBar.adScrubberBar.backgroundColor.hex) {
      skinInstance.controlBar.adScrubberBar.backgroundColor =
        skinInstance.controlBar.adScrubberBar.backgroundColor.hex;
    }
  }
  if (skinInstance.controlBar && skinInstance.controlBar.adScrubberBar.bufferedColor) {
    if (skinInstance.controlBar.adScrubberBar.bufferedColor.hex) {
      skinInstance.controlBar.adScrubberBar.bufferedColor =
        skinInstance.controlBar.adScrubberBar.bufferedColor.hex;
    }
  }
  if (skinInstance.controlBar && skinInstance.controlBar.adScrubberBar.playedColor) {
    if (skinInstance.controlBar.adScrubberBar.playedColor.hex) {
      skinInstance.controlBar.adScrubberBar.playedColor =
        skinInstance.controlBar.adScrubberBar.playedColor.hex;
    }
  }
  if (skinInstance.controlBar && skinInstance.controlBar.adScrubberBar.scrubberHandleColor) {
    if (skinInstance.controlBar.adScrubberBar.scrubberHandleColor.hex) {
      skinInstance.controlBar.adScrubberBar.scrubberHandleColor =
        skinInstance.controlBar.adScrubberBar.scrubberHandleColor.hex;
    }
  }
  if (skinInstance.controlBar &&
    skinInstance.controlBar.adScrubberBar.scrubberHandleBorderColor) {
    if (skinInstance.controlBar.adScrubberBar.scrubberHandleBorderColor.hex) {
      skinInstance.controlBar.adScrubberBar.scrubberHandleBorderColor =
        skinInstance.controlBar.adScrubberBar.scrubberHandleBorderColor.hex;
    }
  }
  //
  if (skinInstance.controlBar && skinInstance.controlBar.scrubberBar.backgroundColor) {
    if (skinInstance.controlBar.scrubberBar.backgroundColor.hex) {
      skinInstance.controlBar.scrubberBar.backgroundColor =
        skinInstance.controlBar.scrubberBar.backgroundColor.hex;
    }
  }
  if (skinInstance.controlBar && skinInstance.controlBar.scrubberBar.bufferedColor) {
    if (skinInstance.controlBar.scrubberBar.bufferedColor.hex) {
      skinInstance.controlBar.scrubberBar.bufferedColor =
        skinInstance.controlBar.scrubberBar.bufferedColor.hex;
    }
  }
  if (skinInstance.controlBar && skinInstance.controlBar.scrubberBar.playedColor) {
    if (skinInstance.controlBar.scrubberBar.playedColor.hex) {
      skinInstance.controlBar.scrubberBar.playedColor =
        skinInstance.controlBar.scrubberBar.playedColor.hex;
    }
  }
  if (skinInstance.controlBar && skinInstance.controlBar.scrubberBar.scrubberHandleColor) {
    if (skinInstance.controlBar.scrubberBar.scrubberHandleColor.hex) {
      skinInstance.controlBar.scrubberBar.scrubberHandleColor =
        skinInstance.controlBar.scrubberBar.scrubberHandleColor.hex;
    }
  }
  if (skinInstance.controlBar &&
    skinInstance.controlBar.scrubberBar.scrubberHandleBorderColor) {
    if (skinInstance.controlBar.scrubberBar.scrubberHandleBorderColor.hex) {
      skinInstance.controlBar.scrubberBar.scrubberHandleBorderColor =
        skinInstance.controlBar.scrubberBar.scrubberHandleBorderColor.hex;
    }
  }
}
function moreOptionsColorCorrection(skinInstance) {
  if (skinInstance.moreOptionsScreen && skinInstance.moreOptionsScreen.color) {
    if (skinInstance.moreOptionsScreen.color.hex) {
      skinInstance.moreOptionsScreen.color =
        skinInstance.moreOptionsScreen.color.hex;
    }
  }
  if (skinInstance.moreOptionsScreen && skinInstance.moreOptionsScreen.iconStyle &&
    skinInstance.moreOptionsScreen.iconStyle.active &&
    skinInstance.moreOptionsScreen.iconStyle.active.color) {
    if (skinInstance.moreOptionsScreen.iconStyle.active.color.hex) {
      skinInstance.moreOptionsScreen.iconStyle.active.color =
        skinInstance.moreOptionsScreen.iconStyle.active.color.hex;
    }
  }

  if (skinInstance.moreOptionsScreen && skinInstance.moreOptionsScreen.iconStyle &&
    skinInstance.moreOptionsScreen.iconStyle.inactive &&
    skinInstance.moreOptionsScreen.iconStyle.inactive.color) {
    if (skinInstance.moreOptionsScreen.iconStyle.inactive.color.hex) {
      skinInstance.moreOptionsScreen.iconStyle.inactive.color =
        skinInstance.moreOptionsScreen.iconStyle.inactive.color.hex;
    }
  }
}
function discoveryScreenColorCorrection(skinInstance) {
  if (skinInstance.discoveryScreen && skinInstance.discoveryScreen.panelTitle &&
    skinInstance.discoveryScreen.panelTitle.titleFont &&
    skinInstance.discoveryScreen.panelTitle.titleFont.color) {
    if (skinInstance.discoveryScreen.panelTitle.titleFont.color.hex) {
      skinInstance.discoveryScreen.panelTitle.titleFont.color =
        skinInstance.discoveryScreen.panelTitle.titleFont.color.hex;
    }
  }
  if (skinInstance.discoveryScreen && skinInstance.discoveryScreen.contentTitle &&
    skinInstance.discoveryScreen.contentTitle.font &&
    skinInstance.discoveryScreen.contentTitle.font.color) {
    if (skinInstance.discoveryScreen.contentTitle.font.color.hex) {
      skinInstance.discoveryScreen.contentTitle.font.color =
        skinInstance.discoveryScreen.contentTitle.font.color.hex;
    }
  }
}
function pauseScreenColorCorrection(skinInstance) {
  if (skinInstance.startScreen && skinInstance.startScreen.descriptionFont.color) {
    if (skinInstance.startScreen.descriptionFont.color.hex) {
      skinInstance.startScreen.descriptionFont.color =
        skinInstance.startScreen.descriptionFont.color.hex;
    }
  }
  if (skinInstance.pauseScreen && skinInstance.pauseScreen.PauseIconStyle.color) {
    if (skinInstance.pauseScreen.PauseIconStyle.color.hex) {
      skinInstance.pauseScreen.PauseIconStyle.color =
        skinInstance.pauseScreen.PauseIconStyle.color.hex;
    }
  }

  if (skinInstance.pauseScreen && skinInstance.endScreen.replayIconStyle.color) {
    if (skinInstance.endScreen.replayIconStyle.color.hex) {
      skinInstance.endScreen.replayIconStyle.color =
        skinInstance.endScreen.replayIconStyle.color.hex;
    }
  }
}
function startScreenColorCorrection(skinInstance) {
  if (skinInstance.startScreen && skinInstance.startScreen.playIconStyle.color) {
    if (skinInstance.startScreen.playIconStyle.color.hex) {
      skinInstance.startScreen.playIconStyle.color =
        skinInstance.startScreen.playIconStyle.color.hex;
    }
  }
  if (skinInstance.startScreen && skinInstance.startScreen.titleFont.color) {
    if (skinInstance.startScreen.titleFont.color.hex) {
      skinInstance.startScreen.titleFont.color =
        skinInstance.startScreen.titleFont.color.hex;
    }
  }
}
function closedCaptionColorCorrection(skinInstance) {
  if (skinInstance.closedCaptionOptions && skinInstance.closedCaptionOptions.textColor) {
    if (skinInstance.closedCaptionOptions.textColor.hex) {
      skinInstance.closedCaptionOptions.textColor =
        skinInstance.closedCaptionOptions.textColor.hex;
    }
  }
  if (skinInstance.closedCaptionOptions && skinInstance.closedCaptionOptions.windowColor) {
    if (skinInstance.closedCaptionOptions.windowColor.hex) {
      skinInstance.closedCaptionOptions.windowColor =
        skinInstance.closedCaptionOptions.windowColor.hex;
    }
  }
  if (skinInstance.closedCaptionOptions && skinInstance.closedCaptionOptions.backgroundColor) {
    if (skinInstance.closedCaptionOptions.backgroundColor.hex) {
      skinInstance.closedCaptionOptions.backgroundColor =
        skinInstance.closedCaptionOptions.backgroundColor.hex;
    }
  }
}
function convertColorObjectToString(skinInstance) {
  if (skinInstance) {
    closedCaptionColorCorrection(skinInstance);
    startScreenColorCorrection(skinInstance);
    pauseScreenColorCorrection(skinInstance);
    discoveryScreenColorCorrection(skinInstance);
    moreOptionsColorCorrection(skinInstance);
    controlBarColorCorrection(skinInstance);
  }
  return skinInstance;
}

/* GET home page. */
router.get('/', (req, res) => res.send('Hello World!'));

router.post('/', (req, res) => {
  const skinInstance = convertColorObjectToString(req.body);
  // res.send(skinInstance.closedCaptionOptions.textColor);
  // res.send('done');
  res.send(skinInstance);

  // const content = JSON.stringify(req.body);
  // const content = JSON.stringify(skinInstance);
  //
  // // console.log(content);
  // const utf8 = 'utf8';
  // fs.writeFile(path.join(__dirname, '../static', 'skins', 'skin.json'), content,
  //   utf8, (err) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log('The file was saved!');
  //   });
  // res.send('done');
});

module.exports = router;
