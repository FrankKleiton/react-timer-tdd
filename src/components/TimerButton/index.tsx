import React from 'react';
import './TimerButton.css';

interface TimerButtonProps {
  buttonAction(): void
  buttonValue: string
  className: string
}

const TimerButton = ({ buttonAction, buttonValue, className }: TimerButtonProps) => {
  return (
    <button 
      className={className} 
      type='submit' 
      onClick={buttonAction}
    >
      {buttonValue}
    </button>
  );
}

export default TimerButton;