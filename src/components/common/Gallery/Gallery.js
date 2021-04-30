import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import StarRating from '../StarRating/StarRating';

import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const headerText = ['featured', 'top seller', 'sale off', 'top rated'];
const photoNumber = 6;

const addFurnitureToFavourite = (id, isFavourite, event, addFavourite) => {
  event.preventDefault();
  addFavourite({ id: id, isFavourite: !isFavourite });
};

const isDisabledRightArrow = (thumbnailLength, activeGalleryLine) => {
  console.log(thumbnailLength, activeGalleryLine);
  if (thumbnailLength / photoNumber <= activeGalleryLine + 1) {
    return true;
  } else {
    return false;
  }
};

const toggleCompare = (
  id,
  isCompare,
  event,
  addCompare,
  removeCompare,
  canAddCompare
) => {
  event.preventDefault();
  if (isCompare === false && canAddCompare) {
    addCompare(id);
  } else {
    removeCompare(id);
  }
};

const Gallery = ({
  activeCategorySales,
  products,
  addFavourite,
  addRating,
  addCompare,
  removeCompare,
  canAddCompare,
  handleChangeCategory,
  handleChangeGalleryLine,
  rightArrow,
  activeGalleryLine,
  leftArrow,
}) => {
  const photos = products.filter(product => product.category === 'bed');
  const activePhoto = photos[0];

  const thumbnail = photos
    .slice(activeGalleryLine * photoNumber, (activeGalleryLine + 1) * photoNumber)
    .map(item => {
      return (
        <div
          key={item.id}
          className={
            styles.photo + ' ' + (activePhoto.id !== item.id && styles.activePhoto)
          }
          style={{
            backgroundImage: `url(${item.photoBackground})`,
          }}
        ></div>
      );
    });

  return (
    <div className={styles.root} style={{ marginBottom: '5%' }}>
      <div className='container'>
        <div className={styles.panelHeader}>
          <div className={'col ' + styles.heading}>
            <h3>Furniture Gallery</h3>
          </div>
        </div>
        <ul className={styles.navHeader}>
          {headerText.map((item, index) => (
            <li key={item + index} className={styles.navItem}>
              <a
                className={
                  styles.navLink + ' ' + (item === activeCategorySales && styles.active)
                }
                onClick={() => handleChangeCategory(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className={'col ' + styles.carousel}>
          <div>
            <div className='row'>
              <div className={'col-1 ' + styles.tabButtons}>
                <Button
                  variant={activePhoto.isFavourite ? 'outlineFavourites' : 'outline'}
                  onClick={event =>
                    addFurnitureToFavourite(
                      activePhoto.id,
                      activePhoto.isFavourite,
                      event,
                      addFavourite
                    )
                  }
                >
                  <span className={styles.tooltip}>Add to favourite</span>
                  <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                </Button>

                <Button
                  variant={activePhoto.compare ? 'outlineCompare' : 'outline'}
                  onClick={event =>
                    toggleCompare(
                      activePhoto.id,
                      activePhoto.compare,
                      event,
                      addCompare,
                      removeCompare,
                      canAddCompare
                    )
                  }
                >
                  <span className={styles.tooltip}>Add to compare</span>
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                </Button>

                <Button variant={'outline'}>
                  <span className={styles.tooltip}>Show more</span>
                  <FontAwesomeIcon icon={faEye}>Show</FontAwesomeIcon>
                </Button>

                <Button variant={'outline'}>
                  <span className={styles.tooltip}>Add to card</span>
                  <FontAwesomeIcon icon={faShoppingBasket}>Add to cart</FontAwesomeIcon>
                </Button>
              </div>
              <div className='col-11'>
                <div
                  className={styles.mainPhoto}
                  style={{
                    backgroundImage: `url(${activePhoto.photoBackground})`,
                  }}
                ></div>
                <div className={styles.prices}>
                  <div className={styles.priceWheel}>
                    <h5>$ {activePhoto.price}</h5>
                    <h6 className={styles.oldPrice}>$ {activePhoto.oldPrice}</h6>
                  </div>
                </div>
                <div className={styles.rating}>
                  <h6 className={styles.photoRating}>{activePhoto.name}</h6>
                  <div className={styles.photoRating}>
                    <StarRating
                      myRating={activePhoto.myRating}
                      addRating={addRating}
                      stars={activePhoto.stars}
                      id={activePhoto.id}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={'row ' + styles.thumbnail}>
              <button
                className={styles.arrowButton}
                disabled={activeGalleryLine === 0}
                onClick={() => handleChangeGalleryLine(leftArrow)}
              >
                <i className={[styles.arrow, styles.left].join(' ')}></i>
              </button>
              {thumbnail}
              <button
                className={styles.arrowButton}
                onClick={() => handleChangeGalleryLine(rightArrow)}
                disabled={isDisabledRightArrow(photos.length, activeGalleryLine)}
              >
                <i className={[styles.arrow, styles.right].join(' ')}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
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
};

export default Gallery;
