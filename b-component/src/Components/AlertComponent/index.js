import React from 'react';
import Alert from './Alert';
import AlertContents from './AlertContents';
import '../../stylesheets/components/alert.css';

function AlertComponent (props) {
    return (
        <div className="AlertComponent">
            <Alert/>
            <AlertContents/>
        </div>
    );
}

export default AlertComponent;
