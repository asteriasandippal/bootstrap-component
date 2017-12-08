import React from 'react';
import PropTypes from 'prop-types';

function Badge(props) {
    const isAppearance = props.appearance ? `badge-${props.appearance}` : '';
    const isClassName = props.className ? props.className : '';
    const className = `badge ${isAppearance} ${isClassName}`;
    return (
        <span className={className}>
            {props.children || ''}
        </span>
    );
}

Badge.defaultProps = {
    className: '',
    children: 'New!',
    appearance: '',
};

Badge.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    appearance: PropTypes.string,
};

export default Badge;
