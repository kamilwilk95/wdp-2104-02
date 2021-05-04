import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './FurnitureGallery.module.scss';

import Gallery from '../../common/Gallery/Gallery';
import Button from '../../common/Button/Button';

const TOP_SELLER = 'top seller';
const FEATURED = 'featured';
const SALE_OFF = 'sale off';
const TOP_RATED = 'top rated';
const RIGHT_ARROW = 'rightArrow';
const LEFT_ARROW = 'leftArrow';

export class FurnitureGallery extends Component {
  leftAction = this.galleryLineNext.bind(this);
  rightAction = this.galleryLinePrev.bind(this);

  state = {
    activeCategorySales: TOP_SELLER,
    activeGalleryLine: 0,
    activeProductPhoto: '',
    activeProduct: '',
    className: styles.fadeEnd,
    photoClassName: styles.fadeEnd,
  };

  rwdPhotosInRow = {
    desktop: 6,
    tablet: 4,
    mobile: 2,
  };

  handleChangeCategory = name => {
    this.setState({
      className: `${styles.fadeStart}`,
    });
    setTimeout(() => {
      this.setState({ className: `${styles.fadeEnd}`, activeCategorySales: name });
    }, 300);
  };

  handleChangeGalleryLine = changingButtons => {
    if (changingButtons === RIGHT_ARROW) {
      this.setState(prevState => ({
        activeGalleryLine: prevState.activeGalleryLine + 1,
      }));
    } else {
      this.setState(prevState => ({
        activeGalleryLine: prevState.activeGalleryLine - 1,
      }));
    }
  };

  galleryLineNext() {
    let currentLine = this.state.activeGalleryLine;
    this.setState({ activeGalleryLine: currentLine + 1 });
  }

  galleryLinePrev() {
    let currentLine = this.state.activeGalleryLine;
    this.setState({ activeGalleryLine: currentLine - 1 });
  }

  handleChangeProductPhoto = photoAddress => {
    this.setState({
      photoClassName: `${styles.fadeStart}`,
    });
    setTimeout(() => {
      this.setState({
        activeProductPhoto: photoAddress,
        photoClassName: `${styles.fadeEnd}`,
      });
    }, 300);
  };

  handleChangeProduct = clickedProduct => {
    this.setState({
      activeProduct: clickedProduct,
    });
  };

  render() {
    const {
      products,
      addFavourite,
      addRating,
      addCompare,
      removeCompare,
      rwdMode,
    } = this.props;

    const { activeCategorySales } = this.state;

    const canAddCompare = products.filter(item => item.compare).length;

    const featuredProducts = products.filter(product => {
      switch (activeCategorySales) {
        case TOP_SELLER: {
          return product.topSeller;
        }
        case FEATURED: {
          return product.featured;
        }
        case SALE_OFF: {
          return product.saleOff;
        }
        case TOP_RATED: {
          return product.topRated;
        }
        default:
          return null;
      }
    });

    let photoNumber = this.rwdPhotosInRow[rwdMode];

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <Gallery
                activeCategorySales={activeCategorySales}
                products={featuredProducts}
                addFavourite={addFavourite}
                addRating={addRating}
                addCompare={addCompare}
                removeCompare={removeCompare}
                canAddCompare={canAddCompare < 4 ? true : false}
                handleChangeCategory={this.handleChangeCategory}
                handleChangeGalleryLine={this.handleChangeGalleryLine}
                rightArrow={RIGHT_ARROW}
                leftArrow={LEFT_ARROW}
                activeGalleryLine={this.state.activeGalleryLine}
                changeProductPhoto={this.handleChangeProductPhoto}
                activeProductPhoto={this.state.activeProductPhoto}
                changeProduct={this.handleChangeProduct}
                activeProduct={this.state.activeProduct}
                activeClassName={this.state.className}
                photoClassName={this.state.photoClassName}
                photoNumber={photoNumber}
                leftAction={this.leftAction}
                rightAction={this.rightAction}

              />
            </div>
            <div
              className={'col-md-6 .d-sm-none .d-md-block' + styles.announceContainer}
            >
              <div className={styles.announce}>
                <h2 className={styles.announceTitle}>
                  FROM<span className={styles.announceSpan}> $50.80</span>
                </h2>
                <h3 className={styles.announceBed}>Bedroom Bed</h3>
                <Button className={styles.announceButton}>SHOP NOW</Button>
              </div>
              <div className={styles.productPhoto}>
                <div
                  className={styles.photo}
                  style={{
                    backgroundImage:
                      'url(https://lectus24.pl/128227-large_default/lozko-tapicerowane-160x200-cm-ksavier-ze-stelazem-i-pojemnikiem-szare-welur.jpg)',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FurnitureGallery.propTypes = {
  products: PropTypes.any,
  activeCategorySales: PropTypes.string,
  addFavourite: PropTypes.func,
  addRating: PropTypes.func,
  addCompare: PropTypes.func,
  removeCompare: PropTypes.func,
  rwdMode: PropTypes.any,
};

export default FurnitureGallery;
