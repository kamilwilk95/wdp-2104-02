import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.scss';

//const headerText =['Description' , 'Reviews' , 'Specification' , 'Custom Tab'];

const Tabs = ({ config, activeTab, changeActiveCategory }) => {
  const activeSheet = config.find(item => item.title === activeTab);

  return (
    <div className='container'>
      <div className='row'>
        <ul className={styles.navHeader}>
          {config.map(item => (
            <li
              key={item.title}
              className={
                styles.navItem + ' ' + (item.title === activeTab && styles.active)
              }
            >
              <a
                className={styles.navLink}
                onClick={() => changeActiveCategory(item.title)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='row'>{activeSheet.component}</div>
    </div>
  );
};

Tabs.propTypes = {
  config: PropTypes.array,
  activeTab: PropTypes.string,
  changeActiveCategory: PropTypes.func,
};

export default Tabs;
