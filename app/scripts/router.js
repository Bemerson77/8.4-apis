/* router js */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


// local
var AccountComponent = require('./components/account-component.jsx').AccountComponent;
var HeaderComponent = require('./components/header.jsx');
var SidebarComponent = require('./components/sidebar.jsx');



var Router = Backbone.Router.extend({
  routes: {
    '': 'account',
    'main': 'main',
  },

  account: function(){
    ReactDOM.render(
      React.createElement(AccountComponent),
      document.getElementById('account-forms')
    );
  },
  main: function(){
    ReactDOM.render(
      React.createElement(HeaderComponent),
      document.getElementById('header')
    );
    ReactDOM.render(
      React.createElement(SidebarComponent),
      document.getElementById('sidebar')
    );
  },
  



});



module.exports = Router;
