import { connect } from 'react-redux';

import MainLayout from './MainLayout';

import { getRwdMode, setRwdMode } from '../../../redux/configRedux';

const mapStateToProps = state => ({
  rwdMode: getRwdMode(state),
});

const mapDispatchToProps = dispatch => ({
  setRwdMode: payload => dispatch(setRwdMode(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
