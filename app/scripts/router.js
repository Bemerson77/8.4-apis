/* router js */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var Parse = require('parse');


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
  requireLogin: function(){
    var currentUser = Parse.User.current();
      if (!currentUser) {
        this.navigate('', {trigger: true});
      }
  },
  account: function(){
    this.current = 'account';
    var currentUser = Parse.User.current();
      if (currentUser) {
        this.navigate('dashboard', {trigger: true});
      }
  },
  dashboard: function(){
    this.current = 'dashboard';
    this.requireLogin();
  },
  add: function(){
    this.current = 'add';
    this.requireLogin();
  }





});



module.exports = new Router();
