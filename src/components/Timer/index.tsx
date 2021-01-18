import React, { useState, useCallback } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton';

const Timer = () => {
  const [isOn, setIsOn] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const startTimer = useCallback(() => {
    console.log('Starting Timer');
  }, []);

  const stopTimer = useCallback(() => {
    console.log('Stoping Timer');
  }, []);

  const resetTimer = useCallback(() => {
    console.log('Resetting Timer');
  }, []);

  return (
    <div className="timer-container">
      <div className="buttons-container">
        <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
        <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
        <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
      </div>
    </div>
  );
}

export default Timer;