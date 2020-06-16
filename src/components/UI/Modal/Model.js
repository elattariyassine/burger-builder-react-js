import React from 'react';
import classe from './Modal.module.css';

const modal = (props) => (
    <div className={classe.Modal}>
        {props.children}
    </div>
);

export default modal;