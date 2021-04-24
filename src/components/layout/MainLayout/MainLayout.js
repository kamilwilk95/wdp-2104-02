import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductsCompare from '../ProductsCompare/ProductsCompareContainer';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
    <ProductsCompare />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
