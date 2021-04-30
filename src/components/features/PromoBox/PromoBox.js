import React from 'react';
import PropTypes from 'prop-types';

import PromoProductBox from '../../common/PromoProductBox/PromoProductBox';
import PromoGallery from '../../common/PromoGallery/PromoGallery';
import styles from './PromoBox.module.scss';

class PromoBox extends React.Component {
  propTypes = {
    products: PropTypes.array,
    promoImages: PropTypes.array,
    addFavourite: PropTypes.func,
    saleProducts: PropTypes.array,
    promoProducts: PropTypes.array,
  };

  state = {
    activeProduct: 0,
    activePromoImage: 0,
  };

  render() {
    const { saleProducts, promoProducts } = this.props;
    const { activeProduct, activePromoImage } = this.state;

    const salesCount = saleProducts.length;

    const dots = [];
    for (let i = 0; i < salesCount; i++) {
      dots.push(
        <li>
          <a className={i === activeProduct && styles.active}>product {i}</a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.promoWrapper}>
            <div className={styles.productBox}>
              <div className={styles.promoTitle}>
                <div className={styles.heading}>
                  <h3>Hot Deals</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
              {saleProducts.slice(activeProduct, activeProduct + 1).map(item => (
                <div key={item.id}>
                  <PromoProductBox {...item} />
                </div>
              ))}
            </div>
            <div className={styles.galleryBox}>
              {promoProducts.slice(activePromoImage, activePromoImage + 1).map(item => (
                <div key={item.id}>
                  <PromoGallery {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PromoBox;
