/* recipe-list jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');



// local


var RecipeList = React.createClass({
  render: function(){
    return (
      <div id="recipe-list">

          <div className="image-container col-xs-3">
            <img src="https://unsplash.it/400/400/?random" alt=""/>
          </div>
          <div className="image-container col-xs-3">
            <img src="https://unsplash.it/400/400/?random" alt=""/>
          </div>
          <div className="image-container col-xs-3">
            <img src="https://unsplash.it/400/400/?random" alt=""/>
          </div>
          <div className="image-container col-xs-3">
            <img src="https://unsplash.it/400/400/?random" alt=""/>
          </div>

      </div>
    )
  }
});


module.exports = RecipeList;
