import React, { Component } from 'react'; 
import SignIn from './signin.js';
import CreateAccount from './createaccount.js';

class Authentication extends Component {
  render() {
    return (
      <div>
        <SignIn onAuthComplete={this.props.onAuthComplete}/>
        <CreateAccount onAuthComplete={this.props.onAuthComplete}/>
      </div>
    );
  }
}

export default Authentication;