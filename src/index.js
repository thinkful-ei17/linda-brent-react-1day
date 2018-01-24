import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactInterval from 'react-interval'
import PomodoroTimer from './PomodoroTimer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PomodoroTimer />, document.getElementById('root'));
registerServiceWorker();
