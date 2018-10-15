import React, { Component } from 'react';
import 'moment-timezone';
import DayScheduleContainer from './components/DayScheduleContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <DayScheduleContainer/>
      </div>
    );
  }
}

export default App;
