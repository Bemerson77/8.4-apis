/* header jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');



// local

var HeaderComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){

    return (

      <div className="header-outer">
          <header id="header" className="header container">
            <div className="header-inner row">

              <div className="logo-container">
                <a className="logo-link" href="#dashboard">
                  <div className="logo">S</div>
                </a>
              </div>

              <div className="header-nav">
                <ul className="header-nav-items">
                  <li className="header-nav-item">
                    <a className="add-recipe" href="#add">
                      <span className="glyphicon glyphicon-plus" id="nav-add"></span>
                    </a>
                  </li>
                  <li className="header-nav-item">
                    <a className="logout-link" onClick={this.props.logout}>
                      <span className="glyphicon glyphicon-user" id="nav-user"></span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </header>
      </div>

    )
  }
});




module.exports = HeaderComponent;
