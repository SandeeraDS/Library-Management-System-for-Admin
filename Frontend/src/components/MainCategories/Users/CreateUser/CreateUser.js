import React, { Component } from 'react';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary">Add Customer</button>
            </div>);
    }
}

export default CreateUser;