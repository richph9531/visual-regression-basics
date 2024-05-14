import React from 'react';

import classes from '../styles/PageHeader.module.css';

const PageHeader = () => (
    <div className={classes.PageHeader}>
      <img
        src={`${process.env.PUBLIC_URL}/media/dog-lounging.svg`}
        alt='Shop Logo'/>
    </div>
);

export default PageHeader;
