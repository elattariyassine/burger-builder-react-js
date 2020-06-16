import React from 'react';
import classe from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={classe.Backdrop} onClick={props.clicked}></div>: null
);

export default backdrop;