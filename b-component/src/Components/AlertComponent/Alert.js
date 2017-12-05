import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
    const isAppearance = props.appearance ? `alert-${props.appearance}` : '';
    const isClassName = props.className ? props.className : '';
    const className = `alert ${isAppearance} ${isClassName}`;
    return (
        <div className={className} role="alert">
            {props.children || ''}
        </div>
    );
}

Alert.defaultProps = {
    className: '',
    children: 'This is Alert Component!',
    appearance: '',
};

Alert.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    appearance: PropTypes.string,
};

export default Alert;
