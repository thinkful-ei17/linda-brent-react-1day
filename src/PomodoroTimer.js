import React from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';
//import ReactInterval from 'react-interval';

class PomodoroTimer extends React.Component {
constructor(props){
  super(props);
  this.state = {
    currentTimeLeft:60,
    enabled:false, 
    isCompleted:false,
    timer: null
  }
}

padtwo(number){
  return (number < 10 ? '0' : '') + number
};

calcTime(){
  let minutes = Math.floor(this.state.currentTimeLeft/60);
  //let seconds = this.state.currentTimeLeft % 60; alternative - does the same thing
  let seconds = this.state.currentTimeLeft - minutes * 60;
  let paddedSeconds = this.padtwo(seconds);
  return minutes+':'+ paddedSeconds
};

dec1(){
  const {currentTimeLeft} = this.state;
  console.log('dec1 currentTime', this.state.currentTimeLeft);
  this.setState({currentTimeLeft: currentTimeLeft - 10});
};

onTogglePauseResume() {
  const {enabled, timer} = this.state;
  if(!enabled) {
    console.log('pausing timer')
  clearInterval(timer);
  }
  else{
    console.log('starting timer back up')
    this.setState({
      timer: setInterval(() => this.dec1(),1000
    )
  })
}
  this.setState({enabled: !enabled});
};


  render() {

    const {currentTimeLeft, enabled} = this.state;

  if (currentTimeLeft < 60 && currentTimeLeft >= 1) {
      return (
        <div className="App">
          <Display text={this.calcTime()}/>
          <Button text={enabled ? 'Resume' : 'Pause'} clickButton={() => this.onTogglePauseResume()}/>
          </div>
      )
    }
  else if (currentTimeLeft === 0){
    return (
      <div className="App">
        <Display text={this.calcTime()}/>
      </div>
    )
  }
  else {
      return (
        <div className="App">
          <Display text={this.calcTime()}/>
          <Button id='start-timer' text='Start Timer' hidden='false' clickButton={() => this.setState({timer:setInterval(() => this.dec1(), 1000)})} />
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
