import { connect } from 'react-redux';

import Brand from './Brand';

import { getBrandMarks } from '../../../redux/brandsRedux.js';
import { getRwdMode } from '../../../redux/configRedux.js';

const mapStateToProps = state => ({
  brands: getBrandMarks(state),
  rwdMode: getRwdMode(state),
});

export default connect(mapStateToProps)(Brand);
