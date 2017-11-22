/**
 * Created by gramachandran on 14/11/17.
 */
const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
  console.log(next);
});

module.exports = router;
