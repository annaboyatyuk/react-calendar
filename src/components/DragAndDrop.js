import React, { Component, Fragment } from 'react';
import {DragDropContainer, DropTarget} from 'react-drag-drop-container';

export default class DragAndDrop extends Component {

  // showTime = () => {
  //   // let date = <Moment format='h a'>{this.props.date}</Moment>;
  //   // let date = new Date();
  //   return (

  //     // <tr>
  //     this.props.events.map(event => {
  //           return <td key={event.id}>{event.description}</td>
  //         })
  //     // </tr>

  //   )
  // }


  render() {
    return (
      <Fragment>
        
        <table>
          <tbody>
            <tr>
              {this.props.events.map(event => {
                return (
                  <td key={event.id}>
                    <DragDropContainer  
                      targetKey="foo" 
                      // dragData={some object} 
                      // onDrop={some method}
                      // onDragStart={some method} 
                      // onDrag={some method} 
                      // onDragEnd={some method}
                    >
                      {event.description}
                    </DragDropContainer>
                  </td>
                );
              })
              }
            </tr>
          </tbody>
        </table>
        

        <DropTarget targetKey="foo" >
          <table>
            <tbody>
              <tr>
                <td>drop</td>
              </tr>
            </tbody>
          </table>
        </DropTarget>
      </Fragment>
    );
  }
}