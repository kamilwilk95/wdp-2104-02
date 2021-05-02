import React from 'react';
import NumberPicker from 'react-widgets/NumberPicker';
import styles from './AmountWidget.module.scss';
import PropTypes from 'prop-types';

class AmountWidget extends React.Component {
  render() {
    const { widget } = this.props;

    return (
      <div className={styles.main}>
        <NumberPicker
          className={styles.widget}
          defaultValue={0}
          step={1}
          min={widget.min}
          max={widget.max}
        />
      </div>
    );
  }
}

AmountWidget.propTypes = {
  widget: PropTypes.object,
};

export default AmountWidget;
