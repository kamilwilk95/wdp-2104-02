import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductsCompare from '../ProductsCompare/ProductsCompareContainer';
import BrandMarks from '../BrandMarks/BrandMarks';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <BrandMarks />
    <Footer />
    <ProductsCompare />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
