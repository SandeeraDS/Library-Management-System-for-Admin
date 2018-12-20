import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Book from '../MainCategories/Books/Books';
import OverDue from '../MainCategories/OverDue/OverDue';
import Users from '../MainCategories/Users/Users';
import Assign from '../MainCategories/Assign/Assign';
import App from '../../containers/App'

const Routing = () => {
    return (

        <Router history={browserHistory}>
            <Route path="/" component={App}></Route>
            <Route path="/Book" component={Book}></Route>
            <Route path="/Overdue" component={OverDue}></Route>
            <Route path="/Users" component={Users}></Route>
            <Route path="/Assign" component={Assign}></Route>
        </Router>

    );
}

export default Routing;

