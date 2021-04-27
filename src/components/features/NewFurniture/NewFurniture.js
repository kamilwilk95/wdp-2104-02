import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from './../../common/Swipeable/Swipeable';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import FurnitureGallery from '../../common/FurnitureGallery/FurnitureGallery';

class NewFurniture extends React.Component {
  leftAction = this.changePagePrev.bind(this);
  rightAction = this.changePageNext.bind(this);
  state = {
    activePage: 0,
    activeCategory: 'bed',
    className: styles.fadeEnd,
    activeCategorySales: 'top seller',
  };

  handlePageChange(page) {
    this.setState({ className: `${styles.fadeStart}` });
    setTimeout(() => {
      this.setState({ activePage: page });
      this.setState({ className: `${styles.fadeEnd}` });
    }, 600);
  }

  handleCategoryChange(newCategory) {
    this.setState({ className: `${styles.fadeStart}` });
    setTimeout(() => {
      this.setState({ activeCategory: newCategory });
      this.setState({ className: `${styles.fadeEnd}` });
    }, 600);
  }

  changePagePrev() {
    let currentPage = this.state.activePage;
    const { products } = this.props;
    const { activeCategory } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    if (currentPage < pagesCount - 1) {
      this.handlePageChange(currentPage + 1);
    }
  }

  changePageNext() {
    let currentPage = this.state.activePage;

    if (currentPage !== 0) {
      this.handlePageChange(currentPage - 1);
    }
  }

  render() {
    const {
      categories,
      products,
      addFavourite,
      addRating,
      addCompare,
      removeCompare,
    } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    //count compare elements
    const canAddCompare = products.filter(item => item.compare).length;

    return (
      <Swipeable leftAction={this.leftAction} rightAction={this.rightAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className={`row no-gutters ${styles.menuPagesBar}`}>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(item => (
                      <li key={item.id}>
                        <a
                          className={item.id === activeCategory && styles.active}
                          onClick={() => this.handleCategoryChange(item.id)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className={`row ${styles.productsRow} ${this.state.className}`}>
              {categoryProducts
                .slice(activePage * 8, (activePage + 1) * 8)
                .map(item => (
                  <div key={item.id} className={`col ${styles.product}`}>
                    <ProductBox
                      {...item}
                      addFavourite={addFavourite}
                      addRating={addRating}
                      addCompare={addCompare}
                      removeCompare={removeCompare}
                      canAddCompare={canAddCompare < 4 ? true : false}
                    />
                  </div>
                ))}
            </div>
            <div>
              <FurnitureGallery
                products={products}
                activeCategorySales={this.state.activeCategorySales}
                addFavourite={addFavourite}
                addRating={addRating}
              />
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  addFavourite: PropTypes.func,
  addRating: PropTypes.func,
  addCompare: PropTypes.func,
  removeCompare: PropTypes.func,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
