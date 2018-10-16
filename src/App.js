import React, { Component, Fragment } from 'react';
// import DayView from './components/DayView.js';
import DayScheduleContainer from './components/DayScheduleContainer.js';

import './App.css';

class App extends Component {


  render() {
    return (
      <Fragment>
        <DayScheduleContainer/>
      </Fragment>
    );
  }
}

export default App;
