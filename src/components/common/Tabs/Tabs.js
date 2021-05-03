import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.scss';

const Tabs = ({ config }) => {
  const [activeTab, setActiveTab] = React.useState('Reviews (0)');

  const activeSheet = config.find(item => item.title === activeTab);

  return (
    <div className='container'>
      <div className='row'>
        <ul className={styles.tabsHeader}>
          {config.map(item => (
            <li
              key={item.title}
              className={
                styles.tabsItem + ' ' + (item.title === activeTab && styles.active)
              }
            >
              <a className={styles.tabsLink} onClick={() => setActiveTab(item.title)}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`row + ${styles.content}`}>{activeSheet.component}</div>
    </div>
  );
};

Tabs.propTypes = {
  config: PropTypes.array,
  activeTab: PropTypes.string,
  changeActiveCategory: PropTypes.func,
};

export default Tabs;
