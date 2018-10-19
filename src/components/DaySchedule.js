import React, { Component, Fragment } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = Calendar.setLocalizer(Calendar.momentLocalizer(moment));
Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const DnDCalendar = withDragAndDrop(Calendar);


export default class DaySchedule extends Component {


  // componentDidMount = () => {
  //   let mapEvents = this.props.events.map(event => {
  //     // return 
  //     this.setState({
  //       id: event.id,
  //       start: new Date(event.startTime.slice(0, event.startTime.length -1)),
  //       end: new Date(event.endTime.slice(0, event.startTime.length -1)),
  //       title: event.description,
  //       color: event.color,
  //     });
  //   });
  //   return mapEvents;
  // }

  render() {

    // console.log('aaaa', this.props.events);
    console.log('75757576767', this.props.events);


    // if(this.props.events.map(event => event.startTime.slice(-1)) === 'Z') {
    //   console.log('IROIEJOIFJEIO')
    // }
    // else{
    //   console.log('differenttimestamp')
    // }

    let mapEvents = this.props.events.map(event => {
      console.log('PPPP',event);
      return {
        id: event.id,
        start: new Date(event.startTime.slice(0, event.startTime.length -1)),
        end: new Date(event.endTime.slice(0, event.startTime.length -1)),
        title: event.description,
        color: event.color,
      };
    });
    
    let colors = mapEvents.color;

    // let event = this.props.eventItems;
    console.log('REKLEKJRKLEK',this.props.events, mapEvents);

    return (
      <Fragment>
        <div className='App'>
          <DnDCalendar
            // localizer={localizer}
            // startAccessor='start'
            // endAccessor='end'
            // toolbar={false}
            defaultDate={new Date(this.props.date)}
            // defaultDate={new Date()}
            defaultView='day'
            events={mapEvents}
            onEventResize={this.props.onEventUpdate}
            // resizable
            // onEventDrop={this.props.onEventDrop}
            style={{ 
              height: '100vh', 
              maxWidth: '100%',
              color:{colors},
            }}
          />
        </div>
      </Fragment>
    );
  }



  // else {
  //   return <h1>hfoeihfoi</h1>
  // }









  // }
}
