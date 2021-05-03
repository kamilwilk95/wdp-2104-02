import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brand.module.scss';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const photoNumber = 6;

const isDisabledRightArrow = (thumbnailLength, activeGalleryLine) =>
  thumbnailLength / photoNumber <= activeGalleryLine + 1 ? true : false;

const BrandGallery = ({
  brands,
  handleChangeGalleryLine,
  rightArrow,
  activeGalleryLine,
  leftArrow,
  changeProductPhoto,
}) => {
  const thumbnail = brands
    .slice(activeGalleryLine * photoNumber, (activeGalleryLine + 1) * photoNumber)
    .map(item => {
      return (
        <div key={item.id} className={`col ${styles.mark}`}>
          <img className={styles.photo} alt='brand_mark' src={item.mark}></img>
        </div>
      );
    });

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Brand Marks</h3>
            </div>
          </div>
        </div>
        <div className={`row ${styles.marksRow}`}>
          <Button
            className={styles.arrowButton}
            disabled={activeGalleryLine === 0}
            onClick={() => handleChangeGalleryLine(leftArrow)}
          >
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
          </Button>
          {thumbnail}
          <Button
            className={styles.arrowButton}
            onClick={() => handleChangeGalleryLine(rightArrow)}
            disabled={isDisabledRightArrow(brands.length, activeGalleryLine)}
          >
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </Button>
        </div>
      </div>
    </div>
  );
};

BrandGallery.propTypes = {
  products: PropTypes.array,
  activeCategorySales: PropTypes.string,
  addFavourite: PropTypes.func,
  addRating: PropTypes.func,
  addCompare: PropTypes.func,
  removeCompare: PropTypes.func,
  canAddCompare: PropTypes.bool,
  handleChangeCategory: PropTypes.func,
  handleChangeGalleryLine: PropTypes.func,
  rightArrow: PropTypes.string,
  activeGalleryLine: PropTypes.number,
  leftArrow: PropTypes.string,
  changeProductPhoto: PropTypes.func,
  activeProductPhoto: PropTypes.string,
  changeProduct: PropTypes.func,
  activeProduct: PropTypes.any,
  activeClassName: PropTypes.string,
  photoClassName: PropTypes.string,
  brands: PropTypes.array,
  id: PropTypes.string,
  rwdMode: PropTypes.string,
};

export default BrandGallery;
