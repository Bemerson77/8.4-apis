/* header jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');



// local


var SidebarComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div className="sidebar col-xs-2">
        <ul className="sidebar-nav">
          <li id="side-popular" className="sidebar-nav-items">
            <a href="#">Popular Rescipes</a>
          </li>
          <li id="side-recipes" className="sidebar-nav-items">
            <a href="#">My Recipes</a>
          </li>
          <li id="side-favorites" className="sidebar-nav-items">
            <a href="#">My Favorites</a>
          </li>
          <li id="side-pantry" className="sidebar-nav-items">
            <a href="#">My Pantry</a>
          </li>
        </ul>
      </div>
    )
  }
});


module.exports = SidebarComponent;
