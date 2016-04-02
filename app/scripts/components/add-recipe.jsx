/* add-recipe jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var LinkedStateMixin = require('react/lib/LinkedStateMixin');
var Parse = require('parse');
require('backbone-react-component');



//setup parse SDK to connect to server
Parse.initialize("brandon");
Parse.serverURL = 'http://jupiter-server.herokuapp.com';

// local
var models = require('../models/models.js');

var IngredientFormset = React.createClass({
  render: function(){
    return (
      <div className="ingredients row">
        <div className="ingredient-wrapper col-xs-10 col-xs-offset-1">
            <input ref={"amount"}  type="text" name={"amount" + this.props.count} className="form-control" id="amount" placeholder="Amount"/>
            <select ref={"units"} name={"units" + this.props.count} className="unit form-control" defaultValue="A">
              <option disabled value="A">unit</option>
              <option value="B">tsp.</option>
              <option value="C">tbsp.</option>
              <option value="D">fl oz(s)</option>
              <option value="E">cup(s)</option>
              <option value="F">pt(s)</option>
              <option value="G">qt(s)</option>
              <option value="H">gal(s)</option>
              <option value="I">oz(s)</option>
              <option value="J">lb(s)</option>
            </select>
            <input ref={"ingredient"} type="text" name={"ingredient" + this.props.count} className="form-control" id="ingredient" placeholder="Ingredient"/>
            <button ref={"button" + this.props.count} onClick={this.props.handleDelete} id="delete-ingredient" type="button" className="btn btn-default"><i className="fa fa-times-circle"></i></button>
        </div>
      </div>
    )
  }
});


var AddRecipe = React.createClass({
  mixins: [Backbone.React.Component.mixin, LinkedStateMixin],
  getInitialState: function() {
    return {
      title: '',
      description: '',
      servings: '',
      prep: '',
      cook: '',
      ingredientCount: 2
    };
  },
  handleSubmit: function(e){
    e.preventDefault();
    var self = this;
    var router = this.props.router;
    var recipe = new models.Recipe();

    recipe.set({
      "title": this.state.title,
      "description": this.state.description,
      "servings": this.state.servings,
      "prep": this.state.prep,
      "cook": this.state.cook
    });

    recipe.save(null, {
      success: function(recipe) {
        var recipeIngredients = [];

        for(var i=1; i <= self.state.ingredientCount; i++){
          var formset = self.refs["formset" + i];

          var amount = formset.refs["amount"].value;
          var units = formset.refs["units"].value;
          var ingredientName = formset.refs["ingredient"].value;


          var ingredient = new models.Ingredient();
          ingredient.set({
            "amount": amount,
            "units": units,
            "ingredientName": ingredientName,
            "recipe": recipe
          });

          recipeIngredients.push(ingredient);
        }

        Parse.Object.saveAll(recipeIngredients, {
          success: function(list) {
            alert('ing saved!');
            router.navigate('dashboard', {trigger: true});
          },
          error: function(error) {
            console.log(error);
          }
        });


        // Execute any logic that should take place after the object is saved.

        alert('New object created with objectId: ' + recipe.id);
      },
      error: function(recipe, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });

  },
  addIngredient: function(e){
    e.preventDefault();
    var newCount = this.state.ingredientCount + 1;
    this.setState({'ingredientCount': newCount});
  },
  handleDelete: function(e){
    e.preventDefault();
    var self = this;
    var newCount = self.state.ingredientCount - 1;
    self.setState({'ingredientCount': newCount});
  },
  render: function(){

    var ingredientForms = [];
    for(var i=1; i<= this.state.ingredientCount; i++){
      var count = i;
      ingredientForms.push(<IngredientFormset key={count} handleDelete={this.handleDelete} count={count} ref={"formset" + count}/>);
    }




    return (
      <div id="recipe-form">
      <div className="recipe-add-container col-xs-8 col-xs-offset-1">
        <form onSubmit={this.handleSubmit} className="form-group" action="/">
          <div className="recipe-add row">

            <div className="add-img">
              <div className="text-center">
                <div className="add-icon-con text-center">
                  <span className="add-photo-icon glyphicon glyphicon-picture"></span>
                  <span className="add-photo-txt">Add Photo</span>
                </div>
                <div className="title row">
                  <div className="title-con col-xs-8 col-xs-offset-2">
                    <input type="text" name="title" className="form-control" id="recipe-title" placeholder="Title" valueLink={this.linkState('title')} />
                  </div>
                </div>
              </div>
            </div>
            <div className="recipe-info">

              <h2 className="section-header">Description</h2>
                <textarea id="description" className="custom form-control" name="description" rows="3" cols="50" maxlength="4000" placeholder="Tell us about your recipe, why you like this recipe, where it came from, or suggested modifications." valueLink={this.linkState('description')} ></textarea>

              <div className="ingredients-header">
                <h2 className="section-header">Ingredients</h2>
                <span className="servings-wrapper">
                  <label htmlFor="servings" className="servings-txt">Servings</label>
                  <input type="text" name="servings" className="form-control" id="servings"
                    valueLink={this.linkState('servings')} />
                </span>
              </div>

              {ingredientForms}

                <div className="ingredient-add-wrapper row">
                  <div className="ingredient-add">
                    <button onClick={this.addIngredient} id="add-ingredient" type="button" className="btn btn-default center-block"><i className="fa fa-plus"></i> Add Ingredient</button>
                  </div>
                </div>

                <div className="directions-header">
                  <h2 className="section-header">Directions</h2>
                  <span className="prep-wrapper">
                    <label htmlFor="prep-time" className="prep-txt">Prep Time</label>
                    <input type="text" name="prep" className="form-control" id="prep-time" placeholder="min" valueLink={this.linkState('prep')} />
                  </span>
                  <span className="cook-wrapper">
                    <label htmlFor="cook-time" className="cook-txt">Cook Time</label>
                    <input type="text" name="cook" className="form-control" id="cook-time" placeholder="min" valueLink={this.linkState('cook')} />
                  </span>
                </div>

                <div className="directions row">
                  <div className="directions-wrapper col-xs-10 col-xs-offset-1">
                    <textarea id="directions-txt" className="custom form-control" name="description" rows="3" cols="50" maxlength="4000" placeholder="Add a preparation step (e.g Combine together the salt, sugar and...)"></textarea>
                  </div>
                </div>

                <div className="direction-add-wrapper row">
                  <div className="direction-add">
                    <button id="add-direction" type="button" className="btn btn-default center-block"><i className="fa fa-plus"></i> Add Direction</button>
                  </div>
                </div>

                  <div className="submit-recipe-wrapper row">
                    <h4 className="text-center">Ready to submit your recipe for everyone to try?</h4>
                    <div className="submit-button-wrapper">
                      <button id="submit-recipe" type="submit" className="btn btn-default center-block">Publish Recipe</button>
                    </div>
                  </div>
                </div>
              </div>
          </form>
        </div>
      </div>
    )
  }
});


module.exports = AddRecipe;
