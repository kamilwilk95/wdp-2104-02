import React from 'react';
import { shallow } from 'enzyme';
import BrandBox from './BrandBox';

describe('Component BrandBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<BrandBox />);
    expect(component).toBeTruthy();
  });
});
