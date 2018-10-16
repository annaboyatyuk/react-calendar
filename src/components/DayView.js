import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const DnDCalendar = withDragAndDrop(Calendar);

class DayView extends Component {
  state = {
    events: this.props.eventData
    // [
    //   {
    //     start: new Date(),
    //     end: new Date(moment().add(1, 'days')),
    //     title: 'Some title'
    //   }
    // ]
  };

  onEventResize = (type, { event, startTime, endTime, allDay }) => {
    this.setState(state => {
      state.events.startTime = startTime;
      state.events.endTime = endTime;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, startTime, endTime, allDay }) => {
    console.log(startTime);
  };

  render() {
    return (
      <div className='App'>
        <DnDCalendar
          // toolbar={false}
          defaultDate={new Date()}
          defaultView='day'
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: '80vh', width: '60vh' }}
        />
      </div>
    );
  }
}

export default DayView;
