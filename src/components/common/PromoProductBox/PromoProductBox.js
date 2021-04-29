import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromoProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../StarRating/StarRating';

const PromoProductBox = ({
  name,
  price,
  stars,
  photoBackground,
  oldPrice,
  isFavourite,
  compare,
  myRating,
  addRating,
  id,
  className,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img className={styles.image} src={photoBackground} alt={name} />
      <div className={styles.buttons}>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
      <div className={styles.countdown}>
        <div className={styles.number}>
          <p>24 Days</p>
        </div>
        <div className={styles.number}>
          <p>10 hours</p>
        </div>
        <div className={styles.number}>
          <p>15 mins</p>
        </div>
        <div className={styles.number}>
          <p>46 secs</p>
        </div>
      </div>
    </div>
    <div className={styles.content}>
      <h5>{name}</h5>
      <div className={styles.stars}>
        <StarRating myRating={myRating} stars={stars} addRating={addRating} id={id} />
      </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <div>
          <Button variant='outline' className={styles.button}>
            <FontAwesomeIcon icon={faEye}>Quick View</FontAwesomeIcon>
          </Button>
          <Button
            variant={isFavourite ? 'outlineFavourites' : 'outline'}
            className={styles.button}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={isFavourite ? styles.isFavourite : ''}
            >
              Favourite
            </FontAwesomeIcon>
          </Button>
          <Button className={styles.button} variant='outline'>
            <FontAwesomeIcon
              icon={faExchangeAlt}
              className={compare ? styles.compare : ''}
            >
              Add to compare
            </FontAwesomeIcon>
          </Button>
        </div>
      </div>
      <div className={styles.price}>
        {oldPrice && <div className={styles.oldprice}>$ {oldPrice}</div>}
        <Button noHover variant='small' className={styles.buttonPrice}>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

PromoProductBox.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  photoBackground: PropTypes.string,
  addFavourite: PropTypes.func,
  id: PropTypes.string,
  isFavourite: PropTypes.bool,
  compare: PropTypes.bool,
  myRating: PropTypes.any,
  addRating: PropTypes.func,
  className: PropTypes.string,
};

export default PromoProductBox;
