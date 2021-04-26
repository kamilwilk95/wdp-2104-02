import React from 'react';
import { shallow } from 'enzyme';
import BrandMarks from './BrandMarks';

describe('Component BrandMarks', () => {
  it('should render without crashing', () => {
    const component = shallow(<BrandMarks />);
    expect(component).toBeTruthy();
  });
});
