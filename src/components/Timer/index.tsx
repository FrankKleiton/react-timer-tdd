import React from 'react';
import './Timer.css';
import TimerButton from '../TimerButton';

interface TimerProps { }

class Timer extends React.Component<{}, { isOn: boolean, minutes: number, seconds: number }> {
  myInterval: any;

  constructor(props: TimerProps) {
    super(props);
    this.state = {
      isOn: false,
      minutes: 25,
      seconds: 0,
    }

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    if (this.state.isOn === true) {
      return;
    }
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
  }

  stopTimer() {
    clearInterval(this.myInterval);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      isOn: false,
      minutes: 25,
      seconds: 0,
    });
  }

  render() {
    const { minutes, seconds } = this.state;

    return (
      <div className="timer-container">
        <div className="time-display">
          <span>{minutes}: {seconds < 10 ? `0${seconds}` : seconds}</span>
        </div>
        <div className="buttons-container">
          <TimerButton
            className="start-timer"
            buttonAction={this.startTimer}
            buttonValue={'Start'}
          />
          <TimerButton
            className="stop-timer"
            buttonAction={this.stopTimer}
            buttonValue={'Stop'}
          />
          <TimerButton
            className="reset-timer"
            buttonAction={this.resetTimer}
            buttonValue={'Reset'}
          />
        </div>
      </div>
    );
  }
}

export default Timer;