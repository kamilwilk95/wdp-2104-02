import React from 'react';
import { shallow } from 'enzyme';
import Brand from './Brand';

describe('Component Brand', () => {
  it('should render without crashing', () => {
    const component = shallow(<Brand />);
    expect(component).toBeTruthy();
  });
});
