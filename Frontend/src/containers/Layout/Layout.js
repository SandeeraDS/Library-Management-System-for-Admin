import React from 'react';
import Aux from '../../hoc/Wrap'
import Nav from '../Navigation-bar/NavMain'


const layout = (props) => {

    return (
        <Aux>
            <Nav />
            <main>{props.children}</main>
        </Aux>);
}

export default layout;