var express = require('express');
var router = express.Router();


const tabScore = [
  {
    id: 1,
    //title: "Highscore 1",
    content: 1,
  },
  {
    id: 2,
    content: 14,
  },
  {
    id: 3,
    content: 17,
  },
];



/* GET scores. */
router.get('/', function(req, res, next) {
  res.json(tabScore);
});

/* POST */
router.post("/", function (req, res, next) {
  const newScore = {
    id: tabScore.length + 1,
    content: req.body.content,
  };

  //Scores are ordered by value of content
  tabScore.push(newScore);
  tabScore.sort(compareContent);
  return res.json(newScore);
});

function compareContent(a, b){
  if(a.content < b.content) return -1;
  if(a.content > b.content) return 1;
  return 0;
}


module.exports = router;
