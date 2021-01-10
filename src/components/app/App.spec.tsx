import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '.';
import Timer from '../Timer';

describe('<App />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div className="app-container" /> component', () => {
    expect(wrapper.find('div.app-container')).toHaveLength(1);

  });

  it('should render a <Time /> component', () => {
    expect(wrapper.containsMatchingElement(<Timer />)).toEqual(true);
  });
});
