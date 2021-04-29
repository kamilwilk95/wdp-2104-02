import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brand.module.scss';
import Button from '../../common/Button/Button';

class Brand extends React.Component {
  render() {
    const { brands } = this.props;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={`row ${styles.marksRow}`}>
            <div className={styles.brandBox}>
              <div className={`col ${styles.thumbnail}`}>
                <Button className={styles.arrowButton}>
                  <i className={[styles.arrow, styles.left].join(' ')}></i>
                </Button>
              </div>
              {brands.map(item => (
                <div key={item.id} className={`col ${styles.mark}`}>
                  <img className={styles.photo} alt='brand_mark' src={item.mark}></img>
                </div>
              ))}
              <div className={`col ${styles.thumbnail}`}>
                <Button className={styles.arrowButton}>
                  <i className={[styles.arrow, styles.right].join(' ')}></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Brand.propTypes = {
  brands: PropTypes.array,
  id: PropTypes.string,
};

Brand.defaultProps = {
  brands: [],
};

export default Brand;
