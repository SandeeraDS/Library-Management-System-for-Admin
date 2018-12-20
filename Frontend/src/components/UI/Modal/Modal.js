import React from 'react';
import Aux from '../../../hoc/Wrap';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop />
            <div className={classes.Modal}>{props.children}</div>
        </Aux>
    );
}

export default modal;