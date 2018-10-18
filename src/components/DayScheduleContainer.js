import React from 'react';
import DaySchedule from './DaySchedule.js';


class DayScheduleContainer extends React.Component {
  constructor(props) {
    super(props);

    const date = '2018-11-14T08:00:00Z';
    const initialEventData = [
      {
        id: 20,
        startTime: '2018-10-17T16:00:00Z',
        endTime: '2018-10-17T18:00:00Z',
        description: 'Morning Event',
        color: '#2ecc71',
      },
      {
        id: 1,
        startTime: '2018-11-14T16:00:00Z',
        endTime: '2018-11-14T18:00:00Z',
        description: 'Morning Event',
        color: '#2ecc71',
      }, {
        id: 2,
        startTime: '2018-11-14T20:00:00Z',
        endTime: '2018-11-14T23:00:00Z',
        description: 'Afternoon Event',
        color: '#2ecc71',
      }, {
        id: 3,
        startTime: '2018-11-15T06:00:00Z',
        endTime: '2018-11-15T10:00:00Z',
        description: 'Evening Event',
        color: '#e67e22',
      }, {
        id: 4,
        startTime: '2018-11-15T16:00:00Z',
        endTime: '2018-11-15T18:00:00Z',
        description: 'Next Day Event',
        color: '#e74c3c',
      },
    ];

    this.state = {
      date: date,
      events: initialEventData,
    };
  }

  handleEventUpdate = ({ event, startTime, endTime }) => {
    console.log('fjiejoewi',event)
    let moveEvent = this.state.events.map(existingEvent => {
      console.log('ttttttttttttt',existingEvent)
      return existingEvent.id === event.id ? {...existingEvent, startTime, endTime} : existingEvent
    })
    this.setState({
      events: moveEvent,
    })
  };

  handleEventDrop = ({ event, startTime, endTime }) => {

    // this.setState(state => {
    //   state.events.startTime = startTime;
    //   state.events.endTime = endTime;
    //   return { events: state.events };
    // });
  };

  // moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
  //   const { events } = this.state

  //   const idx = events.indexOf(event)
  //   let allDay = event.allDay

  //   // if (!event.allDay && droppedOnAllDaySlot) {
  //   //   allDay = true
  //   // } else if (event.allDay && !droppedOnAllDaySlot) {
  //   //   allDay = false
  //   // }

  //   const updatedEvent = { ...event, start, end, allDay }

  //   const nextEvents = [...events]
  //   nextEvents.splice(idx, 1, updatedEvent)

  //   this.setState({
  //     events: nextEvents,
  //   })

  //   // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  // }


  render() {
    const {
      date,
      events,
    } = this.state;

    return (
      <React.Fragment>
        <DaySchedule
          date={date}
          events={events}
          onEventUpdate={this.handleEventUpdate}
          // onEventDrop={this.handleEventDrop}
        />
      </React.Fragment>
    );
  }
}

export default DayScheduleContainer;