import React, { Component } from 'react';
import Authentication from "./auth.js";
import WorkoutLog from "./workoutlog.js";

class BasicApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: true
    }
  }
  render() {
    return (
      <div>
        { this.state.signedIn ? <WorkoutLog onLogout={this._onLogout} /> : <Authentication onAuthComplete={this._onAuthComplete}/> }
      </div>
    ); 
  }
  _onAuthComplete( result ) {
    // let the child auth components control behavior here
    if (result()) {
      this.setState( { signedIn: true } );
    } 
  }
  _onLogout() {
    this.setState( { signedIn: false } )
  }
}

export default BasicApp;



    