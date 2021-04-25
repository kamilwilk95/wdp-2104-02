import { connect } from 'react-redux';

import Deals from '../../features/Deals/Deals';

import { getAll } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(Deals);
