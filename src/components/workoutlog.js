import React, { Component } from 'react'; 

import Nav from "./navigation.js";
import DefineWorkout from "./define.js";
import StoreWorkout from "./store.js";
import History from "./history.js";

class WorkoutLog extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      view: "define"
    }
  }
  render() {
    return (
      <div>
        <h1>Workout Log</h1>
        <Nav onLogout={this.props.onLogout} onNav={this._onNav}/>
        {this.state.view === "define" ? <DefineWorkout /> : "" }
        {this.state.view === "store" ? <StoreWorkout /> : "" }
        {this.state.view === "history" ? <History /> : "" }
      </div> 
    );
  }
  _onNav( theView ) {
    this.setState( { 
      view: theView 
    });
  }
}

export default WorkoutLog;