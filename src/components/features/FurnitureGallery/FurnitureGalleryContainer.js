import { connect } from 'react-redux';

import { FurnitureGallery } from './FurnitureGallery';

import { getNew } from '../../../redux/productsRedux.js';

import { getRwdMode } from '../../../redux/configRedux.js';

import {
  addFavourite,
  addRating,
  addCompare,
  removeCompare,
} from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getNew(state),
  rwdMode: getRwdMode(state),
});

const mapDispatchToProps = dispatch => ({
  addFavourite: payload => dispatch(addFavourite(payload)),
  addRating: payload => dispatch(addRating(payload)),
  addCompare: payload => dispatch(addCompare(payload)),
  removeCompare: payload => dispatch(removeCompare(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FurnitureGallery);
