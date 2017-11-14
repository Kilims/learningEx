import React, { Component } from 'react';
import Selection from './selection/selection';
import './App.css'

class App extends Component {
  render() {
    return (
        <div>
          <Selection />
          <Selection height="40px" />
          <Selection width="500px" />
          <Selection words="Please kindly select one option..." />
        </div>
    );
  }
}

export default App;
