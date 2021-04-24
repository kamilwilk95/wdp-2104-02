import React from 'react';
// import PropTypes from 'prop-types';
import styles from './BrandBox.module.scss';

class BrandBox extends React.Component {
  // state = {};
  render() {
    return <div className={styles.component}>BrandBox</div>;
  }
}

// BrandBox.propTypes = {};

export default BrandBox;

/* import { connect } from 'react';
import  BrandMarks from '../../layout/BrandMarks/BrandMarks';
import { getBrandMarks } from '../../../redux/brandsRedux';

const mapStateToProps = state => ({
  brands: getBrandMarks(state),
});

export default connect(mapStateToProps, null)(BrandMarks); */
