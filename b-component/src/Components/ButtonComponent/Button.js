import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const isAppearance = props.appearance ? `button-${props.appearance}` : '';
    const isClassName = props.className ? props.className : '';
    const className = `button ${isAppearance} ${isClassName}`;

    const Tag = props.href ? 'a' : 'button';
    return (
        <Tag {...props} className={className} onClick={props.onClick}>
            {props.children || ''}
        </Tag>
    );
}

Button.defaultProps = {
    children: 'Button',
    className: '',
    appearance: null,
    href: null,
    onClick: () => {},
};

Button.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    appearance: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
