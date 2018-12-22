import React, { Component } from 'react';
import Layout from '../../../../containers/Layout/Layout';
import HeadWrapper from '../../../UI/HeadWrapper/HeadWrapper'
import PageRaw from '../../../UI/PageRaw/PageRaw'
import axios from 'axios'

class SingleUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadDetails: null
        }
    }

    componentDidMount() {

        if (this.props.params.id) {
            axios.get("http://localhost:57491/api/customers/" + this.props.params.id)
                .then(Response => {
                    this.setState({
                        loadDetails: Response.data
                    })
                })
        }
    }

    render() {

        let detail = null;
        if (this.props.params.id) {
            detail = <p style={{ textAlign: "center" }}>Loading.....</p>
        }

        if (this.state.loadDetails) {
            detail = <div>
                <p>{this.state.loadDetails.Name}</p>
            </div>
        }



        return (

            <Layout>
                <HeadWrapper>
                    <PageRaw>
                        <br />
                        <h1 className="page-header">User Info</h1>
                    </PageRaw>
                    <PageRaw>
                        <div style={{ textAlign: "center" }}>
                            {detail}
                        </div>

                    </PageRaw>
                </HeadWrapper>
            </Layout>

        );
    }
}

export default SingleUser;