import React from 'react';


const input = (props) => {


    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className="form-control" {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea className="form-control" rows="3"  {...props.elementConfig}
                value={props.value} onChange={props.changed} />;
            break;
        default:
            inputElement = <input className="form-control"  {...props.elementConfig}
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