/* header jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');
var Parse = require('parse');


var models = require('../models/models.js');

//setup parse SDK to connect to server
Parse.initialize("brandon");
Parse.serverURL = 'http://jupiter-server.herokuapp.com';





// local
var Dashboard = require('./dashboard.jsx');
var Account = require ('./account-component.jsx');
var AddRecipe = require('./add-recipe.jsx');


var Interface = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return {
      user: null,
      router: this.props.router
    }
  },
  componentWillMount: function(){
    this.callback = (function(){
     this.forceUpdate();
    }).bind(this);
    this.state.router.on('route', this.callback);
  },
  componentWillUnmount: function(){
    this.state.router.off('route', this.callback);
  },
  signUp: function(e){
    e.preventDefault();
    var user = new Parse.User();
    var email = $('#signup-email').val();
    var password = $('#signup-password').val();
    user.set("username", email);
    user.set("password", password);

    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
        alert('wooooooooo! You created an account. Please log in now!');

      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  },
  login: function(e){
    e.preventDefault();
    var email = $('#login-email').val();
    var password = $('#login-password').val();
    Parse.User.logIn(email, password, {
      success: function(user) {
        Backbone.history.navigate("dashboard", {trigger: true});
        console.log('Success: ', user);
        // Do stuff after successful login.
      },
      error: function(user, error) {
        console.log('error ', error);
        // The login failed. Check error to see why.
      }
    });
  },
  logout: function(e){
    console.log('logout');
    e.preventDefault();

    Parse.User.logOut().then(function(){
      var currentUser = Parse.User.current();  // this will now be null
      Backbone.history.navigate('', {trigger: true});
    });

  },
  // login: function(e){
  //   e.preventDefault();
  //   //do the login with parse
  //   Parse.User.login().then(function(user){
  //     this.setState({'user': user});
  //   });
  // },
  // componentWillMount: function(){
  //   if(Parse.User.current()){
  //     this.setState({user: Parse.User.current()});
  //   }
  // },
  render: function(){
    switch(this.props.router.current){
      case 'account':
        return (
          <Account
            signUp={this.signUp}
            login={this.login}
            page={this.state.router.current}
            user={this.state.user}
          />
        );

      // multiple routes use the Dashboard component (no break)
      case 'dashboard':
      case 'add':
        return (
          <Dashboard logout={this.logout} router={this.props.router} />
        );
    }


  }
  //   if(!this.state.user && this.props.router.current == 'account' ){
  //     return ( <Account login={this.login} /> );
  //   }
  //   else{
  //     return (
  //       <Dashboard user={this.state.user} page={this.state.router.current}/>
  //     );
  //   }
  // }
});




module.exports = Interface;
