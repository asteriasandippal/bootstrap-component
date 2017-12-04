import React from 'react';
import PropTypes from 'prop-types';

function RightColumn(props) {
    return (
        <section className="right-column">
            <div className="main">
                {props.children}
            </div>
        </section>
    );
}

RightColumn.defaultProps = {
    children: '',
};

RightColumn.propTypes = {
    children: PropTypes.any,
};

export default RightColumn;
