var express = require('express');
var router = express.Router();


const tabScore = [
  {
    id: 1,
    title: "Highscore 1",
    content: "1",
  },
  {
    id: 2,
    title: "Highscore 2",
    content: "14",
  },
  {
    id: 3,
    title: "Highscore 3",
    content: "17",
  },
];



/* GET scores. */
router.get('/', function(req, res, next) {
  res.json(tabScore);
});

module.exports = router;
