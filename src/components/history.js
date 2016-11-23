import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return <li>{this.props.name} - {this.props.result}</li>;
  } 
}

class History extends Component {
  _mockHistory: [
    {
        "name": "Murph",
        "result": "32:18",
        "notes": "painful, but fun"
    },
    {
        "name": "Tabata Something Else",
        "type": "reps",
        "result": "421",
        "notes": ""
    } 
  ]
  render() {
    var hist = this._mockHistory;
    var formatedLi = [];
    for (var i = 0; i < hist.length; i++) {
      var histObj = { name: hist[i].name, result:
      hist[i].result };
      formatedLi.push(<ListItem {...histObj} />);
    }
    return (
      <div>
        <h2>History</h2>
        <ul>{formatedLi}</ul>
      </div>
    );
  }
}

export default History;