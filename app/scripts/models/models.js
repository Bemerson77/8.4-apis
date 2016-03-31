/* models js */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');



// local


var Recipe = Parse.Object.extend("Recipe");


var Ingredient = Parse.Object.extend("Ingredient");




module.exports = {
  Recipe: Recipe,
  Ingredient: Ingredient
};
