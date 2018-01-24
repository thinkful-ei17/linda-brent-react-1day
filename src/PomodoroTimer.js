import React from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';
//import ReactInterval from 'react-interval';

class PomodoroTimer extends React.Component {
constructor(props){
  super(props);
  this.state = {
    currentTimeLeft:60, //default currentTimeLeft should equal same as default pomodorLength at Start
    pomodoroLength:60,
    breakLength:30, 
    pomCount:0, 
    breakCount:0, 
    enabled:false, 
    isCompleted:false,
    timer: null,
    interval: 1
  }
}

padtwo(number){
  return (number < 10 ? '0' : '') + number
};

incrementPom(){
  this.setState({pomCount: this.state.pomCount + 1});
  console.log('incrementPom is', this.state.pomCount);
}

incrementBreak(){
  this.setState({breakCount: this.state.breakCount + 1});
  console.log('incrementBreak is', this.state.breakCount);
}

calcTime(){
  let minutes = Math.floor(this.state.currentTimeLeft/60);
  //let seconds = this.state.currentTimeLeft % 60; alternative - does the same thing
  let seconds = this.state.currentTimeLeft - minutes * 60;
  let paddedSeconds = this.padtwo(seconds);
  return minutes+':'+ paddedSeconds
};

dec1(){
  const {currentTimeLeft, timer} = this.state;
  if(currentTimeLeft === 1){
    console.log('dec1 if statment triggered - currentTImeleft', currentTimeLeft);
    this.setState({isCompleted: true});
    clearInterval(timer);
  }
  console.log('dec1 currentTime', this.state.currentTimeLeft);
  this.setState({currentTimeLeft: currentTimeLeft - this.state.interval});
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

    const {currentTimeLeft, enabled, isCompleted, breakLength, pomodoroLength} = this.state;
  //checks if currentTimeLeft is less than 00:00 (ie. -:01) then will start break time  
  if (isCompleted){
    console.log('render isCompleted went to break timer');
    return (
      <div className="App">
        <Display text={this.calcTime()}/>
        <Button id='break-timer' text='Break Timer' clickButton={() => {this.incrementBreak() ; this.setState({isCompleted: false, currentTimeLeft: breakLength, timer:setInterval(() => this.dec1(), 1000)}) }} />
      </div>
    )
  }
    //checks if currentTimeLeft is less than the starting time (ie. timer is for 25 minutes at 24:59 display Resume or Pause button)
  else if (currentTimeLeft < pomodoroLength) {
    console.log('elseIf is running');
      return (
        <div className="App">
          <Display text={this.calcTime()}/>
          <Button text={enabled ? 'Resume' : 'Pause'} clickButton={() => this.onTogglePauseResume()}/>
          </div>
      )
    }
  else {
    console.log('Start timer is running');
      return (
        <div className="App">
          <Display text={this.calcTime()}/>
          <Button id='start-timer' text='Start Timer' clickButton={() => this.setState({timer:setInterval(() => this.dec1(), 1000)})} />
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
