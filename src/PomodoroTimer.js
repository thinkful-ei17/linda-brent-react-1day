import React from 'react';
import './index.css';
import Button from './Button';
import Display from './Display';


class PomodoroTimer extends React.Component {
constructor(props){
  super(props);
  this.state = {
    currentTimeLeft: 15,
    pomodoroLength: 15,  
    pomodoroCount:0, 
    breakLength: 3,
    breakCount:0, 
    timerStarted:false,
    timerRunning:false, 
    timerCompleted:false,
    timer: null,
  }
}

padtwo(number){
  return (number < 10 ? '0' : '') + number
};

incrementPomodoroCount(){
  this.setState({pomodoroCount: this.state.pomodoroCount + 1});

}

incrementBreakCount(){
  this.setState({breakCount: this.state.breakCount + 1});
  
}

calculateSecondsToMinutes(){
  let minutes = Math.floor(this.state.currentTimeLeft/60);
  //let seconds = this.state.currentTimeLeft % 60; alternative - does the same thing
  let seconds = this.state.currentTimeLeft - minutes * 60;
  let paddedSeconds = this.padtwo(seconds);
  return minutes+':'+ paddedSeconds
};

//handler
startBreakTimer(){
  
}

//subracts 1 second from timer
decrementTimer(){
  let decrementedTime = (this.state.currentTimeLeft - 1);
  this.setState({ currentTimeLeft: decrementedTime })
}



//handler
timerChecker(){
  if (this.state.currentTimeLeft === 1) {
    this.setState({ isCompleted: true });
    this.pauseTimer();
    this.startBreakTimer();
  }
  else {
    this.decrementTimer();
  }

  //call decrement timer if is completed is false
  //otherwise call pause timer and setstate.iscompleted to true
  } 



initialTimerStart() {
  this.setState({ timerStarted: true, timerRunning:true, timer: setInterval(() => this.decrementTimer(), 1000) })

};

pauseTimer(){
  clearInterval(this.state.timer);
};

resumeTimer(){
  this.setState({ timer: setInterval(() => this.decrementTimer(), 1000)})
};

handleButtonClicked() {
  this.state.timerRunning ? this.pauseTimer() : this.resumeTimer();
  this.setState({ timerRunning: !this.state.timerRunning });
};




  render() {

   if (this.state.timerStarted) {
      return (
        <div className="App">
          <Display text={this.calculateSecondsToMinutes()} />
          <Button text={this.state.timerRunning ? 'Pause':'Resume' } onClickButton={() => this.handleButtonClicked()} />
        </div>
      )
    }
    
  //checks if currentTimeLeft is less than 00:00 (ie. -:01) then will start break time  
  else if (this.state.isCompleted){
    return (
      <div className="App">
        <Display text={this.calculateSecondsToMinutes()}/>
        <Button id='break-timer' text='Break Timer' onClickButton={() => {this.incrementBreak() }}/>
      </div>
    )
  }
 
  else {
      return (
        <div className="App">
          <Display text={this.calculateSecondsToMinutes()}/>
          <Button id='start-timer' text='Start Timer' onClickButton={() => this.initialTimerStart()} />
        </div>
      )
    }
  }
}

export default PomodoroTimer;