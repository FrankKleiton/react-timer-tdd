import React from 'react';
import { shallow } from 'enzyme';
import TimerButton from '.';

describe('<TimerButton />', () => {
  it('should render a <button /> component', () => {
    const wrapper = shallow(
      <TimerButton 
        buttonAction={jest.fn()} 
        buttonValue="" 
      />
    );

    expect(wrapper.containsMatchingElement(<button type='submit' />)).toEqual(true);
  });
});
