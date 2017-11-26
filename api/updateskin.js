/* eslint-disable dot-notation,no-unused-vars */
/**
 * Created by gramachandran on 26/11/17.
 */
/**
 * Created by gramachandran on 14/11/17.
 */
const express = require('express');
const fs = require('fs');

const router = express.Router();

function convertColorObjectToString(skinInstance) {
  console.log(' obj type ', typeof skinInstance);
  console.log(skinInstance['closedCaptionOptions']);
  // console.log(JSON.parse(skinInstance['closedCaptionOptions']));
  if (skinInstance) {
    if (skinInstance.closedCaptionOptions) {
      if (skinInstance.closedCaptionOptions.textColor.hex) {
        skinInstance.closedCaptionOptions.textColor =
          skinInstance.closedCaptionOptions.textColor.hex;
      }
    }
    if (skinInstance.closedCaptionOptions) {
      if (skinInstance.closedCaptionOptions.windowColor.hex) {
        skinInstance.closedCaptionOptions.windowColor =
          skinInstance.closedCaptionOptions.windowColor.hex;
      }
    }
    if (skinInstance.closedCaptionOptions) {
      if (skinInstance.closedCaptionOptions.backgroundColor.hex) {
        skinInstance.closedCaptionOptions.backgroundColor =
          skinInstance.closedCaptionOptions.backgroundColor.hex;
      }
    }

    if (skinInstance.startScreen) {
      if (skinInstance.startScreen.playIconStyle.color.hex) {
        skinInstance.startScreen.playIconStyle.color =
          skinInstance.startScreen.playIconStyle.color.hex;
      }
    }
    if (skinInstance.startScreen) {
      if (skinInstance.startScreen.titleFont.color.hex) {
        skinInstance.startScreen.titleFont.color =
          skinInstance.startScreen.titleFont.color.hex;
      }
    }
    if (skinInstance.startScreen) {
      if (skinInstance.startScreen.descriptionFont.color.hex) {
        skinInstance.startScreen.descriptionFont.color =
          skinInstance.startScreen.descriptionFont.color.hex;
      }
    }

  }
  return skinInstance;
}

/* GET home page. */
router.get('/', (req, res) => res.send('Hello World!'));

router.post('/', (req, res) => {
  const skinInstance = convertColorObjectToString(req.body);
  res.send(skinInstance.closedCaptionOptions.textColor);
  // res.send('done');
  // res.send(skinInstance.closedCaptionOptions);

  // const content = JSON.stringify(req.body);
  //
  // console.log(content);
  // const utf8 = 'utf8';
  // fs.writeFile('skin1.json', content,
  //   utf8, (err) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log('The file was saved!');
  //   });
  // res.send('done');
});

module.exports = router;
