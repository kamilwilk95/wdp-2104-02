import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        id: this.props.match.url.replace('/product/', ''),
      });
    }, 2500);
  }

  render() {
    return (
      <div className={`container ${styles.root}`}>
        <h3>
          This is ProductPage of: <span>{this.state.id}</span>
        </h3>
        <div className={`row`}>
          <div className={`col-md-6`}>
            <h5>Product Gallery Here</h5>
          </div>
          <div className={`col-md-6`}>
            <h5>Product Description Here</h5>
          </div>
        </div>
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: {
    url: PropTypes.string,
  },
};

export default ProductPage;
