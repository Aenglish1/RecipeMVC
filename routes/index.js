var express = require('express');
var router = express.Router();
var _ = require('lodash');

// TODO: Replace with database powered model
// when we go to production
var recipeSeeds = require('../config/seeds');

/* GET home page. */
router.get('/', function(req, res, next) {
  var recipes = recipeSeeds;
  res.render('index', { recipes: recipes });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { name: "Aaron H. English"});
});


router.get('/recipes/:id', function(req, res, next) {
  var recipeId = req.params.id;
  console.log(req.params);
  var recipe = _.find(recipeSeeds, { id: recipeId });
  res.render('recipesShow', { recipe: recipe });
});

module.exports = router;
