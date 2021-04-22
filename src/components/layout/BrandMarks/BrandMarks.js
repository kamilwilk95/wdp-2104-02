import React from 'react';
import BrandBox from '../../common/BrandBox/BrandBox';
// import PropTypes from 'prop-types';
import styles from './BrandMarks.module.scss';

class BrandMarks extends React.Component {
  // state = {};
  render() {
    return (
      <div>
        <h3 className={styles.title}>Tytuł</h3>
        <BrandBox />
      </div>
    );
  }
}

// BrandBox.propTypes = {};

export default BrandMarks;
