import { connect } from 'react-redux';

import PromoBox from './PromoBox';

import { saleProducts, promoProducts } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  saleProducts: saleProducts(state),
  promoProducts: promoProducts(state),
});

export default connect(mapStateToProps)(PromoBox);
