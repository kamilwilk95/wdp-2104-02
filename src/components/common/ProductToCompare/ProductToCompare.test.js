import React from 'react';
import { shallow } from 'enzyme';
import ProductToCompare from './ProductToCompare';

describe('Component ProductToCompare', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductToCompare />);
    expect(component).toBeTruthy();
  });
});
