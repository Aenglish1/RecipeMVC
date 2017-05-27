var express = require('express');
var router = express.Router();
var _ = require('lodash');
// TODO: update/remove this when switching to database or growing past 10 seeds
var latestId = 10;

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

router.get('/recipes/new', function(req, res, next) {
  res.render('recipesNew', {});
});

router.get('/recipes/edit/:id', function(req, res, next) {
  var recipeId = req.params.id;
  var recipe = _.find(recipeSeeds, { id: recipeId });
  res.render('recipesEdit', { recipe: recipe });
});

router.get('/recipes/:id', function(req, res, next) {
  var recipeId = req.params.id;
  console.log(req.params);
  var recipe = _.find(recipeSeeds, { id: recipeId });
  res.render('recipesShow', { recipe: recipe });
});

// UPDATE
router.put('/recipes/:id', function(req, res, next) {
  var recipeAttrs = {
    id: req.params.id + "", // All ID's must be stored as strings right now
    title: req.body.title
  };
  var recipe = _.remove(recipeSeeds, { id: recipeAttrs.id});
  var updatedRecipe = _.merge(recipe, recipeAttrs);
  recipeSeeds.push(updatedRecipe);

  res.redirect('/');
});

// DELETE
router.delete('/recipes/:id', function(req, res, next) {
  var recipeId = req.params.id;
  _.remove(recipeSeeds, { id: recipeId});

  res.redirect('/');
});

// CREATE
router.post('/recipes', function(req, res, next) {

  var recipeAttrs = {
    id: ++latestId + "", // All ID's must be stored as strings right now
    title: req.body.title
  };

  recipeSeeds.push(recipeAttrs);

  res.redirect('/');
});

module.exports = router;
