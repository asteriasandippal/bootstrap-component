import React from 'react';
import PropTypes from 'prop-types';

import ComponentsHeader from './ComponentsHeader';

function ComponentsBlock(props) {
    return (
        <div className="component-wrapblock">
            <ComponentsHeader title={props.title} />
            {props.children}
        </div>
    );
}

ComponentsBlock.defaultProps = {
    title: '',
    children: '',
};

ComponentsBlock.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
};

export default ComponentsBlock;
