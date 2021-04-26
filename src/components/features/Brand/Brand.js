import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brand.module.scss';

class Brand extends React.Component {
  render() {
    const { brands } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.component}>
          <div className='container'>
            <div className={`row ${styles.marksRow}`}>
              {brands.map(item => (
                <div key={item.id} className={`col ${styles.mark}`}>
                  <img className={styles.photo} alt='brand_mark' src={item.mark}></img>
                </div>
              ))}
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
