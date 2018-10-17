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
        start: '',
        end: '',
        title: '',
      }
    ]
  };

  // showEvents = () => {
  //   let items = {
  //     start: this.props.events.map(event => event.startTime),
  //     end: this.props.events.map(event => event.endTime),
  //     title: this.props.events.map(event => event.description),
  //   };
  //   let arr = [...this.state.events, items];
  //   this.setState({events: arr})
  //   // return arr;
  // }

  // onEventResize = (type, { event, startTime, endTime, allDay }) => {
  //   this.setState(state => {
  //     state.events.startTime = startTime;
  //     state.events.endTime = endTime;
  //     return { events: state.events };
  //   });
  // };

  // onEventDrop = ({ event, startTime, endTime, allDay }) => {
  //   console.log(startTime, this.props.enventData);
  // };

  render() {
    console.log('aaaa', this.props.events.map(event => event.startTime))
    let colors = this.props.events.map(event=> event.color)
    return (
      <Fragment>
        <div className='App'>
          <DnDCalendar
            // toolbar={false}
            // defaultDate={new Date(this.props.date)}
            defaultDate={new Date()}
            defaultView='day'
            events={this.props.events}
            onEventDrop={this.props.onEventDrop}
            onEventResize={this.props.onEventUpdate}
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
