import React from 'react';
import PropTypes from 'prop-types';
import styles from './Deals.module.scss';

class Deals extends React.Component {
  render() {
    const { dealsBig, dealsSmallUp, dealsSmallDown } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.component}>
          <div className='container'>
            <div className={'row'}>
              <div className={`col-6 ${styles.dealsBig}`}>
                {dealsBig.map(item => (
                  <div key={item.id} className={styles.dealsBigBox}>
                    <img
                      className={styles.photoBig}
                      alt='product_deals_big'
                      src={item.photoBackground}
                    ></img>
                  </div>
                ))}
              </div>
              <div className={`col-6 ${styles.dealsSmall}`}>
                <div className={`row ${styles.dealsRow}`}>
                  {dealsSmallUp.map(item => (
                    <div key={item.id} className={styles.dealsSmallBox}>
                      <img
                        className={styles.photoSmall}
                        alt='product_deals_small_up'
                        src={item.photoBackground}
                      ></img>
                    </div>
                  ))}
                </div>
                <div className={`row ${styles.dealsRow}`}>
                  {dealsSmallDown.map(item => (
                    <div key={item.id} className={styles.dealsSmallBox}>
                      <img
                        className={styles.photoSmall}
                        alt='product_deals_small_down'
                        src={item.photoBackground}
                      ></img>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Deals.propTypes = {
  id: PropTypes.string,
  deals: PropTypes.bool,
  dealsBig: PropTypes.bool,
  dealsSmallUp: PropTypes.bool,
  dealsSmallDown: PropTypes.bool,
};

Deals.defaultProps = {
  products: [],
};

export default Deals;