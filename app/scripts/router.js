/* router js */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');


// local
var Interface = ('./components/interface.jsx')
var AccountComponent = require('./components/account-component.jsx').AccountComponent;
var HeaderComponent = require('./components/header.jsx');
var SidebarComponent = require('./components/sidebar.jsx');



var Router = Backbone.Router.extend({
  routes: {
    '': 'account',
    'dashboard': 'dashboard',
    'add': 'add'
  },

  account: function(){
    this.current = 'account';
  },
  dashboard: function(){
    this.current = 'dashboard';
  },
  add: function(){
    this.current = 'add';
  }





});



module.exports = new Router();
