import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import Tabs from '../../common/Tabs/Tabs';
import Description from '../../common/TabsDescription/Description';
import Reviews from '../../common/TabsReviews/Reviews';
import CustomTab from '../../common/TabsCustomTab/CustomTab';
import Specifications from '../../common/TabsSpecifications/Specifications';

const config = [
  {
    title: 'Description',
    component: <Description />,
  },
  {
    title: 'Reviews (0)',
    component: <Reviews />,
  },
  {
    title: 'Specifications',
    component: <Specifications />,
  },
  {
    title: 'Custom Tab',
    component: <CustomTab />,
  },
];

class ProductPage extends React.Component {
  state = {
    activeTabCategory: 'Reviews (0)',
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
          <div className={`col-md-12 ${styles.tabComponent}`}>
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
