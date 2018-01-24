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
    isCompleted:false,
    timer: null
  }
}


dec1(){
  const {currentTimeLeft} = this.state;
  console.log('I am decreasing by 1');
  this.setState({currentTimeLeft: currentTimeLeft - 1});
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

  if (currentTimeLeft<1500) {
      return (
        <div className="App">
          <Display text={currentTimeLeft} />
          <Button text={enabled ? 'Resume' : 'Pause'} clickButton={() => this.onTogglePauseResume()}/>
          </div>
      )
    }
  else {
      return (
        <div className="App">
          <Display text={currentTimeLeft}/>
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
