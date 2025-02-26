import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brand from '../../features/Brand/BrandContainer';
import PromoBox from '../../features/PromoBox/PromoBoxContainer';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import FurnitureGallery from './../../features/FurnitureGallery/FurnitureGalleryContainer';
import Deals from '../../features/Deals/DealsBox';

const Homepage = () => (
  <div className={styles.root}>
    <PromoBox />
    <FeatureBoxes />
    <Deals />
    <NewFurniture />
    <Brand />
    <Feedback />
    <FurnitureGallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
