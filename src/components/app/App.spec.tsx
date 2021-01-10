import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '.';
import Timer from '../Timer';

describe('<App />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('<div />', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('<div className="app-container" />', () => {
    expect(wrapper.find('div.app-container')).toHaveLength(1);
  });

  it('<Time />', () => {
    expect(wrapper.containsMatchingElement(<Timer />)).toEqual(true);
  });
});
