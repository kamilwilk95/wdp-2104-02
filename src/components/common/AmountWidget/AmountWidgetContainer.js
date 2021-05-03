import { connect } from 'react-redux';
import AmountWidget from './AmountWidget';
import { widget } from '../../../redux/widgetRedux';

const mapStateToProps = state => ({
  widget: widget(state),
});

export default connect(mapStateToProps, null)(AmountWidget);
