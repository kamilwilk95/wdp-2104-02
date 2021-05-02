import React from 'react';
import PropTypes from 'prop-types';

import PromoProductBox from '../../common/PromoProductBox/PromoProductBox';
import PromoGallery from '../../common/PromoGallery/PromoGallery';
import Swipeable from './../../common/Swipeable/Swipeable';
import styles from './PromoBox.module.scss';

class PromoBox extends React.Component {
  leftAction = this.changeImagePrev.bind(this);
  rightAction = this.changeImageNext.bind(this);
  propTypes = {
    products: PropTypes.array,
    addFavourite: PropTypes.func,
    saleProducts: PropTypes.array,
    promoProducts: PropTypes.array,
  };

  state = {
    activeProduct: 0,
    activePromoImage: 0,
    imageClassName: styles.fadeEnd,
    productClassName: styles.fadeEnd,
    animationBlock: false,
  };

  /* Promo Product */

  componentDidMount() {
    setInterval(() => {
      const promoProductsCount = this.props.saleProducts.length;
      let product = this.state.activeProduct;
      let animationBlock = this.state.animationBlock;

      if (animationBlock === true) {
        setTimeout(() => {
          this.setState({ animationBlock: false });
        }, 10000);
      } else {
        if (product === promoProductsCount - 1) {
          this.handleProductChange(0);
        } else {
          this.handleProductChange(product + 1);
        }
      }
    }, 3000);
  }

  handleProductChange(newProduct) {
    this.setState({ productClassName: `${styles.fadeStart}` });
    setTimeout(() => {
      this.setState({ activeProduct: newProduct });
      this.setState({ productClassName: `${styles.fadeEnd}` });
    }, 600);
  }

  handleOnClickChange(newProduct) {
    this.setState({ animationBlock: true });
    this.handleProductChange(newProduct);
  }

  /* Promo Product End*/

  /* Promo Gallery */
  handleImageChange(newImage) {
    this.setState({ imageClassName: `${styles.fadeStart}` });
    setTimeout(() => {
      this.setState({ activePromoImage: newImage });
      this.setState({ imageClassName: `${styles.fadeEnd}` });
    }, 600);
  }

  changeImagePrev(event) {
    event.preventDefault();
    let currentImage = this.state.activePromoImage;

    if (currentImage !== 0) {
      this.handleImageChange(currentImage - 1);
    }
  }

  changeImageNext(event) {
    event.preventDefault();
    let currentImage = this.state.activePromoImage;
    const { promoProducts } = this.props;

    const imagesCount = promoProducts.length;

    if (currentImage < imagesCount - 1) {
      this.handleImageChange(currentImage + 1);
    }
  }
  /* Promo Gallery End */

  render() {
    const { saleProducts, promoProducts } = this.props;
    const { activeProduct, activePromoImage } = this.state;

    const salesCount = saleProducts.length;

    const dots = [];
    for (let i = 0; i < salesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handleOnClickChange(i)}
            className={i === activeProduct && styles.active}
          >
            product {i}
          </a>
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
                <div key={item.id} className={this.state.productClassName}>
                  <PromoProductBox {...item} />
                </div>
              ))}
            </div>
            <div className={styles.galleryBox}>
              {promoProducts.slice(activePromoImage, activePromoImage + 1).map(item => (
                <div key={item.id}>
                  <Swipeable
                    leftAction={this.leftAction}
                    rightAction={this.rightAction}
                  >
                    <PromoGallery
                      {...item}
                      leftAction={this.leftAction}
                      rightAction={this.rightAction}
                      className={this.state.imageClassName}
                    />
                  </Swipeable>
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
