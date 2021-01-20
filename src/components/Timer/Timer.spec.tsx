import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import Timer from '.';

describe('<Timer />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => wrapper = shallow(<Timer />));

  it('should render a <div className="timer-container" /> component', () => {
    expect(wrapper.find('div.timer-container')).toHaveLength(1);
  });

  it('should render a <div className="buttons-container" /> component', () => {
    expect(wrapper.find('div.buttons-container')).toHaveLength(1);
  });

  it('should render <TimerButton /> component three times', () => {
    expect(wrapper.find('TimerButton')).toHaveLength(3);
  });
});

describe('mounted <Timer />', () => {
  let wrapper: any;
  
  beforeEach(() => (wrapper = mount(<Timer />)));
  
  it('invokes startTimer when start timer button is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'startTimer');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('button.start-timer').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('invokes stopTimer when stop timer button is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'stopTimer');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('button.stop-timer').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('invokes resetTimer when reset timer button is clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'resetTimer');
    wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('button.reset-timer').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should change the isOn state to true when the start timer button is clicked', () => {
    wrapper.instance().forceUpdate();
    wrapper.find('button.start-timer').simulate('click');
    expect(wrapper.instance().state.isOn).toBeTruthy();
  });

  it('should change the isOn state to false when the stop timer button is clicked', () => {
    wrapper.instance().forceUpdate();
    wrapper.instance().setState({ isOn: true });
    expect(wrapper.state().isOn).toBeTruthy();
    wrapper.find('button.stop-timer').simulate('click');
    expect(wrapper.state().isOn).toBeFalsy();
  });

  it('should change the isOn state to false when the reset timer button is clicked', () => {
    wrapper.instance().forceUpdate();
    wrapper.instance().setState({ isOn: true });
    expect(wrapper.state().isOn).toBeTruthy();
    wrapper.find('button.reset-timer').simulate('click');
    expect(wrapper.state().isOn).toBeFalsy();
    expect(wrapper.state().minutes).toBe(25);
    expect(wrapper.state().seconds).toBe(0);
  });
});