var express = require('express');
var router = express.Router();

var recipes = [
  {
    id: 1,
    title: "Meat Balzz"
  },
  {
    id: 2,
    title: "Organic Boiled Water"
  },
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { recipes: recipes });
});

module.exports = router;
