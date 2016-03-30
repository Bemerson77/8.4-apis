/* header jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');



// local
var Dashboard = require('./dashboard.jsx');
var Account = require ('./account-component.jsx');
var AddRecipe = require('./add-recipe.jsx');



var Interface = React.createClass({
  getInitialState: function(){
    return {
      user: null
    }
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
          <Account />
        );

      // multiple routes use the Dashboard component (no break)
      case 'dashboard':
      case 'add':
        return (
          <Dashboard router={this.props.router} />
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
