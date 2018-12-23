import React from 'react';
import classes from './Input.module.css'


const input = (props) => {


    let inputElement = null;
    const styleArray = [classes.formControl]

    if (props.invalid && props.touched) {
        styleArray.push(classes.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={styleArray.join(' ')}{...props.elementConfig}
                value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={styleArray.join(' ')} rows="3"  {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
            break;
        default:
            inputElement = <input className={classes.formControl}  {...props.elementConfig}
                value={props.value} onChange={props.changed} />
    }




    return (
        <div className="form-group">
            <label>{props.label}</label>
            {inputElement}
        </div>
    );

}

export default input;