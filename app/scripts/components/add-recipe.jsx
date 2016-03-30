/* add-recipe jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');



// local


var AddRecipe = React.createClass({
  render: function(){
    return (
      <div id="recipe-form">
      <div className="recipe-add-container col-xs-8 col-xs-offset-1">
        <form className="form-group" action="/">
          <div className="recipe-add row">

            <div className="add-img">
              <div className="text-center">
                <div className="add-icon-con text-center">
                  <span className="add-photo-icon glyphicon glyphicon-picture"></span>
                  <span className="add-photo-txt">Add Photo</span>
                </div>
                <div className="title row">
                  <div className="title-con col-xs-8 col-xs-offset-2">
                    <input type="text" name="title" className="form-control" id="recipe-title" placeholder="Title"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="recipe-info">

              <h2 className="section-header">Description</h2>
                <textarea id="description" className="custom form-control" name="description" rows="3" cols="50" maxlength="4000" placeholder="Tell us about your recipe, why you like this recipe, where it came from, or suggested modifications."></textarea>

              <div className="ingredients-header">
                <h2 className="section-header">Ingredients</h2>
                <span className="servings-wrapper">
                  <label htmlFor="servings" className="servings-txt">Servings</label>
                  <input type="text" name="servings" className="form-control" id="servings"/>
                </span>
              </div>

              <div className="ingredients row">
                <div className="ingredient-wrapper col-xs-10 col-xs-offset-1">
                    <input type="text" name="amount" className="form-control" id="amount" placeholder="Amount"/>
                    <select className="unit form-control">
                      <option selected disabled>unit</option>
                      <option>tsp.</option>
                      <option>tbsp.</option>
                      <option>fl oz</option>
                      <option>c</option>
                      <option>pt</option>
                      <option>qt</option>
                      <option>gal</option>
                      <option>oz</option>
                      <option>lb</option>
                    </select>
                    <input type="text" name="ingredient" className="form-control" id="ingredient" placeholder="Ingredient"/>
                    <button id="delete-ingredient" type="button" className="btn btn-default"><i className="fa fa-times-circle"></i></button>
                </div>
              </div>

                <div className="ingredient-add-wrapper row">
                  <div className="ingredient-add">
                    <button id="add-ingredient" type="button" className="btn btn-default center-block"><i className="fa fa-plus"></i> Add Ingredient</button>
                  </div>
                </div>

                <div className="directions-header">
                  <h2 className="section-header">Directions</h2>
                  <span className="prep-wrapper">
                    <label htmlFor="prep-time" className="prep-txt">Prep Time</label>
                    <input type="text" name="prep" className="form-control" id="prep-time"/>
                  </span>
                  <span className="cook-wrapper">
                    <label htmlFor="cook-time" className="cook-txt">Cook Time</label>
                    <input type="text" name="cook" className="form-control" id="cook-time"/>
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
