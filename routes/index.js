var express = require('express');
var router = express.Router();

// TODO: Replace with database powered model
// when we go to production
var recipeSeeds = require('../config/seeds');

/* GET home page. */
router.get('/', function(req, res, next) {
  var recipes = recipeSeeds;
  res.render('index', { recipes: recipes });
});

module.exports = router;
