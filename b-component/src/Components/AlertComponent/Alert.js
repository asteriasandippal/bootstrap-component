import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/components/alert.css';

function Alert(props) {
    const isClassName = props.className ? 'alert-'+ props.className : '';
    const className = 'alert ' + isClassName;
    return (
        <div className={className} role="alert">
            {props.children || ''}
        </div>
    );
}

Alert.defaultProps = {
    className: '',
    children: 'Alert Box'
};

Alert.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
};

export default Alert;
