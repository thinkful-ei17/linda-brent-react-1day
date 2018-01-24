import React from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';
//import ReactInterval from 'react-interval';

class PomodoroTimer extends React.Component {
constructor(props){
  super(props);
  this.state = {
    currentTimeLeft:1500,
    enabled:false, 
    isCompleted:false
  }
}

//countdownInterval:1000,
//isPaused:false,
// updateTimeLeft(){
//   let newCount = this.state.currentTimeLeft - 1;
//   if(newCount >= 0){
//   this.setState({currentTimeLeft:newCount})
//   }
//   else{
//     this.setState({isCompleted:true})
//   }
// }

dec1(){
  const {currentTimeLeft, enabled} = this.state;
  console.log('I am decreasing by 1');
  this.setState({currentTimeLeft: currentTimeLeft - 1, enabled: !enabled});
};

onTogglePauseResume() {
  const {enabled} = this.state;
  console.log('onTogglePauseResume was called');

  this.setState({enabled: !enabled});
};


  render() {

    const {currentTimeLeft, enabled} = this.state;

  if (enabled) {
      return (
        <div className="App">
          <Display text={currentTimeLeft} />
          <Button text='Pause Timer' hidden={!enabled} clickButton={() => this.onTogglePauseResume()}/>
          <Button text='Resume Timer' hidden={enabled} clickButton={() => this.onTogglePauseResume()}/>
        </div>
      )
    }
  else {
      return (
        <div className="App">
          <Display text={currentTimeLeft}/>
          <Button text='Start Timer' clickButton={() => this.dec1()} />
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
