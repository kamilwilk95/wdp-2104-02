import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductsCompare.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import ProductToCompare from '../../common/ProductToCompare/ProductToCompare';

class ProductsCompare extends React.Component {
  render() {
    const { compareProducts, removeCompare } = this.props;
    if (compareProducts && compareProducts.length) {
      return (
        <div className={styles.root}>
          <div className='container'>
            <div className={`row ${styles.compareRow}`}>
              {compareProducts.map(item => (
                <div key={item.id} className={`col-2 ${styles.ProductToCompare}`}>
                  <ProductToCompare {...item} removeCompare={removeCompare} />
                </div>
              ))}
              <div key={'compareBtn'} className={`col-2 ${styles.ProductToCompare}`}>
                <Button title={'compare products'}>
                  <FontAwesomeIcon
                    icon={faExchangeAlt}
                    className={styles.icon}
                  ></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
ProductsCompare.propTypes = {
  compareProducts: PropTypes.array,
  removeCompare: PropTypes.func,
};

export default ProductsCompare;
