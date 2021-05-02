import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Brand from '../../features/Brand/BrandBox';
import PromoBox from '../../features/PromoBox/PromoBoxContainer';
import Feedback from '../../layout/Feedback/FeedbackContainer';

import FurnitureGallery from './../../features/FurnitureGallery/FurnitureGalleryContainer';
import SocialMedia from '../../common/socialMedia/socialMedia';

const Homepage = () => (
  <div className={styles.root}>
    <PromoBox />
    <FeatureBoxes />
    <NewFurniture />
    <Brand />
    <Feedback />
    <FurnitureGallery />
    <SocialMedia />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
