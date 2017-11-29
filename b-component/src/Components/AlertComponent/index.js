import React from 'react';
import Alert from './Alert';
import ContentComponent from './ContentComponent';

function AlertComponent (props) {
    return (
        <div className="AlertComponent">
            <Alert/>
            <ContentComponent/>
        </div>
    );
}

export default AlertComponent;
