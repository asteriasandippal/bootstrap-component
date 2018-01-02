import React from 'react';
import PropTypes from 'prop-types';

function ComponentsBlockWrapper(props) {
    const { children, data } = props;
    const sectionID = data.map(id => id.component);
    return React.Children.map(children, (child, index) => (
        <section id={sectionID[index]} className="component-main">
            {child}
        </section>
    ));
}

ComponentsBlockWrapper.defaultProps = {
    children: {},
    data: {},
};

ComponentsBlockWrapper.porpTypes = {
    children: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
};

export default ComponentsBlockWrapper;
