import { connect } from 'react-redux';

import Deals from './Deals';

import {
  getDealsBig,
  getDealsSmallUp,
  getDealsSmallDown,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  dealsBig: getDealsBig(state),
  dealsSmallUp: getDealsSmallUp(state),
  dealsSmallDown: getDealsSmallDown(state),
});

export default connect(mapStateToProps)(Deals);
