import React from 'react';
import './TimerButton.css';

interface TimerButtonProps {
  buttonAction(): void
  buttonValue: string
}

const TimerButton = ({ buttonAction, buttonValue }: TimerButtonProps) => {
  return (
    <button type='submit' onClick={buttonAction}>{buttonValue}</button>
  );
}

export default TimerButton;