var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('hello react, from express');
});

module.exports = router;
