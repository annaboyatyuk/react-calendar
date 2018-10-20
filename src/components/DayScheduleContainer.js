import React from 'react';
import DaySchedule from './DaySchedule.js';
import moment from 'moment';

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

  handleEventUpdate = (type, { event, start, end }) => {    
    let startTime = moment(start).format() +'Z';
    let endTime = moment(end).format() +'Z';

    let moveEvent = this.state.events.map(existingEvent => {
      return existingEvent.id === event.id ? {...existingEvent, startTime, endTime} : existingEvent
    })
    this.setState({
      events: moveEvent,
    })
  };

  handleEventDrop = ({ event, start, end }) => {
    console.log('WWWWW',event, start, end)
    console.log('ggggg', this.state.events)
    let startTime = moment(start).format() +'Z';
    let endTime = moment(end).format() +'Z';

    event.start = moment(event.start).format() + 'Z';
    event.end = moment(event.end).format() + 'Z';
    event.description = event.title;

    const index = this.state.events.indexOf(event)
    console.log('BBBB',index)


    const updatedEvent = { ...event, startTime, endTime, title: this.state.title }
    console.log('hhhahah', updatedEvent);

    const nextEvents = [...this.state.events]
    console.log('TTTT',nextEvents.splice(1, 1, updatedEvent))
    nextEvents.splice(index, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

  };


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
          onEventDrop={this.handleEventDrop}
        />
      </React.Fragment>
    );
  }
}

export default DayScheduleContainer;