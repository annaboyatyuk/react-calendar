import React from 'react';
import DaySchedule from './DaySchedule.js';
import moment from 'moment';

class DayScheduleContainer extends React.Component {
  constructor(props) {
    super(props);

    const date = '2018-11-14T08:00:00Z';
    const initialEventData = [
      // {
      //   id:12,
      //   start: new Date(),
      //   end: new Date(moment().add(1, 'hour')),
      //   title: 'Some title',
      //   color: '#e67e22',
      // },
      // {
      //   id: 0,
      //   start: new Date('2018-10-17T18:00:00'),
      //   end: new Date('2018-10-17T19:00:00'),
      //   title: 'Morning Event',
      //   color: '#2ecc71',
      // },
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

  handleEventUpdate = (type, { event, startTime, endTime, allDay }) => {
    this.setState(state => {
      state.events.startTime = startTime;
      state.events.endTime = endTime;
      return { events: state.events };
    });
  };

  handleEventDrop = ({ event, startTime, endTime, allDay }) => {
    console.log(startTime, this.props.enventData);
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