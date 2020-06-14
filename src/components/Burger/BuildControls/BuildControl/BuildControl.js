import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default buildControl;