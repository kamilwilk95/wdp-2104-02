import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromoGallery.module.scss';
import Button from '../../common/Button/Button';
import Swipeable from './../../common/Swipeable/Swipeable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const PromoGallery = ({
  photoBackground,
  name,
  leftAction,
  rightAction,
  className,
}) => (
  <div className={styles.root}>
    <div className={`${styles.photo} ${className}`}>
      <img src={photoBackground} alt={name} />
      <div className={styles.photoDescription}>
        <p>
          Indoor <span>furniture</span>
        </p>
        <p>save up to 50% of all furniture</p>
        <Button variant='small' className={styles.button}>
          shop now
        </Button>
      </div>
    </div>
    <div className={styles.galleryButtons}>
      <Button className={styles.button} onClick={leftAction}>
        <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
      </Button>
      <Button onClick={rightAction} className={styles.button}>
        <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
      </Button>
    </div>
  </div>
);

PromoGallery.propTypes = {
  photoBackground: PropTypes.string,
  name: PropTypes.string,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  className: PropTypes.string,
};

export default PromoGallery;
