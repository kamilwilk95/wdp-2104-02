import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Brand.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable';

const RIGHT_ARROW = 'rightArrow';

class Brand extends React.Component {
  leftAction = this.changePagePrev.bind(this);
  rightAction = this.changePageNext.bind(this);

  state = {
    activePage: 0,
  };

  rwdBrandsInRow = {
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

    const pagesCount = Math.ceil(brands.length / this.rwdBrandsInRow[rwdMode.rwdMode]);

    if (currentPage < pagesCount - 1) {
      this.handlePageChange(currentPage + 1);
    }
  }

  changePageNext() {
    let currentPage = this.state.activePage;

    if (currentPage !== 0) {
      this.handlePageChange(currentPage - 1);
    }
  }

  handleChangeBrandLine(page) {
    let changingButtons = this.state.activePage;

    if (changingButtons === RIGHT_ARROW) {
      this.setState(prevState => ({
        activePage: prevState.activePage + 1,
      }));
    } else {
      this.setState(prevState => ({
        activePage: prevState.activePage - 1,
      }));
    }
  }

  render() {
    const { activePage } = this.state;
    const { brands, rwdMode, leftArrow } = this.props;

    let brandNumber = this.rwdBrandsInRow[rwdMode];

    const pagesCount = Math.ceil(brands.length / brandNumber);

    const isDisabledRightArrow = (pagesCount, activePage, brandNumber) =>
      pagesCount / brandNumber <= activePage + 1 ? true : false;

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
                  <button
                    className={styles.button}
                    disabled={activePage === 0}
                    onClick={event => {
                      event.preventDefault();
                      this.handleChangeBrandLine(leftArrow);
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  </button>
                </div>
                {brands
                  .slice(activePage * brandNumber, (activePage + 1) * brandNumber)
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
                  <button
                    className={styles.button}
                    onClick={event => {
                      event.preventDefault();
                      this.handlePageChange(activePage + 1);
                    }}
                    disabled={isDisabledRightArrow(
                      brands.length,
                      activePage,
                      brandNumber
                    )}
                  >
                    <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                  </button>
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
  handleChangeBrandLine: PropTypes.func,
  rightArrow: PropTypes.string,
  leftArrow: PropTypes.string,
  brandNumber: PropTypes.number,
  brandLength: PropTypes.number,
};

Brand.defaultProps = {
  brands: [],
};
export default Brand;
