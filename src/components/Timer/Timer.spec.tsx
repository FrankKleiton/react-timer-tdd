import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
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