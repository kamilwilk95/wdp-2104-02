import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import Description from './Description';
import Reviews from './Reviews';
import Tabs from './Tabs';

const config = [
  {
    title: 'Description',
    component: <Description />,
  },
  {
    title: 'Reviews',
    component: <Reviews />,
  },
];

class ProductPage extends React.Component {
  state = {
    activeTabCategory: 'Reviews',
  };

  handleChangeActiveCategory = title => {
    this.setState({
      activeTabCategory: title,
    });
  };

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
        <div className={'row'}>
          <div className={`col-md-12`}>
            <Tabs
              config={config}
              activeTab={this.state.activeTabCategory}
              changeActiveCategory={this.handleChangeActiveCategory}
            />
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
