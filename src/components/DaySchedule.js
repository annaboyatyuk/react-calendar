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
            defaultDate={new Date(this.props.date)}
            defaultView='day'
            events={mapEvents}
            onEventResize={this.props.onEventUpdate}
            resizable
            onEventDrop={this.props.onEventDrop}
            style={{ 
              height: '100vh', 
              maxWidth: '100%',
            }}
            eventPropGetter= {event => ({style: {backgroundColor: event.color}})}
          />
        </div>
      </Fragment>
    );
  }
}
