/* header jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');



// local
var Header = require('./header.jsx');
var Sidebar = require('./sidebar.jsx');
var RecipeList = require('./recipe-list.jsx');
var AddRecipe = require('./add-recipe.jsx');

var Dashboard = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var currentComponent;
    if (this.props.router.current == 'dashboard'){
      currentComponent = <RecipeList />
    }else if (this.props.router.current == 'add'){
      currentComponent = <AddRecipe router={this.props.router} />
    }
    return (
    <div>

        <Header logout={this.props.logout} />


        <Sidebar />


        {currentComponent}

    </div>
    )
  }
});





module.exports = Dashboard;
