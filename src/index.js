import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

onReceiveCoordinates = (stuff) => {
  console.log(stuff)
}

ReactDOM.render(
  <div>
    <CoordinatesButton
      onReceiveCoordinates = {onReceiveCoordinates(stuff)}
    />
    <DelayedButton
      onDelayedClick = {onDelayedClick(console.log)} 
      delay={1500}
    />
  </div>,
  document.getElementById('global')
);
