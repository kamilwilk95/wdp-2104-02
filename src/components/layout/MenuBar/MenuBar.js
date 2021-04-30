import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={`row ${styles.menuBarRow}`}>
        <div className={`col ${styles.menuBarSearch}`}>
          <ProductSearch />
        </div>
        <div className={'col-auto ' + styles.menu}>
          <FontAwesomeIcon className={styles.icon} icon={faBars} />
          <ul>
            <li>
              <a href='#' className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href='#'>Furniture</a>
            </li>
            <li>
              <a href='#'>Chair</a>
            </li>
            <li>
              <a href='#'>Table</a>
            </li>
            <li>
              <a href='#'>Sofa</a>
            </li>
            <li>
              <a href='#'>Bedroom</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
