import React from 'react';
import { shallow } from 'enzyme';
import Deals from './Deals';

describe('Component Deals', () => {
  it('should render without crashing', () => {
    const component = shallow(<Deals />);
    expect(component).toBeTruthy();
  });
});
