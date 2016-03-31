/* account jsx */

// 3rd party
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');



// local

var AccountComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){

    return (
      <div className="account-forms col-xs-6 col-xs-offset-3">
        <div>
          <div className="logo-container">
            <div className="logo">S</div>
          </div>
        </div>
        <form id="login" className="form-login">
          <h2 className="form-signin-heading">Please login</h2>
          <input id="login-email" type="text" className="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
          <input id="login-password" type="password" className="form-control" name="password" placeholder="Password" required=""/>
          <button onClick={this.props.login} className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>

          <div className="or-container">
            <span className="or-border col-xs-5"></span>
            <span className="or col-xs-2 text-center">Or</span>
            <span className="or-border col-xs-5"></span>
          </div>

        <form id="signup" className="form-signup" method="post">
          <h2 className="form-signin-heading">No Account? Please sign up</h2>
          <input id="signup-email" type="text" className="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
          <input id="signup-password" type="password" className="form-control" name="password" placeholder="Password" required=""/>
          <button onClick={this.props.signUp} className="btn btn-lg btn-primary btn-block" type="submit">Sign Up!!!</button>
        </form>

      </div>
    )
  }
});




module.exports = AccountComponent;
