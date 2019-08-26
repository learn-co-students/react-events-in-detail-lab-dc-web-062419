// Code CoordinatesButton Component Here
import React from 'react';


class CoordinatesButton extends React.Component{

    coordEvent = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    };
    render(){
      return <button onClick = {this.coordEvent}></button>
    }
}
export default CoordinatesButton