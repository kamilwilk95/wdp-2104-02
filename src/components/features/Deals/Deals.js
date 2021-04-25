import React from 'react';
import PropTypes from 'prop-types';
import styles from './Deals.module.scss';

class Deals extends React.Component {
  render() {
    const { products } = this.props;

    const dealsProducts = products.filter(item => item.deals === true);

    return (
      <div className={styles.root}>
        <div className={styles.component}>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                {dealsProducts.map(item => (
                  <div key={item.id}>{item.photoBackground}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Deals.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      deals: PropTypes.bool,
    })
  ),
};

Deals.defaultProps = {
  products: [],
};

export default Deals;
