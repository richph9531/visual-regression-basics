import React from 'react';
import PropTypes from 'prop-types';

import classes from '../styles/SelectedProduct.module.css';

const SelectedProduct = props => {
  const selectedWatchStrap = () => {
    const products = props.data.colorOptions;
    const product = products.filter(row => row.id === props.currentlySelectedStrapId);
    const response = product.length === 0 ? 1 : product[0].id;
    const filteredArray = products.filter(row => row.id === response);
    return filteredArray[0];
  };

  const TimeInHoursAndMinutes = () => {
    if (process.env.REACT_APP_MOCK_TIME) {
      return '15:59';
    }
    const date = new Date();
    const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
    const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
    return `${hours}:${minutes}`;
  };

  return (
  <div className={classes.SelectedProduct}>
    <img
      className={classes.WatchImage}
      src={`${process.env.PUBLIC_URL}/media/${selectedWatchStrap().imageUrl}`}
      alt={selectedWatchStrap().styleName}
    />
    { props.currentlySelectedFeature === 'Time'
      ? <div>
      <p className={classes.Time}>{TimeInHoursAndMinutes()}</p>
    </div>
      : <div>
      <img
        className={classes.HeartRateImage}
        src={`${process.env.PUBLIC_URL}/media/HeartRate.gif`}
      />
      <p className={classes.HeartRateText}>78</p>
    </div>
    }
  </div>
  );
};

SelectedProduct.propTypes = {
  data: PropTypes.object,

  currentlySelectedStrapId: PropTypes.number,
  currentlySelectedFeature: PropTypes.string,
};

export default SelectedProduct;
