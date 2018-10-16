import React, { Component, Fragment } from 'react';
import '../../style/daySchedule.scss';
import Moment from 'react-moment';
import DragAndDrop from './DragAndDrop.js';


export default class DaySchedule extends Component {

  renderRow = () => {
    let hours = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];

    return (
      hours.map(hour => {
        return (
        <tr key={hour}>
          <td className='hour'>{hour}</td>
          {/* {this.props.events.map(event => {
            return <td>{event}</td>
          })} */}
          <td></td>
          {/* <td>{this.props.events}</td> */}
        </tr>
          )
      })
    )
  }

  showTime = () => {
    // let date = <Moment format='h a'>{this.props.date}</Moment>;
    // let date = new Date();
    return (

      <tr>
      {this.props.events.map(event => {
            return <td key={event.id}>{event.description}</td>
          })}
      </tr>

    )
  }

  render() {
    var rows = this.renderRow();
    let hours = this.showTime();


    return (
      <Fragment>
      <Moment format='ddd, MMMM Do'>{this.props.date}</Moment>
      <table>
        <tbody>
          {rows}
          {hours}
        </tbody>
      </table>
      <DragAndDrop events={this.props.events}/>
      </Fragment>
    );
  }
}
