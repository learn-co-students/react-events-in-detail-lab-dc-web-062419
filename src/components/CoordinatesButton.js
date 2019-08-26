// Code CoordinatesButton Component Here
import React, { Component } from 'react';







export default class CoordinatesButton extends Component{
    
    
    buttonClick = (event) => {

        this.props.onReceiveCoordinates([event.clientX, event.clientY])  
    }
    render(){
        
        return(

            <div>
                Words
            <button onClick={this.buttonClick}>Button</button>
            </div>
        )

    }


}