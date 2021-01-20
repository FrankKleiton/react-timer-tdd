import React from 'react';
import { shallow } from 'enzyme';
import TimerButton from '.';

describe('<TimerButton />', () => {
  it('should render a <button /> component', () => {
    const wrapper = shallow(
      <TimerButton 
        className="start-timer"
        buttonAction={jest.fn()} 
        buttonValue="" 
      />
    );

    expect(wrapper.find('button.start-timer')).toHaveLength(1);
  });
});
