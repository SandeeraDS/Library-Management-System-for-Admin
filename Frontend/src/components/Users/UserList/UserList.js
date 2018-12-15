import React, { Component } from 'react';
import Axios from 'axios';
import CreateTable from './CreateTable/CreateTable';
class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerList: []
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:57491/api/customers")
            .then(Response => {
                console.log(Response.data);
                this.setState({ customerList: Response.data })
            })
            .catch(error => {
                console.log(error)
            }
            )
    }


    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title"> Customers List</h3>
                </div>
                <div className="panel-body">
                    {/* <div class="table-responsive"> */}
                    <CreateTable data={this.state.customerList} />
                </div>
            </div>
        );
    }
}

export default UserList;