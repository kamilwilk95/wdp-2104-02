import React from 'react';
import PropTypes from 'prop-types';
import styles from './Deals.module.scss';

class Deals extends React.Component {
  render() {
    const { dealsBig, dealsSmallUp, dealsSmallDown } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={`row ${styles.dealsBox}`}>
            <div className={`col-auto col-md-6 ${styles.dealsBig}`}>
              {dealsBig.map(item => (
                <div key={item.id} className={`col ${styles.dealsBigBox}`}>
                  <div className={`col ${styles.transBox}`}>
                    <div className={styles.transBoxText}>
                      <span>guest room</span>
                      <h3>sofa</h3>
                      <span className={styles.percent}>-20%</span>
                    </div>
                  </div>
                  <img
                    className={styles.photoBig}
                    alt={item.name}
                    src={item.photoBackground}
                  ></img>
                </div>
              ))}
            </div>
            <div className={`col ${styles.dealsSmall}`}>
              <div className='row'>
                <div className='col-md-12 col-sm-6'>
                  {dealsSmallUp.map(item => (
                    <div key={item.id} className={`col ${styles.dealsSmallBox}`}>
                      <img
                        className={styles.photoSmall}
                        alt={item.name}
                        src={item.photoBackground}
                      ></img>
                    </div>
                  ))}
                </div>
                <div className='col-md-12 col-sm-6'>
                  {dealsSmallDown.map(item => (
                    <div key={item.id} className={`col ${styles.dealsSmallBox}`}>
                      <img
                        className={styles.photoSmall}
                        alt={item.name}
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
