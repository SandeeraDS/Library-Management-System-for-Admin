import React from 'react';



const headWrapper = (props) => {

    return (

        <div id="wrapper">
            <div id="page-wrapper">
                <div className="container-fluid">
                    <main>{props.children}</main>
                </div>
            </div>
        </div>


    );
}

export default headWrapper;