import React, { Component } from 'react';
const $ = require('jquery');
$.DataTable = require('datatables.net');

class CreateTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        $('#example').DataTable({
            ajax: {
                url: "http://localhost:57491/api/customers",
                dataSrc: ''
            },
            columns: [
                {
                    title: "Reg Id",
                    data: "CustomerRegistartionNumber",
                    render: function (data, type, customer) {
                        return "<a href='/Users/" + customer.Id + "'>" + customer.CustomerRegistartionNumber + "</a>";
                    }
                },
                {
                    title: "Name",
                    data: "Name"
                },
                {
                    title: "Email",
                    data: "Email"
                }
            ]
        });
    }


    render() {
        console.log(this.props.data)
        return (
            <div className="table-responsive"> <table id="example" className="display" width="100%"></table></div>
        );
    }
}

export default CreateTable;