import React, { Component } from 'react';
import Input from '../../../../UI/Input/Input'
import axios from 'axios'
import { withRouter } from "react-router";


class AddUser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            formIsValid: false,
            detailForm: {

                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',

                    },
                    label: 'Name',
                    value: '',
                    validation: {
                        required: true,
                        minLength: 3,
                        maxLenght: 100
                    },
                    valid: false,
                    touched: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',

                    },
                    label: 'Email',
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                registrationNumber: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',

                    },
                    label: 'Registration Number',
                    value: '',
                    validation: {
                        required: true,
                        minLength: 3,
                        maxLenght: 10
                    },
                    valid: false,
                    touched: false
                },
                registeredDate: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'date',

                    },
                    label: 'Registered Date',
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                birthDate: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'date',

                    },
                    label: 'Birth Date',
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                telephone: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',

                    },
                    label: 'Telephone',
                    value: '',
                    validation: {
                        required: true,
                        minLength: 10,
                        maxLenght: 10,
                        isNumber: true
                    },
                    valid: false,
                    touched: false
                },
                address: {
                    elementType: 'textarea',
                    elementConfig: {
                        type: 'textarea',

                    },
                    label: 'Address',
                    value: '',
                    validation: {
                        required: true,
                        minLength: 10,
                        maxLenght: 255
                    },
                    valid: false,
                    touched: false
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
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedDetailForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let key in updatedDetailForm) {
            formIsValid = updatedDetailForm[key].valid && formIsValid

        }

        this.setState({ detailForm: updatedDetailForm, formIsValid: formIsValid })
    }


    orderHandler = (event) => {
        event.preventDefault();


        const post = {
            Name: this.state.detailForm.name.value,
            Email: this.state.detailForm.email.value,
            CustomerRegistartionNumber: this.state.detailForm.registrationNumber.value,
            TelephoneNumber: this.state.detailForm.telephone.value,
            DateOfBirth: this.state.detailForm.birthDate.value,
            RegisteredDate: this.state.detailForm.registeredDate.value,
            Address: this.state.detailForm.address.value
        }


        axios.post('http://localhost:57491/api/customers', post)
            .then(response => {

                // console.log(response)
                this.props.userAdded();
                // this.props.router.push('/Users')
            })
            .catch(error => {
                console.log(error)
                this.props.userAdded();
            });


        //console.log(post)
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLenght) {
            isValid = value.length <= rules.maxLenght && isValid;
        }
        if (rules.isNumber) {
            isValid = !isNaN(value) && rules.isNumber && isValid
        }

        return isValid;
    }

    render() {

        // console.log(this.props)
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
                        label={formElement.config.label}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                    />
                ))}
                <button className="btn btn-default" onClick={this.props.cancelAdding}>CANCEL</button>{'\u00A0'}
                {/* <button type="reset" className="btn btn-default">RESET</button>{'\u00A0'} */}
                <button type="submit" className="btn btn-default" disabled={!this.state.formIsValid}> SUBMIT</button>
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

export default withRouter(AddUser);
