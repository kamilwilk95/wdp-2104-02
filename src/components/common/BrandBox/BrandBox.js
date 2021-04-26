import { connect } from 'react-redux';

import Brand from '../../features/Brand/Brand';

import { getBrandMarks } from '../../../redux/brandsRedux.js';

const mapStateToProps = state => ({
  brands: getBrandMarks(state),
});
export default connect(mapStateToProps)(Brand);
