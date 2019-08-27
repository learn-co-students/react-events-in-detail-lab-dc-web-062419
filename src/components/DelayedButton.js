// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

    willHappenLater = (event) => {
        event.persist()
        // this.props.onDelayedClick(event)
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
        // console.log(this.props.delay)


    }


    render () {

        // console.log(this.props.delay)
        // return (<button onClick={setTimeout(this.willHappenLater, this.props.delay)}></button>)
        return (<button onClick={this.willHappenLater}></button>)
    }
}