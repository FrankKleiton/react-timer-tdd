import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Timer from '.';

describe('<Timer />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => wrapper = shallow(<Timer />));

  it('should render a <div className="timer-container" /> component', () => {
    expect(wrapper.find('div.timer-container')).toHaveLength(1);
  });
});