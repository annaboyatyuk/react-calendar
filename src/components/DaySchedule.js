import React, { Component, Fragment } from 'react';
import '../../style/daySchedule.scss';
import Moment from 'react-moment';



export default class DaySchedule extends Component {




  renderRow = () => {
    let hours = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];

    return (
      hours.map(hour => {
        return (
        <tr key={hour}>
          <td className='hour'>{hour}</td>
          <td></td>
        </tr>
          )
      })
    )
  }

  showTime = () => {
    let date = <Moment format='h a'>{'2018-11-14T16:00:00Z'}</Moment>;
    return (
      <tr>
        <td>{date}</td>
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
      </Fragment>
    );
  }
}
