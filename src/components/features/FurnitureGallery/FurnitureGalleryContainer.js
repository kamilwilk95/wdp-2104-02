import { connect } from 'react-redux';

import { FurnitureGallery } from './FurnitureGallery';

import { getNew } from '../../../redux/productsRedux.js';

import { addFavourite, addRating } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  addFavourite: payload => dispatch(addFavourite(payload)),
  addRating: payload => dispatch(addRating(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FurnitureGallery);
