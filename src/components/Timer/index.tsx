import React from 'react';
import './Timer.css';
import TimerButton from '../TimerButton';

const Timer = () => {
  return (
    <div className="timer-container">
      <div className="buttons-container">
        <TimerButton />
        <TimerButton />
        <TimerButton />
      </div>
    </div>
  );
}

export default Timer;