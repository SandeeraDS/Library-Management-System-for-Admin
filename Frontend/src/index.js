import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import {Router, Route, browserHistory } from 'react-router';
import Book from './components/Books/Books';
import OverDue from './components/OverDue/OverDue';
import Users from './components/Users/Users';
import Assign from './components/Assign/Assign';

ReactDOM.render(
    
    <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/Book" component={Book}></Route>
    <Route path="/Overdue" component={OverDue}></Route>
    <Route path="/Users" component={Users}></Route>
    <Route path="/Assign" component={Assign}></Route>
    {/* <Route path="/One" component={One}></Route>
    <Route path="/Two" component={Two}></Route>
    <Route path="/Three" component={Three}></Route>
    <Route path="/Four" component={Four}>
    <Route path="/Four/:id" component={FourPointOne}></Route> 
    </Route>
    <Route path="*" component={NoMatch}></Route> */}

    </Router>


    

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
