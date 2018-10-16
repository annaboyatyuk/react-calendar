import React, { Component, Fragment } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const DnDCalendar = withDragAndDrop(Calendar);


export default class DaySchedule extends Component {
  state = {
    events: [
      {
        // startTime: this.props.events.start,
        start: new Date(this.props.events.startTime),
        endTime: new Date(this.props.events.endTime),
        title: this.props.events.description,
      }
    ]
    // this.props.events
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
    console.log(startTime, this.props.enventData);
  };

  render() {
    console.log('aaaa',this.state, this.props.events.map(event => event.color))
    let colors = this.props.events.color
    return (
      <Fragment>
        <div className='App'>
          <DnDCalendar
            // toolbar={false}
            // defaultDate={new Date(this.props.date)}
            defaultDate={new Date()}
            defaultView='day'
            events={this.state.events}
            onEventDrop={this.onEventDrop}
            onEventResize={this.onEventResize}
            resizable
            style={{ 
              height: '80vh', 
              width: '60vh',
              color:{colors}
            }}
          />
        </div>
      </Fragment>
    );
  }
}
