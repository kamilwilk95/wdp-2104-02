import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Brand.module.scss';
import Button from '../../common/Button/Button';
import Swipeable from '../../common/Swipeable/Swipeable';

class Brand extends React.Component {
  leftAction = this.changePagePrev.bind(this);
  rightAction = this.changePageNext.bind(this);
  state = {
    activePage: 0,
  };

  rwdCardsInRow = {
    desktop: 6,
    tablet: 6,
    mobile: 4,
  };

  handlePageChange(page) {
    this.setState({ className: `${styles.fadeStart}` });
    setTimeout(() => {
      this.setState({ activePage: page });
      this.setState({ className: `${styles.fadeEnd}` });
    }, 600);
  }

  changePagePrev() {
    let currentPage = this.state.activePage;
    const { brands, rwdMode } = this.props;

    const pagesCount = Math.ceil(brands.length / this.rwdCardsInRow[rwdMode.rwdMode]);

    if (currentPage < pagesCount - 1) {
      this.handlePageChange(currentPage + 1);
    }
  }

  changePageNext() {
    let currentBrand = this.state.activePage;

    if (currentBrand !== 0) {
      this.handlePageChange(currentBrand - 1);
    }
  }

  render() {
    const { activePage } = this.state;
    const { brands, rwdMode } = this.props;
    const pagesCount = Math.ceil(brands.length / this.rwdCardsInRow[rwdMode]);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipeable leftAction={this.leftAction} rightAction={this.rightAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Brand Marks</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>

            <div className={`row ${styles.marksRow}`}>
              <div className={`col ${styles.brandBox}`}>
                <div className={styles.brandsButtons}>
                  <Button className={styles.button}>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  </Button>
                </div>
                {brands
                  .slice(
                    activePage * this.rwdCardsInRow[rwdMode],
                    (activePage + 1) * this.rwdCardsInRow[rwdMode]
                  )
                  .map(item => (
                    <div key={item.id} className={`col ${styles.mark}`}>
                      <img
                        className={styles.photo}
                        alt='brand_mark'
                        src={item.mark}
                      ></img>
                    </div>
                  ))}
                <div className={styles.brandsButtons}>
                  <Button className={styles.button}>
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}
Brand.propTypes = {
  brands: PropTypes.array,
  id: PropTypes.string,
  rwdMode: PropTypes.string,
};

Brand.defaultProps = {
  brands: [],
};

export default Brand;
