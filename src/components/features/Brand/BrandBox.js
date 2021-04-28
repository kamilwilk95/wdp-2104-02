import { connect } from 'react-redux';

import Brand from './Brand';

import { getBrandMarks } from '../../../redux/brandsRedux.js';

const mapStateToProps = state => ({
  brands: getBrandMarks(state),
});
export default connect(mapStateToProps)(Brand);
