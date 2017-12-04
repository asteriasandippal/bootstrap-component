import React from 'react';
import PropTypes from 'prop-types';

function ComponentsHeader(props) {
    return (
        <header className="component-header">
            <h2>{props.title ? props.title : ''}</h2>
        </header>
    );
}

ComponentsHeader.defaultProps = {
    title: '',
};

ComponentsHeader.propTypes = {
    title: PropTypes.string,
};

export default ComponentsHeader;
