import React from 'react';
import { shallow } from 'enzyme';
import ProductPage from './ProductPage';

const mockProps = {
  match: {
    params: {
      productId: 'productID123',
    },
  },
};

describe('ProductPage', () => {
  it('renders without crashing', () => {
    shallow(<ProductPage {...mockProps} />);
  });
});
