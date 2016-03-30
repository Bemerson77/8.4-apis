/* main js */

// 3rd party
var $ = require('jquery');
var Backbone = require('backbone')
var React = require('react');
var ReactDOM = require('react-dom');


// local
var router = require('./router');
var Interface = require('./components/interface.jsx');


Backbone.history.start();


ReactDOM.render(
  React.createElement(Interface,{ router: router }),
  document.getElementById('app')
);



// $(function(){
//   Backbone.history.start();
// });
