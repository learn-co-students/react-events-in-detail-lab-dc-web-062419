import React, {Component} from 'react';

class CoordinatesButton extends Component {
    createArray = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button
                onClick = {this.createArray}
            ></button>
        )
    }
}

export default CoordinatesButton