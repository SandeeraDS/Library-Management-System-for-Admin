import React, { Component } from 'react';
import Input from '../../../../UI/Input/Input'



class AddUser extends Component {


    constructor(props) {
        super(props);
        this.state = {

            detailForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                registrationNumber: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Registration Number'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                registeredDate: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Registered Date'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                birthDate: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Birth Date'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                telephone: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Telephone'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                },
                address: {
                    elementType: 'textarea',
                    elementConfig: {
                        type: 'textarea',
                        placeholder: 'Address'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false
                }
            }
        }
    }


    inputChangedHandler = (event, inputIdentifier) => {
        // console.log(event.target.value)
        // console.log(inputIdentifier)

        const updatedDetailForm = {
            ...this.state.detailForm
        }

        const updatedFormElement = {
            ...updatedDetailForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedDetailForm[inputIdentifier] = updatedFormElement;
        this.setState({ detailForm: updatedDetailForm })
    }


    orderHandler = (event) => {
        event.preventDefault();
        this.props.userAdded();

        const post = {
            Name: this.state.detailForm.name.value,
            Email: this.state.detailForm.email.value,
            CustomerRegistartionNumber: this.state.detailForm.registrationNumber.value,
            TelephoneNumber: this.state.detailForm.telephone.value,
            DateOfBirth: this.state.detailForm.birthDate.value,
            RegisteredDate: this.state.detailForm.registeredDate.value,
            Address: this.state.detailForm.address.value
        }

        console.log(post)
    }

    // checkValidity

    render() {

        let formElementArray = [];
        for (let key in this.state.detailForm) {
            formElementArray.push({
                id: key,
                config: this.state.detailForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <button className="btn btn-default" onClick={this.props.cancelAdding}>CANCEL</button>{'\u00A0'}
                {/* <button type="reset" className="btn btn-default">RESET</button>{'\u00A0'} */}
                <button type="submit" className="btn btn-default"> SUBMIT</button>
            </form >
        );


        return (
            <div>
                <h3>User Details</h3>
                {form}

            </div>
        );
    }
}

export default AddUser;
