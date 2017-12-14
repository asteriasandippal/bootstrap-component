import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
    const isAppearance = props.appearance ? `alert-${props.appearance}` : '';
    const isClassName = props.className ? props.className : '';
    const className = `alert ${isAppearance} ${isClassName}`;
    const isOnClick = props.onClick ? (
        <button onClick={props.onClick} className="alert__close">
            <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 469.785 469.785"
                xmlSpace="preserve"
            >
                <g transform="matrix(1.25 0 0 -1.25 0 45)">
                    <path
                        style={{ fill: '#414141' }}
                        d="M228.294-151.753L367.489-12.558c11.116,11.105,11.116,29.116,0,40.22c-11.105,11.116-29.104,11.116-40.22,0L188.073-111.533L48.866,27.663c-11.093,11.116-29.116,11.116-40.22,0c-11.105-11.105-11.105-29.116,0-40.22l139.207-139.196L8.338-291.268c-11.116-11.116-11.116-29.116,0-40.22c5.552-5.564,12.834-8.34,20.116-8.34c7.27,0,14.552,2.776,20.105,8.34l139.514,139.514l139.196-139.196c5.564-5.552,12.834-8.34,20.116-8.34c7.27,0,14.552,2.788,20.105,8.34c11.116,11.105,11.116,29.104,0,40.22L228.294-151.753z"
                    />
                </g>
            </svg>
        </button>) : '';
    return (
        <div className={className} role="alert">
            {props.children || ''}
            {isOnClick}
        </div>
    );
}

Alert.defaultProps = {
    className: '',
    children: 'This is Alert Component!',
    appearance: '',
    onClick: null,
};

Alert.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    appearance: PropTypes.string,
    onClick: PropTypes.func,
};

export default Alert;
