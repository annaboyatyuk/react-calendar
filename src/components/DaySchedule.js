import React, { Component, Fragment } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const DnDCalendar = withDragAndDrop(Calendar);


export default class DaySchedule extends Component {



  render() {
    console.log('aaaa', this.props.events.map(event => event));
    let colors = this.props.events.map(event=> event.color);

    let mapEvents = this.props.events.map(event => {
      return {
        id: event.id,
        start: new Date(event.startTime.slice(0, event.startTime.length -1)),
        end: new Date(event.endTime.slice(0, event.startTime.length -1)),
        title: event.description,
        color: event.color,
      };
    });

    return (
      <Fragment>
        <div className='App'>
          <DnDCalendar
            // toolbar={false}
            defaultDate={new Date(this.props.date)}
            // defaultDate={new Date()}
            defaultView='day'
            events={mapEvents}
            onEventDrop={this.props.onEventDrop}
            onEventResize={this.props.onEventUpdate}
            resizable
            style={{ 
              height: '80vh', 
              width: '60vh',
              color:{colors},
            }}
          />
        </div>
      </Fragment>
    );
  }
}
