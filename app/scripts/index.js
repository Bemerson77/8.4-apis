/* main js */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone')
var React = require('react');
var ReactDOM = require('react-dom');


// local
var Router = require('./router');

var router = new Router();







$(function(){
  Backbone.history.start();
});
