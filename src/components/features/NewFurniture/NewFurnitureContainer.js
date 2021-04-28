import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getRwdMode } from '../../../redux/configRedux.js';

import {
  addFavourite,
  addCompare,
  removeCompare,
  addRating,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  rwdMode: getRwdMode(state),
});

const mapDispatchToProps = dispatch => ({
  addFavourite: payload => dispatch(addFavourite(payload)),
  addRating: payload => dispatch(addRating(payload)),
  addCompare: payload => dispatch(addCompare(payload)),
  removeCompare: payload => dispatch(removeCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewFurniture);
