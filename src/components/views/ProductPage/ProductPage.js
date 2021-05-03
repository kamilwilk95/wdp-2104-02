import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

class ProductPage extends React.Component {
  render() {
    const { productId } = this.props.match.params;
    return (
      <div className={`container ${styles.root}`}>
        <h3>
          This is ProductPage of: <span>{productId}</span>
        </h3>
        <div className={`row`}>
          <div className={`col-md-5 `}>
            <h5>Product Gallery Here</h5>
          </div>
          <div className={`col-md-7 `}>
            <h5>Product Description Here</h5>
          </div>
        </div>
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: {
    params: {
      productId: PropTypes.string,
    },
  },
};

export default ProductPage;
