import React from 'react';

const addUserForm = (props) => {

    return (
        <div>
            <h3>Fill the Details</h3>
            <button onClick={props.userAdded}>SAVE</button>
            <button onClick={props.cancelAdding}>CANCEL</button>
        </div>
    );
}

export default addUserForm;