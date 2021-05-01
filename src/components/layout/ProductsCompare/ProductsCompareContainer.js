import { connect } from 'react-redux';

import ProductsCompare from './ProductsCompare';

import { getProductsToCompare, removeCompare } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  compareProducts: getProductsToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  removeCompare: payload => dispatch(removeCompare(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductsCompare);
