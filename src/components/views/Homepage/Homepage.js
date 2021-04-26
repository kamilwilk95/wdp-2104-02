import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Deals from '../../common/DealsBox/DealsBox';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Deals />
    <NewFurniture />
    <BrandMarks />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
