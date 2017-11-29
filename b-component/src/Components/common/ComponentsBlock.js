import React from 'react';
import PropTypes from 'prop-types';

import ComponentsHeader from './ComponentsHeader';

function ComponentsBlock (props) {
    return (
        <div>
            <ComponentsHeader title={props.title}/>
            {props.children}
        </div>
    );
}

ComponentsBlock.defaultProps = {
    title: '',
    children: ''
};

ComponentsBlock.prototypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
};

export default ComponentsBlock;
