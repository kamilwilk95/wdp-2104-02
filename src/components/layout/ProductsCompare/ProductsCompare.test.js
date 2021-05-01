import React from 'react';
import { shallow } from 'enzyme';
import ProductsCompare from './ProductsCompare';

describe('Component ProductsCompare', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsCompare />);
    expect(component).toBeTruthy();
  });
});
