import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';
import ReactInterval from 'react-interval';

class PomodoroTimer extends React.Component {
constructor(props){
  super(props);
  this.state = {
    currentTimeLeft:1500,
    countdownInterval:1000,
    isPaused:false,
    enabled:true,
    isCompleted:false
  }
}


updateTimeLeft(){
  let newCount = this.state.currentTimeLeft - 1;
  if(newCount >= 0){
  this.setState({currentTimeLeft:newCount})
  }
  else{
    this.setState({isCompleted:true})
  }
}

  render() {

    if (this.state.enabled && this.state.isPaused) {
    return (
      <div className="App">
      <Display text='Paused' />
      <Button text='Resume Timer' />
      </div>
    )}
    else if (this.state.enabled && !this.state.isPaused) {
      return (
        <div className="App">
          <Display text={this.state.currentTimeLeft - 1} />
          <Button text='Pause Timer' />
        </div>
      )
    }
    else if (this.state.enabled && !this.state.isPaused && this.state.isCompleted) {
      return (
        <div className="App">
          <Display text={this.state.currentTimeLeft} />
          <Button text='Start Timer' />
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <Display text='done'/>
          <Button text='Start New Timer' />
        </div>
      )
    }
  }
}

export default PomodoroTimer;


// if (this.state.enabled && !this.state.isPaused) {
//   start timer and decreasing timer
// }

// else if (this.state.enabled && this.state.isPaused) {
//   render(
//     <div>
//       <Display text=paused >
//         <Button id=resume text=resume >
//     </div>
//   )
// }


// else {
//         start page
// }
